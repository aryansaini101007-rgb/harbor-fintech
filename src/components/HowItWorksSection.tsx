import { useState } from 'react'
import { ClipboardCheck, FileSearch, MessageSquareText, BadgeCheck, IndianRupee, X, ArrowLeft, ArrowRight, Check } from 'lucide-react'

const STEPS = [
  {
    icon: ClipboardCheck,
    title: 'Check Eligibility',
    body: 'Answer a few quick questions about your course, university and country.',
    details: [
      'Select your target country and course level (UG / PG / PhD)',
      'Share your admit status — confirmed, conditional, or applying',
      'Add a co-applicant (parent/guardian) for a stronger profile',
      'Get an instant eligibility estimate across 20+ lenders',
    ],
  },
  {
    icon: FileSearch,
    title: 'Compare Offers',
    body: 'See real-time rates from 20+ banks & NBFCs matched to your profile.',
    details: [
      'View interest rate, processing fee and tenure side by side',
      'Filter by collateral-free vs secured loan options',
      'Sort lenders by fastest sanction time or lowest EMI',
      'See exactly which lenders your profile qualifies for',
    ],
  },
  {
    icon: MessageSquareText,
    title: 'Talk to an Expert',
    body: 'A dedicated advisor helps you pick the best offer — free of cost.',
    details: [
      'Get matched with an advisor who knows your destination country',
      'Free 1:1 call, chat or video consultation — no hidden charges',
      'Advisor negotiates on your behalf with the shortlisted lenders',
      'Get help understanding fine print before you commit',
    ],
  },
  {
    icon: BadgeCheck,
    title: 'Submit Documents',
    body: 'Upload your documents securely and get them verified fast.',
    details: [
      'Admission letter, academic records and identity proof',
      'Co-applicant income and collateral documents (if applicable)',
      'Secure encrypted upload — verified within hours',
      'Real-time status tracking on your dashboard',
    ],
  },
  {
    icon: IndianRupee,
    title: 'Get Sanctioned',
    body: 'Receive your sanction letter in as little as 48 hours.',
    details: [
      'Final offer confirmed with your chosen lender',
      'Sanction letter issued digitally within 48 hours',
      'Disbursal scheduled to match your university deadline',
      'Ongoing support until funds reach your account',
    ],
  },
]

export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState<number | null>(null)

  const isOpen = activeStep !== null
  const step = isOpen ? STEPS[activeStep] : null

  const goTo = (i: number) => setActiveStep(((i % STEPS.length) + STEPS.length) % STEPS.length)

  return (
    <section className="px-6 py-24">
      <style>{`
        @keyframes stepModalIn {
          0% { opacity: 0; transform: translateY(16px) scale(0.96); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes iconPop {
          0% { transform: scale(0.6) rotate(-8deg); opacity: 0; }
          60% { transform: scale(1.08) rotate(2deg); opacity: 1; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        @keyframes iconPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.12); }
        }
        @keyframes iconSwing {
          0%, 100% { transform: rotate(-8deg); }
          50% { transform: rotate(8deg); }
        }
        @keyframes iconBob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes iconSpinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes iconGlowPop {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(43,38,68,0.3); }
          50% { transform: scale(1.06); box-shadow: 0 0 0 6px rgba(43,38,68,0); }
        }
        .step-icon-0 { animation: iconPulse 2.6s ease-in-out infinite; }
        .step-icon-1 { animation: iconSwing 3s ease-in-out infinite; }
        .step-icon-2 { animation: iconBob 2.4s ease-in-out infinite; }
        .step-icon-3 { animation: iconSpinSlow 6s linear infinite; }
        .step-icon-4 { animation: iconGlowPop 2.2s ease-in-out infinite; }
      `}</style>

      <div className="max-w-[88rem] mx-auto">
        <h2 className="text-black dark:text-white text-5xl md:text-6xl font-medium leading-none mb-14" style={{ letterSpacing: '-0.04em' }}>
          How it works
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {STEPS.map((s, i) => (
            <button
              key={s.title}
              onClick={() => setActiveStep(i)}
              className="text-left bg-white dark:bg-white/5 dark:border dark:border-white/10 rounded-2xl p-6 flex flex-col gap-5 hover:shadow-lg dark:hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div className={`w-11 h-11 rounded-full bg-[#2B2644] flex items-center justify-center step-icon-${i}`}>
                  <s.icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-black/20 dark:text-white/20 text-3xl font-medium">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div>
                <h3 className="text-black dark:text-white text-lg font-medium mb-2" style={{ letterSpacing: '-0.01em' }}>
                  {s.title}
                </h3>
                <p className="text-black/60 dark:text-white/60 text-sm leading-relaxed">{s.body}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {isOpen && step && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-6"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
          onClick={() => setActiveStep(null)}
        >
          <div
            className="bg-white dark:bg-[#181c3a] rounded-3xl w-full max-w-lg p-8 relative"
            style={{ animation: 'stepModalIn 0.25s cubic-bezier(0.16, 1, 0.3, 1)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveStep(null)}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#F5F5F5] dark:bg-white/10 flex items-center justify-center hover:bg-black hover:text-white dark:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-between mb-6">
              <div
                key={activeStep}
                className="w-14 h-14 rounded-full bg-[#2B2644] flex items-center justify-center"
                style={{ animation: 'iconPop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
              >
                <step.icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-black/15 dark:text-white/15 text-5xl font-medium">{String(activeStep! + 1).padStart(2, '0')}</span>
            </div>

            <h3 className="text-black dark:text-white text-2xl font-medium mb-2" style={{ letterSpacing: '-0.02em' }}>
              {step.title}
            </h3>
            <p className="text-black/60 dark:text-white/60 text-base mb-6 leading-relaxed">{step.body}</p>

            <ul className="flex flex-col gap-3 mb-8">
              {step.details.map((d) => (
                <li key={d} className="flex items-start gap-3 text-black/70 dark:text-white/70 text-sm leading-relaxed">
                  <span className="w-5 h-5 rounded-full bg-[#F5F5F5] dark:bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-black dark:text-white" />
                  </span>
                  {d}
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-between">
              <button
                onClick={() => goTo(activeStep! - 1)}
                className="w-10 h-10 rounded-full bg-[#F5F5F5] dark:bg-white/10 dark:text-white flex items-center justify-center hover:bg-black hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>

              <div className="flex gap-1.5">
                {STEPS.map((_, i) => (
                  <span
                    key={i}
                    className="h-1.5 rounded-full transition-all duration-300"
                    style={{ width: i === activeStep ? 20 : 6, backgroundColor: i === activeStep ? '#000' : 'rgba(0,0,0,0.15)' }}
                  />
                ))}
              </div>

              <button
                onClick={() => goTo(activeStep! + 1)}
                className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}