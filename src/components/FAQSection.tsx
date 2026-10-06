import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const FAQS = [
  {
    q: 'What is an education loan and how does it work for studying abroad?',
    a: 'An education loan is a specialized loan designed to fund higher studies in India or abroad. It covers academic tuition fees along with essential living costs like accommodation, books, and travel. Lenders disburse tuition fees directly to your university, while living expenses are released to your student account or international forex card as needed.',
  },
  {
    q: 'Can I get an education loan without collateral (unsecured loan)?',
    a: 'Yes. Several partner banks, NBFCs, and international lenders offer collateral-free education loans for studying abroad. Unsecured loans are evaluated based on your academic profile, GRE/GMAT/IELTS scores, target university ranking, and the financial standing of your co-applicant (parent or guardian).',
  },
  {
    q: 'What is the difference between secured and unsecured education loans?',
    a: 'A secured education loan requires tangible collateral (such as residential property, fixed deposits, or commercial real estate) and typically offers lower interest rates and higher loan amounts (up to ₹1.5–2 Crore). An unsecured education loan requires no property pledge and relies on the student’s academic credentials and co-borrower’s income, offering faster processing.',
  },
  {
    q: 'What is the eligibility criteria for a study abroad education loan?',
    a: 'Key eligibility criteria include: Indian citizenship, admission or confirmed application to a recognized overseas university, qualifying past academic records (usually 50–60%+), and a creditworthy co-applicant (parent, sibling, or legal guardian) who has a steady income source.',
  },
  {
    q: 'What documents are required for an education loan application?',
    a: 'Standard documentation includes: (1) Student academic records (10th, 12th, graduation marksheets, standardized test scores like GRE/IELTS/TOEFL); (2) University offer letter and estimated fee structure; (3) KYC documents (Aadhaar, PAN, Passport); (4) Co-applicant financial documents (latest salary slips or ITR for 2–3 years, 6 months bank statements); and (5) Property papers if applying for a secured loan.',
  },
  {
    q: 'How much education loan amount can I get?',
    a: 'Loan amounts vary by lender and course. Secured loans from leading Indian public and private banks can go up to ₹1.5 Crore to ₹2 Crore+. Unsecured loans from specialized NBFCs and international student lenders typically range from ₹25 Lakh up to ₹75 Lakh–₹1 Crore, depending on the country, course, and university tier.',
  },
  {
    q: 'What expenses does an education loan cover? Does it include living expenses?',
    a: 'Yes, comprehensive study abroad education loans cover 100% of approved expenses, including university tuition fees, examination and library charges, accommodation and hostel costs, food and living allowances, books and study equipment (such as a laptop), travel airfare, and student health insurance.',
  },
  {
    q: 'What is the interest rate on education loans and how is EMI calculated?',
    a: 'Education loan interest rates in India typically range from 8.40% to 11.50%+ depending on the lender type (public banks vs private banks vs NBFCs), loan security (collateral vs non-collateral), and student profile. Repayment EMI is calculated based on the total disbursed amount, agreed interest rate, and chosen tenure (usually 10 to 15 years), kicking in after the moratorium period.',
  },
  {
    q: 'How does education loan repayment and the moratorium period work?',
    a: 'Education loans feature a student moratorium period (repayment holiday), which typically covers the course duration plus 6 to 12 months after graduation. During the moratorium, you may choose to pay simple interest, partial interest, or no interest (as permitted by the lender). Regular monthly EMI payments begin once the moratorium period ends.',
  },
  {
    q: 'Can I get an education loan for studying in the USA, Canada, UK, or Australia?',
    a: 'Yes. Harbor Finance helps students explore and compare education loans for all premier study abroad destinations, including the USA (STEM MS, MBA), the UK (1-year master’s degrees), Canada (diplomas and degrees), Australia, Germany, and Ireland. Partner lenders provide official sanction letters accepted for I-20, CAS, and student visa processing.',
  },
  {
    q: 'Can I get an education loan sanction before getting a confirmed admit?',
    a: 'Yes. Several partner lenders provide pre-visa or pre-admission in-principle sanction letters based on your profile and test scores. This helps demonstrate verified financial proof to universities during admission and expedites your visa appointment.',
  },
  {
    q: 'Is Harbor Finance’s comparison and advisory service really free for students?',
    a: 'Yes, our advisory service is 100% free for students and parents. We help you compare offers across 20+ banks and NBFCs, understand fine print, and navigate paperwork at zero charge. We are compensated by our lending partners when a loan is sanctioned, with no added fees passed on to you.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faqs" className="px-6 py-24 scroll-mt-24" aria-label="Frequently Asked Questions">
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
            const answerId = `faq-answer-${i}`
            return (
              <div key={faq.q} className="py-6">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  className="w-full flex items-center justify-between text-left gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg p-1"
                >
                  <h3 className="text-black dark:text-white text-lg font-medium" style={{ letterSpacing: '-0.01em' }}>
                    {faq.q}
                  </h3>
                  <span className="shrink-0 w-8 h-8 rounded-full bg-white dark:bg-white/10 flex items-center justify-center">
                    {isOpen ? <Minus className="w-4 h-4 text-black dark:text-white" /> : <Plus className="w-4 h-4 text-black dark:text-white" />}
                  </span>
                </button>
                {isOpen && (
                  <p id={answerId} role="region" aria-label={faq.q} className="text-black/60 dark:text-white/60 text-base leading-relaxed mt-4 max-w-lg">
                    {faq.a}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}