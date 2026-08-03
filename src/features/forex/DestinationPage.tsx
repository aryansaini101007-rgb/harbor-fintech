import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Calendar,
  Clock,
  Coins,
  CreditCard,
  GraduationCap,
  MapPin,
  Newspaper,
  Plane,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { ForexShell } from "../../pages/ForexPage";
import { DESTINATIONS, getDestination, type College } from "./components/destinationsData";
import { openPayNow } from "./components/useLiveRates";

/* Original TanStack route metadata, retained as documentation for the merged SPA.
export const Route = createFileRoute("/destinations/$slug")({
  loader: ({ params }): { dest: import("@/components/harbor/destinationsData").DestinationInfo } => {
    const dest = getDestination(params.slug);
    if (!dest) throw notFound();
    return { dest };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Destination not found — Harbor Finance" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { dest } = loaderData;
    const title = `Study in ${dest.name} — Colleges, Tuition & Forex Guide | Harbor Finance`;
    const description = `Complete ${dest.name} study guide: top colleges, tuition, living cost, ${dest.currencyCode} forex rates, visa updates and Harbor's forex corridor for Indian students.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:image", content: dest.img },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: dest.img },
      ],
    };
  },
  component: DestinationDetail,
  notFoundComponent: () => (
    <ForexShell>
      <main>
      <div className="mx-auto max-w-3xl px-4 py-32 text-center">
        <h1 className="text-4xl font-extrabold text-foreground">
          Destination not found
        </h1>
        <p className="mt-3 text-muted-foreground">
          We don't have a guide for this country yet.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-sky px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow"
        >
          <ArrowLeft className="h-4 w-4" /> Back home
        </Link>
      </div>
      <Footer />
    </div>
  ),
});
*/

export function ForexDestinationPage({ slug }: { slug: string }) {
  const dest = getDestination(slug);

  if (!dest) {
    return (
      <ForexShell>
        <main className="mx-auto min-h-screen max-w-3xl px-4 py-32 text-center">
          <h1 className="text-4xl font-extrabold text-foreground">Destination not found</h1>
          <p className="mt-3 text-muted-foreground">We don't have a guide for this country yet.</p>
          <a href="/forex" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-sky px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow">
            <ArrowLeft className="h-4 w-4" /> Back home
          </a>
        </main>
      </ForexShell>
    );
  }

  const stats = [
    { icon: <GraduationCap className="h-4 w-4" />, label: "Tuition", value: dest.tuitionRange },
    { icon: <Coins className="h-4 w-4" />, label: "Living", value: dest.livingCost.split("(")[0].trim() },
    { icon: <Plane className="h-4 w-4" />, label: "Visa", value: dest.visaType },
    { icon: <Clock className="h-4 w-4" />, label: "Processing", value: dest.processingTime },
    { icon: <Calendar className="h-4 w-4" />, label: "Intake", value: dest.intake },
    { icon: <Sparkles className="h-4 w-4" />, label: "Work rights", value: dest.workRights },
  ];

  return (
    <ForexShell>
      <main>

      {/* Hero */}
      <section className="relative overflow-hidden pt-24 sm:pt-28">
        <div className="absolute inset-0">
          <img
            src={dest.img}
            alt={`Study in ${dest.name}`}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 pb-14 pt-10">
          <a
            href="/forex#destinations"
            className="inline-flex items-center gap-2 text-sm font-semibold text-sky-deep hover:underline"
          >
            <ArrowLeft className="h-4 w-4" /> All destinations
          </a>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="glass shadow-soft inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold text-foreground">
              <span className="text-lg leading-none">{dest.flag}</span>
              Study in {dest.name}
            </span>
            <span className="glass shadow-soft inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold text-sky-deep">
              <ShieldCheck className="h-3.5 w-3.5" /> RBI-compliant forex corridor
            </span>
          </div>

          <h1 className="mt-6 max-w-3xl font-display text-4xl font-extrabold leading-[1.05] text-foreground sm:text-6xl">
            Everything you need to fly to{" "}
            <span className="text-gradient">{dest.name}</span>.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {dest.summary}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => openPayNow(dest.name)}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-sky px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
            >
              Get {dest.currencyCode} at best rate <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href="/forex#calculator"
              className="glass shadow-soft inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5"
            >
              <CreditCard className="h-4 w-4 text-sky-deep" /> Currency calculator
            </a>
          </div>
        </div>
      </section>

      {/* Stats grid */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="glass shadow-soft flex items-start gap-3 rounded-2xl p-5"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-sky-soft text-sky-deep">
                {s.icon}
              </span>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                  {s.label}
                </p>
                <p className="mt-1 font-display text-base font-bold text-foreground">
                  {s.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Highlights + Forex tips */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-7 shadow-soft">
            <div className="flex items-center gap-2 text-sky-deep">
              <Sparkles className="h-4 w-4" />
              <span className="text-xs font-bold uppercase tracking-widest">
                Highlights
              </span>
            </div>
            <h2 className="mt-3 font-display text-2xl font-bold text-foreground">
              Why students pick {dest.name}
            </h2>
            <ul className="mt-5 space-y-3">
              {dest.highlights.map((h: string) => (
                <li key={h} className="flex items-start gap-3 text-sm text-foreground">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-sky" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-gradient-sky p-7 text-primary-foreground shadow-lift">
            <div className="flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              <span className="text-xs font-bold uppercase tracking-widest">
                Harbor Forex Corridor
              </span>
            </div>
            <h2 className="mt-3 font-display text-2xl font-bold">
              How to move money to {dest.name}
            </h2>
            <ul className="mt-5 space-y-3">
              {dest.forexTips.map((t: string) => (
                <li key={t} className="flex items-start gap-3 text-sm">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-white/80" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => openPayNow(dest.name)}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-white/95 px-5 py-2.5 text-sm font-semibold text-sky-deep shadow-soft transition-transform hover:-translate-y-0.5"
            >
              Send {dest.currencyCode} now <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Colleges */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="flex items-center gap-2 text-sky-deep">
          <Building2 className="h-4 w-4" />
          <span className="text-xs font-bold uppercase tracking-widest">
            Top Colleges
          </span>
        </div>
        <h2 className="mt-3 font-display text-[30px] font-extrabold text-foreground sm:text-4xl">
          Where our students go in {dest.name}
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {dest.colleges.map((c: College) => (
            <div
              key={c.name}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-transform hover:-translate-y-1"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-secondary">
                <img
                  src={c.image || dest.img}
                  alt={`${c.name} campus`}
                  width={960}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    const img = e.currentTarget;
                    if (img.dataset.fallback !== "1") {
                      img.dataset.fallback = "1";
                      img.src = dest.img;
                    }
                  }}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                {c.ranking && (
                  <span className="absolute right-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-sky-deep shadow-soft">
                    {c.ranking}
                  </span>
                )}
                <div className="absolute inset-x-3 bottom-3">
                  <h3 className="font-display text-base font-bold text-white drop-shadow">
                    {c.name}
                  </h3>
                  <p className="mt-0.5 flex items-center gap-1 text-[11px] font-medium text-white/90">
                    <MapPin className="h-3 w-3" /> {c.city}
                  </p>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm font-semibold text-foreground">
                  {c.tuition}
                </p>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  Indicative tuition
                </p>
                <button
                  onClick={() => openPayNow(dest.name)}
                  className="mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-sky-soft px-4 py-2 text-xs font-bold text-sky-deep transition-colors hover:bg-sky/20"
                >
                  Send fees to {c.name.split(" ").slice(0, 2).join(" ")}
                  <ArrowRight className="h-3 w-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Admission criteria */}
      {dest.admissionCriteria && dest.admissionCriteria.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 pb-12">
          <div className="rounded-3xl border border-border bg-card p-7 shadow-soft">
            <div className="flex items-center gap-2 text-sky-deep">
              <GraduationCap className="h-4 w-4" />
              <span className="text-xs font-bold uppercase tracking-widest">
                Admission Criteria
              </span>
            </div>
            <h2 className="mt-3 font-display text-2xl font-bold text-foreground sm:text-[30px]">
              What you need to apply to {dest.name}
            </h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {dest.admissionCriteria.map((a: string) => (
                <li
                  key={a}
                  className="flex items-start gap-3 rounded-2xl bg-secondary/50 p-4 text-sm text-foreground"
                >
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gradient-sky text-primary-foreground">
                    <GraduationCap className="h-3.5 w-3.5" />
                  </span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Latest updates */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="rounded-3xl border border-border bg-secondary/40 p-7">
          <div className="flex items-center gap-2 text-sky-deep">
            <Newspaper className="h-4 w-4" />
            <span className="text-xs font-bold uppercase tracking-widest">
              Latest Updates
            </span>
          </div>
          <h2 className="mt-3 font-display text-2xl font-bold text-foreground sm:text-[30px]">
            What changed recently for {dest.name}
          </h2>
          <ul className="mt-6 space-y-4">
            {dest.latest.map((n: { date: string; note: string }) => (
              <li
                key={n.date}
                className="flex flex-col gap-1 border-l-2 border-sky pl-4 sm:flex-row sm:items-start sm:gap-6"
              >
                <span className="shrink-0 font-display text-sm font-bold text-sky-deep">
                  {n.date}
                </span>
                <span className="text-sm text-foreground">{n.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Other destinations */}
      <section className="mx-auto max-w-6xl px-4 pb-24">
        <h2 className="font-display text-2xl font-bold text-foreground">
          Explore other destinations
        </h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {DESTINATIONS.filter((d) => d.slug !== dest.slug).map((d) => (
            <a
              key={d.slug}
              href={`/forex/destinations/${d.slug}`}
              className="glass shadow-soft inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5"
            >
              <span className="text-base leading-none">{d.flag}</span>
              {d.name}
              <ArrowRight className="h-3.5 w-3.5 text-sky-deep" />
            </a>
          ))}
        </div>
      </section>

      </main>
    </ForexShell>
  );
}
