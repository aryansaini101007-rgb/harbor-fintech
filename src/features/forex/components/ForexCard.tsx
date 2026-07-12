import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Zap, Globe2, Banknote, Layers, MousePointerClick } from "lucide-react";
import { Reveal } from "./Reveal";
import { HarborLogo, HarborMark } from "./HarborLogo";

const BENEFITS = [
  { icon: Zap, title: "Instant Reload", desc: "Top up your card in seconds, 24×7." },
  { icon: Globe2, title: "Worldwide Usage", desc: "Accepted at 40M+ merchants globally." },
  { icon: Banknote, title: "ATM Withdrawal", desc: "Cash out abroad at the best rates." },
  { icon: Layers, title: "Multiple Currency", desc: "Hold 7 currencies on one card." },
];

function TiltCard() {
  const ref = useRef<HTMLDivElement>(null);
  const [spin, setSpin] = useState(0);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), { stiffness: 150, damping: 15 });
  const rotY = useSpring(useTransform(x, [-0.5, 0.5], [-14, 14]), { stiffness: 150, damping: 15 });

  const onMove = (e: React.MouseEvent) => {
    const rect = ref.current!.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="[perspective:1400px]">
      {/* Outer: flip on tap */}
      <motion.div
        animate={{ rotateY: spin }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformStyle: "preserve-3d" }}
        onClick={() => setSpin((s) => s + 180)}
        className="relative aspect-[1.6/1] w-full cursor-pointer"
      >
        {/* Inner: mouse tilt */}
        <motion.div
          ref={ref}
          onMouseMove={onMove}
          onMouseLeave={reset}
          style={{ rotateX: rotX, rotateY: rotY, transformStyle: "preserve-3d" }}
          className="relative h-full w-full"
        >
          {/* FRONT */}
          <div
            className="absolute inset-0 overflow-hidden rounded-[1.6rem] bg-gradient-card shadow-lift [backface-visibility:hidden]"
          >
            {/* shine sweep */}
            <div className="pointer-events-none absolute -inset-y-10 -left-1/2 w-1/2 rotate-[8deg] bg-white/25 blur-md [animation:shine_5s_ease-in-out_infinite]" />
            <div className="absolute inset-0 flex flex-col justify-between p-6 text-white sm:p-8" style={{ transform: "translateZ(50px)" }}>
              <div className="flex items-start justify-between">
                <span className="font-display text-lg font-bold tracking-tight">Harbor</span>
                <span className="text-xs font-medium uppercase tracking-[0.2em] opacity-80">
                  Multi-currency
                </span>
              </div>
              {/* chip */}
              <div className="relative h-10 w-14 overflow-hidden rounded-lg bg-gradient-to-br from-amber-200 to-amber-400 shadow-inner">
                <div className="absolute inset-x-2 top-1/2 h-px -translate-y-1/2 bg-amber-600/40" />
                <div className="absolute inset-y-2 left-1/2 w-px -translate-x-1/2 bg-amber-600/40" />
              </div>
              <div>
                <p className="font-mono text-lg tracking-[0.28em] sm:text-xl">
                  5412 •••• •••• 8842
                </p>
                <div className="mt-3 flex items-end justify-between">
                  <div className="leading-tight">
                    <p className="text-[9px] uppercase tracking-widest opacity-70">Card holder</p>
                    <span className="text-sm font-semibold tracking-wide">AARAV SHARMA</span>
                  </div>
                  <div className="text-right leading-tight">
                    <p className="text-[9px] uppercase tracking-widest opacity-70">Valid thru</p>
                    <span className="text-sm font-semibold">08 / 30</span>
                  </div>
                  {/* VISA sign */}
                  <span className="font-display text-2xl font-black italic tracking-tight text-white drop-shadow">
                    VISA
                  </span>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute right-6 top-16 h-24 w-24 rounded-full bg-blue-500/20 blur-2xl" />
          </div>

          {/* BACK — company logo */}
          <div
            className="absolute inset-0 flex flex-col overflow-hidden rounded-[1.6rem] bg-gradient-card shadow-lift [backface-visibility:hidden] [transform:rotateY(180deg)]"
          >
            {/* magstripe */}
            <div className="mt-5 h-10 w-full bg-black/70" />
            <div className="flex flex-1 flex-col items-center justify-center gap-3 p-6">
              <HarborMark className="h-14 w-14" />
              <HarborLogo showTagline onDark />
            </div>
            <div className="flex items-center justify-between px-6 pb-5 text-[10px] uppercase tracking-widest text-white/60">
              <span>Powered by Harbor Finance</span>
              <span>VISA</span>
            </div>
            <div className="pointer-events-none absolute left-6 top-1/2 h-24 w-24 rounded-full bg-white/15 blur-2xl" />
          </div>
        </motion.div>
      </motion.div>

      <p className="mt-4 flex items-center justify-center gap-1.5 text-xs font-medium text-muted-foreground">
        <MousePointerClick className="h-3.5 w-3.5" /> Tap the card to flip &amp; reveal the Harbor logo
      </p>
    </div>
  );
}


export function ForexCard() {
  return (
    <section id="forex" className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <div className="pointer-events-none absolute -inset-8 rounded-[2.5rem] bg-sky/20 blur-3xl" />
            <div className="relative">
              <TiltCard />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-soft px-3 py-1 text-xs font-bold uppercase tracking-wide text-sky-deep">
              Coming Soon
            </span>
            <h2 className="mt-4 text-[30px] font-extrabold text-foreground sm:text-5xl">
              The Harbor Premium <span className="text-gradient">Forex Card.</span>
            </h2>
            <p className="mt-4 max-w-lg text-muted-foreground">
              One elegant card for every border. Load seven currencies, freeze
              instantly, and spend abroad with zero surprises — engineered for
              students and their families.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {BENEFITS.map((b) => (
                <div
                  key={b.title}
                  className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 shadow-soft transition-transform hover:-translate-y-1"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-sky text-primary-foreground">
                    <b.icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-semibold text-foreground">{b.title}</p>
                    <p className="text-sm text-muted-foreground">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
