import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Sparkles, TrendingUp, ShieldCheck, Globe2, Clock, Rocket } from "lucide-react";
import { useLiveRates, openPayNow } from "./useLiveRates";

const SLIDES = [
  "/forex/images/hero-toronto.jpg",
  "/forex/images/hero-students.jpg",
  "/forex/images/hero-campus.jpg",
];

export function Hero() {
  const { rates, live } = useLiveRates();
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % SLIDES.length), 6000);
    return () => clearInterval(t);
  }, []);

  const rateOf = (code: string) => rates.find((c) => c.code === code);
  // 5 country pills scattered at fixed positions on the slide
  const scattered = [
    { code: "USD", flag: "🇺🇸", data: rateOf("USD"), pos: "top-[18%] left-[4%]",  delay: 0 },
    { code: "GBP", flag: "🇬🇧", data: rateOf("GBP"), pos: "top-[16%] right-[5%]", delay: 0.4 },
    { code: "AUD", flag: "🇦🇺", data: rateOf("AUD"), pos: "top-[52%] right-[3%]", delay: 0.8 },
    { code: "CAD", flag: "🇨🇦", data: rateOf("CAD"), pos: "top-[46%] left-[3%]",  delay: 1.2 },
    { code: "EUR", flag: "🇪🇺", data: rateOf("EUR"), pos: "top-[78%] left-[42%]", delay: 1.6 },
  ];

  const RatePill = ({
    flag,
    code,
    rate,
    change,
  }: {
    flag: string;
    code: string;
    rate?: number;
    change?: number;
  }) => (
    <div className="glass shadow-soft flex items-center gap-3 rounded-full px-4 py-2.5">
      <span className="text-xl leading-none">{flag}</span>
      <div className="leading-tight">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-white/80">
          {code}/INR
        </p>
        <p className="font-display text-sm font-bold text-white">
          ₹{rate ? rate.toFixed(2) : "—"}
        </p>
      </div>
      {typeof change === "number" && (
        <span
          className={`text-[11px] font-semibold ${
            change >= 0 ? "text-emerald-300" : "text-rose-300"
          }`}
        >
          {change >= 0 ? "▲" : "▼"} {Math.abs(change).toFixed(2)}%
        </span>
      )}
    </div>
  );

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-24 sm:pt-28"
    >
      {/* Photo slideshow background — real people & destinations */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={slide}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1.14 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 1.4 }, scale: { duration: 8, ease: "linear" } }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${SLIDES[slide]})` }}
          />
        </AnimatePresence>
        {/* readability overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/70" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(80% 60% at 50% 40%, oklch(0.55 0.16 258 / 0.35), transparent 70%)",
          }}
        />
      </div>

      {/* 5 country pills scattered at fixed positions, gentle float */}
      {scattered.map((p) => (
        <motion.div
          key={p.code}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: [0, -8, 0] }}
          transition={{
            opacity: { duration: 0.7, delay: p.delay },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: p.delay },
          }}
          className={`pointer-events-none absolute z-10 hidden md:block ${p.pos}`}
        >
          <RatePill flag={p.flag} code={p.code} rate={p.data?.rate} change={p.data?.change} />
        </motion.div>
      ))}

      {/* mobile: compact row of the same 5 pills */}
      <div className="relative z-10 mt-4 flex flex-wrap justify-center gap-2 px-4 md:hidden">
        {scattered.map((p) => (
          <div
            key={`m-${p.code}`}
            className="glass shadow-soft flex items-center gap-1.5 rounded-full px-3 py-1.5"
          >
            <span className="text-base leading-none">{p.flag}</span>
            <span className="text-[11px] font-bold text-white">{p.code}</span>
            <span className="text-[11px] font-semibold text-white/80">
              ₹{p.data?.rate.toFixed(2) ?? "—"}
            </span>
          </div>
        ))}
      </div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 pb-16 pt-10 text-center sm:pt-14">
        {/* Trust chip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass shadow-soft inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold text-white sm:text-sm"
        >
          <span className={`h-2 w-2 rounded-full bg-emerald-400 ${live ? "animate-pulse" : ""}`} />
          <Rocket className="h-3.5 w-3.5 text-sky-200" />
          Sail Smart
          <span className="text-white/60">·</span>
          Spend Global
          <span className="text-white/60">·</span>
          Save Bigger
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-8 text-balance font-display text-4xl font-extrabold leading-[1.03] text-white sm:text-6xl lg:text-7xl"
          style={{ textShadow: "0 4px 24px rgba(0,0,0,0.35)" }}
        >
          Your journey abroad,
          <span className="mt-1 block bg-gradient-to-r from-sky-200 via-white to-sky-200 bg-clip-text text-transparent">
            starts with the right rate.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/85 sm:text-lg"
        >
          Live interbank forex rates, zero hidden fees, and instant delivery of
          your Harbor Forex Card — trusted by students flying to{" "}
          <span className="font-semibold text-white">Canada</span>,{" "}
          <span className="font-semibold text-white">USA</span>,{" "}
          <span className="font-semibold text-white">UK</span>,{" "}
          <span className="font-semibold text-white">Australia</span> and beyond.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="#calculator"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-sky px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
          >
            Get Best Forex Rate <ArrowRight className="h-4 w-4" />
          </a>
          <button
            onClick={() => openPayNow()}
            className="glass shadow-soft inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            <Sparkles className="h-4 w-4 text-sky-200" /> Pay Now
          </button>
        </motion.div>

        {/* Stat cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-14 grid w-full max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
        >
          {[
            { icon: <TrendingUp className="h-4 w-4" />, value: "0.15%", label: "MARGIN" },
            { icon: <ShieldCheck className="h-4 w-4" />, value: "100%", label: "RBI COMPLIANT" },
            { icon: <Globe2 className="h-4 w-4" />, value: "60+", label: "COUNTRIES" },
            { icon: <Clock className="h-4 w-4" />, value: "2 hrs", label: "AVG DELIVERY" },
          ].map((s) => (
            <div
              key={s.label}
              className="glass shadow-soft flex flex-col items-start gap-2 rounded-2xl p-4 text-left"
            >
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/20 text-white">
                {s.icon}
              </span>
              <p className="font-display text-2xl font-extrabold text-white sm:text-3xl">
                {s.value}
              </p>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-white/75">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ticker */}
      <div className="relative z-10 border-y border-white/15 bg-black/40 py-3 backdrop-blur">
        <div className="flex w-max animate-[ticker_38s_linear_infinite] gap-10 px-4">
          {[...rates, ...rates].map((c, i) => (
            <span key={i} className="flex shrink-0 items-center gap-2 text-sm">
              <span className="text-lg">{c.flag}</span>
              <span className="font-semibold text-white">{c.code}/INR</span>
              <span className="text-white/70">₹{c.rate.toFixed(2)}</span>
              <span className={c.change >= 0 ? "text-emerald-300" : "text-rose-300"}>
                {c.change >= 0 ? "▲" : "▼"} {Math.abs(c.change)}%
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
