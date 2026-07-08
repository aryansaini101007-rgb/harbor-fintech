import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="relative w-11 h-11 rounded-full flex items-center justify-center shrink-0 bg-white/80 dark:bg-white/10 border border-black/10 dark:border-white/15 backdrop-blur hover:scale-105 active:scale-95 transition-all duration-200 shadow-sm"
    >
      <Sun
        className="w-[18px] h-[18px] absolute text-amber-500 transition-all duration-300"
        style={{
          opacity: isDark ? 0 : 1,
          transform: isDark ? 'rotate(90deg) scale(0.5)' : 'rotate(0deg) scale(1)',
        }}
      />
      <Moon
        className="w-[18px] h-[18px] absolute text-indigo-300 transition-all duration-300"
        style={{
          opacity: isDark ? 1 : 0,
          transform: isDark ? 'rotate(0deg) scale(1)' : 'rotate(-90deg) scale(0.5)',
        }}
      />
    </button>
  )
}