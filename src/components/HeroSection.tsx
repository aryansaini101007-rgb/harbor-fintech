import {
  Landmark,
  ShieldCheck,
  Zap,
  Headphones,
  Sparkles,
  HeadsetIcon,
} from 'lucide-react'

import HeroVisual from './HeroVisual'

const STATS = [
  {
    icon: HeadsetIcon,
    value: '1:1',
    label: 'Expert Guidance',
    sub: 'Personalized Support',
  },
  {
    icon: ShieldCheck,
    value: '98%',
    label: 'Approval Rate',
    sub: 'Trusted by Students',
  },
  {
    icon: Zap,
    value: '48 hrs',
    label: 'Average Sanction',
    sub: 'Quick & Hassle-free',
  },
  {
    icon: Headphones,
    value: '100%',
    label: 'Expert Guidance',
    sub: 'Free Advisory Support',
  },
]

export default function HeroSection() {
  return (
    <section className="hero-page" aria-label="Education loan comparison and advisory">
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />
      <div className="hero-glow hero-glow-three" />

      <div className="hero-shell">

        <div className="hero-content-grid">
          <div className="hero-copy">
            <div className="hero-trust-pill">
              <ShieldCheck size={17} />
              <span>Trusted by Thousands worldwide</span>
              <Sparkles size={16} />
            </div>

            <h1 className="hero-title">
              <span className="dark-line">Compare Education Loans</span>
              <span className="gradient-line">For Study Abroad</span>
            </h1>

            <p>
              Compare education loans from 20+ banks and NBFCs, get the
              best options with expert guidance and end-to-end support.
            </p>

            <a
              href="#how-it-works"
              className="eligibility-button inline-flex items-center gap-2"
              aria-label="Check loan eligibility and how it works"
            >
              <span>Check Eligibility</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="hero-visual-area">
            <HeroVisual />
          </div>
        </div>

        <div className="hero-stats">
          {STATS.map((stat, index) => {
            const Icon = stat.icon

            return (
              <div
                key={stat.label}
                className={`hero-stat-item ${
                  index > 0 ? 'hero-stat-border' : ''
                }`}
              >
                <span className="hero-stat-icon">
                  <Icon size={23} />
                </span>

                <div>
                  <p className="hero-stat-value">{stat.value}</p>
                  <p className="hero-stat-label">{stat.label}</p>
                  {stat.sub ? (
                    <p className="hero-stat-sub">{stat.sub}</p>
                  ) : null}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}