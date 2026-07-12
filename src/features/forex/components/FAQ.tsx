import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Reveal } from "./Reveal";

const FAQS = [
  {
    q: "How does Harbor get the best forex rates?",
    a: "We source live interbank rates and apply the industry's thinnest margin. You always see the exact rate and any fee before you confirm — no hidden spreads.",
  },
  {
    q: "How quickly can I get my forex or card?",
    a: "Currency notes and forex cards are typically delivered within 24–48 hours in major cities. International transfers to universities usually settle the same day.",
  },
  {
    q: "Is Harbor Finance safe and regulated?",
    a: "Yes. We operate with RBI-authorised partners and bank-grade encryption. Your money and data are protected at every step.",
  },
  {
    q: "Can I pay my university tuition directly?",
    a: "Absolutely. Our University Fee Payment service sends funds directly to your institution abroad with a compliant, trackable receipt.",
  },
  {
    q: "What currencies can the forex card hold?",
    a: "The Harbor Premium Forex Card supports 7 major currencies including USD, GBP, EUR, CAD, AUD, AED and JPY on a single card.",
  },
  {
    q: "Do you support students already living abroad?",
    a: "Yes — our Student Remittance service lets families send recurring living-expense transfers quickly and transparently.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4">
        <Reveal>
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-deep">
              FAQ
            </span>
            <h2 className="mt-3 text-[30px] font-extrabold text-foreground sm:text-5xl">
              Questions, answered.
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.04}>
                <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="font-semibold text-foreground">{f.q}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-sky-soft text-sky-deep"
                    >
                      <Plus className="h-4 w-4" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
