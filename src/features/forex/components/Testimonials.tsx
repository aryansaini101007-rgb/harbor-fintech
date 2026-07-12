import { Star } from "lucide-react";
import { Reveal } from "./Reveal";

const REVIEWS = [
  {
    name: "Aarav Mehta",
    role: "MS Student · University of Toronto",
    text: "Harbor got me the best USD rate I could find anywhere. My tuition transfer landed the same day — my parents were amazed.",
    initials: "AM",
  },
  {
    name: "Priya Nair",
    role: "Parent · Daughter in the UK",
    text: "As a parent, trust matters most. The team explained every fee and the margin was genuinely the lowest we compared.",
    initials: "PN",
  },
  {
    name: "Rohan Gupta",
    role: "MBA Student · Melbourne",
    text: "The multi-currency card is a lifesaver. One card, no crazy conversion fees, works everywhere I travel across Australia.",
    initials: "RG",
  },
  {
    name: "Sneha Iyer",
    role: "PhD Student · Germany",
    text: "Reloading forex from India used to be stressful. With Harbor it's instant and the app is beautifully simple.",
    initials: "SI",
  },
  {
    name: "Kabir Singh",
    role: "Parent · Son in Canada",
    text: "Monthly remittances for living expenses are now effortless. Rates are transparent and support replies in minutes.",
    initials: "KS",
  },
  {
    name: "Ananya Rao",
    role: "Undergrad · Singapore",
    text: "From forex to insurance, everything was under one roof. Felt premium and professional from the first call.",
    initials: "AR",
  },
];

export function Testimonials() {
  return (
    <section className="bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-deep">
              Testimonials
            </span>
            <h2 className="mt-3 text-[30px] font-extrabold text-foreground sm:text-5xl">
              Loved by students & parents.
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name} delay={(i % 3) * 0.08} className="mb-5 break-inside-avoid">
              <figure className="rounded-3xl border border-border bg-card p-6 shadow-soft">
                <div className="flex gap-0.5 text-amber-400">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-foreground">
                  "{r.text}"
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-sky text-sm font-bold text-primary-foreground">
                    {r.initials}
                  </span>
                  <span>
                    <p className="text-sm font-semibold text-foreground">{r.name}</p>
                    <p className="text-xs text-muted-foreground">{r.role}</p>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
