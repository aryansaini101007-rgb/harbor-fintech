export interface BankOffer {
  id: string
  name: string
  shortName: string
  initials: string
  color: string
  textColor?: string
  domain: string
  /** Optional official logo asset in /public/logos (takes priority over live favicon lookup) */
  logo?: string
  type: string
  rate: string
  amount: string
  tenure: string
  processingFee: string
  highlights: string[]
}

export const BANKS: BankOffer[] = [
  {
    id: 'bank-sbi', name: 'State Bank of India', shortName: 'SBI', initials: 'SBI', color: '#22409A', domain: 'sbi.co.in', logo: '/logos/bank-sbi.png', type: 'Public Bank',
    rate: '8.40%', amount: 'Up to ₹1.5 Cr', tenure: '15 Years', processingFee: 'Nil for loans up to ₹20 Lakh',
    highlights: ['Lowest interest rate among partners', 'No processing fee for smaller loan amounts', 'Widely accepted by universities abroad'],
  },
  {
    id: 'bank-hdfc', name: 'HDFC Bank', shortName: 'HDFC Bank', initials: 'HDFC', color: '#EC1C24', domain: 'hdfcbank.com', logo: '/logos/bank-hdfc.png', type: 'Private Bank',
    rate: '8.65%', amount: 'Up to ₹1 Cr', tenure: '15 Years', processingFee: 'Up to 0.5% of loan amount',
    highlights: ['Doorstep document service', 'Fast digital sanctioning', 'Preferred network university tie-ups'],
  },
  {
    id: 'bank-icici', name: 'ICICI Bank', shortName: 'ICICI Bank', initials: 'ICICI', color: '#F58220', domain: 'icicibank.com', logo: '/logos/icici.png', type: 'Private Bank',
    rate: '8.70%', amount: 'Up to ₹1 Cr', tenure: '12 Years', processingFee: 'Up to 1% of loan amount',
    highlights: ['Fast digital application process', 'Doorstep document pickup', 'Flexible repayment options'],
  },
  {
  id: 'bank-poonawalla',
  name: 'Poonawalla Fincorp Limited',
  shortName: 'Poonawalla Fincorp',
  initials: 'PFL',
  color: '#E31E24',
  domain: 'poonawallafincorp.com',
  logo: '/logos/poonawala.png',
  type: 'NBFC',
  rate: '9.50%',
  amount: 'Up to ₹1 Cr',
  tenure: '12 Years',
  processingFee: 'As per loan profile',
  highlights: [
    'Digital-first loan application process',
    'Quick processing and approval',
    'Flexible repayment options',
  ],
},
  {
    id: 'bank-axis', name: 'Axis Bank', shortName: 'Axis Bank', initials: 'AXIS', color: '#97144D', domain: 'axisbank.com', logo: '/logos/bank-axis.png', type: 'Private Bank',
    rate: '8.55%', amount: 'Up to ₹75 Lakh', tenure: '12 Years', processingFee: 'Up to 1% of loan amount',
    highlights: ['Quick eligibility check online', 'Attractive rates for premier institutes', 'Easy EMI options post course completion'],
  },
  {
    id: 'bank-yes', name: 'Yes Bank', shortName: 'Yes Bank', initials: 'YES', color: '#0033A0', domain: 'yesbank.in', logo: '/logos/bank-yes.png', type: 'Private Bank',
    rate: '8.90%', amount: 'Up to ₹80 Lakh', tenure: '12 Years', processingFee: 'Up to 1% of loan amount',
    highlights: ['Digital-first application journey', 'Fast turnaround on approvals', 'Tailored offers for STEM courses'],
  },
  {
    id: 'bank-indusind', name: 'IndusInd Bank', shortName: 'IndusInd Bank', initials: 'IIB', color: '#A6192E', domain: 'indusind.com', logo: '/logos/bank-indusind.png', type: 'Private Bank',
    rate: '8.60%', amount: 'Up to ₹75 Lakh', tenure: '12 Years', processingFee: 'Up to 1% of loan amount',
    highlights: ['Personalised relationship manager support', 'Competitive rates for salaried co-applicants', 'Fast processing turnaround'],
  },
  {
  id: 'bank-tata',
  name: 'Tata Capital Limited',
  shortName: 'Tata Capital',
  initials: 'TATA',
  color: '#005EB8',
  domain: 'tatacapital.com',
  logo: '/logos/bank-tata.png',
  type: 'NBFC',
  rate: '9.25%',
  amount: 'Up to ₹2 Cr',
  tenure: '15 Years',
  processingFee: 'As per loan profile',
  highlights: [
    'Education financing for India and abroad',
    'Flexible repayment options',
    'Simple application and documentation process',
  ],
},
  {
    id: 'bank-pnb', name: 'Punjab National Bank', shortName: 'PNB', initials: 'PNB', color: '#FFC20E', textColor: '#1f2937', domain: 'pnbindia.in', logo: '/logos/pnb.png', type: 'Public Bank',
    rate: '8.45%', amount: 'Up to ₹1.2 Cr', tenure: '15 Years', processingFee: 'Nil for loans up to ₹7.5 Lakh',
    highlights: ['One of India\u2019s largest public banks', 'Competitive public-sector interest rates', 'Wide branch network for support'],
  },
  {
    id: 'bank-idfc', name: 'IDFC FIRST Bank', shortName: 'IDFC FIRST Bank', initials: 'IDFC', color: '#8B1E3F', domain: 'idfcfirstbank.com', logo: '/logos/idfc.png', type: 'Private Bank',
    rate: '9.05%', amount: 'Up to ₹75 Lakh', tenure: '12 Years', processingFee: 'Up to 1.5% of loan amount',
    highlights: ['Fast-growing digital bank', 'Transparent fee structure', 'Simple online documentation'],
  },
  {
    id: 'bank-hdfc-credila', name: 'HDFC Credila', shortName: 'HDFC Credila', initials: 'HC', color: '#2B2644', domain: 'credila.com', logo: '/logos/bank-hdfc-credila.png', type: 'NBFC',
    rate: '10.00%', amount: 'Up to ₹2 Cr', tenure: '15 Years', processingFee: '0.5% – 1% of loan amount',
    highlights: ['Highest loan amount among partners', 'Covers tuition + living expenses', 'Specialised education loan NBFC'],
  },
  {
    id: 'bank-avanse', name: 'Avanse Financial', shortName: 'Avanse', initials: 'AV', color: '#2B2644', domain: 'avanse.com', logo: '/logos/bank-avanse.png', type: 'NBFC',
    rate: '10.50%', amount: 'Up to ₹1.5 Cr', tenure: '15 Years', processingFee: 'Up to 1.5% of loan amount',
    highlights: ['Collateral-free options available', 'Covers 150+ countries', 'Quick approval turnaround'],
  },
  {
    id: 'bank-prodigy-finance', name: 'Prodigy Finance', shortName: 'Prodigy Finance', initials: 'PF', color: '#2B2644', domain: 'prodigyfinance.com', logo: '/logos/prodigy.png',   type: 'International Lender',
    rate: '11.25%', amount: 'Up to $100,000', tenure: '20 Years', processingFee: 'Included in APR',
    highlights: ['No collateral or co-signer required', 'Disburses directly in foreign currency', 'Popular for top global MBA programs'],
  },
  {
    id: 'bank-bob', name: 'Bank of Baroda', shortName: 'Bank of Baroda', initials: 'BOB', color: '#F7941D', textColor: '#1f2937', domain: 'bankofbaroda.in', logo: '/logos/bank-bob.png', type: 'Public Bank',
    rate: '8.50%', amount: 'Up to ₹1.5 Cr', tenure: '15 Years', processingFee: 'Nil for loans up to ₹7.5 Lakh',
    highlights: ['Wide international branch presence', 'Competitive public-sector rates', 'Strong support for premier institutes'],
  },
  {
    id: 'bank-union', name: 'Union Bank of India', shortName: 'Union Bank', initials: 'UBI', color: '#00447C', domain: 'unionbankofindia.co.in',logo: '/logos/union.png', type: 'Public Bank',
    rate: '8.55%', amount: 'Up to ₹1.5 Cr', tenure: '15 Years', processingFee: 'Nil for loans up to ₹7.5 Lakh',
    highlights: ['Government subsidy scheme eligible', 'Long repayment tenure available', 'Large nationwide branch network'],
  },
]