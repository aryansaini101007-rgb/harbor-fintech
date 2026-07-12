import type { ReactNode } from 'react'
import Navbar from "../Navbar";
import FooterSection from "../FooterSection";

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

export function SiteFooter({
  variant,
}: {
  variant: SiteVariant;
}) {
  return (
    <FooterSection
      mode={variant === "forex" ? "forex" : "loan"}
    />
  );
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
