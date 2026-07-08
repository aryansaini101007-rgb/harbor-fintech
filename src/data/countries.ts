export interface CountryInfo {
  id: string
  name: string
  flag: string
  region:
    | 'North America'
    | 'Europe'
    | 'Asia Pacific'
    | 'Middle East'
    | 'South America'
  universities: string
  avgRate: string
  popular?: boolean
  image: string
  description: string
  topUniversities: string[]
}

export const COUNTRIES: CountryInfo[] = [
  {
    id: 'usa',
    name: 'USA',
    flag: '🇺🇸',
    region: 'North America',
    universities: '350+',
    avgRate: '9.40%',
    popular: true,
    image:
      'https://images.unsplash.com/photo-1508433957232-3107f5fd5995?auto=format&fit=crop&w=800&q=85',
    description:
      'Home to world-leading universities with excellent opportunities across STEM, business and research.',
    topUniversities: [
      'MIT',
      'Stanford University',
      'Columbia University',
    ],
  },
  {
    id: 'uk',
    name: 'UK',
    flag: '🇬🇧',
    region: 'Europe',
    universities: '120+',
    avgRate: '9.25%',
    popular: true,
    image:
      'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=800&q=85',
    description:
      'One-year Master’s programs and excellent global career opportunities make the UK a popular destination.',
    topUniversities: [
      'University of Oxford',
      'Imperial College London',
      'University of Edinburgh',
    ],
  },
  {
    id: 'canada',
    name: 'Canada',
    flag: '🇨🇦',
    region: 'North America',
    universities: '80+',
    avgRate: '9.60%',
    popular: true,
    image:
      'https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=800&q=85',
    description:
      'Known for high-quality education, welcoming communities and excellent post-study opportunities.',
    topUniversities: [
      'University of Toronto',
      'McGill University',
      'University of British Columbia',
    ],
  },
  {
    id: 'australia',
    name: 'Australia',
    flag: '🇦🇺',
    region: 'Asia Pacific',
    universities: '70+',
    avgRate: '9.85%',
    popular: true,
    image:
      'https://images.unsplash.com/photo-1524293581917-878a6d017c71?auto=format&fit=crop&w=800&q=85',
    description:
      'World-class research universities, diverse student communities and strong career opportunities.',
    topUniversities: [
      'University of Melbourne',
      'Australian National University',
      'University of Sydney',
    ],
  },
  {
    id: 'germany',
    name: 'Germany',
    flag: '🇩🇪',
    region: 'Europe',
    universities: '60+',
    avgRate: '9.10%',
    image:
      'https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=800&q=85',
    description:
      'A leading destination for engineering, technology and research-focused education.',
    topUniversities: [
      'TU Munich',
      'RWTH Aachen',
      'Heidelberg University',
    ],
  },
  {
    id: 'france',
    name: 'France',
    flag: '🇫🇷',
    region: 'Europe',
    universities: '55+',
    avgRate: '9.35%',
    image:
      'https://images.unsplash.com/photo-1431274172761-fca41d930114?auto=format&fit=crop&w=800&q=85',
    description:
      'Home to prestigious business schools, cultural institutions and growing English-taught programs.',
    topUniversities: [
      'Sorbonne University',
      'HEC Paris',
      'Sciences Po',
    ],
  },
  {
    id: 'uae',
    name: 'UAE',
    flag: '🇦🇪',
    region: 'Middle East',
    universities: '40+',
    avgRate: '10.10%',
    image:
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=85',
    description:
      'A fast-growing global education hub with international campuses and excellent career opportunities.',
    topUniversities: [
      'NYU Abu Dhabi',
      'American University of Sharjah',
      'Khalifa University',
    ],
  },
  {
    id: 'brazil',
    name: 'Brazil',
    flag: '🇧🇷',
    region: 'South America',
    universities: '35+',
    avgRate: '10.25%',
    image:
      'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=800&q=85',
    description:
      'A major Latin American education destination with strong research and engineering programs.',
    topUniversities: [
      'University of São Paulo',
      'University of Campinas',
      'PUC-Rio',
    ],
  },
  {
    id: 'georgia',
    name: 'Georgia',
    flag: '🇬🇪',
    region: 'Europe',
    universities: '30+',
    avgRate: '9.55%',
    image:
      'https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&w=800&q=85',
    description:
      'An affordable and increasingly popular study destination with strong medical and international programs.',
    topUniversities: [
      'Tbilisi State University',
      'University of Georgia',
      'Caucasus University',
    ],
  },
  {
    id: 'new-zealand',
    name: 'New Zealand',
    flag: '🇳🇿',
    region: 'Asia Pacific',
    universities: '25+',
    avgRate: '9.70%',
    image:
      'https://images.unsplash.com/photo-1469521669194-babb45599def?auto=format&fit=crop&w=800&q=85',
    description:
      'Known for high-quality education, beautiful landscapes and a safe international student environment.',
    topUniversities: [
      'University of Auckland',
      'University of Otago',
      'Victoria University of Wellington',
    ],
  },
  {
    id: 'netherlands',
    name: 'Netherlands',
    flag: '🇳🇱',
    region: 'Europe',
    universities: '45+',
    avgRate: '9.30%',
    image:
      'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&w=800&q=85',
    description:
      'A highly international study destination with innovative universities and many English-taught programs.',
    topUniversities: [
      'University of Amsterdam',
      'Delft University of Technology',
      'Erasmus University Rotterdam',
    ],
  },
  {
    id: 'sweden',
    name: 'Sweden',
    flag: '🇸🇪',
    region: 'Europe',
    universities: '35+',
    avgRate: '9.45%',
    image:
      'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&w=800&q=85',
    description:
      'A global leader in innovation, sustainability and research-focused higher education.',
    topUniversities: [
      'KTH Royal Institute of Technology',
      'Lund University',
      'Uppsala University',
    ],
  },
  {
    id: 'singapore',
    name: 'Singapore',
    flag: '🇸🇬',
    region: 'Asia Pacific',
    universities: '25+',
    avgRate: '10.20%',
    popular: true,
    image:
  'https://images.unsplash.com/photo-1496939376851-89342e90adcd?auto=format&fit=crop&w=800&q=85',
    description:
      'A world-class education and business hub with excellent universities and global career opportunities.',
    topUniversities: [
      'National University of Singapore',
      'Nanyang Technological University',
      'Singapore Management University',
    ],
  },
  {
    id: 'poland',
    name: 'Poland',
    flag: '🇵🇱',
    region: 'Europe',
    universities: '50+',
    avgRate: '9.15%',
    image:
      'https://images.unsplash.com/photo-1519197924294-4ba991a11128?auto=format&fit=crop&w=800&q=85',
    description:
      'An affordable European destination with respected universities and a growing international student community.',
    topUniversities: [
      'University of Warsaw',
      'Jagiellonian University',
      'Warsaw University of Technology',
    ],
  },
  {
    id: 'austria',
    name: 'Austria',
    flag: '🇦🇹',
    region: 'Europe',
    universities: '35+',
    avgRate: '9.50%',
    image:
      'https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&w=800&q=85',
    description:
      'A high-quality European education destination known for research, culture and excellent student life.',
    topUniversities: [
      'University of Vienna',
      'TU Wien',
      'University of Innsbruck',
    ],
  },
  {
    id: 'japan',
    name: 'Japan',
    flag: '🇯🇵',
    region: 'Asia Pacific',
    universities: '80+',
    avgRate: '9.90%',
    image:
      'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=85',
    description:
      'A global technology and research leader offering excellent education and unique cultural experiences.',
    topUniversities: [
      'University of Tokyo',
      'Kyoto University',
      'Osaka University',
    ],
  },
  {
    id: 'italy',
    name: 'Italy',
    flag: '🇮🇹',
    region: 'Europe',
    universities: '60+',
    avgRate: '9.40%',
    image:
      'https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=800&q=85',
    description:
      'A historic education destination known for architecture, design, engineering, business and the arts.',
    topUniversities: [
      'University of Bologna',
      'Politecnico di Milano',
      'Sapienza University of Rome',
    ],
  },
]