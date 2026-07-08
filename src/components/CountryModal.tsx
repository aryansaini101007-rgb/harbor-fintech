import { X, ArrowRight, GraduationCap, Check } from 'lucide-react'
import { useCountryModal } from '../context/CountryModalContext'

export default function CountryModal() {
  const { activeCountry, closeCountry } = useCountryModal()

  if (!activeCountry) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-6"
      style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
      onClick={closeCountry}
    >
      <div
        className="bg-white dark:bg-[#181c3a] rounded-3xl w-full max-w-lg overflow-hidden relative"
        style={{ animation: 'modalIn 0.2s ease-out' }}
        onClick={(e) => e.stopPropagation()}
      >
        <style>{`
          @keyframes modalIn {
            0% { opacity: 0; transform: translateY(12px) scale(0.98); }
            100% { opacity: 1; transform: translateY(0) scale(1); }
          }
        `}</style>

        <div className="relative h-48">
          <img src={activeCountry.image} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.6) 100%)' }} />
          <button
            onClick={closeCountry}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="absolute bottom-4 left-6 flex items-center gap-2">
            <span className="text-2xl">{activeCountry.flag}</span>
            <span className="text-white text-2xl font-semibold" style={{ letterSpacing: '-0.02em' }}>
              {activeCountry.name}
            </span>
          </div>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-[#F5F5F5] dark:bg-white/5 rounded-xl p-4">
              <p className="text-black/40 dark:text-white/40 text-xs mb-1">Top Universities</p>
              <p className="text-black dark:text-white text-lg font-medium">{activeCountry.universities}</p>
            </div>
            <div className="bg-[#F5F5F5] dark:bg-white/5 rounded-xl p-4">
              <p className="text-black/40 dark:text-white/40 text-xs mb-1">Avg. Loan Rate</p>
              <p className="text-black dark:text-white text-lg font-medium">{activeCountry.avgRate}</p>
            </div>
          </div>

          <p className="text-black/60 dark:text-white/60 text-sm leading-relaxed mb-6">{activeCountry.description}</p>

          <div className="mb-8">
            <p className="text-black dark:text-white text-sm font-medium mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" /> Popular universities
            </p>
            <ul className="flex flex-col gap-2">
              {activeCountry.topUniversities.map((u) => (
                <li key={u} className="flex items-center gap-2 text-black/70 dark:text-white/70 text-sm">
                  <Check className="w-4 h-4 text-black dark:text-white shrink-0" />
                  {u}
                </li>
              ))}
            </ul>
          </div>

          <button className="w-full inline-flex items-center justify-center gap-3 bg-black text-white text-base font-medium px-8 py-3 rounded-full hover:bg-gray-800 transition-colors duration-200">
            Explore loans for {activeCountry.name}
            <span className="bg-white rounded-full p-1.5">
              <ArrowRight className="w-4 h-4 text-black" />
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}