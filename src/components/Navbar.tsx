import { useState, useEffect } from 'react'
import LogoIcon from './LogoIcon'
import ThemeToggle from './ThemeToggle'
import ApplyNowModal from './ApplyNowModal'
import {
  GraduationCap,
  Repeat2,
  Menu,
  X,
} from 'lucide-react'

interface NavbarProps {
  mode?: "loan" | "forex";
}

export default function Navbar({
  mode = "loan",
}: NavbarProps) {
  const isForex = mode === "forex";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false)

  const navigateTo = (nextMode: "loan" | "forex") => {
    window.location.assign(
        nextMode === "loan"
            ? "/education"
            : "/forex"
    );
};

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full border-b ${
          isScrolled
            ? 'bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md shadow-md py-3 border-slate-200/50 dark:border-zinc-800/50'
            : 'bg-transparent pt-4 pb-4 border-transparent'
        }`}
      >
        <div className="max-w-[94rem] mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <div className="flex flex-col md:gap-3 w-full">

            {/* Main Navbar Row */}
            <div className="flex items-center justify-between h-14 w-full gap-4">

              {/* Logo */}
              <a
                href="#"
                className="flex items-center gap-3 group shrink-0"
              >
                <LogoIcon className="w-9 h-9 shrink-0 transition-transform duration-300 group-hover:scale-105" />
              </a>

              {/* Desktop Mode Switcher */}
              <div className="hidden md:flex items-center gap-4">
                <div className="bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800/80 p-2 rounded-full shadow-md flex items-center gap-1.5 shrink-0">

                  <button
                    onClick={() => navigateTo('loan')}
                    className={`flex items-center gap-2.5 px-7 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${
                      !isForex
                        ? 'bg-gradient-to-r from-[#171b5d] to-[#421bb8] text-white shadow-sm'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <GraduationCap size={18} />
                    <span>Education Loan</span>
                  </button>

                  <button
  onClick={() => navigateTo('forex')}
  className={`flex items-center gap-2.5 px-7 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${
    isForex
      ? 'bg-gradient-to-r from-[#171b5d] to-[#421bb8] text-white shadow-sm'
      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
  }`}
>
  <Repeat2 size={18} />
  <span>Forex</span>
</button>

                </div>
              </div>

              {/* Desktop Actions */}
              <div className="hidden md:flex items-center gap-4 shrink-0">
                <ThemeToggle />

                <button
                  onClick={() => setIsApplyModalOpen(true)}
                  className="px-6 py-2.5 bg-gradient-to-r from-[#2563eb] to-[#6d4aff] hover:from-[#1d4ed8] hover:to-[#5b21b6] text-white text-sm font-medium rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-95 flex items-center gap-2 whitespace-nowrap"
                >
                  <span>{isForex ? "Pay Now" : "Apply Now"}</span>
                  <span>→</span>
                </button>
              </div>

              {/* Mobile Actions */}
              <div className="flex md:hidden items-center gap-2 shrink-0">
                <ThemeToggle />

                <button
                  onClick={() =>
                    setIsMobileMenuOpen(!isMobileMenuOpen)
                  }
                  className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-zinc-800/60 transition-colors"
                >
                  {isMobileMenuOpen ? (
                    <X size={24} />
                  ) : (
                    <Menu size={24} />
                  )}
                </button>
              </div>

            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isMobileMenuOpen
                ? 'max-h-[260px] opacity-100 mt-2'
                : 'max-h-0 opacity-0'
            }`}
          >
            <div className="flex flex-col gap-3 pb-4 px-2 border-t border-slate-100 dark:border-zinc-800/80 pt-4">

              {/* Education Loan + Forex */}
              <div className="grid grid-cols-2 gap-2 bg-slate-100 dark:bg-zinc-900 p-1 rounded-xl">

                <button
                  onClick={() => {
                    navigateTo('loan')
                    setIsMobileMenuOpen(false)
                  }}
                  className={`flex items-center justify-center gap-2 py-3 px-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                    !isForex
                      ? 'bg-[#171b5d] text-white shadow'
                      : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  <GraduationCap size={17} />
                  <span>Education Loan</span>
                </button>

                <button
                  onClick={() => {
                    navigateTo('forex')
                    setIsMobileMenuOpen(false)
                  }}
                  className={`flex items-center justify-center gap-1.5 py-3 px-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                    isForex
                      ? 'bg-[#171b5d] text-white shadow'
                      : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  <Repeat2 size={16} />
                  <span>Forex</span>
                </button>

              </div>

              {/* Mobile {isForex ? "Pay Now" : "Apply Now"} */}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  setIsApplyModalOpen(true)
                }}
                className="w-full py-3 bg-gradient-to-r from-[#2563eb] to-[#6d4aff] text-white text-center text-sm font-semibold rounded-xl shadow-md"
              >
                {isForex ? "Pay Now" : "Apply Now"} →
              </button>

            </div>
          </div>

        </div>
      </nav>

      <ApplyNowModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
      />
    </>
  )
}
