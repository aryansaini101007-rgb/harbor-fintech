import { Landmark, ShieldCheck, Zap, Lock, ArrowRight } from 'lucide-react'
import { BANKS } from '../data/banks'
import { useBankModal } from '../context/BankModalContext'
import BankLogo from './BankLogo'
import LogoIcon from './LogoIcon'
import Avatar from './Avatar'
import FlagIcon, { type FlagCode } from './FlagIcon'

const GROWING_STUDENTS = [
  { seed: 8, name: 'Aditi Verma' },
  { seed: 17, name: 'Rahul Chawla' },
  { seed: 29, name: 'Neha Gupta' },
  { seed: 41, name: 'Sameer Khan' },
  { seed: 53, name: 'Isha Malhotra' },
]

const NETWORK_BANKS = BANKS

// short display labels so nodes never crowd/overlap each other on the ring
const NETWORK_LABEL: Record<string, string> = {
  'bank-sbi': 'SBI',
  'bank-hdfc': 'HDFC',
  'bank-icici': 'ICICI',
  'bank-poonawalla': 'Poonawalla Fincorp',
  'bank-axis': 'Axis',
  'bank-yes': 'Yes Bank',
  'bank-indusind': 'IndusInd',
  'bank-tata': 'Tata Capital',
  'bank-pnb': 'PNB',
  'bank-idfc': 'IDFC First',
  'bank-hdfc-credila': 'Credila',
  'bank-avanse': 'Avanse',
  'bank-prodigy-finance': 'Prodigy Finance',
  'bank-bob': 'Bank of Baroda',
  'bank-union': 'Union Bank',
}

const STAT_CHIPS = [
  { icon: Landmark, value: '20+', label: 'Banks & NBFCs' },
  { icon: ShieldCheck, value: '98%', label: 'Approval Rate' },
  { icon: Zap, value: '48 hrs', label: 'Avg. Sanction' },
  { icon: Lock, value: '100%', label: 'Secure Process' },
]

const LIVE_APPROVALS: { name: string; seed: number; flag: FlagCode; country: string; amount: string; bank: string; color: string; time: string }[] = [
  { name: 'Arjun P.', seed: 51, flag: 'usa', country: 'USA', amount: '$68,500', bank: 'SBI', color: '#22409A', time: '1 Week ago' },
  { name: 'Mehak S.', seed: 26, flag: 'canada', country: 'Canada', amount: '$52,000', bank: 'ICICI Bank', color: '#F58220', time: '2 Weeks ago' },
  { name: 'Rohan K.', seed: 12, flag: 'uk', country: 'UK', amount: '£38,500', bank: 'HDFC Bank', color: '#EC1C24', time: '1 Month ago' },
  { name: 'Simran D.', seed: 33, flag: 'australia', country: 'Australia', amount: 'A$45,000', bank: 'Axis Bank', color: '#97144D', time: '1 Week ago' },
  { name: 'Karan M.', seed: 15, flag: 'germany', country: 'Germany', amount: '€41,000', bank: 'IDFC FIRST Bank', color: '#8B1E3F', time: '3 Days ago' },
]

const RADIUS_X = 260
const RADIUS_Y = 210

export default function PartnerBanksSection() {
  const { openBank } = useBankModal()

  return (
    <section className="px-4 sm:px-6 pt-8 pb-14 sm:pb-24 overflow-hidden">
      <style>{`
        @keyframes nodeFloat { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-6px); } }
        @keyframes hubPulse { 0%, 100% { box-shadow: 0 0 0 0 rgba(67,56,202,0.25); } 50% { box-shadow: 0 0 0 14px rgba(67,56,202,0); } }
        @keyframes approvalsScroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .approvals-track { display: flex; width: max-content; animation: approvalsScroll 28s linear infinite; }
      `}</style>

      <div className="max-w-[88rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-center mb-8 sm:mb-16">
        {/* left: copy + stats + avatars */}
        <div>
          <p className="text-[#4338CA] dark:text-[#818CF8] text-sm font-semibold tracking-wide mb-3">OUR LENDING PARTNERS</p>
          <h2 className="text-black dark:text-white text-4xl md:text-5xl font-medium leading-tight mb-6" style={{ letterSpacing: '-0.03em' }}>
            Real connections<span className="text-[#4338CA] dark:text-[#818CF8]">.</span>
            <br />
            Real approvals<span className="text-[#4338CA] dark:text-[#818CF8]">.</span>
          </h2>
          <p className="text-black/60 dark:text-white/60 text-base leading-relaxed max-w-md mb-8">
            Thousands of students trust our partner network every day. Get the best rates, fast approvals
            and hassle-free disbursal.
          </p>

          <button className="inline-flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black text-base font-medium px-7 py-3 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-200 mb-10">
            Explore All Partners
            <ArrowRight className="w-4 h-4" />
          </button>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {STAT_CHIPS.map((s) => (
              <div key={s.label} className="bg-white dark:bg-white/5 dark:border dark:border-white/10 rounded-xl p-4">
                <s.icon className="w-5 h-5 mb-2" style={{ color: '#4338CA' }} />
                <p className="text-black dark:text-white text-lg font-semibold leading-none mb-1">{s.value}</p>
                <p className="text-black/50 dark:text-white/50 text-xs">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="flex -space-x-3">
              {GROWING_STUDENTS.map((s) => (
                <Avatar key={s.seed} seed={s.seed} name={s.name} size={36} />
              ))}
              <span className="w-9 h-9 rounded-full border-2 border-white dark:border-[#14173a] bg-black dark:bg-white flex items-center justify-center text-white dark:text-black text-[10px] font-semibold">
                +15K
              </span>
            </div>
            <p className="text-black/60 dark:text-white/60 text-sm">Students and growing</p>
          </div>
        </div>

        {/* right: hub-and-spoke bank network — logos only, no interest rates shown */}
        <div className="partner-diagram-wrap">
        <div className="relative mx-auto partner-diagram-canvas" style={{ width: 600, height: 520, maxWidth: '100%' }}>
          {/* decorative concentric rings */}
          <div className="absolute inset-0 rounded-full border border-[#4338CA]/10 dark:border-white/10" style={{ margin: 30 }} />
          <div className="absolute inset-0 rounded-full border border-dashed border-[#4338CA]/15 dark:border-white/10" style={{ margin: 60 }} />

          <svg viewBox="0 0 600 520" className="absolute inset-0 w-full h-full" style={{ overflow: 'visible' }}>
            {NETWORK_BANKS.map((bank, i) => {
              const angle = (360 / NETWORK_BANKS.length) * i - 90
              const rad = (angle * Math.PI) / 180
              const x = 300 + RADIUS_X * Math.cos(rad)
              const y = 260 + RADIUS_Y * Math.sin(rad)
              const pathId = `path-${bank.id}`
              return (
                <g key={bank.id}>
                  <path id={pathId} d={`M300 260 L${x} ${y}`} fill="none" stroke="#c7ccf5" strokeWidth="1.5" />
                  <circle r="4" fill="#4338CA">
                    <animateMotion dur={`${3 + (i % 4)}s`} repeatCount="indefinite" path={`M${x} ${y} L300 260`} />
                  </circle>
                </g>
              )
            })}
          </svg>

          {/* central hub */}
<div
  className="absolute rounded-full bg-white dark:bg-white/10 dark:border dark:border-white/10 flex items-center justify-center shadow-xl overflow-hidden"
  style={{
    width: 92,
    height: 92,
    top: 260 - 46,
    left: 300 - 46,
    animation: 'hubPulse 2.6s ease-in-out infinite',
  }}
>
  <div className="flex items-center justify-center w-full h-full">
    <LogoIcon className="w-11 h-11 block" />
  </div>
</div>

          {/* bank nodes — badge + name only */}
          {NETWORK_BANKS.map((bank, i) => {
            const angle = (360 / NETWORK_BANKS.length) * i - 90
            const rad = (angle * Math.PI) / 180
            const x = 300 + RADIUS_X * Math.cos(rad)
            const y = 260 + RADIUS_Y * Math.sin(rad)
            return (
              <div key={bank.id} className="absolute" style={{ left: x, top: y, transform: 'translate(-50%, -50%)' }}>
                <button
                  onClick={() => openBank(bank.id)}
                  className="flex flex-col items-center gap-1.5 hover-float"
                  style={{ animation: `nodeFloat 4s ease-in-out ${i * 0.3}s infinite` }}
                >
                  <BankLogo initials={bank.initials} color={bank.color} textColor={bank.textColor} domain={bank.domain} logo={bank.logo} name={bank.shortName} size={56} />
                  <span className="text-black/70 dark:text-white/70 text-[11px] font-medium whitespace-nowrap bg-white/80 dark:bg-white/10 px-2 py-0.5 rounded-full">
                    {NETWORK_LABEL[bank.id] ?? bank.shortName}
                  </span>
                </button>
              </div>
            )
          })}
        </div>
        </div>
      </div>

      {/* live approvals ticker */}
      <div className="max-w-[88rem] mx-auto">
        <div className="bg-white dark:bg-white/5 dark:border dark:border-white/10 rounded-2xl px-6 py-5 flex items-center gap-6 overflow-hidden">
          <div className="shrink-0 pr-6 border-r border-black/10 dark:border-white/10">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <p className="text-black dark:text-white text-sm font-semibold">Live Approvals</p>
            </div>
            <p className="text-black/40 dark:text-white/40 text-xs max-w-[160px] leading-tight">Real-time loan approvals from our partner network</p>
          </div>

          <div className="overflow-hidden flex-1">
            <div className="approvals-track">
              {[...LIVE_APPROVALS, ...LIVE_APPROVALS].map((a, i) => (
                <div key={i} className="mx-5 shrink-0 min-w-[150px] flex items-start gap-3">
                  <Avatar seed={a.seed} name={a.name} size={40} />
                  <div>
                    <div className="flex items-center gap-1.5 mb-1">
                      <FlagIcon code={a.flag} className="w-[19px] h-[14px]" title={a.country} />
                      <p className="text-black dark:text-white text-sm font-medium">{a.name}</p>
                    </div>
                    <p className="text-black/40 dark:text-white/40 text-xs mb-2">{a.country}</p>
                    <p className="text-black dark:text-white text-lg font-semibold mb-1">{a.amount}</p>
                    <p className="text-black/40 dark:text-white/40 text-[11px]">
                      Approved by <span className="font-medium" style={{ color: a.color }}>{a.bank}</span> · {a.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}