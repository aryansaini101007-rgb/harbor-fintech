// Static, representative reference rates (INR base) used for the live-feel
// converter and ticker. Values are illustrative for the marketing site.
export interface Currency {
  code: string;
  name: string;
  flag: string;
  rate: number; // 1 unit of currency = rate INR
  change: number; // % change for ticker
}

export const CURRENCIES: Currency[] = [
  { code: "USD", name: "US Dollar", flag: "🇺🇸", rate: 83.42, change: 0.12 },
  { code: "GBP", name: "British Pound", flag: "🇬🇧", rate: 105.87, change: -0.08 },
  { code: "EUR", name: "Euro", flag: "🇪🇺", rate: 90.35, change: 0.21 },
  { code: "CAD", name: "Canadian Dollar", flag: "🇨🇦", rate: 61.18, change: 0.05 },
  { code: "AUD", name: "Australian Dollar", flag: "🇦🇺", rate: 55.42, change: -0.14 },
  { code: "AED", name: "UAE Dirham", flag: "🇦🇪", rate: 22.71, change: 0.02 },
  { code: "SGD", name: "Singapore Dollar", flag: "🇸🇬", rate: 62.14, change: 0.07 },
  { code: "NZD", name: "New Zealand Dollar", flag: "🇳🇿", rate: 50.86, change: -0.05 },
  { code: "CHF", name: "Swiss Franc", flag: "🇨🇭", rate: 93.72, change: 0.18 },
  { code: "JPY", name: "Japanese Yen", flag: "🇯🇵", rate: 0.556, change: 0.09 },
];
