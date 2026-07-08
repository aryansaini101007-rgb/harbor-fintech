import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import InfoSection from './components/InfoSection'
import PartnerBanksSection from './components/PartnerBanksSection'
import HowItWorksSection from './components/HowItWorksSection'
import UseCasesSection from './components/UseCasesSection'
import TestimonialsSection from './components/TestimonialsSection'
import FAQSection from './components/FAQSection'
import FooterSection from './components/FooterSection'
import BankModal from './components/BankModal'
import CountryModal from './components/CountryModal'
import { BankModalProvider } from './context/BankModalContext'
import { CountryModalProvider } from './context/CountryModalContext'
import RobotAssistant from './components/RobotAssistant'

export default function App() {
  return (
    <BankModalProvider>
      <CountryModalProvider>
        <div className="site-gradient-bg flex flex-col">
          <div className="landing-page flex flex-col">
            <Navbar />
            <HeroSection />
          </div>
          <InfoSection />
          <PartnerBanksSection />
          <HowItWorksSection />
          <UseCasesSection />
          <TestimonialsSection />
          <FAQSection />
          <FooterSection />
        </div>
        <BankModal />
        <CountryModal />
        <RobotAssistant />
      </CountryModalProvider>
    </BankModalProvider>
  )
}