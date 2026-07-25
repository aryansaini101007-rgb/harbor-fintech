import { useEffect, useSyncExternalStore } from 'react'
import EducationPage from './pages/EducationPage'
import ForexPage from './pages/ForexPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import HarborLandingPage from './pages/HarborLandingPage'
import { ForexDestinationPage } from './features/forex/DestinationPage'

const PAGE_SEO: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Harbor Fintech | Smart Technology. Trusted Guidance. Global Dreams.',
    description:
      'Harbor Fintech is your gateway to global education — premium education loans, international payments and forex, powered by smart technology and trusted guidance.',
  },
  '/education-loan': {
    title: 'Harbor Finance | Education Loans For Study Abroad',
    description:
      'Compare education loans from leading banks and NBFCs with expert guidance from Harbor Finance.',
  },
  '/education': {
    title: 'Harbor Finance | Education Loans For Study Abroad',
    description:
      'Compare education loans from leading banks and NBFCs with expert guidance from Harbor Finance.',
  },
  '/forex': {
    title: 'Harbor Forex — Move Your Money Faster',
    description:
      'Harbor Forex offers the best exchange rates, multi-currency forex cards, and instant international money transfers for students and travellers going abroad.',
  },
  '/about': {
    title: 'About Harbor Fintech',
    description: 'Learn more about Harbor Fintech and our education-loan and forex guidance.',
  },
  '/contact': {
    title: 'Contact Harbor Fintech',
    description: 'Contact Harbor Fintech for education-loan guidance and forex support.',
  },
}

function subscribe(onStoreChange: () => void) {
  window.addEventListener('popstate', onStoreChange)
  return () => window.removeEventListener('popstate', onStoreChange)
}

function usePathname() {
  return useSyncExternalStore(subscribe, () => window.location.pathname, () => '/')
}

function updateSeo(pathname: string) {
  const seo = pathname.startsWith('/forex/destinations/')
    ? {
        title: 'Study Abroad Destination Guide | Harbor Forex',
        description:
          'Study abroad destination guides, tuition details, forex rates and visa updates from Harbor Fintech.',
      }
    : PAGE_SEO[pathname] ?? PAGE_SEO['/']

  document.title = seo.title
  document.querySelector('meta[name="description"]')?.setAttribute('content', seo.description)
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', seo.title)
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', seo.description)
  document
    .querySelector('link[rel="canonical"]')
    ?.setAttribute('href', `https://www.harborfintech.com${pathname}`)
  document
    .querySelector('link[rel="icon"]')
    ?.setAttribute('href', pathname.startsWith('/forex') ? '/forex/favicon.ico' : '/favicon.png')
}

export default function App() {
  const pathname = usePathname()

  useEffect(() => {
    updateSeo(pathname)
    window.scrollTo(0, 0)
  }, [pathname])

  if (pathname.startsWith('/forex/destinations/')) {
    return <ForexDestinationPage slug={pathname.split('/').pop() ?? ''} />
  }

  switch (pathname) {
    case '/forex':
      return <ForexPage />
    case '/about':
      return <AboutPage />
    case '/contact':
      return <ContactPage />
    case '/education':
    case '/education-loan':
      return <EducationPage />
    case '/':
    default:
      return <HarborLandingPage />
  }
}
