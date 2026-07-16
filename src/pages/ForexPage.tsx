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
    document.title = "Harbor Forex | International Payments";

    let favicon = document.querySelector(
      "link[rel*='icon']"
    ) as HTMLLinkElement | null;

    if (!favicon) {
      favicon = document.createElement("link");
      favicon.rel = "icon";
      document.head.appendChild(favicon);
    }

    favicon.type = "image/png";
    favicon.href = `/logos/forex-favicon.png?v=${Date.now()}`;

    return () => {
      document.title = "Harbor Finance";
      favicon!.href = `/favicon.png?v=${Date.now()}`;
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