import type { ReactNode } from 'react'
import EducationFooter from '../FooterSection'
import Navbar from "../Navbar";
import { Footer as ForexFooter } from '../../features/forex/components/Footer'

type SiteVariant = 'education' | 'forex'

export function SiteNavbar({
    variant,
}: {
    variant: SiteVariant;
}) {
    return (
        <Navbar
            mode={
                variant === "forex"
                    ? "forex"
                    : "loan"
            }
        />
    );
}

export function SiteFooter({ variant }: { variant: SiteVariant }) {
  return variant === 'forex' ? <ForexFooter /> : <EducationFooter />
}

export function SiteChrome({ variant, children }: { variant: SiteVariant; children: ReactNode }) {
  return (
    <>
      <SiteNavbar variant={variant} />
      {children}
      <SiteFooter variant={variant} />
    </>
  )
}
