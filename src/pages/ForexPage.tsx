import { useEffect, type ReactNode } from 'react'
import { SiteChrome } from '../components/shared/SiteChrome'
import { Hero } from '../features/forex/components/Hero'
import { CurrencyConverter } from '../features/forex/components/CurrencyConverter'
import { Destinations } from '../features/forex/components/Destinations'
import { WorldMap } from '../features/forex/components/WorldMap'
import { ForexCard } from '../features/forex/components/ForexCard'
import { ForexServices } from '../features/forex/components/ForexServices'
import { BudgetPlanner } from '../features/forex/components/BudgetPlanner'
import { WhyHarbor } from '../features/forex/components/WhyHarbor'
import { Testimonials } from '../features/forex/components/Testimonials'
import { FAQ } from '../features/forex/components/FAQ'
import { ContactCTA } from '../features/forex/components/ContactCTA'
import { PayNowModal } from '../features/forex/components/PayNowModal'

export function ForexShell({ children }: { children: ReactNode }) {
  return (
    <div className="forex-site min-h-screen bg-background">
      <SiteChrome variant="forex">{children}</SiteChrome>
      <PayNowModal />
    </div>
  )
}

export default function ForexPage() {
  useEffect(() => {
    document.title = "Harbor Forex — Student Forex & International Money Transfers | Harbor Finance";

    const iconLinks = Array.from(
      document.querySelectorAll<HTMLLinkElement>("link[rel*='icon']")
    );
    const originalHrefs = iconLinks.map((link) => link.getAttribute("href") || "");

    if (iconLinks.length === 0) {
      const fallbackLink = document.createElement("link");
      fallbackLink.rel = "icon";
      fallbackLink.type = "image/png";
      fallbackLink.href = "/logos/forex-favicon.png";
      document.head.appendChild(fallbackLink);
      iconLinks.push(fallbackLink);
      originalHrefs.push("/favicon.png");
    } else {
      iconLinks.forEach((link) => {
        link.href = "/logos/forex-favicon.png";
      });
    }

    return () => {
      document.title = "Harbor Finance";
      iconLinks.forEach((link, idx) => {
        if (originalHrefs[idx]) {
          link.href = originalHrefs[idx];
        } else {
          link.href = "/favicon.png";
        }
      });
    };
  }, []);

  return (
    <ForexShell>
      <main>
        <Hero />
        <CurrencyConverter />
        <Destinations />
        <WorldMap />
        <ForexCard />
        <ForexServices />
        <BudgetPlanner />
        <WhyHarbor />
        <Testimonials />
        <FAQ />
        <ContactCTA />
      </main>
    </ForexShell>
  );
}