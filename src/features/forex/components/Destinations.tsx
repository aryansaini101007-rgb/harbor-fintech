import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { DESTINATIONS } from "./destinationsData";

export function Destinations() {
  return (
    <section id="destinations" className="bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div className="max-w-xl">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-deep">
                Study Destinations
              </span>
              <h2 className="mt-3 text-3xl font-extrabold text-foreground sm:text-5xl">
                Where your journey begins.
              </h2>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground">
              Tap any country to open its full guide — colleges, tuition, forex
              corridor and the latest visa updates.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {DESTINATIONS.map((d, i) => (
            <Reveal key={d.slug} delay={(i % 3) * 0.08}>
              <a
                href={`/forex/destinations/${d.slug}`}
                className="group relative block h-80 overflow-hidden rounded-3xl border border-border shadow-soft"
              >
                <img
                  src={d.img}
                  alt={`Study in ${d.name}`}
                  width={900}
                  height={1100}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full glass px-3 py-1 text-sm font-semibold text-foreground">
                  <span className="text-base leading-none">{d.flag}</span>
                  {d.name}
                </div>
                <div className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-sky-deep shadow-soft transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
                <div className="absolute inset-x-4 bottom-4">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="rounded-2xl glass-dark p-3">
                      <p className="text-[10px] uppercase tracking-wide text-white/70">
                        Tuition
                      </p>
                      <p className="text-sm font-bold text-white">{d.tuitionRange}</p>
                    </div>
                    <div className="rounded-2xl glass-dark p-3">
                      <p className="text-[10px] uppercase tracking-wide text-white/70">
                        Living
                      </p>
                      <p className="text-sm font-bold text-white">{d.livingCost.split("(")[0].trim()}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-xs font-semibold text-white/90 opacity-0 transition-opacity group-hover:opacity-100">
                    View full country guide →
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
