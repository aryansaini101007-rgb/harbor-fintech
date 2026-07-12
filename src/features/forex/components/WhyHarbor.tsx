import { TrendingDown, Percent, Headphones, Rocket, ShieldCheck, Globe } from "lucide-react";
import { Reveal } from "./Reveal";

const REASONS = [
  { icon: TrendingDown, title: "Best Rates", desc: "Live interbank rates, refreshed every moment." },
  { icon: Percent, title: "Lowest Margin", desc: "Transparent pricing with the thinnest spread." },
  { icon: Headphones, title: "24×7 Support", desc: "Real humans, whenever and wherever you need." },
  { icon: Rocket, title: "Fast Transfer", desc: "Cross-border transfers settled in minutes." },
  { icon: ShieldCheck, title: "Trusted", desc: "RBI-authorised partners and bank-grade security." },
  { icon: Globe, title: "Global Reach", desc: "150+ currencies across every major corridor." },
];

const STATS = [
  { v: "₹4,200 Cr+", l: "Forex processed" },
  { v: "50,000+", l: "Happy students" },
  { v: "150+", l: "Currencies" },
  { v: "4.9/5", l: "Customer rating" },
];

export function WhyHarbor() {
  return (
    <section id="education-loan" className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute right-0 top-1/4 h-80 w-80 rounded-full bg-sky/15 blur-3xl" />
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-deep">
              Why Harbor Finance
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-foreground sm:text-5xl">
              Built on trust, priced for you.
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r, i) => (
            <Reveal key={r.title} delay={(i % 3) * 0.07}>
              <div className="h-full rounded-3xl glass p-6 shadow-soft transition-transform hover:-translate-y-1.5">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-sky text-primary-foreground">
                  <r.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-foreground">{r.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 grid grid-cols-2 gap-4 rounded-3xl border border-border bg-card p-8 shadow-soft lg:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.l} className="text-center">
                <p className="font-display text-3xl font-extrabold text-gradient sm:text-4xl">
                  {s.v}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{s.l}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
