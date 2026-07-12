interface CountryCard {
  id: string
  flag: string
  name: string
  count: string
  style: React.CSSProperties
  delay: number
}

const COUNTRY_CARDS: CountryCard[] = [
  { id: 'usa', flag: '🇺🇸', name: 'USA', count: '350+', style: { top: '2%', left: '0%' }, delay: 0 },
  { id: 'uk', flag: '🇬🇧', name: 'UK', count: '120+', style: { top: '22%', right: '2%' }, delay: 0.7 },
  { id: 'canada', flag: '🇨🇦', name: 'Canada', count: '80+', style: { top: '44%', left: '0%' }, delay: 1.4 },
  { id: 'australia', flag: '🇦🇺', name: 'Australia', count: '70+', style: { top: '54%', right: '4%' }, delay: 2.1 },
  { id: 'germany', flag: '🇩🇪', name: 'Germany', count: '60+', style: { bottom: '10%', left: '30%' }, delay: 2.8 },
]

const PINS = [
  { top: '30%', left: '12%' },
  { top: '20%', right: '10%' },
  { bottom: '28%', left: '18%' },
]

// TODO: swap for licensed/high-res landmark photography if available
const LANDMARKS = [
  { id: 'liberty', img: 'https://images.unsplash.com/photo-1508433957232-3107f5fd5995?auto=format&fit=crop&w=300&q=70' },
  { id: 'bigben', img: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=300&q=70' },
  { id: 'colosseum', img: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=300&q=70' },
  { id: 'opera', img: 'https://images.unsplash.com/photo-1524293581917-878a6d017c71?auto=format&fit=crop&w=300&q=70' },
]

export default function HeroWorld() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      <style>{`
        @keyframes globeDotPan { from { background-position: 0 0; } to { background-position: -160px 0; } }
        @keyframes cardFloat { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
        @keyframes pinPulse { 0%, 100% { transform: scale(1); opacity: 0.9; } 50% { transform: scale(1.35); opacity: 0.4; } }
        @keyframes arcFlow { 0% { stroke-dashoffset: 240; } 100% { stroke-dashoffset: 0; } }
        @keyframes planeTrail { 0% { stroke-dashoffset: 200; } 100% { stroke-dashoffset: 0; } }
        @keyframes balloonDrift { 0%, 100% { transform: translate(0px, 0px); } 50% { transform: translate(-10px, -16px); } }
        @keyframes cloudDrift { 0% { transform: translateX(0); } 100% { transform: translateX(30px); } }
        @keyframes landmarkFloat { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-6px); } }
      `}</style>

      {/* soft cloud blobs */}
      <div className="absolute rounded-full bg-white/50 blur-2xl" style={{ width: 180, height: 60, top: '6%', left: '4%', animation: 'cloudDrift 12s ease-in-out infinite alternate' }} />
      <div className="absolute rounded-full bg-white/40 blur-2xl" style={{ width: 140, height: 50, bottom: '8%', right: '10%', animation: 'cloudDrift 15s ease-in-out infinite alternate-reverse' }} />

      {/* globe */}
      <div className="absolute" style={{ top: '48%', left: '46%', width: 340, height: 340, transform: 'translate(-50%, -50%)' }}>
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle at 32% 28%, #eaf1ff 0%, #cfe0fb 45%, #a9c3ee 75%, #8fb0e6 100%)',
            boxShadow: 'inset -20px -20px 50px rgba(60,90,180,0.25), 0 20px 50px rgba(80,110,200,0.25)',
          }}
        />
        <div
          className="absolute inset-0 rounded-full overflow-hidden"
          style={{
            backgroundImage:
              'radial-gradient(rgba(255,255,255,0.9) 1.4px, transparent 1.4px), radial-gradient(rgba(255,255,255,0.9) 1.4px, transparent 1.4px)',
            backgroundSize: '10px 10px',
            backgroundPosition: '0 0, 5px 5px',
            opacity: 0.55,
            animation: 'globeDotPan 30s linear infinite',
          }}
        />
        {/* connection arcs to pins */}
        <svg viewBox="0 0 340 340" className="absolute inset-0 w-full h-full" style={{ overflow: 'visible' }}>
          <path d="M 170 170 C 90 150, 60 110, 30 90" fill="none" stroke="#5b7fd6" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="4 6" />
          <path d="M 170 170 C 250 140, 280 100, 305 60" fill="none" stroke="#5b7fd6" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="4 6" style={{ animation: 'arcFlow 4s linear infinite' }} />
          <path d="M 170 170 C 110 220, 90 250, 55 280" fill="none" stroke="#5b7fd6" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="4 6" />
        </svg>
      </div>

      {/* pulsing location pins */}
      {PINS.map((p, i) => (
        <div key={i} className="absolute" style={p}>
          <span className="block w-3 h-3 rounded-full bg-blue-500" style={{ animation: `pinPulse 2.4s ease-in-out ${i * 0.4}s infinite` }} />
        </div>
      ))}

      {/* floating hot air balloon */}
      <div className="absolute top-[10%] right-[8%]" style={{ animation: 'balloonDrift 6s ease-in-out infinite' }}>
        <svg width="28" height="40" viewBox="0 0 28 40">
          <ellipse cx="14" cy="14" rx="12" ry="14" fill="#f0a94e" opacity="0.9" />
          <path d="M6 26 L22 26 L18 34 L10 34 Z" fill="#8b5a2b" opacity="0.9" />
        </svg>
      </div>

      {/* plane with glowing trail, orbiting across the scene */}
      <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full" style={{ overflow: 'visible' }}>
        <defs>
          <filter id="planeGlow">
            <feGaussianBlur stdDeviation="1.5" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          d="M 60 320 C 140 200, 260 160, 360 60"
          fill="none"
          stroke="#5b7fd6"
          strokeOpacity="0.55"
          strokeWidth="2"
          strokeDasharray="8 6"
          filter="url(#planeGlow)"
          style={{ animation: 'planeTrail 3.5s linear infinite' }}
        />
        <g filter="url(#planeGlow)">
          <animateMotion path="M 60 320 C 140 200, 260 160, 360 60" dur="6s" rotate="auto" repeatCount="indefinite" />
          <path
            d="M20 0 L8 -3 L-10 -3 L-16 -9 L-20 -9 L-16 -3 L-26 -3 L-30 -6 L-33 -6 L-31 -3 L-33 0 L-31 3 L-33 6 L-30 6 L-26 3 L-16 3 L-20 9 L-16 9 L-8 3 L8 3 Z"
            fill="#12142B"
            transform="scale(0.8)"
          />
        </g>
      </svg>

      {/* floating glassmorphism country cards */}
      {COUNTRY_CARDS.map((c) => (
        <div
          key={c.id}
          className="absolute rounded-2xl px-4 py-3 bg-white shadow-md"
          style={{
            ...c.style,
            animation: `cardFloat 5s ease-in-out ${c.delay}s infinite`,
            border: '1px solid rgba(0,0,0,0.06)',
          }}
        >
          <div className="flex items-center gap-2 mb-1">
            <span className="text-lg">{c.flag}</span>
            <span className="text-black text-sm font-semibold">{c.name}</span>
          </div>
          <p className="text-black/45 text-[11px] leading-tight">Top Universities</p>
          <p className="text-black text-sm font-semibold">{c.count}</p>
        </div>
      ))}

      {/* curved earth-horizon + landmark skyline, bottom-right, echoing the reference's planet curve */}
      <div className="absolute bottom-0 right-0 overflow-hidden" style={{ width: 340, height: 220 }}>
        <svg viewBox="0 0 340 220" className="absolute inset-0 w-full h-full" style={{ overflow: 'visible' }}>
          <defs>
            <radialGradient id="earthCurve" cx="30%" cy="0%" r="90%">
              <stop offset="0%" stopColor="#bfe3ff" />
              <stop offset="45%" stopColor="#6fb1e0" />
              <stop offset="100%" stopColor="#2d5f8a" />
            </radialGradient>
          </defs>
          <path d="M0 220 L0 140 Q170 30 340 110 L340 220 Z" fill="url(#earthCurve)" />
        </svg>

        <div className="absolute bottom-0 right-0 flex items-end">
          {LANDMARKS.map((l, i) => (
            <div
              key={l.id}
              className="overflow-hidden shadow-lg"
              style={{
                width: 66 + i * 8,
                height: 86 + i * 14,
                marginLeft: i === 0 ? 0 : -4,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                animation: `landmarkFloat 5s ease-in-out ${i * 0.5}s infinite`,
                border: '1px solid rgba(255,255,255,0.4)',
              }}
            >
              <img src={l.img} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
