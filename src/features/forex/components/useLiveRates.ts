import { useEffect, useState } from "react";
import { CURRENCIES, type Currency } from "./currencies";

// Fetches live FX rates (INR per 1 unit of currency) from a free, key-less API.
// Falls back to the static reference rates in currencies.ts if the network fails.
export function useLiveRates() {
  const [rates, setRates] = useState<Currency[]>(CURRENCIES);
  const [live, setLive] = useState(false);
  const [updatedAt, setUpdatedAt] = useState<Date | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch("https://open.er-api.com/v6/latest/INR");
        if (!res.ok) throw new Error("rates unavailable");
        const json = await res.json();
        const perInr = json?.rates as Record<string, number> | undefined;
        if (!perInr) throw new Error("no rates");

        const next = CURRENCIES.map((c) => {
          const unit = perInr[c.code];
          if (!unit) return c;
          const inrPerUnit = 1 / unit; // API gives currency per 1 INR
          return { ...c, rate: +inrPerUnit.toFixed(c.code === "JPY" ? 3 : 2) };
        });


        if (!cancelled) {
          setRates(next);
          setLive(true);
          setUpdatedAt(new Date());
        }
      } catch {
        if (!cancelled) setLive(false);
      }
    }

    load();
    const id = setInterval(load, 60_000);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, []);

  return { rates, live, updatedAt };
}

// Lightweight global open helper for the Pay Now modal (no prop drilling).
export function openPayNow(plan?: string) {
  window.dispatchEvent(new CustomEvent("harbor:paynow", { detail: { plan } }));
}
