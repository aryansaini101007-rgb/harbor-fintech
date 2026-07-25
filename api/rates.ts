// Serverless proxy for ExchangeRate-API.
// Keeps the API key server-side and returns rates with INR as the base.
// Response shape: { base: "INR", rates: { USD: <inr per 1 usd>, ... }, updatedAt: ISO }

let cache: { at: number; payload: unknown } | null = null;
const TTL_MS = 60 * 60 * 1000; // 1 hour

export default async function handler(req: any, res: any) {
  try {
    const now = Date.now();
    if (cache && now - cache.at < TTL_MS) {
      res.setHeader("Cache-Control", "public, max-age=300, s-maxage=3600");
      return res.status(200).json(cache.payload);
    }

    const key = process.env.EXCHANGE_RATE_API_KEY;
    if (!key) {
      return res
        .status(500)
        .json({ success: false, message: "EXCHANGE_RATE_API_KEY missing" });
    }

    // ExchangeRate-API v6 – base INR
    const r = await fetch(
      `https://v6.exchangerate-api.com/v6/${key}/latest/INR`,
    );
    if (!r.ok) throw new Error(`upstream ${r.status}`);
    const json: any = await r.json();
    if (json?.result !== "success" || !json?.conversion_rates) {
      throw new Error(json?.["error-type"] || "bad upstream payload");
    }

    // json.conversion_rates: currency-per-1-INR. Convert to INR-per-1-unit.
    const perInr = json.conversion_rates as Record<string, number>;
    const inrPer: Record<string, number> = {};
    for (const [code, v] of Object.entries(perInr)) {
      if (typeof v === "number" && v > 0) inrPer[code] = 1 / v;
    }

    const payload = {
      base: "INR",
      rates: inrPer,
      updatedAt: new Date(
        (json.time_last_update_unix ?? Math.floor(now / 1000)) * 1000,
      ).toISOString(),
    };

    cache = { at: now, payload };
    res.setHeader("Cache-Control", "public, max-age=300, s-maxage=3600");
    return res.status(200).json(payload);
  } catch (err: any) {
    console.error("rates error", err);
    if (cache) {
      // Serve stale-if-error
      res.setHeader("Cache-Control", "public, max-age=60");
      return res.status(200).json(cache.payload);
    }
    return res
      .status(502)
      .json({ success: false, message: "rates unavailable" });
  }
}
