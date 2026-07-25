import { useEffect, useRef } from 'react'
import {
  GraduationCap,
  Repeat2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Cpu,
  Landmark,
  Zap,
  CheckCircle2,
  Cloud,
  BarChart3,
  Calculator,
  FileCheck2,
  DollarSign,
  Headphones,
  Bot,
  Globe2,
  Star,
  TrendingUp,
} from 'lucide-react'
import MasterNavbar from '../components/MasterNavbar'
import FooterSection from '../components/FooterSection'
import DigitalGlobe from '../components/DigitalGlobe'
import { ThemeProvider } from '../context/ThemeContext'

const STATS = [
  { icon: DollarSign, value: '₹850+ Cr', label: 'Loans Facilitated' },
  { icon: GraduationCap, value: '10,000+', label: 'Students Assisted' },
  { icon: Landmark, value: '20+', label: 'Banks & NBFCs' },
  { icon: Globe2, value: '15+', label: 'Countries Covered' },
]

const PROCESS = [
  { icon: Cloud, title: 'Document Upload', desc: 'Securely upload your documents online' },
  { icon: Cpu, title: 'AI Verification', desc: 'AI checks & verifies your documents' },
  { icon: Landmark, title: 'Bank Matching', desc: 'We match you with the best loan options' },
  { icon: BarChart3, title: 'Instant Eligibility', desc: 'Get your eligibility in just 2 minutes' },
  { icon: CheckCircle2, title: 'Approval & Disbursal', desc: 'Fast approval and quick disbursal' },
]

const SMART_TOOLS = [
  { icon: ShieldCheck, title: 'Eligibility Checker', desc: 'Check your loan eligibility in 2 mins' },
  { icon: Calculator, title: 'EMI Calculator', desc: 'Calculate your EMI instantly' },
  { icon: GraduationCap, title: 'Study Cost Calculator', desc: 'Estimate total cost of studying abroad' },
  { icon: Repeat2, title: 'Forex Calculator', desc: 'Convert currencies at live rates' },
  { icon: FileCheck2, title: 'Document Checklist', desc: 'Get personalized document list' },
]

const TESTIMONIALS = [
  { name: 'Arjun Iyer', school: 'University of Toronto, Canada', text: 'Harbor Fintech made my education loan process smooth and stress-free. Highly recommended!', avatar: '/people/5.png' },
  { name: 'Ananya Sharma', school: 'University of Manchester, UK', text: 'From loan to forex, everything was handled professionally. Thank you Harbor Fintech!', avatar: '/people/22.png' },
  { name: 'Rohan Mehta', school: 'Arizona State University, USA', text: 'Quick approval, great support, and transparent process. Loved their tech-driven approach!', avatar: '/people/17.png' },
  { name: 'Priya Nair', school: 'Monash University, Australia', text: 'Their team was always available and guided me at every step. Amazing experience!', avatar: '/people/29.png' },
]

export default function HarborLandingPage() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.title = 'Harbor Fintech | Smart Technology. Trusted Guidance. Global Dreams.'
    const desc = document.querySelector('meta[name="description"]')
    desc?.setAttribute(
      'content',
      'Harbor Fintech is your gateway to global education — offering premium education loans, international payments, and forex services powered by smart technology and trusted guidance.',
    )
    const fav = document.querySelector("link[rel*='icon']") as HTMLLinkElement | null
    if (fav) fav.href = `/favicon.png?v=${Date.now()}`
  }, [])

  return (
    <ThemeProvider>
      <div className="master-landing min-h-screen bg-slate-50 dark:bg-[#05060f] text-slate-900 dark:text-slate-100">
        <MasterNavbar />

        {/* HERO */}
        <section
          ref={heroRef}
          className="relative overflow-hidden pt-32 pb-24 bg-gradient-to-b from-[#05060f] via-[#0a0e2e] to-[#0b1140] text-white"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#2563eb]/30 blur-[120px]" />
            <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-[#6d4aff]/25 blur-[140px]" />
            <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-[#05a784]/20 blur-[130px]" />
          </div>

          <div className="relative max-w-[94rem] mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
            <div className="animate-[fadeInUp_0.8s_ease-out]">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur px-4 py-2 text-xs font-medium text-slate-200">
                <ShieldCheck size={14} className="text-emerald-400" />
                <span>Trusted by 10,000+ students worldwide</span>
                <span className="text-yellow-400 flex items-center gap-1">
                  <Star size={12} fill="currentColor" /> 4.8/5
                </span>
              </div>

              <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]">
                <span className="block">Smart Technology.</span>
                <span className="block">Trusted Guidance.</span>
                <span className="block bg-gradient-to-r from-[#4f8cff] via-[#7a5cff] to-[#00d4ff] bg-clip-text text-transparent">
                  Global Dreams.
                </span>
              </h1>

              <p className="mt-6 text-lg text-slate-300 max-w-xl">
                Harbor Fintech simplifies the traditional loan and forex journey so you can focus on
                what really matters — your future.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/education-loan"
                  className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-gradient-to-r from-[#2563eb] to-[#6d4aff] text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-[1.02] active:scale-95 transition-all"
                >
                  Check Eligibility
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold border border-white/20 bg-white/5 backdrop-blur hover:bg-white/10 transition-all"
                >
                  Talk to an Advisor
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                {[
                  { icon: Sparkles, label: 'AI-Powered Process' },
                  { icon: Landmark, label: 'Multiple Bank Partners' },
                  { icon: Headphones, label: 'End-to-End Support' },
                  { icon: Zap, label: 'Fast Disbursal' },
                ].map((p) => {
                  const I = p.icon
                  return (
                    <div
                      key={p.label}
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur px-4 py-2 text-xs font-medium text-slate-200"
                    >
                      <I size={14} className="text-[#4f8cff]" />
                      {p.label}
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="relative h-[420px] lg:h-[560px] flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center opacity-90">
                <DigitalGlobe />
              </div>

              {[
                { label: 'Canada', flag: '🇨🇦', pos: 'top-4 left-6' },
                { label: 'UK', flag: '🇬🇧', pos: 'top-4 right-6' },
                { label: 'USA', flag: '🇺🇸', pos: 'top-1/2 -translate-y-1/2 left-2' },
                { label: 'Australia', flag: '🇦🇺', pos: 'top-1/2 -translate-y-1/2 right-2' },
              ].map((c) => (
                <div
                  key={c.label}
                  className={`absolute ${c.pos} flex items-center gap-2 px-3 py-2 rounded-xl bg-white text-slate-900 shadow-lg text-xs font-semibold animate-[floaty_5s_ease-in-out_infinite]`}
                >
                  <span className="text-base leading-none">{c.flag}</span>
                  {c.label}
                </div>
              ))}

              <div className="absolute bottom-2 right-2 md:bottom-6 md:right-0 w-[230px] rounded-2xl bg-white text-slate-900 shadow-2xl border border-slate-200 p-4 animate-[floaty_6s_ease-in-out_infinite]">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600">
                  <CheckCircle2 size={14} /> Loan Approved!
                </div>
                <div className="mt-1 text-lg font-bold">₹ 48,00,000</div>
                <div className="mt-0.5 text-[11px] text-slate-500">
                  University of Manchester, UK
                  <br />
                  10.5% ROI | Unsecured Loan
                </div>
                <button className="mt-3 w-full py-2 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-[#2563eb] to-[#6d4aff]">
                  View Details
                </button>
              </div>
            </div>
          </div>

          <style>{`
            @keyframes fadeInUp {
              from { opacity: 0; transform: translateY(24px); }
              to { opacity: 1; transform: translateY(0); }
            }
            @keyframes floaty {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-8px); }
            }
            .master-landing [class*='-translate-y-1/2'].animate-\\[floaty_5s_ease-in-out_infinite\\] {
              animation-name: floaty;
            }
          `}</style>
        </section>

        {/* SERVICE CARDS */}
        <section className="relative -mt-16 z-10 max-w-[94rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <ServiceCard
              href="/education-loan"
              accent="from-[#2563eb] to-[#6d4aff]"
              iconBg="bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-300"
              icon={GraduationCap}
              title="Harbor Finance"
              subtitle="Education Loan Solutions"
              heroImage="/landing/grad-cap-books.png"
              bullets={[
                'Secured & Unsecured Loans',
                '20+ Leading Banks & NBFCs',
                'Competitive Interest Rates',
                'Quick Approval & Disbursal',
                'End-to-End Support',
              ]}
              cta="Explore Education Loans"
            />
            <ServiceCard
              href="/forex"
              accent="from-[#00BB94] to-[#05a784]"
              iconBg="bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-300"
              icon={Repeat2}
              title="Harbor Forex"
              subtitle="International Payments"
              heroImage="/landing/forex-card-globe.png"
              bullets={[
                'Live Interbank Forex Rates',
                'Zero Hidden Charges',
                'Fast & Secure Transfers',
                'Forex Cards',
                'Multi-Currency Support',
              ]}
              cta="Explore Forex Services"
            />
          </div>
        </section>

        {/* HARFI AI COMING SOON */}
        <section className="max-w-[94rem] mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0a0e2e] via-[#1a1055] to-[#421bb8] p-8 md:p-12 text-white shadow-xl">
            <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-[#6d4aff]/30 blur-3xl" />
            <div className="absolute -left-10 bottom-0 w-72 h-72 rounded-full bg-[#00d4ff]/20 blur-3xl" />
            <div className="relative grid md:grid-cols-[auto_1fr_auto] items-center gap-8">
              <div className="w-24 h-24 rounded-3xl bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center">
                <Bot size={48} className="text-[#a5c4ff]" />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold tracking-wider uppercase">
                  <Sparkles size={12} /> Coming Soon
                </div>
                <h3 className="mt-3 text-3xl md:text-4xl font-bold">Meet HarFI — Your AI Assistant</h3>
                <p className="mt-2 text-slate-200 max-w-2xl">
                  An intelligent assistant trained on the entire Harbor ecosystem — from education loans
                  to forex. Ask anything, get instant expert-grade guidance 24/7.
                </p>
              </div>
              <button
                disabled
                className="px-6 py-3 rounded-full bg-white/10 border border-white/20 text-sm font-semibold cursor-not-allowed opacity-80"
              >
                Notify Me
              </button>
            </div>
          </div>
        </section>

        {/* TECHNOLOGY / PROCESS */}
        <section className="max-w-[94rem] mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <div className="grid lg:grid-cols-[320px_1fr] gap-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 text-xs font-semibold tracking-wider uppercase">
                <Cpu size={12} /> Powered by Harbor OS
              </div>
              <h2 className="mt-4 text-3xl font-bold">Technology in Action</h2>
              <p className="mt-3 text-slate-600 dark:text-slate-300">
                We combine technology, data, and human expertise to make your loan journey faster,
                smarter and transparent.
              </p>
              <a
                href="/education-loan"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-300 hover:gap-3 transition-all"
              >
                See How It Works <ArrowRight size={14} />
              </a>
            </div>

            <div className="relative">
              <div className="hidden md:block absolute top-9 left-[6%] right-[6%] h-px bg-gradient-to-r from-transparent via-blue-300/60 to-transparent" />
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                {PROCESS.map((p, i) => {
                  const I = p.icon
                  return (
                    <div key={p.title} className="relative text-center group">
                      <div className="mx-auto w-16 h-16 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm flex items-center justify-center text-blue-600 dark:text-blue-300 group-hover:-translate-y-1 group-hover:shadow-md transition-all">
                        <I size={26} />
                      </div>
                      <div className="mt-4 text-sm font-semibold">{p.title}</div>
                      <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">{p.desc}</div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        {i + 1}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* STATS BAR */}
        <section className="max-w-[94rem] mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <div className="rounded-3xl bg-gradient-to-r from-[#0a0e2e] to-[#171b5d] text-white p-6 md:p-8 shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {STATS.map((s) => {
                const I = s.icon
                return (
                  <div key={s.label} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center">
                      <I size={22} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{s.value}</div>
                      <div className="text-xs text-slate-300">{s.label}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* SMART TOOLS */}
        <section id="resources" className="max-w-[94rem] mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-zinc-900 text-xs font-semibold tracking-wider uppercase text-slate-600 dark:text-slate-300">
            <TrendingUp size={12} /> Smart Tools For Smart Decisions
          </div>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">Plan Better with Our Smart Tools</h2>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {SMART_TOOLS.map((t) => {
              const I = t.icon
              return (
                <div
                  key={t.title}
                  className="group rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 p-5 hover:-translate-y-1 hover:shadow-lg transition-all cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-300 flex items-center justify-center">
                    <I size={18} />
                  </div>
                  <div className="mt-4 text-sm font-semibold">{t.title}</div>
                  <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">{t.desc}</div>
                  <div className="mt-3 text-xs font-semibold text-blue-600 dark:text-blue-300 opacity-0 group-hover:opacity-100 transition-opacity">
                    Try now →
                  </div>
                </div>
              )
            })}
            <div className="rounded-2xl bg-gradient-to-br from-[#2563eb] to-[#6d4aff] text-white p-5 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center">
                  <Headphones size={18} />
                </div>
                <div className="mt-4 text-sm font-semibold">Get Personalized Support</div>
                <div className="mt-1 text-xs text-white/80">
                  Not sure where to start? Our experts are here to help.
                </div>
              </div>
              <a href="/contact" className="mt-3 text-xs font-semibold hover:underline">
                Talk to an Advisor →
              </a>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="max-w-[94rem] mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-zinc-900 text-xs font-semibold tracking-wider uppercase text-slate-600 dark:text-slate-300">
            <Star size={12} /> Real Stories, Real Success
          </div>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">Trusted by Students, Loved by Parents</h2>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 p-5 hover:-translate-y-1 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">{t.school}</div>
                  </div>
                </div>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{t.text}</p>
                <div className="mt-3 flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill="currentColor" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-24">
          <FooterSection mode="loan" />
        </div>
      </div>
    </ThemeProvider>
  )
}

function ServiceCard({
  href,
  accent,
  iconBg,
  icon: Icon,
  title,
  subtitle,
  bullets,
  cta,
  heroImage,
}: {
  href: string
  accent: string
  iconBg: string
  icon: any
  title: string
  subtitle: string
  bullets: string[]
  cta: string
  heroImage?: string
}) {
  return (
    <a
      href={href}
      className="group relative overflow-hidden rounded-3xl bg-white dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800 p-8 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
    >
      <div
        className={`absolute -inset-x-4 -top-1 h-1 bg-gradient-to-r ${accent} opacity-0 group-hover:opacity-100 transition-opacity`}
      />
      <div className="flex items-start gap-5">
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${iconBg}`}>
          <Icon size={30} />
        </div>
        <div className="flex-1">
          <h3 className={`text-2xl font-bold bg-gradient-to-r ${accent} bg-clip-text text-transparent`}>
            {title}
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">{subtitle}</p>
        </div>
        {heroImage && (
          <img
            src={heroImage}
            alt=""
            aria-hidden
            className="w-28 h-28 md:w-32 md:h-32 object-contain shrink-0 -mt-3 -mr-2 drop-shadow-xl group-hover:scale-105 group-hover:-rotate-3 transition-transform duration-500"
            loading="lazy"
          />
        )}
      </div>

      <ul className="mt-6 grid gap-3">
        {bullets.map((b) => (
          <li key={b} className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-200">
            <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
            {b}
          </li>
        ))}
      </ul>

      <div
        className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${accent} bg-clip-text text-transparent group-hover:gap-3 transition-all`}
      >
        {cta}
        <ArrowRight size={14} className="text-current opacity-70" />
      </div>
    </a>
  )
}
