import { createFileRoute } from "@tanstack/react-router";
import { SiteChrome } from "../components/shared/SiteChrome";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service | Harbor Finance" },
      {
        name: "description",
        content:
          "Review the Terms of Service for Harbor Finance. Understand the terms, advisory scope, and platform guidelines for education loan comparison.",
      },
      { property: "og:title", content: "Terms of Service | Harbor Finance" },
      {
        property: "og:description",
        content:
          "Clear, transparent terms governing the use of Harbor Finance education loan advisory services.",
      },
      { property: "og:url", content: "https://harborfintech.com/terms" },
    ],
    links: [{ rel: "canonical", href: "https://harborfintech.com/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <SiteChrome variant="education">
      <main id="main-content" className="min-h-screen bg-slate-50 dark:bg-[#070b18] px-4 sm:px-6 pt-32 pb-24 text-slate-800 dark:text-slate-200">
        <article className="mx-auto max-w-4xl rounded-3xl bg-white dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 p-8 sm:p-12 shadow-sm">
          <header className="mb-10 border-b border-slate-200 dark:border-white/10 pb-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              Legal & Trust
            </p>
            <h1 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Terms of Service
            </h1>
            <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
              Last updated: October 2026 • Harbor Finance (harborfintech.com)
            </p>
          </header>

          <div className="space-y-8 text-base leading-relaxed text-slate-600 dark:text-slate-300">
            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using the Harbor Finance website (https://harborfintech.com) and associated advisory services, you acknowledge that you have read, understood, and agreed to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                2. Nature of Services
              </h2>
              <p className="mb-2">
                Harbor Finance operates as an education financing advisory and loan comparison platform. We are not a bank or Non-Banking Financial Company (NBFC) and do not directly disburse loans or extend credit. Our role is to:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Evaluate student academic, course, and financial profiles against lending criteria.</li>
                <li>Connect students with verified partner banks and NBFCs suitable for their requirements.</li>
                <li>Assist applicants with document preparation, application tracking, and coordination.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                3. Free Student Advisory
              </h2>
              <p>
                Our loan guidance, profile matching, and advisory services are 100% free of charge to students and families. Harbor Finance never demands upfront consulting fees, evaluation charges, or hidden processing commissions from students.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                4. Lending Partner Approvals & Disbursals
              </h2>
              <p>
                All final decisions regarding loan eligibility, sanction amount, interest rate (ROI), collateral requirements, margin money, processing fees, and disbursal timelines are made solely by the respective partner lending institutions according to their independent underwriting policies and regulatory frameworks. Harbor Finance does not guarantee loan approval or sanction by any specific lender.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                5. Accurate Information Requirement
              </h2>
              <p>
                You agree to provide true, accurate, current, and complete information during consultation, eligibility checks, and application submission. Supplying misleading or fraudulent academic or financial records may result in immediate disqualification and cancellation of loan processing by partner institutions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                6. Intellectual Property
              </h2>
              <p>
                All trademarks, logos, service marks, website designs, text, and visual content on harborfintech.com are the property of Harbor Finance or licensed for use. Unauthorized reproduction, modification, or distribution is prohibited.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                7. Contact Us
              </h2>
              <p>
                For questions concerning these Terms of Service, please contact our legal and support team:
              </p>
              <div className="mt-3 rounded-2xl bg-slate-100 dark:bg-white/5 p-4 text-sm">
                <p className="font-semibold text-slate-800 dark:text-slate-100">Harbor Finance</p>
                <p>Noida, Uttar Pradesh, India</p>
                <p>Email: <a href="mailto:ayush@harborfintech.com" className="text-indigo-600 dark:text-indigo-400 hover:underline">ayush@harborfintech.com</a></p>
                <p>Phone: <a href="tel:+919258756581" className="text-indigo-600 dark:text-indigo-400 hover:underline">+91 9258756581</a></p>
              </div>
            </section>
          </div>
        </article>
      </main>
    </SiteChrome>
  );
}
