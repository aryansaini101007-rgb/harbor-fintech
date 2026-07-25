import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CreditCard, ShieldCheck, CheckCircle2, Lock } from "lucide-react";
import { useLiveRates } from "./useLiveRates";

type Step = "form" | "success";

export function PayNowModal() {
  const { rates: CURRENCIES } = useLiveRates();
  const [open, setOpen] = useState(false);
  const [plan, setPlan] = useState<string | undefined>();
  const [step, setStep] = useState<Step>("form");
  const [processing, setProcessing] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    amount: "1000",
    currency: "USD",
    card: "",
    expiry: "",
    cvv: "",
  });

  useEffect(() => {
    const onOpen = (e: Event) => {
      const detail = (e as CustomEvent).detail as { plan?: string } | undefined;
      setPlan(detail?.plan);
      setStep("form");
      setOpen(true);
    };
    window.addEventListener("harbor:paynow", onOpen);
    return () => window.removeEventListener("harbor:paynow", onOpen);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const currency = CURRENCIES.find((c) => c.code === form.currency)!;
  const inr = (parseFloat(form.amount) || 0) * currency.rate;

  const set = (k: keyof typeof form) => (v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setStep("success");
    }, 1600);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-sky-deep/30 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
            className="relative w-full max-w-md overflow-hidden rounded-3xl border border-border bg-card shadow-lift"
          >
            <button
              aria-label="Close"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-secondary text-foreground transition-colors hover:bg-accent"
            >
              <X className="h-4 w-4" />
            </button>

            {step === "form" ? (
              <form onSubmit={submit} className="p-6 sm:p-8">
                <span className="inline-flex items-center gap-2 rounded-full bg-sky-soft px-3 py-1 text-xs font-bold uppercase tracking-wide text-sky-deep">
                  <CreditCard className="h-3.5 w-3.5" /> Secure Pay
                </span>
                <h3 className="mt-3 text-2xl font-extrabold text-foreground">
                  {plan ? `Pay for ${plan}` : "Pay Now"}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Lock the best rate and complete your forex order in seconds.
                </p>

                <div className="mt-5 grid gap-3">
                  <div className="grid gap-1.5">
                    <label className="text-xs font-semibold text-muted-foreground">Full name</label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => set("name")(e.target.value)}
                      placeholder="Aarav Sharma"
                      className="rounded-xl border border-border bg-secondary/40 px-3.5 py-2.5 text-sm text-foreground outline-none focus:border-sky"
                    />
                  </div>
                  <div className="grid gap-1.5">
                    <label className="text-xs font-semibold text-muted-foreground">Email</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => set("email")(e.target.value)}
                      placeholder="you@email.com"
                      className="rounded-xl border border-border bg-secondary/40 px-3.5 py-2.5 text-sm text-foreground outline-none focus:border-sky"
                    />
                  </div>

                  <div className="grid grid-cols-[1fr_auto] gap-3">
                    <div className="grid gap-1.5">
                      <label className="text-xs font-semibold text-muted-foreground">Amount</label>
                      <input
                        required
                        type="number"
                        min={1}
                        value={form.amount}
                        onChange={(e) => set("amount")(e.target.value)}
                        className="rounded-xl border border-border bg-secondary/40 px-3.5 py-2.5 text-sm text-foreground outline-none focus:border-sky"
                      />
                    </div>
                    <div className="grid gap-1.5">
                      <label className="text-xs font-semibold text-muted-foreground">Currency</label>
                      <select
                        value={form.currency}
                        onChange={(e) => set("currency")(e.target.value)}
                        className="rounded-xl border border-border bg-secondary/40 px-3.5 py-2.5 text-sm font-semibold text-foreground outline-none focus:border-sky"
                      >
                        {CURRENCIES.map((c) => (
                          <option key={c.code} value={c.code}>
                            {c.flag} {c.code}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="flex items-center justify-between rounded-xl bg-sky-soft/60 px-4 py-2.5 text-sm">
                    <span className="text-sky-deep">You pay (INR)</span>
                    <span className="font-bold text-foreground">
                      ₹{inr.toLocaleString("en-IN", { maximumFractionDigits: 2 })}
                    </span>
                  </div>

                  <div className="grid gap-1.5">
                    <label className="text-xs font-semibold text-muted-foreground">Card number</label>
                    <input
                      required
                      inputMode="numeric"
                      value={form.card}
                      onChange={(e) => set("card")(e.target.value)}
                      placeholder="4242 4242 4242 4242"
                      className="rounded-xl border border-border bg-secondary/40 px-3.5 py-2.5 text-sm text-foreground outline-none focus:border-sky"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      required
                      value={form.expiry}
                      onChange={(e) => set("expiry")(e.target.value)}
                      placeholder="MM / YY"
                      className="rounded-xl border border-border bg-secondary/40 px-3.5 py-2.5 text-sm text-foreground outline-none focus:border-sky"
                    />
                    <input
                      required
                      value={form.cvv}
                      onChange={(e) => set("cvv")(e.target.value)}
                      placeholder="CVV"
                      className="rounded-xl border border-border bg-secondary/40 px-3.5 py-2.5 text-sm text-foreground outline-none focus:border-sky"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={processing}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-sky px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5 disabled:opacity-70"
                >
                  {processing ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                      Processing…
                    </>
                  ) : (
                    <>
                      <Lock className="h-4 w-4" /> Pay ₹
                      {inr.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
                    </>
                  )}
                </button>
                <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
                  <ShieldCheck className="h-3.5 w-3.5 text-sky-deep" /> 256-bit encrypted · RBI-authorised
                </p>
              </form>
            ) : (
              <div className="p-8 text-center">
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-50 text-emerald-600"
                >
                  <CheckCircle2 className="h-9 w-9" />
                </motion.span>
                <h3 className="mt-4 text-2xl font-extrabold text-foreground">Payment successful</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Thanks {form.name || "there"}! Your order of{" "}
                  <span className="font-semibold text-foreground">
                    {form.amount} {form.currency}
                  </span>{" "}
                  is confirmed. A receipt is on its way to {form.email || "your inbox"}.
                </p>
                <button
                  onClick={() => setOpen(false)}
                  className="mt-6 w-full rounded-full bg-gradient-sky px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow"
                >
                  Done
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
