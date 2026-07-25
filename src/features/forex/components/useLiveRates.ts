import { useEffect, useState } from "react";
import { CURRENCIES, type Currency } from "./currencies";

// Fetches live FX rates (INR per 1 unit of currency) from our own /api/rates
// serverless proxy. Caches the last successful payload in localStorage and
// falls back to it if the network / upstream fails. No hardcoded demo rates.

const CACHE_KEY = "harbor:fx:v1";
const REFRESH_MS = 60 * 60 * 1000; // 1 hour – ExchangeRate-API updates hourly

type CachedPayload = {
  rates: Record<string, number>; // INR per 1 unit of code
  updatedAt: string;
};

function isValidPayload(p: any): p is CachedPayload {
  if (!p || typeof p !== "object") return false;
  if (!p.rates || typeof p.rates !== "object") return false;
  if (typeof p.updatedAt !== "string") return false;
  // At least one numeric positive rate.
  for (const v of Object.values(p.rates)) {
    if (typeof v === "number" && v > 0) return true;
  }
  return false;
}

function clearCache() {
  try {
    localStorage.removeItem(CACHE_KEY);
  } catch {
    /* ignore */
  }
}

function readCache(): CachedPayload | null {
  if (typeof window === "undefined") return null;
  let raw: string | null = null;
  try {
    raw = localStorage.getItem(CACHE_KEY);
  } catch {
    return null;
  }
  if (!raw) return null;
  // Guard: only attempt JSON.parse when the value looks like JSON.
  const trimmed = raw.trim();
  if (!trimmed.startsWith("{")) {
    clearCache();
    return null;
  }
  try {
    const parsed = JSON.parse(trimmed);
    if (!isValidPayload(parsed)) {
      clearCache();
      return null;
    }
    return parsed;
  } catch {
    clearCache();
    return null;
  }
}

function writeCache(payload: CachedPayload) {
  if (!isValidPayload(payload)) return;
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(payload));
  } catch {
    /* ignore quota errors */
  }
}

function applyRates(map: Record<string, number>): Currency[] {
  return CURRENCIES.map((c) => {
    const v = map[c.code];
    if (!v || v <= 0) return c;
    return { ...c, rate: +v.toFixed(c.code === "JPY" ? 3 : 2) };
  });
}

export function useLiveRates() {
  const cached = readCache();
  const [rates, setRates] = useState<Currency[]>(
    cached ? applyRates(cached.rates) : CURRENCIES,
  );
  const [live, setLive] = useState(false);
  const [updatedAt, setUpdatedAt] = useState<Date | null>(
    cached ? new Date(cached.updatedAt) : null,
  );

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch("/api/rates", { cache: "no-store" });
        if (!res.ok) throw new Error(`rates ${res.status}`);
        // Read as text first so a non-JSON response (e.g. HTML fallback) does
        // not surface as an opaque SyntaxError from res.json().
        const text = await res.text();
        let json: any;
        try {
          json = JSON.parse(text);
        } catch {
          throw new Error("non-JSON rates response");
        }
        if (!isValidPayload(json)) throw new Error("invalid rates payload");

        if (!cancelled) {
          setRates(applyRates(json.rates));
          setLive(true);
          setUpdatedAt(new Date(json.updatedAt));
          writeCache(json);
        }
      } catch (err) {
        console.warn("useLiveRates: falling back to cache", err);
        const c = readCache();
        if (!cancelled) {
          if (c) {
            setRates(applyRates(c.rates));
            setUpdatedAt(new Date(c.updatedAt));
          }
          setLive(false);
        }
      }
    }

    load();
    const id = setInterval(load, REFRESH_MS);
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
