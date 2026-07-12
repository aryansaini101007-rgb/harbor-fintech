import { useMemo, useState } from "react";
import { ArrowRightLeft } from "lucide-react";
import { useLiveRates } from "./useLiveRates";
import { Reveal } from "./Reveal";


function Sparkline({ seed }: { seed: number }) {
  const points = useMemo(() => {
    const n = 24;
    let v = 50;
    const arr: number[] = [];
    for (let i = 0; i < n; i++) {
      v += Math.sin(i * 0.7 + seed) * 6 + (Math.cos(i + seed) * 3);
      arr.push(v);
    }
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return arr.map((val, i) => {
      const x = (i / (n - 1)) * 100;
      const y = 100 - ((val - min) / (max - min || 1)) * 100;
      return `${x},${y}`;
    });
  }, [seed]);

  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-24 w-full">
      <defs>
        <linearGradient id="spark" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--sky)" stopOpacity="0.4" />
          <stop offset="100%" stopColor="var(--sky)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline
        points={points.join(" ")}
        fill="none"
        stroke="var(--sky-deep)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
      <polygon
        points={`0,100 ${points.join(" ")} 100,100`}
        fill="url(#spark)"
      />
    </svg>
  );
}

export function CurrencyConverter() {
  const { rates: CURRENCIES } = useLiveRates();
  const [amount, setAmount] = useState("1000");
  const [code, setCode] = useState("USD");

  const currency = CURRENCIES.find((c) => c.code === code)!;

  const inr = (parseFloat(amount) || 0) * currency.rate;

  return (
    <section id="calculator" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-deep">
              Live Converter
            </span>
            <h2 className="mt-3 text-[30px] font-extrabold text-foreground sm:text-5xl">
              Know exactly what you pay.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Real interbank rates with Harbor's transparent margin. Convert
              across 7 major currencies in a tap.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          {/* converter */}
          <Reveal>
            <div className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
              <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                You send
              </label>
              <div className="mt-2 flex items-center gap-3 rounded-2xl border border-border bg-secondary/50 p-3">
                <select
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="rounded-xl border border-border bg-card px-3 py-2.5 text-sm font-semibold text-foreground outline-none"
                >
                  {CURRENCIES.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.flag} {c.code}
                    </option>
                  ))}
                </select>
                <input
                  type="number"
                  min={0}
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full bg-transparent text-right text-2xl font-bold text-foreground outline-none"
                />
              </div>

              <div className="my-4 flex items-center justify-center">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-sky text-primary-foreground shadow-glow">
                  <ArrowRightLeft className="h-4 w-4" />
                </span>
              </div>

              <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                They receive (INR)
              </label>
              <div className="mt-2 flex items-center gap-3 rounded-2xl border border-border bg-secondary/50 p-3">
                <span className="rounded-xl border border-border bg-card px-3 py-2.5 text-sm font-semibold">
                  🇮🇳 INR
                </span>
                <span className="w-full text-right text-2xl font-bold text-gradient">
                  ₹
                  {inr.toLocaleString("en-IN", { maximumFractionDigits: 2 })}
                </span>
              </div>

              <div className="mt-5 flex items-center justify-between rounded-2xl bg-sky-soft/60 px-4 py-3 text-sm">
                <span className="text-sky-deep">
                  1 {code} = ₹{currency.rate.toFixed(2)}
                </span>
                <span className="font-semibold text-emerald-600">
                  Zero hidden fees
                </span>
              </div>
            </div>
          </Reveal>

          {/* graph + rate cards */}
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{code}/INR · 30 days</p>
                  <p className="font-display text-2xl font-bold text-foreground">
                    ₹{currency.rate.toFixed(2)}
                  </p>
                </div>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    currency.change >= 0
                      ? "bg-emerald-50 text-emerald-600"
                      : "bg-rose-50 text-rose-500"
                  }`}
                >
                  {currency.change >= 0 ? "▲" : "▼"} {Math.abs(currency.change)}%
                </span>
              </div>
              <Sparkline seed={currency.rate} />

              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {CURRENCIES.slice(0, 6).map((c) => (
                  <button
                    key={c.code}
                    onClick={() => setCode(c.code)}
                    className={`rounded-2xl border p-3 text-left transition-all hover:-translate-y-0.5 hover:shadow-soft ${
                      c.code === code
                        ? "border-sky bg-sky-soft/50"
                        : "border-border bg-secondary/40"
                    }`}
                  >
                    <span className="text-lg">{c.flag}</span>
                    <p className="mt-1 text-sm font-semibold text-foreground">
                      {c.code}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      ₹{c.rate.toFixed(2)}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
