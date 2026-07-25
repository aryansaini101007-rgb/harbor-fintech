import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Harbor Finance', href: '/education-loan' },
  { label: 'Harbor Forex', href: '/forex' },
  { label: 'Resources', href: '/#resources' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function MasterNavbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl shadow-sm border-slate-200/50 dark:border-zinc-800/50 py-3'
          : 'bg-transparent border-transparent py-4'
      }`}
    >
      <div className="max-w-[94rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <a href="/" className="flex items-center gap-2 shrink-0">
            <img
              src="/logos/harbor-finance-logo.png"
              alt="Harbor Fintech"
              className="h-12 w-auto object-contain"
              draggable={false}
            />
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-[#421bb8] dark:hover:text-white transition-colors rounded-full hover:bg-slate-100/80 dark:hover:bg-zinc-900/60"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <ThemeToggle />
            <a
              href="/education-loan"
              className="px-5 py-2.5 text-white text-sm font-semibold rounded-full shadow-md hover:shadow-lg transition-all bg-gradient-to-r from-[#2563eb] to-[#6d4aff] hover:from-[#1d4ed8] hover:to-[#5b21b6]"
            >
              Check Eligibility →
            </a>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-zinc-800/60"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        <div
          className={`lg:hidden overflow-hidden transition-all ${
            mobileOpen ? 'max-h-[500px] opacity-100 mt-3' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-1 pb-4 border-t border-slate-100 dark:border-zinc-800 pt-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-zinc-900"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/education-loan"
              className="mt-2 px-4 py-3 text-center text-white text-sm font-semibold rounded-xl bg-gradient-to-r from-[#2563eb] to-[#6d4aff]"
            >
              Check Eligibility →
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
