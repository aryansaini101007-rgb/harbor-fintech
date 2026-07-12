import {
  Wallet, RefreshCw, CreditCard, Plane, Send, GraduationCap, ShieldPlus, Repeat,
} from "lucide-react";
import { Reveal } from "./Reveal";

const SERVICES = [
  { icon: Wallet, title: "Buy Forex", desc: "Order currency notes at the best live rate, delivered to your door." },
  { icon: Repeat, title: "Sell Forex", desc: "Unused foreign currency? Sell it back at fair market value." },
  { icon: RefreshCw, title: "Reload Card", desc: "Instantly top up your travel card anytime, anywhere." },
  { icon: CreditCard, title: "Travel Card", desc: "Multi-currency prepaid card built for global journeys." },
  { icon: Send, title: "Money Transfer", desc: "Send money overseas in minutes with full transparency." },
  { icon: GraduationCap, title: "University Fee Payment", desc: "Pay tuition directly to institutions worldwide, securely." },
  { icon: ShieldPlus, title: "Travel Insurance", desc: "Comprehensive cover for students and families abroad." },
  { icon: Plane, title: "Student Remittance", desc: "Regular living-expense transfers for students overseas." },
];

export function ForexServices() {
  return (
    <section className="bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-deep">
              Forex Services
            </span>
            <h2 className="mt-3 text-[30px] font-extrabold text-foreground sm:text-5xl">
              Everything forex, in one harbor.
            </h2>
            <p className="mt-4 text-muted-foreground">
              A complete suite designed around the study-abroad and travel
              journey — nothing missing, nothing hidden.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 0.06}>
              <div className="group h-full rounded-3xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1.5 hover:shadow-lift">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-sky-soft text-sky-deep transition-colors group-hover:bg-gradient-sky group-hover:text-primary-foreground">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
