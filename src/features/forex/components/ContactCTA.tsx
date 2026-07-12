import { CreditCard, PhoneCall, TrendingUp } from "lucide-react";
import { Reveal } from "./Reveal";
import { openPayNow } from "./useLiveRates";


export function ContactCTA() {
  return (
    <section id="contact" className="px-4 py-10 sm:py-16">
      <Reveal>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-gradient-sky px-6 py-16 text-center text-primary-foreground shadow-glow sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-tight sm:text-5xl">
              Ready to sail abroad with the best rate?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/85">
              Talk to a Harbor forex expert today. No pressure, just the
              clearest rates and a plan built around your journey.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button
                onClick={() => openPayNow()}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-sky-deep transition-transform hover:-translate-y-0.5 sm:w-auto"
              >
                Pay Now <CreditCard className="h-4 w-4" />
              </button>

              <a
                href="tel:+911800000000"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 sm:w-auto"
              >
                <PhoneCall className="h-4 w-4" /> Talk to Expert
              </a>
              <a
                href="#calculator"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 sm:w-auto"
              >
                <TrendingUp className="h-4 w-4" /> Get Best Rate
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
