import { motion } from "framer-motion";
import { Plane } from "lucide-react";
import { Reveal } from "./Reveal";

// India origin + destination coordinates on a 1000x500 stylized canvas
const INDIA = { x: 690, y: 300 };
const ROUTES = [
  { to: "Canada", x: 210, y: 150, flag: "🇨🇦" },
  { to: "USA", x: 170, y: 220, flag: "🇺🇸" },
  { to: "UK", x: 470, y: 130, flag: "🇬🇧" },
  { to: "Germany", x: 520, y: 155, flag: "🇩🇪" },
  { to: "Australia", x: 850, y: 420, flag: "🇦🇺" },
];

function arc(x1: number, y1: number, x2: number, y2: number) {
  const mx = (x1 + x2) / 2;
  const my = Math.min(y1, y2) - 90;
  return `M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`;
}

export function WorldMap() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-deep">
              Global Reach
            </span>
            <h2 className="mt-3 text-[30px] font-extrabold text-foreground sm:text-5xl">
              From India to everywhere.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Watch your money — and your future — take flight across our global
              forex corridors.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 overflow-hidden rounded-3xl border border-border bg-card/70 p-4 shadow-soft backdrop-blur sm:p-8">
            <svg viewBox="0 0 1000 500" className="h-auto w-full">
              <defs>
                <radialGradient id="dot" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="var(--sky-deep)" />
                  <stop offset="100%" stopColor="var(--sky)" />
                </radialGradient>
              </defs>

              {/* stylized dotted continents backdrop */}
              {Array.from({ length: 320 }).map((_, i) => {
                const x = (i * 61) % 1000;
                const y = ((i * 37) % 460) + 20;
                return (
                  <circle
                    key={i}
                    cx={x}
                    cy={y}
                    r={1.4}
                    fill="var(--sky)"
                    opacity={0.18}
                  />
                );
              })}

              {ROUTES.map((r, i) => {
                const d = arc(INDIA.x, INDIA.y, r.x, r.y);
                return (
                  <g key={r.to}>
                    <path
                      d={d}
                      fill="none"
                      stroke="var(--sky-deep)"
                      strokeWidth={1.8}
                      strokeDasharray="6 8"
                      opacity={0.55}
                    />
                    <motion.circle
                      r={5}
                      fill="url(#dot)"
                      initial={{ offsetDistance: "0%" }}
                      animate={{ offsetDistance: "100%" }}
                      transition={{
                        duration: 4,
                        delay: i * 0.6,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      style={{ offsetPath: `path("${d}")` }}
                    />
                    <circle cx={r.x} cy={r.y} r={7} fill="var(--sky-deep)" />
                    <circle cx={r.x} cy={r.y} r={7} fill="none" stroke="var(--sky-deep)" opacity={0.4}>
                      <animate attributeName="r" from="7" to="18" dur="2.4s" repeatCount="indefinite" />
                      <animate attributeName="opacity" from="0.5" to="0" dur="2.4s" repeatCount="indefinite" />
                    </circle>
                    <text x={r.x} y={r.y - 14} textAnchor="middle" fontSize="20">
                      {r.flag}
                    </text>
                  </g>
                );
              })}

              {/* India hub */}
              <circle cx={INDIA.x} cy={INDIA.y} r={11} fill="var(--sky-deep)" />
              <text x={INDIA.x} y={INDIA.y + 34} textAnchor="middle" fontSize="15" fontWeight="700" fill="var(--foreground)">
                India 🇮🇳
              </text>
            </svg>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {ROUTES.map((r) => (
                <span
                  key={r.to}
                  className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-soft"
                >
                  <Plane className="h-4 w-4 text-sky-deep" /> India → {r.to}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
