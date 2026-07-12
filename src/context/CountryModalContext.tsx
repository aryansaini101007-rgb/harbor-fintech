import { createContext, useContext, useState, type ReactNode } from 'react'
import { COUNTRIES, type CountryInfo } from '../data/countries'

interface CountryModalContextValue {
  openCountry: (id: string) => void
  closeCountry: () => void
  activeCountry: CountryInfo | null
}

const CountryModalContext = createContext<CountryModalContextValue | null>(null)

export function CountryModalProvider({ children }: { children: ReactNode }) {
  const [activeCountry, setActiveCountry] = useState<CountryInfo | null>(null)

  const openCountry = (id: string) => {
    const country = COUNTRIES.find((c) => c.id === id) ?? null
    setActiveCountry(country)
  }

  const closeCountry = () => setActiveCountry(null)

  return (
    <CountryModalContext.Provider value={{ openCountry, closeCountry, activeCountry }}>
      {children}
    </CountryModalContext.Provider>
  )
}

export function useCountryModal() {
  const ctx = useContext(CountryModalContext)
  if (!ctx) throw new Error('useCountryModal must be used within CountryModalProvider')
  return ctx
}
