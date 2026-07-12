import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import PartnerBanksSection from '../components/PartnerBanksSection'
import HowItWorksSection from '../components/HowItWorksSection'
import UseCasesSection from '../components/UseCasesSection'
import TestimonialsSection from '../components/TestimonialsSection'
import FAQSection from '../components/FAQSection'
import RobotAssistant from '../components/RobotAssistant'
import BankModal from '../components/BankModal'
import CountryModal from '../components/CountryModal'
import { BankModalProvider } from '../context/BankModalContext'
import { CountryModalProvider } from '../context/CountryModalContext'
import { SiteFooter, SiteNavbar } from '../components/shared/SiteChrome'

export default function EducationPage() {
  return (
    <BankModalProvider>
      <CountryModalProvider>
        <div className="site-gradient-bg flex flex-col">
          <div className="landing-page flex flex-col">
            <SiteNavbar variant="education" />
            <HeroSection />
          </div>
          <InfoSection />
          <PartnerBanksSection />
          <HowItWorksSection />
          <UseCasesSection />
          <TestimonialsSection />
          <FAQSection />
          <SiteFooter variant="education" />
        </div>
        <BankModal />
        <CountryModal />
        <RobotAssistant />
      </CountryModalProvider>
    </BankModalProvider>
  )
}
