import { useState } from "react";
import { Reveal } from "./Reveal";

const ROWS = [
  { key: "living", label: "Living Cost", def: 55000 },
  { key: "accommodation", label: "Accommodation", def: 40000 },
  { key: "insurance", label: "Insurance", def: 4000 },
  { key: "visa", label: "Visa & Compliance", def: 3000 },
  { key: "forex", label: "Forex & Card Fees", def: 2000 },
] as const;

export function BudgetPlanner() {
  const [country, setCountry] = useState("Canada");
  const [uni, setUni] = useState("University of Toronto");
  const [vals, setVals] = useState<Record<string, number>>(
    Object.fromEntries(ROWS.map((r) => [r.key, r.def]))
  );

  const total = Object.values(vals).reduce((a, b) => a + (b || 0), 0);

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-deep">
              Student Budget Planner
            </span>
            <h2 className="mt-3 text-[30px] font-extrabold text-foreground sm:text-5xl">
              Plan your monthly abroad budget.
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Country
                  </label>
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="mt-2 w-full rounded-2xl border border-border bg-secondary/50 px-4 py-3 text-sm font-medium text-foreground outline-none"
                  >
                    {["Canada", "USA", "UK", "Australia", "Germany"].map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    University
                  </label>
                  <input
                    value={uni}
                    onChange={(e) => setUni(e.target.value)}
                    className="mt-2 w-full rounded-2xl border border-border bg-secondary/50 px-4 py-3 text-sm font-medium text-foreground outline-none"
                  />
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {ROWS.map((r) => (
                  <div key={r.key}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-foreground">{r.label}</span>
                      <span className="font-semibold text-sky-deep">
                        ₹{(vals[r.key] || 0).toLocaleString("en-IN")}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={120000}
                      step={1000}
                      value={vals[r.key]}
                      onChange={(e) =>
                        setVals((v) => ({ ...v, [r.key]: Number(e.target.value) }))
                      }
                      className="mt-2 w-full accent-[var(--sky-deep)]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex h-full flex-col justify-between rounded-3xl bg-gradient-sky p-8 text-primary-foreground shadow-glow">
              <div>
                <p className="text-sm uppercase tracking-widest opacity-80">
                  Estimated monthly budget
                </p>
                <p className="mt-3 font-display text-5xl font-extrabold">
                  ₹{total.toLocaleString("en-IN")}
                </p>
                <p className="mt-2 text-sm opacity-85">
                  {uni}, {country}
                </p>
              </div>

              <div className="mt-8 space-y-2 text-sm">
                {ROWS.map((r) => (
                  <div key={r.key} className="flex items-center justify-between border-t border-white/20 py-2">
                    <span className="opacity-85">{r.label}</span>
                    <span className="font-semibold">
                      ₹{(vals[r.key] || 0).toLocaleString("en-IN")}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-sky-deep transition-transform hover:-translate-y-0.5"
              >
                Fund this with Harbor
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
