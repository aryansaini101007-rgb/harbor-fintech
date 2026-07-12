import { X, ArrowRight, Check } from 'lucide-react'
import { useBankModal } from '../context/BankModalContext'
import BankLogo from './BankLogo'

export default function BankModal() {
  const { activeBank, closeBank } = useBankModal()

  if (!activeBank) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-6"
      style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
      onClick={closeBank}
    >
      <div
        className="bg-white dark:bg-[#181c3a] rounded-3xl w-full max-w-lg p-8 relative animate-[modalIn_0.2s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        <style>{`
          @keyframes modalIn {
            0% { opacity: 0; transform: translateY(12px) scale(0.98); }
            100% { opacity: 1; transform: translateY(0) scale(1); }
          }
        `}</style>

        <button
          onClick={closeBank}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#F5F5F5] dark:bg-white/10 dark:text-white flex items-center justify-center hover:bg-black hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="mb-5">
          <BankLogo initials={activeBank.initials} color={activeBank.color} textColor={activeBank.textColor} domain={activeBank.domain} logo={activeBank.logo} name={activeBank.shortName} size={48} />
        </div>

        <h3 className="text-black dark:text-white text-2xl font-medium mb-1" style={{ letterSpacing: '-0.02em' }}>
          {activeBank.name}
        </h3>
        <p className="text-black/50 dark:text-white/50 text-sm mb-6">{activeBank.type}</p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-[#F5F5F5] dark:bg-white/5 rounded-xl p-4">
            <p className="text-black/40 dark:text-white/40 text-xs mb-1">Rate from</p>
            <p className="text-black dark:text-white text-lg font-medium">{activeBank.rate}</p>
          </div>
          <div className="bg-[#F5F5F5] dark:bg-white/5 rounded-xl p-4">
            <p className="text-black/40 dark:text-white/40 text-xs mb-1">Loan amount</p>
            <p className="text-black dark:text-white text-lg font-medium">{activeBank.amount}</p>
          </div>
          <div className="bg-[#F5F5F5] dark:bg-white/5 rounded-xl p-4">
            <p className="text-black/40 dark:text-white/40 text-xs mb-1">Tenure</p>
            <p className="text-black dark:text-white text-lg font-medium">{activeBank.tenure}</p>
          </div>
          <div className="bg-[#F5F5F5] dark:bg-white/5 rounded-xl p-4">
            <p className="text-black/40 dark:text-white/40 text-xs mb-1">Processing fee</p>
            <p className="text-black dark:text-white text-sm font-medium">{activeBank.processingFee}</p>
          </div>
        </div>

        <div className="mb-8">
          <p className="text-black dark:text-white text-sm font-medium mb-3">Why choose {activeBank.name}</p>
          <ul className="flex flex-col gap-2">
            {activeBank.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 text-black/60 dark:text-white/60 text-sm leading-relaxed">
                <Check className="w-4 h-4 text-black dark:text-white shrink-0 mt-0.5" />
                {h}
              </li>
            ))}
          </ul>
        </div>

        <button className="w-full inline-flex items-center justify-center gap-3 bg-black text-white text-base font-medium px-8 py-3 rounded-full hover:bg-gray-800 transition-colors duration-200">
          Apply with {activeBank.name}
          <span className="bg-white rounded-full p-1.5">
            <ArrowRight className="w-4 h-4 text-black" />
          </span>
        </button>
      </div>
    </div>
  )
}