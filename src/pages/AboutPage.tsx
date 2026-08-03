import { Link } from '@tanstack/react-router'
import KnowMoreSection from "../components/about/KnowMoreSection";
import { motion, useReducedMotion } from 'framer-motion'
import { MessageCircle, ArrowRight } from 'lucide-react'
import { SiteChrome } from '../components/shared/SiteChrome'

const ease = [0.22, 1, 0.36, 1] as const

function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? undefined : { opacity: 0, y: 24 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </motion.div>
  )
}

function Section({
  children,
  className = '',
  label,
}: {
  children: React.ReactNode
  className?: string
  label?: string
}) {
  return (
    <section
      aria-label={label}
      className={`relative w-full px-5 py-20 sm:px-8 md:py-28 ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  )
}

export default function AboutPage() {
  return (
    <SiteChrome variant="education">
      <main
  className="min-h-screen overflow-x-hidden bg-white pt-28 lg:pt-32 dark:bg-[#0B1023]"
  aria-label="About Harbor Finance"
>
        {/* ---------------------------------------------------------------- */}
        {/* KNOW MORE ABOUT HARBOR FINANCE                                    */}
        {/* ---------------------------------------------------------------- */}

        <KnowMoreSection />
      </main>
    </SiteChrome>
  )
}
