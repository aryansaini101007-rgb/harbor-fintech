import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const FAQS = [
  {
    q: 'What is the maximum loan amount I can get?',
    a: 'Depending on the lender and your course, you can get education loans ranging from ₹75 Lakh up to ₹2 Crore, or the international equivalent for overseas lenders.',
  },
  {
    q: 'Do I need collateral for an education loan?',
    a: 'Not always. Several of our partner NBFCs and international lenders offer collateral-free loans based on your admit, course and co-applicant profile.',
  },
  {
    q: 'How long does loan approval take?',
    a: 'With most partner lenders, you can receive a sanction letter within 48 hours of submitting complete documentation.',
  },
  {
    q: 'Is the advisory service really free?',
    a: 'Yes. Our advisors are 100% free for students — we are compensated by our lending partners, not by you.',
  },
  {
    q: 'Can I compare multiple banks at once?',
    a: 'Yes, our platform lets you compare interest rates, processing fees, and tenure across 20+ lenders in a single view.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="px-6 py-24">
      <div className="max-w-[88rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-black dark:text-white text-5xl md:text-6xl font-medium leading-none mb-6" style={{ letterSpacing: '-0.04em' }}>
            Common questions
          </h2>
          <p className="text-black/60 dark:text-white/60 text-base leading-relaxed max-w-sm">
            Everything you need to know before applying for your study abroad education loan.
          </p>
        </div>

        <div className="flex flex-col divide-y divide-black/10 dark:divide-white/10">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div key={faq.q} className="py-6">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between text-left gap-4"
                >
                  <span className="text-black dark:text-white text-lg font-medium" style={{ letterSpacing: '-0.01em' }}>
                    {faq.q}
                  </span>
                  <span className="shrink-0 w-8 h-8 rounded-full bg-white dark:bg-white/10 flex items-center justify-center">
                    {isOpen ? <Minus className="w-4 h-4 text-black dark:text-white" /> : <Plus className="w-4 h-4 text-black dark:text-white" />}
                  </span>
                </button>
                {isOpen && <p className="text-black/60 dark:text-white/60 text-base leading-relaxed mt-4 max-w-lg">{faq.a}</p>}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}