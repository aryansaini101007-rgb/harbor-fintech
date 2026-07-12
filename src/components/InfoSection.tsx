import {
  ArrowRight,
  Plane,
  ClipboardList,
  ShieldCheck,
  Check,
  Landmark,
  Headphones,
  Zap,
  GraduationCap,
  Star,
  IndianRupee,
  Users,
  LandmarkIcon,
  PhoneCall,
} from 'lucide-react'

const STEPS = [
  {
    number: '01',
    icon: PhoneCall,
    title: 'Talk To Our Expert',
    text: 'Compare 20+ banks and find the best loan options.',
    x: 40,
    y: 300,
  },
  {
    number: '02',
    icon: ClipboardList,
    title: 'Apply with Ease',
    text: 'Simple documentation and expert assistance at every step.',
    x: 250,
    y: 190,
  },
  {
    number: '03',
    icon: ShieldCheck,
    title: 'Quick Approval',
    text: 'Get fast approval and focus on your dreams.',
    x: 470,
    y: 100,
  },
  {
    number: '04',
    icon: Check,
    title: 'Easy Disbursal',
    text: 'We support you until you achieve your global dreams.',
    x: 680,
    y: 20,
  },
]

const STATS = [
  {
    icon: LandmarkIcon,
    value: '20+',
    label: 'Banks & NBFCs',
    sub: 'Partner Network',
  },
  {
    icon: Users,
    value: '4000+',
    label: 'Student Funded',
    sub: 'Across 50+ Countries',
  },
  {
    icon: IndianRupee,
    value: '16 Billion +',
    label: 'Loan Amount disbursed',
    sub: 'Across 20+ Lenders',
  },
  {
    icon: Star,
    value: '★★★★★ ',
    label: 'Google Rating',
    sub: 'Trusted By Students',
  },
  
]

export default function InfoSection() {
  return (
    <section className="relative px-6 pt-4 pb-10 overflow-hidden">
      <style>{`
        @keyframes aboutStepFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-9px); }
        }
@keyframes aboutFlow {
  from {
    stroke-dashoffset: 13;
  }
  to {
    stroke-dashoffset: 0;
  }
}

        @keyframes aboutPlaneFloat {
          0%, 100% { transform: translate(0, 0) rotate(-12deg); }
          50% { transform: translate(12px, -8px) rotate(-8deg); }
        }
      `}</style>

      <div className="max-w-[92rem] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[0.78fr_1.22fr] gap-10 items-center min-h-[560px]">

          {/* LEFT CONTENT */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#f3f1ff] dark:bg-white/10 px-5 py-2 mb-7">
              <span className="text-[#3157e8] dark:text-[#818cf8]">★</span>
              <span className="text-[#3157e8] dark:text-[#a5b4fc] text-sm font-medium">
                Your Global Education Loan Partner
              </span>
            </div>

            <h2
              className="text-black dark:text-white text-5xl md:text-6xl lg:text-[72px] font-medium leading-[1.08] mb-8"
              style={{ letterSpacing: '-0.045em' }}
            >
              Meet
              <br />
              <span className="bg-gradient-to-r from-[#1768f2] via-[#3157ef] to-[#6d36f2] bg-clip-text text-transparent">
                Harbor Finance
              </span>
            </h2>

            <p className="text-black/70 dark:text-white/65 text-lg md:text-xl leading-[2] max-w-[560px] mb-9">
              We make studying abroad simple, accessible
              <br className="hidden md:block" />
              and stress-free with our expert guidance,
              <br className="hidden md:block" />
              transparent process, and best loan options.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="inline-flex items-center gap-4 bg-gradient-to-r from-[#0a2b8f] to-[#1457e8] text-white font-medium px-7 py-4 rounded-full shadow-lg hover:-translate-y-0.5 transition-transform">
                Know More About Us
                <ArrowRight className="w-5 h-5" />
              </button>

              <button className="inline-flex items-center gap-4 bg-white dark:bg-white/10 border border-black/10 dark:border-white/10 text-black dark:text-white font-medium px-7 py-4 rounded-full shadow-sm">
                Our Values
                <ShieldCheck className="w-5 h-5 text-[#3157e8]" />
              </button>
            </div>
          </div>

          {/* RIGHT JOURNEY VISUAL */}
          <div className="about-journey-wrap">
            <div
              className="relative about-journey-canvas"
              style={{ width: 900, height: 520 }}
            >
              {/* dotted flowing path */}
              <svg
                viewBox="0 0 900 520"
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{ overflow: 'visible' }}
              >
                <defs>
                  <linearGradient id="journeyGradient" x1="0" y1="1" x2="1" y2="0">
                    <stop offset="0%" stopColor="#2867f0" />
                    <stop offset="55%" stopColor="#4c43ed" />
                    <stop offset="100%" stopColor="#7150f5" />
                  </linearGradient>
                </defs>

                <path
                  d="M85 350 C170 355 180 260 295 250 C390 242 405 165 515 160 C625 154 630 75 745 78"
                  fill="none"
                  stroke="url(#journeyGradient)"
                  strokeWidth="42"
                  strokeLinecap="round"
                  strokeDasharray="1 8"
                  opacity="0.18"
                />

                <path
                  d="M85 350 C170 355 180 260 295 250 C390 242 405 165 515 160 C625 154 630 75 745 78"
                  fill="none"
                  stroke="url(#journeyGradient)"
                  strokeWidth="2.5"
                  strokeDasharray="5 8"
                  style={{ animation: 'aboutFlow 0.4s linear infinite' }}
                />

                {[85, 295, 515, 745].map((cx, i) => {
                  const cy = [350, 250, 160, 78][i]
                  return (
                    <circle
                      key={cx}
                      cx={cx}
                      cy={cy}
                      r="5"
                      fill="#3157e8"
                    />
                  )
                })}
              </svg>

              {STEPS.map((step, index) => {
                const Icon = step.icon

                return (
                  <div
                    key={step.number}
                    className="absolute"
                    style={{
                      left: step.x,
                      top: step.y,
                      width: 190,
                    }}
                  >
                    <div
                      className="w-[92px] h-[92px] rounded-full bg-white dark:bg-[#171b3d] shadow-xl border-[8px] border-white/70 dark:border-white/5 flex items-center justify-center mb-5"
                      style={{
                        animation: `aboutStepFloat 4.5s ease-in-out ${index * 0.45}s infinite`,
                      }}
                    >
                      <Icon
                        className="w-10 h-10"
                        strokeWidth={2.5}
                        style={{
                          color: index === 2 ? '#6d36f2' : '#1768f2',
                        }}
                      />
                    </div>

                    <p
                      className="text-[30px] font-semibold mb-3"
                      style={{
                        color: index === 1 || index === 2 ? '#6d36f2' : '#1768f2',
                      }}
                    >
                      {step.number}
                    </p>

                    <h3 className="text-black dark:text-white text-lg font-semibold mb-2">
                      {step.title}
                    </h3>

                    <p className="text-black/60 dark:text-white/55 text-sm leading-relaxed max-w-[170px]">
                      {step.text}
                    </p>
                  </div>
                )
              })}

              {/* subtle bottom world decoration */}
              <div className="absolute left-[90px] right-0 bottom-[-35px] h-[145px] opacity-25 dark:opacity-15 pointer-events-none">
                <div className="absolute inset-x-0 bottom-0 h-[100px] rounded-[50%_50%_0_0] border-t border-[#8ba9ff]/40" />
                <div className="absolute left-[310px] bottom-[75px] w-4 h-4 rounded-full bg-[#5579f4]" />
                <div className="absolute left-[500px] bottom-[115px] w-4 h-4 rounded-full bg-[#5579f4]" />
                <Plane
                  className="absolute right-[80px] top-[5px] w-14 h-14 text-[#7598f6]"
                  style={{ animation: 'aboutPlaneFloat 5s ease-in-out infinite' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM STATS BAR */}
        <div className="mt-6 bg-white dark:bg-white/5 dark:border dark:border-white/10 rounded-2xl shadow-lg dark:shadow-none px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((stat, index) => {
            const Icon = stat.icon

            return (
              <div
                key={stat.label}
                className={`flex items-center gap-4 ${
                  index > 0
                    ? 'md:border-l md:border-black/10 dark:md:border-white/10 md:pl-6'
                    : ''
                }`}
              >
                <span className="w-12 h-12 rounded-full bg-[#f0efff] dark:bg-white/10 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-[#4f46f5]" />
                </span>

                <div>
                  <p className="text-black dark:text-white text-xl font-semibold leading-none mb-1">
                    {stat.value}
                  </p>
                  <p className="text-black dark:text-white text-sm font-medium">
                    {stat.label}
                  </p>
                  <p className="text-black/40 dark:text-white/40 text-xs">
                    {stat.sub}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}