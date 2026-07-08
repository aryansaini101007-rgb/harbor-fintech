import { useState } from 'react'
import { Star, ChevronDown, ChevronUp } from 'lucide-react'
import Avatar from './Avatar'

const TESTIMONIALS = [
  {
    quote:
      'I compared five different banks in one afternoon and got my sanction letter within two days. The advisor stayed with me through every document.',
    name: 'Ananya R.',
    detail: "MS Computer Science, USA",
    seed: 5,
  },
  {
    quote:
      'The collateral-free option meant my parents didn\'t have to pledge property. The whole process felt transparent from start to finish.',
    name: 'Rohan K.',
    detail: 'MBA, Canada',
    seed: 12,
  },
  {
    quote:
      'Rates from every lender side by side made the decision easy. Saved me weeks of running between bank branches.',
    name: 'Simran P.',
    detail: 'MEng, United Kingdom',
    seed: 26,
  },
  {
    quote:
      'My co-signer is my mother, a homemaker with no income proof. Harbor still found us three lenders willing to work with our profile.',
    name: 'Aditya N.',
    detail: 'MS Data Science, Germany',
    seed: 51,
  },
  {
    quote:
      'The EMI calculator showed exactly what my repayments would look like after graduation, so there were no surprises when I actually took the loan.',
    name: 'Priya S.',
    detail: 'MSc Finance, Australia',
    seed: 44,
  },
  {
    quote:
      "I applied on a Friday night and had a callback from a relationship manager by Monday morning. Didn't expect that kind of speed from a bank.",
    name: 'Karan M.',
    detail: 'MBA, Singapore',
    seed: 33,
  },
]

export default function TestimonialsSection() {
  const [showAllMobile, setShowAllMobile] = useState(false)
  return (
    <section className="px-4 sm:px-6 py-14 md:py-24">
      <div className="max-w-[88rem] mx-auto">
        <h2 className="text-black dark:text-white text-5xl md:text-6xl font-medium leading-none mb-14" style={{ letterSpacing: '-0.04em' }}>
          Students trust us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
  {TESTIMONIALS.map((t, index) => (
    <div
      key={t.name}
      className={`
        bg-white dark:bg-white/5 dark:border dark:border-white/10
        rounded-2xl p-7 flex flex-col justify-between min-h-64 hover-float
        ${index >= 2 && !showAllMobile ? 'hidden md:flex' : 'flex'}
      `}
    >
      <div>
        <div className="flex gap-1 mb-5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 fill-black dark:fill-[#818CF8] text-black dark:text-[#818CF8]"
            />
          ))}
        </div>

        <p className="text-black/70 dark:text-white/70 text-base leading-relaxed">
          "{t.quote}"
        </p>
      </div>

      <div className="mt-6 flex items-center gap-3">
        <Avatar
          seed={t.seed}
          name={t.name}
          size={40}
          ringClassName="border-white dark:border-[#0c0f2a]"
        />

        <div>
          <p className="text-black dark:text-white text-sm font-medium">
            {t.name}
          </p>

          <p className="text-black/50 dark:text-white/50 text-sm">
            {t.detail}
          </p>
        </div>
      </div>
    </div>
  ))}
</div>

<div className="flex justify-center mt-7 md:hidden">
  <button
    type="button"
    onClick={() => setShowAllMobile((current) => !current)}
    className="
      inline-flex items-center justify-center gap-2
      bg-black text-white
      px-6 py-3 rounded-full
      text-sm font-medium
      shadow-lg
      active:scale-95
      transition-all duration-300
    "
  >
    {showAllMobile ? (
      <>
        Show Less
        <ChevronUp className="w-4 h-4" />
      </>
    ) : (
      <>
        See More Reviews
        <ChevronDown className="w-4 h-4" />
      </>
    )}
  </button>
</div>
      </div>
    </section>
  )
}