// Currency catalog. Rates come exclusively from the live ExchangeRate-API feed
// (see useLiveRates.ts and /api/rates.ts) – no hardcoded demo rates.
export interface Currency {
  code: string;
  name: string;
  flag: string;
  rate: number; // 1 unit of currency = rate INR (0 until first live fetch resolves)
  change: number; // % change for ticker (placeholder – API plan does not include intraday change)
}

// rate is intentionally 0; consumers must render "—" when rate === 0.
export const CURRENCIES: Currency[] = [
  { code: "USD", name: "US Dollar", flag: "🇺🇸", rate: 0, change: 0 },
  { code: "GBP", name: "British Pound", flag: "🇬🇧", rate: 0, change: 0 },
  { code: "EUR", name: "Euro", flag: "🇪🇺", rate: 0, change: 0 },
  { code: "CAD", name: "Canadian Dollar", flag: "🇨🇦", rate: 0, change: 0 },
  { code: "AUD", name: "Australian Dollar", flag: "🇦🇺", rate: 0, change: 0 },
  { code: "AED", name: "UAE Dirham", flag: "🇦🇪", rate: 0, change: 0 },
  { code: "SGD", name: "Singapore Dollar", flag: "🇸🇬", rate: 0, change: 0 },
  { code: "NZD", name: "New Zealand Dollar", flag: "🇳🇿", rate: 0, change: 0 },
  { code: "CHF", name: "Swiss Franc", flag: "🇨🇭", rate: 0, change: 0 },
  { code: "JPY", name: "Japanese Yen", flag: "🇯🇵", rate: 0, change: 0 },
];
