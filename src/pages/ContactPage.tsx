import { Mail, MapPin, Phone } from 'lucide-react'
import { SiteChrome } from '../components/shared/SiteChrome'

export default function ContactPage() {
  return (
    <SiteChrome variant="education">
      <main className="min-h-screen bg-white px-6 pb-20 pt-36 dark:bg-[#0B1023]">
        <section className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 shadow-xl dark:border-zinc-800 dark:bg-zinc-900 sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">Harbor Finance</p>
          <h1 className="mt-4 text-4xl font-bold text-slate-900 dark:text-white">Contact us</h1>
          <p className="mt-4 max-w-xl text-slate-600 dark:text-slate-300">Speak with our team about your education loan or study-abroad plans.</p>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            <a className="flex items-center gap-3 text-slate-700 dark:text-slate-200" href="tel:+919258756581"><Phone className="h-5 w-5 text-indigo-500" />+91 9258756581</a>
            <a className="flex items-center gap-3 text-slate-700 dark:text-slate-200" href="mailto:info@harborfinance.com"><Mail className="h-5 w-5 text-indigo-500" />Email us</a>
            <p className="flex items-start gap-3 text-slate-700 dark:text-slate-200"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-indigo-500" />Noida, Uttar Pradesh, India</p>
          </div>
        </section>
      </main>
    </SiteChrome>
  )
}
