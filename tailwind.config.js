/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"TT Norms Pro"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Sora', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: 'rgb(var(--forex-background) / <alpha-value>)',
        foreground: 'rgb(var(--forex-foreground) / <alpha-value>)',
        card: 'rgb(var(--forex-card) / <alpha-value>)',
        'card-foreground': 'rgb(var(--forex-card-foreground) / <alpha-value>)',
        popover: 'rgb(var(--forex-popover) / <alpha-value>)',
        'popover-foreground': 'rgb(var(--forex-popover-foreground) / <alpha-value>)',
        primary: 'rgb(var(--forex-primary) / <alpha-value>)',
        'primary-foreground': 'rgb(var(--forex-primary-foreground) / <alpha-value>)',
        secondary: 'rgb(var(--forex-secondary) / <alpha-value>)',
        'secondary-foreground': 'rgb(var(--forex-secondary-foreground) / <alpha-value>)',
        muted: 'rgb(var(--forex-muted) / <alpha-value>)',
        'muted-foreground': 'rgb(var(--forex-muted-foreground) / <alpha-value>)',
        accent: 'rgb(var(--forex-accent) / <alpha-value>)',
        'accent-foreground': 'rgb(var(--forex-accent-foreground) / <alpha-value>)',
        border: 'rgb(var(--forex-border) / <alpha-value>)',
        input: 'rgb(var(--forex-input) / <alpha-value>)',
        ring: 'rgb(var(--forex-ring) / <alpha-value>)',
        sky: 'rgb(var(--forex-sky) / <alpha-value>)',
        'sky-deep': 'rgb(var(--forex-sky-deep) / <alpha-value>)',
        'sky-soft': 'rgb(var(--forex-sky-soft) / <alpha-value>)',
      },
      backgroundImage: {
        'gradient-sky': 'linear-gradient(135deg, rgb(84 169 230), rgb(83 89 207))',
        'gradient-hero': 'radial-gradient(120% 120% at 15% 10%, rgb(238 249 255) 0%, rgb(250 252 255) 45%, rgb(255 255 255) 100%)',
        'gradient-card': 'linear-gradient(145deg, rgb(92 177 226), rgb(75 71 185))',
      },
      boxShadow: {
        soft: '0 1px 2px rgb(71 108 150 / 0.04), 0 12px 30px -12px rgb(71 108 150 / 0.16)',
        lift: '0 30px 60px -25px rgb(68 87 162 / 0.35)',
        glow: '0 20px 60px -15px rgb(67 145 218 / 0.5)',
      },
    },
  },
  plugins: [],
}
