import { Mail, Phone, MapPin } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import LogoIcon from './LogoIcon'

interface FooterProps {
  mode?: 'loan' | 'forex'
}

export default function FooterSection({
  mode = 'loan',
}: FooterProps) {
  const isForex = mode === 'forex'

  return (
    <footer className="bg-[#2B2644] px-6 pt-20 pb-10" aria-label="Site footer">
      <div className="max-w-[88rem] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-3">
              {isForex ? (
                <img
                  src="/logos/harbor-forex-logo.png"
                  alt="Harbor Forex"
                  width={200}
                  height={56}
                  className="h-14 w-auto"
                />
              ) : (
                <LogoIcon className="w-40 h-auto" />
              )}
            </div>
            <p className="text-white/70 text-sm mb-1 font-medium">
              {isForex ? "Move Money Globally" : "Fund Your Future"}
            </p>
            <p className="text-white/60 text-sm max-w-xs mt-3 leading-relaxed mb-6">
              {isForex
                ? "Fast, secure and transparent forex services for students studying abroad. Competitive exchange rates, student forex cards, and international university fee transfers."
                : "Compare study abroad education loans from 20+ banks and NBFCs in India. Free expert guidance, collateral-free student loan options, and fast 48-hour sanctions."}
            </p>

            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#818CF8]" aria-hidden="true" />
                <span>Noida, Uttar Pradesh, India</span>
              </li>
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <Phone className="w-4 h-4 shrink-0 text-[#818CF8]" aria-hidden="true" />
                <a href="tel:+919258756581" className="hover:text-white transition-colors duration-200" aria-label="Call Harbor Finance">+91 9258756581</a>
              </li>
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <Mail className="w-4 h-4 shrink-0 text-[#818CF8]" aria-hidden="true" />
                <a
                  href="mailto:ayush@harborfintech.com"
                  className="hover:text-white transition-colors duration-200"
                  aria-label="Email Harbor Finance team"
                >
                  ayush@harborfintech.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-sm font-semibold tracking-wide mb-4">
              {isForex ? "Destination Guides" : "Loans by Country"}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {isForex ? (
                <>
                  <li><Link to="/forex/destinations/$slug" params={{ slug: "usa" }} className="text-white/60 hover:text-white text-sm transition-colors">Study in USA</Link></li>
                  <li><Link to="/forex/destinations/$slug" params={{ slug: "uk" }} className="text-white/60 hover:text-white text-sm transition-colors">Study in UK</Link></li>
                  <li><Link to="/forex/destinations/$slug" params={{ slug: "canada" }} className="text-white/60 hover:text-white text-sm transition-colors">Study in Canada</Link></li>
                  <li><Link to="/forex/destinations/$slug" params={{ slug: "australia" }} className="text-white/60 hover:text-white text-sm transition-colors">Study in Australia</Link></li>
                  <li><Link to="/forex/destinations/$slug" params={{ slug: "germany" }} className="text-white/60 hover:text-white text-sm transition-colors">Study in Germany</Link></li>
                  <li><Link to="/forex/destinations/$slug" params={{ slug: "ireland" }} className="text-white/60 hover:text-white text-sm transition-colors">Study in Ireland</Link></li>
                </>
              ) : (
                <>
                  <li><a href="/#destinations" className="text-white/60 hover:text-white text-sm transition-colors">Study Loan for USA</a></li>
                  <li><a href="/#destinations" className="text-white/60 hover:text-white text-sm transition-colors">Study Loan for UK</a></li>
                  <li><a href="/#destinations" className="text-white/60 hover:text-white text-sm transition-colors">Study Loan for Canada</a></li>
                  <li><a href="/#destinations" className="text-white/60 hover:text-white text-sm transition-colors">Study Loan for Germany</a></li>
                  <li><a href="/#destinations" className="text-white/60 hover:text-white text-sm transition-colors">Study Loan for Australia</a></li>
                  <li><a href="/#destinations" className="text-white/60 hover:text-white text-sm transition-colors">Study Loan for Ireland</a></li>
                </>
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-sm font-semibold tracking-wide mb-4">
              {isForex ? "Forex Services" : "Lending Partners"}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {isForex ? (
                <>
                  <li><Link to="/forex" className="text-white/60 hover:text-white text-sm transition-colors">Forex Cards</Link></li>
                  <li><Link to="/forex" className="text-white/60 hover:text-white text-sm transition-colors">Live Exchange Rates</Link></li>
                  <li><Link to="/forex" className="text-white/60 hover:text-white text-sm transition-colors">International Transfers</Link></li>
                  <li><Link to="/forex" className="text-white/60 hover:text-white text-sm transition-colors">Student Travel Insurance</Link></li>
                  <li><Link to="/forex" className="text-white/60 hover:text-white text-sm transition-colors">University Fee Payments</Link></li>
                </>
              ) : (
                <>
                  <li><a href="/#lending-partners" className="text-white/60 hover:text-white text-sm transition-colors">SBI Education Loan</a></li>
                  <li><a href="/#lending-partners" className="text-white/60 hover:text-white text-sm transition-colors">HDFC Credila</a></li>
                  <li><a href="/#lending-partners" className="text-white/60 hover:text-white text-sm transition-colors">ICICI Bank Education Loan</a></li>
                  <li><a href="/#lending-partners" className="text-white/60 hover:text-white text-sm transition-colors">Avanse Financial</a></li>
                  <li><a href="/#lending-partners" className="text-white/60 hover:text-white text-sm transition-colors">Prodigy Finance</a></li>
                  <li><a href="/#lending-partners" className="text-white/60 hover:text-white text-sm transition-colors">Axis Bank Education Loan</a></li>
                </>
              )}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1 grid grid-cols-2 md:grid-cols-1 gap-x-8 gap-y-8">
            <div>
              <h3 className="text-white text-sm font-semibold tracking-wide mb-4">
                Resources
              </h3>
              <ul className="flex flex-col gap-2.5">
                <li><a href="/#how-it-works" className="text-white/60 hover:text-white text-sm transition-colors">Loan Eligibility Checker</a></li>
                <li><a href="/#faqs" className="text-white/60 hover:text-white text-sm transition-colors">Education Loan FAQs</a></li>
                <li><a href="/#how-it-works" className="text-white/60 hover:text-white text-sm transition-colors">Required Loan Documents</a></li>
                <li><Link to="/about" className="text-white/60 hover:text-white text-sm transition-colors">Financing Methodology</Link></li>
                <li><Link to="/forex" className="text-white/60 hover:text-white text-sm transition-colors">Student Forex Services</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white text-sm font-semibold tracking-wide mb-4">
                Company
              </h3>
              <ul className="flex flex-col gap-2.5">
                <li><Link to="/about" className="text-white/60 hover:text-white text-sm transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="text-white/60 hover:text-white text-sm transition-colors">Contact Expert</Link></li>
                <li><a href="/#lending-partners" className="text-white/60 hover:text-white text-sm transition-colors">Partner With Us</a></li>
                <li><Link to="/privacy" className="text-white/60 hover:text-white text-sm transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-white/60 hover:text-white text-sm transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-white/50 text-sm">© 2026 Harbor Finance (harborfintech.com). All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-white/50 hover:text-white text-sm transition-colors duration-200">Privacy Policy</Link>
            <Link to="/terms" className="text-white/50 hover:text-white text-sm transition-colors duration-200">Terms of Service</Link>
            <Link to="/contact" className="text-white/50 hover:text-white text-sm transition-colors duration-200">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}