import { createFileRoute } from "@tanstack/react-router";
import { SiteChrome } from "../components/shared/SiteChrome";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Harbor Finance" },
      {
        name: "description",
        content:
          "Read the Harbor Finance Privacy Policy. Learn how we collect, protect, and handle your personal and financial information when exploring study abroad loans.",
      },
      { property: "og:title", content: "Privacy Policy | Harbor Finance" },
      {
        property: "og:description",
        content:
          "Transparency and security are foundational to Harbor Finance. Read how your loan application data is protected.",
      },
      { property: "og:url", content: "https://harborfintech.com/privacy" },
    ],
    links: [{ rel: "canonical", href: "https://harborfintech.com/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <SiteChrome variant="education">
      <main id="main-content" className="min-h-screen bg-slate-50 dark:bg-[#070b18] px-4 sm:px-6 pt-32 pb-24 text-slate-800 dark:text-slate-200">
        <article className="mx-auto max-w-4xl rounded-3xl bg-white dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 p-8 sm:p-12 shadow-sm">
          <header className="mb-10 border-b border-slate-200 dark:border-white/10 pb-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              Legal & Trust
            </p>
            <h1 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Privacy Policy
            </h1>
            <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
              Last updated: October 2026 • Harbor Finance (harborfintech.com)
            </p>
          </header>

          <div className="space-y-8 text-base leading-relaxed text-slate-600 dark:text-slate-300">
            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                1. Introduction
              </h2>
              <p>
                At Harbor Finance (“we”, “our”, or “us”), we respect your privacy and are committed to protecting the personal and financial information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your details when you visit our website (https://harborfintech.com), use our loan comparison platform, or submit an education loan advisory request.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                2. Information We Collect
              </h2>
              <p className="mb-2">We collect information that you voluntarily provide when applying or inquiring about financing options:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li><strong>Contact Information:</strong> Full name, email address, phone number, and city of residence.</li>
                <li><strong>Academic & Destination Data:</strong> Target country, university or college, degree level, and admission status.</li>
                <li><strong>Loan Requirements:</strong> Estimated loan amount needed, co-applicant profile, and collateral preference (secured vs. collateral-free).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                3. How We Use Your Information
              </h2>
              <p className="mb-2">Your information is used strictly to provide you with tailored education loan advisory services, including:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Evaluating your eligibility against criteria from our partner network of 20+ banks and NBFCs.</li>
                <li>Assigning a dedicated loan advisor to assist you through documentation, pre-sanction, and disbursal.</li>
                <li>Transmitting applications to shortlisted lending institutions upon your explicit consent.</li>
                <li>Communicating status updates, rate comparisons, and policy requirements via email or phone.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                4. Data Protection & Security
              </h2>
              <p>
                We implement industry-standard technical, administrative, and physical safeguards to prevent unauthorized access, disclosure, or misuse of your personal data. All communication through harborfintech.com is encrypted using Transport Layer Security (TLS/HTTPS). We do not sell your personal information to third-party marketers or unrelated commercial services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                5. Sharing with Lending Partners
              </h2>
              <p>
                To secure loan approvals, your verified application details are shared exclusively with regulated partner banks and Non-Banking Financial Companies (NBFCs) that you select and authorize. Each partner institution operates in accordance with Reserve Bank of India (RBI) guidelines and applicable data protection norms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                6. Your Rights
              </h2>
              <p>
                You retain the right to review, update, or request the deletion of your personal details from our active advisory database at any point. To exercise these rights, please contact our privacy representative at ayush@harborfintech.com.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                7. Contact Information
              </h2>
              <p>
                If you have questions or concerns regarding this Privacy Policy, please reach out to us:
              </p>
              <div className="mt-3 rounded-2xl bg-slate-100 dark:bg-white/5 p-4 text-sm">
                <p className="font-semibold text-slate-800 dark:text-slate-100">Harbor Finance</p>
                <p>Office: Noida, Uttar Pradesh, India</p>
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
