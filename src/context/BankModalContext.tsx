import { createContext, useContext, useState, type ReactNode } from 'react'
import { BANKS, type BankOffer } from '../data/banks'

interface BankModalContextValue {
  openBank: (id: string) => void
  closeBank: () => void
  activeBank: BankOffer | null
}

const BankModalContext = createContext<BankModalContextValue | null>(null)

export function BankModalProvider({ children }: { children: ReactNode }) {
  const [activeBank, setActiveBank] = useState<BankOffer | null>(null)

  const openBank = (id: string) => {
    const bank = BANKS.find((b) => b.id === id) ?? null
    setActiveBank(bank)
  }

  const closeBank = () => setActiveBank(null)

  return (
    <BankModalContext.Provider value={{ openBank, closeBank, activeBank }}>
      {children}
    </BankModalContext.Provider>
  )
}

export function useBankModal() {
  const ctx = useContext(BankModalContext)
  if (!ctx) throw new Error('useBankModal must be used within BankModalProvider')
  return ctx
}
