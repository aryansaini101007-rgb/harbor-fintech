import { Mail, Phone, MapPin } from 'lucide-react'
import LogoIcon from './LogoIcon'

const COMPANY = [
  'About Us',
  'Careers',
  'Press',
  'Contact',
  'Partner With Us',
]

interface FooterProps {
  mode?: 'loan' | 'forex'
}

export default function FooterSection({
  mode = 'loan',
}: FooterProps) {
  const isForex = mode === 'forex'

  const COUNTRIES = isForex
    ? [
        'USA',
        'Canada',
        'Australia',
        'UK',
        'UAE',
        'Singapore',
      ]
    : [
        'USA',
        'UK',
        'Canada',
        'Germany',
        'Australia',
        'Ireland',
      ]

  const BANK_LINKS = isForex
    ? [
        'Forex Card',
        'Currency Exchange',
        'International Transfers',
        'Travel Insurance',
        'Cash Pickup',
        'Wire Transfer',
      ]
    : [
        'SBI Education Loan',
        'ICICI Bank Loan',
        'HDFC Credila',
        'Avanse Financial',
        'Prodigy Finance',
        'InCred Finance',
      ]

  const RESOURCES = isForex
    ? [
        'Live Exchange Rates',
        'Forex Calculator',
        'Travel Guide',
        'Rate Alerts',
        'FAQs',
      ]
    : [
        'EMI Calculator',
        'Eligibility Checker',
        'Interest Rate Guide',
        'Document Checklist',
        'Blog',
      ]

  return (
    <footer className="bg-[#2B2644] px-6 pt-20 pb-10">
      <div className="max-w-[88rem] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-3">
              {isForex ? (
  <img
    src="/logos/harbor-forex-logo.png"
    alt="Harbor Forex"
    className="h-14 w-auto"
  />
) : (
  <LogoIcon className="w-40 h-auto" />
)}
              {/* <span className="text-2xl font-medium tracking-tight text-white">Harbor Finance</span> */}
            </div>
            <p className="text-white/50 text-sm mb-1">
  {isForex
    ? "Move Money Globally"
    : "Fund Your Future"}
</p>
            <p className="text-white/40 text-sm max-w-xs mt-4 leading-relaxed mb-6">
              {isForex
  ? "Fast, secure and transparent forex services for students studying abroad. Get the best exchange rates, international money transfers and prepaid forex cards."
  : "Compare study abroad education loans from 20+ banks and NBFCs — free expert guidance, 48-hour sanction, collateral-free options."}
            </p>

            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#818CF8]" />
                <span>Noida , Uttar Pradesh , India</span>
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Phone className="w-4 h-4 shrink-0 text-[#818CF8]" />
                <a href="tel:+91 9258756581" className="hover:text-white transition-colors duration-200">+91 9258756581</a>
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Mail className="w-4 h-4 shrink-0 text-[#818CF8]" />
                <a
  href="mailto:ayush@harborfintech.com"
  className="hover:text-white transition-colors duration-200"
>
  ayush@harborfintech.com
</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-medium mb-4">{isForex
    ? "Forex Services"
    : "Loans by Country"}</h4>
            <ul className="flex flex-col gap-3">
              {COUNTRIES.map((c) => (
                <li key={c}>
                  <a href="#" className="text-white/50 hover:text-white text-sm transition-colors duration-200">
                    {isForex
    ? c
    : `Study Loan for ${c}`}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-medium mb-4">{isForex
    ? "Popular Services"
    : "Loans by Bank"}</h4>
            <ul className="flex flex-col gap-3">
              {BANK_LINKS.map((b) => (
                <li key={b}>
                  <a href="#" className="text-white/50 hover:text-white text-sm transition-colors duration-200">
                    {b}
                  </a>
                </li>
              ))}
            </ul>
          </div>

         <div className="col-span-2 md:col-span-1 grid grid-cols-2 md:grid-cols-1 gap-x-8 gap-y-8">
  <div>
    <h4 className="text-white text-sm font-medium mb-4">
      Resources
    </h4>

    <ul className="flex flex-col gap-3">
      {RESOURCES.map((r) => (
        <li key={r}>
          <a
            href="#"
            className="text-white/50 hover:text-white text-sm transition-colors duration-200"
          >
            {r}
          </a>
        </li>
      ))}
    </ul>
  </div>

  <div>
    <h4 className="text-white text-sm font-medium mb-4">
      Company
    </h4>

    <ul className="flex flex-col gap-3">
      {COMPANY.map((c) => (
        <li key={c}>
          <a
            href="#"
            className="text-white/50 hover:text-white text-sm transition-colors duration-200"
          >
            {c}
          </a>
        </li>
      ))}
    </ul>
  </div>
</div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-white/40 text-sm">© 2026 Harbor Finance. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 hover:text-white text-sm transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="text-white/40 hover:text-white text-sm transition-colors duration-200">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}