import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

// Dev-only middleware that mounts `/api/rates` while running `vite dev`
// (Vercel serverless functions in /api don't run under Vite). In production
// the same route is served by /api/rates.ts on Vercel.
function devRatesApi(apiKey: string): Plugin {
  let cache: { at: number; payload: unknown } | null = null
  const TTL_MS = 60 * 60 * 1000
  return {
    name: 'dev-rates-api',
    configureServer(server) {
      server.middlewares.use('/api/rates', async (_req, res) => {
        res.setHeader('Content-Type', 'application/json')
        try {
          const now = Date.now()
          if (cache && now - cache.at < TTL_MS) {
            res.statusCode = 200
            return res.end(JSON.stringify(cache.payload))
          }
          if (!apiKey) {
            res.statusCode = 500
            return res.end(JSON.stringify({ success: false, message: 'EXCHANGE_RATE_API_KEY missing' }))
          }
          const r = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/INR`)
          if (!r.ok) throw new Error(`upstream ${r.status}`)
          const json: any = await r.json()
          if (json?.result !== 'success' || !json?.conversion_rates) {
            throw new Error(json?.['error-type'] || 'bad upstream payload')
          }
          const perInr = json.conversion_rates as Record<string, number>
          const inrPer: Record<string, number> = {}
          for (const [code, v] of Object.entries(perInr)) {
            if (typeof v === 'number' && v > 0) inrPer[code] = 1 / v
          }
          const payload = {
            base: 'INR',
            rates: inrPer,
            updatedAt: new Date(
              (json.time_last_update_unix ?? Math.floor(now / 1000)) * 1000,
            ).toISOString(),
          }
          cache = { at: now, payload }
          res.statusCode = 200
          res.end(JSON.stringify(payload))
        } catch (err: any) {
          console.error('[dev-rates-api]', err?.message || err)
          if (cache) {
            res.statusCode = 200
            return res.end(JSON.stringify(cache.payload))
          }
          res.statusCode = 502
          res.end(JSON.stringify({ success: false, message: 'rates unavailable' }))
        }
      })
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react(), devRatesApi(env.EXCHANGE_RATE_API_KEY || '')],
  }
})
