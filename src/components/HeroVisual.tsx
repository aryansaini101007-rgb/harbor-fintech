import { useEffect, useState } from 'react'
import DigitalGlobe from './DigitalGlobe'
import FlagIcon, { type FlagCode } from './FlagIcon'

interface LoanNode {
  id: string
  flag: FlagCode
  country: string
  university: string
  loan: string
  roi: string
  x: number
  y: number
  popup: 'right-down' | 'left-down' | 'right' | 'left-up' | 'left'
}

const NODES: LoanNode[] = [
  { id: 'canada', flag: 'canada', country: 'Canada', university: 'University of Toronto', loan: '₹45 Lakh', roi: '9.50% ROI', x: 39, y: 34, popup: 'right-down' },
  { id: 'uk', flag: 'uk', country: 'United Kingdom', university: 'University of Oxford', loan: '₹80 Lakh', roi: '9.75% ROI', x: 63, y: 31, popup: 'left-down' },
  { id: 'germany', flag: 'germany', country: 'Germany', university: 'LMU Munich', loan: '₹50 Lakh', roi: '10.2% ROI', x: 35, y: 55, popup: 'right' },
  { id: 'australia', flag: 'australia', country: 'Australia', university: 'University of Melbourne', loan: '₹60 Lakh', roi: '9.45% ROI', x: 57, y: 69, popup: 'left-up' },
  { id: 'ireland', flag: 'ireland', country: 'Ireland', university: 'Trinity College Dublin', loan: '₹42 Lakh', roi: '9.9% ROI', x: 69, y: 52, popup: 'left' },

  { id: 'usa', flag: 'usa', country: 'USA', university: 'New York University', loan: '₹75 Lakh', roi: '8.9% ROI', x: 29, y: 43, popup: 'right-down' },
  { id: 'georgia', flag: 'georgia', country: 'Georgia', university: 'University of Georgia', loan: '₹35 Lakh', roi: '10.5% ROI', x: 55, y: 38, popup: 'left-down' },
  { id: 'uae', flag: 'uae', country: 'UAE', university: 'University of Dubai', loan: '₹40 Lakh', roi: '9.4% ROI', x: 65, y: 48, popup: 'left' },
  { id: 'newzealand', flag: 'newzealand', country: 'New Zealand', university: 'University of Auckland', loan: '₹55 Lakh', roi: '9.10% ROI', x: 64, y: 72, popup: 'left-up' },
  { id: 'singapore', flag: 'singapore', country: 'Singapore', university: 'National University of Singapore', loan: '₹58 Lakh', roi: '8.8% ROI', x: 70, y: 61, popup: 'left' },
  { id: 'italy', flag: 'italy', country: 'Italy', university: 'University of Bologna', loan: '₹38 Lakh', roi: '9.60% ROI', x: 48, y: 46, popup: 'right-down' },
  { id: 'japan', flag: 'japan', country: 'Japan', university: 'University of Tokyo', loan: '₹52 Lakh', roi: '8.95% ROI', x: 72, y: 39, popup: 'left-down' },
  { id: 'france', flag: 'france', country: 'France', university: 'Sorbonne University', loan: '₹48 Lakh', roi: '8.70% ROI', x: 43, y: 42, popup: 'right-down' },
]

const LANDMARKS = [
  { id: 'christ', x: 4 }, { id: 'taj', x: 20 }, { id: 'opera', x: 38 },
  { id: 'bigben', x: 54 }, { id: 'eiffel', x: 68 }, { id: 'colosseum', x: 82 }, { id: 'burj', x: 96 },
]

export default function HeroVisual() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % NODES.length)
    }, 4500)
    return () => window.clearInterval(timer)
  }, [])

  const active = NODES[activeIndex]

  return (
    <div className="dg-scene">
      <div className="dg-sky" />
      <div className="dg-cloud dg-cloud-1" />
      <div className="dg-cloud dg-cloud-2" />
      <div className="dg-cloud dg-cloud-3" />
      <div className="dg-cloud dg-cloud-4" />
      <div className="dg-haze" />

      <svg className="dg-landmarks" viewBox="0 0 100 16" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <g id="lm-christ"><path d="M7 12V8H2l5-2-1-1 1-1 1 1-1 1 5 2h-5v4z" /></g>
          <g id="lm-taj"><path d="M6 12V7l-1-1V4h1V3h1V2h2v1h1v1h1v2l-1 1v5z" /></g>
          <g id="lm-bigben"><path d="M5 12V4h1V2h2v2h1v8z" /></g>
          <g id="lm-eiffel"><path d="M6 12l1-4 1-5 1 5 1 4h-1l-1-2-1 2z" /></g>
          <g id="lm-colosseum"><path d="M2 12V8a6 4 0 0 1 12 0v4z" /></g>
          <g id="lm-opera"><path d="M2 12v-1c1-2 3-3 4-3s3 1 4 3v1z M4 12v-1c.6-1.3 1.4-2 2-2s1.4.7 2 2v1z" /></g>
          <g id="lm-burj"><path d="M6.4 12V2l.6 1 .6-1v10z" /></g>
        </defs>
        {LANDMARKS.map((mark) => <use key={mark.id} href={`#lm-${mark.id}`} x={mark.x - 6} y="2" width="12" height="12" />)}
      </svg>

      <div className="dg-floaters" aria-hidden="true">
        <span className="dg-floater dg-floater-plane">✈</span>
        <span className="dg-floater dg-floater-cap">◆</span>
        <span className="dg-floater dg-floater-dollar">$</span>
        <span className="dg-floater dg-floater-rupee">₹</span>
        <span className="dg-floater dg-floater-book">▰</span>
      </div>

      <div className="dg-globe-stage">
        <div className="dg-globe-halo" />
        <div className="dg-globe-wrap">
          <div className="dg-globe-aura" />
          <DigitalGlobe />
        </div>
      </div>

      <svg className="dg-active-connector" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <path
          d={`M ${active.x} ${active.y} Q ${active.x + (active.popup.startsWith('left') ? -3 : 3)} ${active.y + (active.popup.includes('down') ? 3 : active.popup.includes('up') ? -3 : 0)} ${active.x + (active.popup.startsWith('left') ? -7 : 7)} ${active.y + (active.popup.includes('down') ? 8 : active.popup.includes('up') ? -8 : 0)}`}
        />
      </svg>

      {NODES.map((node, index) => (
        <button
          key={node.id}
          type="button"
          className={`dg-loan-node ${index === activeIndex ? 'is-active' : ''}`}
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
          aria-label={`Show ${node.country} loan details`}
          onMouseEnter={() => setActiveIndex(index)}
          onFocus={() => setActiveIndex(index)}
          onClick={() => setActiveIndex(index)}
        >
          <span className="dg-node-core" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M12 22s7-7.58 7-13a7 7 0 1 0-14 0c0 5.42 7 13 7 13Z" fill="#e11d2e" stroke="#ffffff" strokeWidth="1.3" />
              <circle cx="12" cy="9" r="2.6" fill="#ffffff" />
            </svg>
          </span>
          <span className="dg-node-flag">
            <FlagIcon code={node.flag} className="dg-node-flag-svg" title={node.country} />
          </span>
        </button>
      ))}

      <div
        key={active.id}
        className={`dg-loan-popup popup-${active.popup}`}
        style={{ left: `${active.x}%`, top: `${active.y}%` }}
      >
        <div className="dg-popup-title"><FlagIcon code={active.flag} className="dg-popup-flag-svg" title={active.country} /><strong>{active.country}</strong></div>
        <p>{active.university}</p>
        <strong className="dg-popup-loan">{active.loan}</strong>
        <span className="dg-popup-roi">{active.roi}</span>
      </div>

      <span className="dg-bird dg-bird-1" />
      <span className="dg-bird dg-bird-2" />
      <span className="dg-bird dg-bird-3" />
    </div>
  )
}
