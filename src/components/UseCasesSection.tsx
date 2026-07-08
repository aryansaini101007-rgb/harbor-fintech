import { useRef, useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  Hand,
  GraduationCap,
  Landmark,
  Globe2,
  ShieldCheck,
  Network,
  User,
} from 'lucide-react'
import { COUNTRIES } from '../data/countries'
import { useCountryModal } from '../context/CountryModalContext'

const STATS = [
  { icon: GraduationCap, value: '4000+', label: 'Students Worldwide' },
  { icon: Landmark, value: '500+', label: 'Top Universities' },
  { icon: Globe2, value: '25+', label: 'Popular Destinations' },
  { icon: ShieldCheck, value: '98%', label: 'Visa Success Rate' },
]

const FEATURES = [
  { icon: GraduationCap, title: 'Global Exposure', body: 'Experience diverse cultures and global perspectives' },
  { icon: Landmark, title: 'Career Opportunities', body: 'Access to international career opportunities' },
  { icon: Network, title: 'Quality Education', body: 'World-class education from top ranked universities' },
  { icon: ShieldCheck, title: 'Personal Growth', body: 'Build independence, confidence and global mindset' },
  { icon: User, title: 'Better Future', body: 'Invest in your future with better opportunities worldwide' },
]

const REGIONS = ['All Regions', 'North America', 'Europe', 'Asia Pacific', 'Middle East', 'South America']

export default function UseCasesSection() {
  const { openCountry } = useCountryModal()
  const trackRef = useRef<HTMLDivElement>(null)
  const [region, setRegion] = useState('All Regions')
  const isPointerDown = useRef(false)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const startScroll = useRef(0)

  const filtered = region === 'All Regions' ? COUNTRIES : COUNTRIES.filter((c) => c.region === region)

  function cardStep() {
    const track = trackRef.current
    if (!track) return 280
    const firstCard = track.querySelector<HTMLElement>('.dest-card')
    if (!firstCard) return 280
    const gap = parseFloat(getComputedStyle(track).columnGap || '20') || 20
    return firstCard.offsetWidth + gap
  }

  function scrollByCards(dir: 1 | -1) {
  const track = trackRef.current
  if (!track) return

  const step = cardStep()

  track.scrollTo({
    left: track.scrollLeft + dir * step,
    behavior: 'smooth',
  })
}

  function onPointerDown(e: React.PointerEvent) {
    if (!trackRef.current) return
    isPointerDown.current = true
    isDragging.current = false
    startX.current = e.clientX
    startScroll.current = trackRef.current.scrollLeft
    trackRef.current.setPointerCapture(e.pointerId)
  }

  function onPointerMove(e: React.PointerEvent) {
    if (!isPointerDown.current || !trackRef.current) return
    const dx = e.clientX - startX.current
    // small threshold before we treat this as a drag, so plain clicks
    // (e.g. the "Explore" arrow button on a card) still register normally
    if (!isDragging.current && Math.abs(dx) > 6) {
      isDragging.current = true
    }
    if (isDragging.current) {
      e.preventDefault()
      trackRef.current.scrollLeft = startScroll.current - dx
    }
  }

  function endPointerInteraction() {
    isPointerDown.current = false
    // release the drag flag on next tick so a trailing click event
    // (fired right after pointerup) can still be suppressed if needed
    window.setTimeout(() => {
      isDragging.current = false
    }, 0)
  }

  function onTrackClickCapture(e: React.MouseEvent) {
    if (isDragging.current) {
      e.preventDefault()
      e.stopPropagation()
    }
  }

  return (
    <section
      className="relative px-6 py-24 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #eef2ff 0%, #1a1f3a 55%, #0a0e24 100%)' }}
    >
      <style>{`
        .dest-track { scrollbar-width: none; -ms-overflow-style: none; scroll-snap-type: x proximity; }
        .dest-track::-webkit-scrollbar { display: none; }
        .dest-card { scroll-snap-align: start; }
      `}</style>

      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 26 }, (_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              left: `${(i * 41) % 100}%`,
              top: `${(i * 29) % 55}%`,
              width: 2 + (i % 3),
              height: 2 + (i % 3),
              opacity: 0.4 + (i % 5) * 0.1,
            }}
          />
        ))}
      </div>

      <div
        className="absolute left-0 right-0 bottom-0 pointer-events-none"
        style={{ height: '55%', background: 'radial-gradient(ellipse at 50% 120%, rgba(70,110,200,0.55) 0%, rgba(20,30,70,0.3) 45%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-[88rem] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-10 items-start mb-10">
          <div>
            <p className="text-[#818CF8] text-sm font-semibold tracking-wide mb-3">IMMERSIVE EXPERIENCE</p>
            <h2 className="text-white text-4xl md:text-5xl font-medium leading-tight mb-5" style={{ letterSpacing: '-0.03em' }}>
              Experience your future, <span style={{ color: '#818CF8' }}>everywhere</span>
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-8 max-w-xs">
              An immersive way to explore countries and their top universities.
            </p>

            <div className="flex items-center gap-1.5 text-white/50 text-sm mb-8">
  <Hand className="w-4 h-4" />
  <span>Drag to explore</span>
</div>

            <div className="bg-white/95 rounded-2xl p-5">
              <p className="text-black text-sm font-medium mb-4">Why Students Choose Harbor Finance</p>
              <div className="grid grid-cols-2 gap-4">
                {STATS.map((s) => (
                  <div key={s.label} className="flex items-start gap-2">
                    <span className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(67,56,202,0.1)' }}>
                      <s.icon className="w-4 h-4" style={{ color: '#4338CA' }} />
                    </span>
                    <div>
                      <p className="text-black text-sm font-semibold leading-none mb-1">{s.value}</p>
                      <p className="text-black/50 text-[11px] leading-tight">{s.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
<div className="relative min-w-0 min-h-[500px] overflow-hidden">
            <div className="immersive-cards-bg absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
              <img
                src="https://images.unsplash.com/photo-1419242902214-272b31f9b4b1?auto=format&fit=crop&w=1600&q=80"
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(90deg, rgba(10,14,36,0.92) 0%, rgba(10,14,36,0.55) 35%, rgba(10,14,36,0.25) 70%, rgba(10,14,36,0.1) 100%)',
                }}
              />
              <div
                className="absolute bottom-0 left-0 right-0"
                style={{
                  height: '55%',
                  background:
                    'radial-gradient(ellipse at 50% 120%, rgba(60,110,210,0.65) 0%, rgba(20,35,80,0.45) 35%, transparent 72%)',
                }}
              />
              {Array.from({ length: 40 }, (_, i) => (
                <span
                  key={i}
                  className="absolute rounded-full bg-white"
                  style={{
                    left: `${(i * 37) % 100}%`,
                    top: `${(i * 23) % 80}%`,
                    width: 1 + (i % 2),
                    height: 1 + (i % 2),
                    opacity: 0.3 + (i % 4) * 0.15,
                  }}
                />
              ))}
            </div>

<div
  ref={trackRef}
  onPointerDown={onPointerDown}
  onPointerMove={onPointerMove}
  onPointerUp={endPointerInteraction}
  onPointerLeave={endPointerInteraction}
  onPointerCancel={endPointerInteraction}
  onClickCapture={onTrackClickCapture}
  className="dest-track relative z-10 flex gap-5 overflow-x-auto cursor-grab active:cursor-grabbing select-none pb-2 px-2 pt-4"
  style={{ scrollBehavior: 'smooth', touchAction: 'pan-y' }}
>
  {filtered.map((c) => (
    <div
      key={c.id}
      className="dest-card hover-float relative shrink-0 rounded-2xl overflow-hidden shadow-2xl hover:shadow-[0_30px_70px_rgba(0,0,0,0.5)] ring-2 ring-[#4338CA]/60 hover:ring-[#818CF8]/80 transition-shadow duration-300"
      style={{ width: 220, height: 420 }}
    >
      <img
        src={c.image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        draggable={false}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(0,0,0,0) 45%, rgba(0,0,0,0.75) 100%)',
        }}
      />

      {c.popular && (
        <span className="absolute top-4 left-4 bg-[#4338CA] text-white text-[10px] font-semibold px-3 py-1 rounded-full tracking-wide">
          POPULAR
        </span>
      )}

      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p
          className="text-white text-2xl font-semibold mb-2"
          style={{ letterSpacing: '-0.02em' }}
        >
          {c.name}
        </p>

        <p className="text-white/70 text-xs mb-1">
          {c.universities} Universities
        </p>

        <p className="text-white/70 text-xs mb-4">
          Avg. Loan Rate {c.avgRate}
        </p>

        <button
          type="button"
          onClick={() => openCountry(c.id)}
          className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:bg-[#4338CA] hover:text-white transition-colors"
        >
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  ))}
</div>

<div className="relative z-40 flex items-center justify-center gap-4 mt-6">
  <button
    type="button"
    aria-label="Previous countries"
    onPointerDown={(e) => e.stopPropagation()}
    onClick={(e) => {
      e.preventDefault()
      e.stopPropagation()
      scrollByCards(-1)
    }}
    className="w-12 h-12 rounded-full bg-white text-[#4338CA] shadow-xl flex items-center justify-center hover:bg-[#4338CA] hover:text-white transition-all duration-300 cursor-pointer"
  >
    <ArrowLeft className="w-5 h-5" />
  </button>

  <button
    type="button"
    aria-label="Next countries"
    onPointerDown={(e) => e.stopPropagation()}
    onClick={(e) => {
      e.preventDefault()
      e.stopPropagation()
      scrollByCards(1)
    }}
    className="w-12 h-12 rounded-full bg-white text-[#4338CA] shadow-xl flex items-center justify-center hover:bg-[#4338CA] hover:text-white transition-all duration-300 cursor-pointer"
  >
    <ArrowRight className="w-5 h-5" />
  </button>
</div>

</div>
</div>
<div className="flex flex-wrap items-center justify-between gap-4 mt-8 mb-8 md:mt-10 md:mb-10">
  <div className="flex flex-wrap items-center gap-3">
    <p className="text-white text-sm font-semibold mr-2">
      Browse by Region
    </p>

    {REGIONS.map((r) => (
      <button
        key={r}
        onClick={() => setRegion(r)}
        className={`text-sm px-4 py-2 rounded-full border transition-colors ${
          region === r
            ? 'bg-[#4338CA] text-white border-[#4338CA]'
            : 'bg-transparent text-white/70 border-white/20 hover:border-white/40'
        }`}
      >
        {r}
      </button>
    ))}
  </div>

  <button className="inline-flex items-center gap-2 text-white text-sm font-medium">
    View all countries
    <ArrowRight className="w-4 h-4" />
  </button>
</div>


        <div className="bg-white rounded-2xl shadow-2xl px-6 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          {FEATURES.map((f, i) => (
            <div key={f.title} className={`flex items-start gap-3 ${i > 0 ? 'lg:border-l lg:border-black/10 lg:pl-6' : ''}`}>
              <span className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(67,56,202,0.1)' }}>
                <f.icon className="w-5 h-5" style={{ color: '#4338CA' }} />
              </span>
              <div>
                <p className="text-black text-sm font-semibold mb-1">{f.title}</p>
                <p className="text-black/50 text-xs leading-relaxed">{f.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}