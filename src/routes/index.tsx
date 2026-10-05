import { createFileRoute } from "@tanstack/react-router";
import { lazy } from "react";
import { ClientPage } from "../components/shared/ClientPage";

const EducationPage = lazy(() => import("../pages/EducationPage"));

const homepageFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the maximum loan amount I can get?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Depending on the lender and your course, you can get education loans ranging from ₹75 Lakh up to ₹2 Crore, or the international equivalent for overseas lenders.",
      },
    },
    {
      "@type": "Question",
      "name": "Do I need collateral for an education loan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Not always. Several of our partner NBFCs and international lenders offer collateral-free loans based on your admit, course and co-applicant profile.",
      },
    },
    {
      "@type": "Question",
      "name": "How long does loan approval take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "With most partner lenders, you can receive a sanction letter within 48 hours of submitting complete documentation.",
      },
    },
    {
      "@type": "Question",
      "name": "Is the advisory service really free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Yes. Our advisors are 100% free for students — we are compensated by our lending partners, not by you.",
      },
    },
    {
      "@type": "Question",
      "name": "Can I compare multiple banks at once?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Yes, our platform lets you compare interest rates, processing fees, and tenure across 20+ lenders in a single view.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://harborfintech.com/",
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Harbor Finance | Education Loans for Study Abroad" },
      {
        name: "description",
        content:
          "Compare study abroad education loans from 20+ banks and NBFCs with Harbor Finance. Get expert guidance, collateral-free options and fast 48-hr sanctions.",
      },
      { property: "og:title", content: "Harbor Finance | Education Loans for Study Abroad" },
      {
        property: "og:description",
        content:
          "Compare education loans from 20+ banks and NBFCs with personalized 1:1 expert guidance from Harbor Finance.",
      },
      { property: "og:url", content: "https://harborfintech.com/" },
      { name: "twitter:title", content: "Harbor Finance | Education Loans for Study Abroad" },
      {
        name: "twitter:description",
        content:
          "Compare education loans from leading banks & NBFCs with expert 1:1 guidance from profile evaluation to disbursal.",
      },
    ],
    links: [{ rel: "canonical", href: "https://harborfintech.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(homepageFaqSchema),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbSchema),
      },
    ],
  }),
  component: () => (
    <ClientPage>
      <EducationPage />
    </ClientPage>
  ),
});
