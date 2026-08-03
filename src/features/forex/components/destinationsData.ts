export interface College {
  name: string;
  city: string;
  ranking?: string;
  tuition: string;
  image?: string;
  established?: string;
  programs?: string[];
  admissionNote?: string;
  website?: string;
}

export interface DestinationInfo {
  slug: string;
  name: string;
  flag: string;
  img: string;
  currency: string;
  currencyCode: string;
  livingCost: string;
  tuitionRange: string;
  intake: string;
  visaType: string;
  workRights: string;
  processingTime: string;
  summary: string;
  highlights: string[];
  forexTips: string[];
  admissionCriteria?: string[];
  colleges: College[];
  latest: { date: string; note: string }[];
}


export const DESTINATIONS: DestinationInfo[] = [
  {
    slug: "canada",
    name: "Canada",
    flag: "🇨🇦",
    img: "/forex/images/dest-canada.jpg",
    currency: "Canadian Dollar",
    currencyCode: "CAD",
    livingCost: "CAD 1,200–1,800 / month (₹65k avg)",
    tuitionRange: "₹18–28 Lakh / year",
    intake: "Sept (Fall) · Jan (Winter) · May (Summer)",
    visaType: "Study Permit + SDS category",
    workRights: "20 hrs/week during study, full-time on breaks",
    processingTime: "4–8 weeks (SDS)",
    summary:
      "Canada is India's #1 study destination with strong PGWP work rights, a clear PR pathway and affordable tuition versus USA/UK.",
    highlights: [
      "3-year Post-Graduation Work Permit (PGWP)",
      "GIC of CAD 20,635 required for SDS",
      "Direct PR pathway via Express Entry",
      "Recognised RBI + FEMA compliant remittance corridor",
    ],
    forexTips: [
      "Fund your Scotiabank / ICICI / CIBC GIC via Harbor at live interbank CAD/INR",
      "Load a Harbor Forex Card in CAD to avoid 3.5% bank markup on swipes",
      "Wire tuition directly to university INR-CAD SWIFT with our A2 form service",
    ],
    admissionCriteria: [
      "12th grade with 65%+ (UG) or Bachelor's with 65%+ (PG)",
      "IELTS 6.0–6.5 overall (SDS: 6.0 minimum per band)",
      "GRE optional; SOP + LORs required for most PGs",
      "Proof of funds: GIC CAD 20,635 + first year tuition",
    ],
    colleges: [
      { name: "University of Toronto", city: "Toronto", ranking: "QS #25", tuition: "CAD 45,690 / yr", image: "/forex/images/universities/university-of-toronto.webp" },
      { name: "University of British Columbia", city: "Vancouver", ranking: "QS #34", tuition: "CAD 42,690 / yr", image: "/forex/images/universities/university-of-british-columbia.webp" },
      { name: "McGill University", city: "Montreal", ranking: "QS #29", tuition: "CAD 33,000 / yr", image: "/forex/images/universities/mcgill-university.webp" },
      { name: "University of Waterloo", city: "Waterloo", ranking: "QS #112", tuition: "CAD 42,000 / yr", image: "/forex/images/universities/university-of-waterloo.webp" },
      { name: "University of Alberta", city: "Edmonton", ranking: "QS #96", tuition: "CAD 30,000 / yr", image: "/forex/images/universities/university-of-alberta.webp" },
      { name: "Conestoga College", city: "Kitchener", tuition: "CAD 16,500 / yr", image: "/forex/images/universities/conestoga-college.webp" },
    ],
    latest: [
      { date: "Jul 2026", note: "IRCC increased GIC requirement to CAD 20,635 for cost-of-living proof." },
      { date: "Jun 2026", note: "SDS processing back to 4 weeks after visa officer surge." },
      { date: "May 2026", note: "PGWP eligibility now tied to PGWP-eligible programme list." },
    ],
  },
  {
    slug: "usa",
    name: "USA",
    flag: "🇺🇸",
    img: "/forex/images/dest-usa.jpg",
    currency: "US Dollar",
    currencyCode: "USD",
    livingCost: "USD 1,000–2,000 / month (₹85k avg)",
    tuitionRange: "₹25–45 Lakh / year",
    intake: "Fall (Aug) · Spring (Jan)",
    visaType: "F-1 Student Visa",
    workRights: "20 hrs/week on-campus, CPT/OPT after 1 year",
    processingTime: "3–8 weeks after DS-160 + interview",
    summary:
      "USA is the top destination for STEM & MBA — 3-year OPT for STEM graduates and the world's densest tech job market.",
    highlights: [
      "3-year OPT extension for STEM programmes",
      "H-1B lottery access after OPT",
      "I-20 + SEVIS fee (USD 350) required",
      "Proof of funds for full first year at visa interview",
    ],
    forexTips: [
      "Pay SEVIS + visa fee at live USD/INR via Harbor — save ~₹1,200 vs bank",
      "Wire tuition through our GIFT-city USD corridor for zero SWIFT charges",
      "Carry USD 3,000 in Harbor Forex Card + USD 500 cash for first month",
    ],
    admissionCriteria: [
      "12th grade with 70%+ (UG) or Bachelor's with 65%+ CGPA 3.0+ (PG)",
      "SAT 1300+ (UG top schools), GRE 310+ / GMAT 650+ (PG)",
      "TOEFL 90+ / IELTS 6.5+ / Duolingo 110+",
      "Strong SOP, 2–3 LORs, resume & essays",
    ],
    colleges: [
      { name: "MIT", city: "Cambridge, MA", ranking: "QS #1", tuition: "USD 60,156 / yr", image: "/forex/images/universities/mit.webp" },
      { name: "Stanford University", city: "Stanford, CA", ranking: "QS #6", tuition: "USD 61,731 / yr", image: "/forex/images/universities/stanford-university.webp" },
      { name: "Harvard University", city: "Cambridge, MA", ranking: "QS #4", tuition: "USD 57,261 / yr", image: "/forex/images/universities/harvard-university.webp" },
      { name: "Carnegie Mellon", city: "Pittsburgh, PA", ranking: "QS #58", tuition: "USD 63,829 / yr", image: "/forex/images/universities/carnegie-mellon.webp" },
      { name: "UC Berkeley", city: "Berkeley, CA", ranking: "QS #12", tuition: "USD 46,326 / yr", image: "/forex/images/universities/uc-berkeley.webp" },
      { name: "University of Illinois Urbana-Champaign", city: "Urbana, IL", tuition: "USD 38,584 / yr", image: "/forex/images/universities/university-of-illinois-urbana-champaign.webp" },
    ],
    latest: [
      { date: "Jul 2026", note: "US embassy F-1 slots opened for Fall '26 intake in Delhi, Mumbai, Chennai, Kolkata, Hyderabad." },
      { date: "Jun 2026", note: "SEVIS fee revised to USD 350." },
      { date: "Apr 2026", note: "STEM OPT extension list expanded — 22 new majors added." },
    ],
  },
  {
    slug: "uk",
    name: "UK",
    flag: "🇬🇧",
    img: "/forex/images/dest-uk.jpg",
    currency: "British Pound",
    currencyCode: "GBP",
    livingCost: "GBP 1,023–1,334 / month (₹80k avg)",
    tuitionRange: "₹20–32 Lakh / year",
    intake: "September · January",
    visaType: "Student Visa (Tier 4) + Graduate Route",
    workRights: "20 hrs/week during term, full-time on holidays",
    processingTime: "3 weeks (priority: 5 days)",
    summary:
      "1-year Master's degrees, Graduate Route 2-year post-study work visa and lower total cost than USA make UK a favourite for PG students.",
    highlights: [
      "2-year post-study Graduate Route (3 for PhD)",
      "1-year Master's programmes = 40% cost saving",
      "CAS letter + IHS (£776/yr) required",
      "Maintenance funds: £1,483/mo London, £1,136/mo outside",
    ],
    forexTips: [
      "Lock GBP/INR through Harbor Rate-Lock — hedge for 90 days before fee payment",
      "IHS + visa fee payable in INR-GBP through our student concierge",
      "Harbor Multi-Currency Card carries GBP + EUR — perfect for UK + EU travel",
    ],
    admissionCriteria: [
      "12th with 70%+ (UG) · Bachelor's 60%+ / 2:1 honours (PG)",
      "IELTS 6.5 overall (6.0 per band) — UKVI",
      "GMAT 600+ for top MBA programmes",
      "Personal Statement + 2 references",
    ],
    colleges: [
      { name: "University of Oxford", city: "Oxford", ranking: "QS #3", tuition: "GBP 33,000 / yr", image: "/forex/images/universities/university-of-oxford.webp" },
      { name: "University of Cambridge", city: "Cambridge", ranking: "QS #5", tuition: "GBP 33,972 / yr", image: "/forex/images/universities/university-of-cambridge.webp" },
      { name: "Imperial College London", city: "London", ranking: "QS #2", tuition: "GBP 37,900 / yr", image: "/forex/images/universities/imperial-college-london.webp" },
      { name: "UCL", city: "London", ranking: "QS #9", tuition: "GBP 31,200 / yr", image: "/forex/images/universities/ucl.webp" },
      { name: "King's College London", city: "London", ranking: "QS #40", tuition: "GBP 30,240 / yr", image: "/forex/images/universities/king-s-college-london.webp" },
      { name: "University of Manchester", city: "Manchester", ranking: "QS #34", tuition: "GBP 28,500 / yr", image: "/forex/images/universities/university-of-manchester.webp" },
    ],
    latest: [
      { date: "Jul 2026", note: "IHS increased to £776/year for students effective January 2026." },
      { date: "May 2026", note: "Graduate Route retained after MAC review — 2 years unchanged." },
      { date: "Apr 2026", note: "Dependants restricted to research programmes only." },
    ],
  },
  {
    slug: "australia",
    name: "Australia",
    flag: "🇦🇺",
    img: "/forex/images/dest-australia.jpg",
    currency: "Australian Dollar",
    currencyCode: "AUD",
    livingCost: "AUD 1,800–2,500 / month (₹70k avg)",
    tuitionRange: "₹18–30 Lakh / year",
    intake: "February · July · November",
    visaType: "Subclass 500 Student Visa",
    workRights: "48 hrs/fortnight during term, unlimited on breaks",
    processingTime: "4–6 weeks",
    summary:
      "High quality of life, strong PR pipeline via Subclass 485 Temporary Graduate Visa and top-30 universities in Melbourne & Sydney.",
    highlights: [
      "2–4 year post-study work visa (Subclass 485)",
      "Financial capacity: AUD 29,710 required from May 2026",
      "OSHC health cover mandatory (AUD 700/yr avg)",
      "GTE / GS statement critical to visa grant",
    ],
    forexTips: [
      "Show AUD funds in Harbor Multi-Currency account — accepted for GTE evidence",
      "Pay OSHC + tuition through Harbor with zero SWIFT charge",
      "AUD/INR is volatile — use our forward booking for large tuition payments",
    ],
    admissionCriteria: [
      "12th with 65%+ (UG) · Bachelor's 65%+ (PG)",
      "IELTS 6.5 (6.0 per band) or PTE 58+",
      "GS (Genuine Student) statement mandatory",
      "OSHC health cover + AUD 29,710 living proof",
    ],
    colleges: [
      { name: "University of Melbourne", city: "Melbourne", ranking: "QS #13", tuition: "AUD 47,000 / yr", image: "/forex/images/universities/university-of-melbourne.webp" },
      { name: "University of Sydney", city: "Sydney", ranking: "QS #18", tuition: "AUD 50,500 / yr", image: "/forex/images/universities/university-of-sydney.webp" },
      { name: "UNSW Sydney", city: "Sydney", ranking: "QS #19", tuition: "AUD 51,840 / yr", image: "/forex/images/universities/unsw-sydney.webp" },
      { name: "Monash University", city: "Melbourne", ranking: "QS #37", tuition: "AUD 45,000 / yr", image: "/forex/images/universities/monash-university.webp" },
      { name: "Australian National University", city: "Canberra", ranking: "QS #30", tuition: "AUD 47,940 / yr", image: "/forex/images/universities/australian-national-university.webp" },
      { name: "University of Queensland", city: "Brisbane", ranking: "QS #40", tuition: "AUD 44,000 / yr", image: "/forex/images/universities/university-of-queensland.webp" },
    ],
    latest: [
      { date: "Jul 2026", note: "Financial capacity requirement raised to AUD 29,710." },
      { date: "May 2026", note: "GS (Genuine Student) test replaces GTE for all new applicants." },
      { date: "Mar 2026", note: "Post-study work rights standardised to 2 yrs Bachelor / 3 yrs Master." },
    ],
  },
  {
    slug: "germany",
    name: "Germany",
    flag: "🇩🇪",
    img: "/forex/images/dest-germany.jpg",
    currency: "Euro",
    currencyCode: "EUR",
    livingCost: "EUR 850–1,100 / month (₹75k avg)",
    tuitionRange: "₹0–5 Lakh / year (public: free!)",
    intake: "Winter (Oct) · Summer (Apr)",
    visaType: "National Visa + Residence Permit",
    workRights: "120 full or 240 half days per year",
    processingTime: "6–12 weeks",
    summary:
      "Public universities charge ZERO tuition — pay only ~€300 semester fee. Strong engineering ecosystem and 18-month job-seeker visa post-study.",
    highlights: [
      "Blocked account of €11,904 required for visa",
      "18-month post-study job-seeker residence permit",
      "APS certificate mandatory for Indian applicants",
      "German A1/A2 helpful, English programmes available",
    ],
    forexTips: [
      "Open your Fintiba / Expatrio blocked account and fund via Harbor at live EUR/INR",
      "Zero setup fee for Harbor + Fintiba corridor for Indian students",
      "EUR Multi-Currency Card usable across all Schengen countries",
    ],
    admissionCriteria: [
      "APS certificate (mandatory for Indians)",
      "13 years of schooling OR 1 yr Studienkolleg after 12th",
      "IELTS 6.5 / TOEFL 90 for English programmes",
      "German A1–A2 helpful, B2 for German-taught",
    ],
    colleges: [
      { name: "TU Munich", city: "Munich", ranking: "QS #28", tuition: "EUR 0 (€144 semester)", image: "/forex/images/universities/tu-munich.webp" },
      { name: "LMU Munich", city: "Munich", ranking: "QS #59", tuition: "EUR 0", image: "/forex/images/universities/lmu-munich.webp" },
      { name: "RWTH Aachen", city: "Aachen", ranking: "QS #99", tuition: "EUR 0", image: "/forex/images/universities/rwth-aachen.webp" },
      { name: "Heidelberg University", city: "Heidelberg", ranking: "QS #84", tuition: "EUR 3,000 / yr (BW)", image: "/forex/images/universities/heidelberg-university.webp" },
      { name: "TU Berlin", city: "Berlin", ranking: "QS #154", tuition: "EUR 0", image: "/forex/images/universities/tu-berlin.webp" },
      { name: "KIT Karlsruhe", city: "Karlsruhe", tuition: "EUR 3,000 / yr (BW)", image: "/forex/images/universities/kit-karlsruhe.webp" },
    ],
    latest: [
      { date: "Jul 2026", note: "Blocked account minimum raised to €11,904 for 2026 intake." },
      { date: "May 2026", note: "Chancenkarte points-based work permit live — 20 hrs/week during job search." },
      { date: "Feb 2026", note: "APS Delhi now issues digital certificates in 3 weeks." },
    ],
  },
  {
    slug: "france",
    name: "France",
    flag: "🇫🇷",
    img: "/forex/images/dest-france.jpg",
    currency: "Euro",
    currencyCode: "EUR",
    livingCost: "EUR 900–1,200 / month (₹78k avg)",
    tuitionRange: "₹8–18 Lakh / year",
    intake: "September · January",
    visaType: "VLS-TS Student Visa",
    workRights: "964 hrs/year (~20 hrs/week)",
    processingTime: "2–4 weeks via Campus France",
    summary:
      "Home to top business schools (HEC, INSEAD) and engineering écoles. Post-study 5-year Talent Passport available for Master's grads.",
    highlights: [
      "Campus France 'Etudes en France' process mandatory",
      "APS = €615/mo proof of funds",
      "5-year renewable Talent Passport for jobseekers",
      "Public universities: €2,770 Bachelor / €3,770 Master",
    ],
    forexTips: [
      "Campus France + tuition wire in EUR at live rate through Harbor",
      "CAF housing subsidy — receive EUR into Harbor Multi-Currency and convert as needed",
    ],
    admissionCriteria: [
      "12th with 60%+ (UG) · Bachelor's 60%+ (PG)",
      "Campus France 'Etudes en France' interview",
      "IELTS 6.5+ / TOEFL 90+ (English programmes)",
      "GMAT 600+ for HEC/INSEAD/ESSEC",
    ],
    colleges: [
      { name: "PSL University", city: "Paris", ranking: "QS #24", tuition: "EUR 3,770 / yr", image: "/forex/images/universities/psl-university.webp" },
      { name: "École Polytechnique", city: "Palaiseau", ranking: "QS #38", tuition: "EUR 15,500 / yr", image: "/forex/images/universities/cole-polytechnique.webp" },
      { name: "HEC Paris", city: "Jouy-en-Josas", tuition: "EUR 44,500 (MiM)", image: "/forex/images/universities/hec-paris.webp" },
      { name: "Sorbonne University", city: "Paris", ranking: "QS #59", tuition: "EUR 3,770 / yr", image: "/forex/images/universities/sorbonne-university.webp" },
      { name: "Sciences Po", city: "Paris", tuition: "EUR 14,720 / yr", image: "/forex/images/universities/sciences-po.webp" },
    ],
    latest: [
      { date: "Jul 2026", note: "Non-EU tuition frozen at €2,770 / €3,770 for 2026-27." },
      { date: "Apr 2026", note: "Talent Passport extended to 5 years for STEM Master's grads." },
    ],
  },
  {
    slug: "ireland",
    name: "Ireland",
    flag: "🇮🇪",
    img: "/forex/images/dest-ireland.jpg",
    currency: "Euro",
    currencyCode: "EUR",
    livingCost: "EUR 1,000–1,400 / month (₹82k avg)",
    tuitionRange: "₹16–24 Lakh / year",
    intake: "September · January",
    visaType: "Stamp 2 Student Permission",
    workRights: "20 hrs/week term, 40 hrs breaks",
    processingTime: "4–8 weeks",
    summary:
      "English-speaking EU country with 2-year Stamp 1G post-study work visa for Master's students. Hub for Google, Meta, LinkedIn EMEA HQs.",
    highlights: [
      "2-year Stamp 1G graduate work visa",
      "€10,000 proof of funds for visa",
      "Private medical insurance mandatory",
      "PR pathway via Critical Skills Employment Permit",
    ],
    forexTips: [
      "Wire fees to TCD / UCD / DCU through Harbor's EUR corridor",
      "Show €10,000 in Harbor Multi-Currency EUR wallet for visa proof",
    ],
    admissionCriteria: [
      "12th with 70%+ (UG) · Bachelor's 60%+ / 2:1 (PG)",
      "IELTS 6.5 (6.0 per band)",
      "€10,000 proof of funds",
      "SOP + 2 academic/professional references",
    ],
    colleges: [
      { name: "Trinity College Dublin", city: "Dublin", ranking: "QS #87", tuition: "EUR 22,000 / yr", image: "/forex/images/universities/trinity-college-dublin.webp" },
      { name: "University College Dublin", city: "Dublin", ranking: "QS #126", tuition: "EUR 26,900 / yr", image: "/forex/images/universities/university-college-dublin.webp" },
      { name: "University of Galway", city: "Galway", tuition: "EUR 18,750 / yr", image: "/forex/images/universities/university-of-galway.webp" },
      { name: "Dublin City University", city: "Dublin", tuition: "EUR 16,500 / yr", image: "/forex/images/universities/dublin-city-university.webp" },
      { name: "University of Limerick", city: "Limerick", tuition: "EUR 17,000 / yr", image: "/forex/images/universities/university-of-limerick.webp" },
    ],
    latest: [
      { date: "Jun 2026", note: "Stamp 1G confirmed at 24 months for Level 9 Master's graduates." },
      { date: "Mar 2026", note: "New Critical Skills list adds AI, ML, Cybersecurity roles." },
    ],
  },
  {
    slug: "singapore",
    name: "Singapore",
    flag: "🇸🇬",
    img: "/forex/images/dest-singapore.jpg",
    currency: "Singapore Dollar",
    currencyCode: "SGD",
    livingCost: "SGD 1,200–1,800 / month (₹90k avg)",
    tuitionRange: "₹20–35 Lakh / year",
    intake: "August · January",
    visaType: "Student Pass (ICA)",
    workRights: "16 hrs/week term (NUS, NTU, SMU only)",
    processingTime: "2–4 weeks",
    summary:
      "Asia's finance & tech hub — NUS & NTU are top 20 globally. 1-year post-study visit pass and clear Employment Pass pathway.",
    highlights: [
      "NUS & NTU ranked top 20 QS globally",
      "Tuition Grant halves fees in exchange for 3-yr bond",
      "SGD 30,000 proof of funds",
      "Excellent safety and public transport",
    ],
    forexTips: [
      "Tuition Grant applicants pay only reduced amount — Harbor handles SGD wire",
      "Harbor Multi-Currency SGD card avoids DBS foreign txn markup",
    ],
    admissionCriteria: [
      "12th with 85%+ (UG NUS/NTU) · Bachelor's 70%+ CGPA (PG)",
      "SAT 1350+ / A-Level equivalents · GRE 320+ / GMAT 680+",
      "IELTS 6.5+ / TOEFL 92+",
      "Tuition Grant + 3-year bond option available",
    ],
    colleges: [
      { name: "National University of Singapore", city: "Singapore", ranking: "QS #8", tuition: "SGD 38,200 / yr", image: "/forex/images/universities/national-university-of-singapore.webp" },
      { name: "Nanyang Technological University", city: "Singapore", ranking: "QS #15", tuition: "SGD 35,300 / yr", image: "/forex/images/universities/nanyang-technological-university.webp" },
      { name: "Singapore Management University", city: "Singapore", tuition: "SGD 46,150 / yr", image: "/forex/images/universities/singapore-management-university.webp" },
      { name: "SUTD", city: "Singapore", tuition: "SGD 30,900 / yr", image: "/forex/images/universities/sutd.webp" },
    ],
    latest: [
      { date: "Jun 2026", note: "Tuition Grant Scheme continued for AY 2026-27." },
      { date: "Apr 2026", note: "COMPASS Employment Pass framework favours STEM graduates." },
    ],
  },
  {
    slug: "newzealand",
    name: "New Zealand",
    flag: "🇳🇿",
    img: "/forex/images/dest-newzealand.jpg",
    currency: "New Zealand Dollar",
    currencyCode: "NZD",
    livingCost: "NZD 1,250–1,600 / month (₹68k avg)",
    tuitionRange: "₹15–26 Lakh / year",
    intake: "February · July",
    visaType: "Fee-Paying Student Visa",
    workRights: "20 hrs/week term, full-time on breaks",
    processingTime: "6–8 weeks",
    summary:
      "Safe, scenic, and affordable — up to 3 years post-study work visa. Strong pathway to PR through Green List occupations.",
    highlights: [
      "1–3 year post-study work visa by level",
      "NZD 20,000 living cost proof",
      "Insurance mandatory (~NZD 700/yr)",
      "Green List = fast-track PR",
    ],
    forexTips: [
      "Book NZD/INR forward with Harbor — currency swings hurt semester budgets",
      "Multi-Currency Card usable in Australia + NZ on one wallet",
    ],
    admissionCriteria: [
      "12th with 65%+ (UG) · Bachelor's 60%+ (PG)",
      "IELTS 6.0 (5.5 per band) UG · 6.5 (6.0) PG",
      "NZD 20,000 living cost proof",
      "SOP + academic transcripts + insurance",
    ],
    colleges: [
      { name: "University of Auckland", city: "Auckland", ranking: "QS #65", tuition: "NZD 42,000 / yr", image: "/forex/images/universities/university-of-auckland.webp" },
      { name: "University of Otago", city: "Dunedin", ranking: "QS #206", tuition: "NZD 33,000 / yr", image: "/forex/images/universities/university-of-otago.webp" },
      { name: "Victoria University of Wellington", city: "Wellington", tuition: "NZD 34,500 / yr", image: "/forex/images/universities/victoria-university-of-wellington.webp" },
      { name: "University of Canterbury", city: "Christchurch", tuition: "NZD 32,000 / yr", image: "/forex/images/universities/university-of-canterbury.webp" },
      { name: "Massey University", city: "Palmerston North", tuition: "NZD 30,000 / yr", image: "/forex/images/universities/massey-university.webp" },
    ],
    latest: [
      { date: "Jul 2026", note: "Post-study work visa extended for Master's graduates to 3 years." },
      { date: "May 2026", note: "Green List adds 20 new tech and healthcare roles." },
    ],
  },
];

export function getDestination(slug: string) {
  return DESTINATIONS.find((d) => d.slug === slug);
}
