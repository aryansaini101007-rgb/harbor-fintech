interface BackerStyle {
  name: string
  style: React.CSSProperties
}

const BACKERS: BackerStyle[] = [
  { name: 'Economic Times', style: { fontFamily: '"Times New Roman", serif', fontWeight: 400, letterSpacing: '0.02em', fontSize: '14px' } },
  { name: 'YOURSTORY', style: { fontFamily: 'Arial Black, sans-serif', fontWeight: 900, letterSpacing: '0.08em', fontSize: '16px' } },
  { name: 'MINT', style: { fontFamily: 'Impact, sans-serif', fontWeight: 700, letterSpacing: '0.05em', fontSize: '18px' } },
  { name: 'Hindustan Times', style: { fontFamily: 'Georgia, serif', fontWeight: 600, letterSpacing: '-0.02em', fontSize: '17px' } },
  { name: 'Business Standard', style: { fontFamily: 'Helvetica, sans-serif', fontWeight: 700, letterSpacing: '-0.01em', fontSize: '15px' } },
  { name: 'INC42', style: { fontFamily: 'Verdana, sans-serif', fontWeight: 700, letterSpacing: '0.06em', fontSize: '14px', textTransform: 'uppercase' } },
  { name: 'Forbes India', style: { fontFamily: '"Courier New", monospace', fontWeight: 700, letterSpacing: '0.1em', fontSize: '14px' } },
  { name: 'TechCrunch', style: { fontFamily: 'Palatino, serif', fontWeight: 500, letterSpacing: '0.03em', fontSize: '15px' } },
]

export default function BackedBySection() {
  return (
    <section className="px-6">
      <div className="max-w-[88rem] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
        <div className="text-black/70 dark:text-white/60 text-base leading-relaxed">
          As featured in leading
          <br />
          media & press outlets.
        </div>

        <div className="md:col-span-3 overflow-hidden">
          <style>{`
            @keyframes backers-marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .backers-track {
              display: flex;
              width: max-content;
              animation: backers-marquee 30s linear infinite;
            }
          `}</style>
          <div className="backers-track">
            {[...BACKERS, ...BACKERS].map((backer, i) => (
              <span key={i} className="mx-10 shrink-0 text-black/50 dark:text-white/40 whitespace-nowrap" style={backer.style}>
                {backer.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}