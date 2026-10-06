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
      "name": "What is an education loan and how does it work for studying abroad?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "An education loan is a specialized loan designed to fund higher studies in India or abroad. It covers academic tuition fees along with essential living costs like accommodation, books, and travel. Lenders disburse tuition fees directly to your university, while living expenses are released to your student account or international forex card as needed.",
      },
    },
    {
      "@type": "Question",
      "name": "Can I get an education loan without collateral (unsecured loan)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Yes. Several partner banks, NBFCs, and international lenders offer collateral-free education loans for studying abroad. Unsecured loans are evaluated based on your academic profile, GRE/GMAT/IELTS scores, target university ranking, and the financial standing of your co-applicant (parent or guardian).",
      },
    },
    {
      "@type": "Question",
      "name": "What is the difference between secured and unsecured education loans?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "A secured education loan requires tangible collateral (such as residential property, fixed deposits, or commercial real estate) and typically offers lower interest rates and higher loan amounts (up to ₹1.5–2 Crore). An unsecured education loan requires no property pledge and relies on the student's academic credentials and co-borrower's income, offering faster processing.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the eligibility criteria for a study abroad education loan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Key eligibility criteria include: Indian citizenship, admission or confirmed application to a recognized overseas university, qualifying past academic records (usually 50–60%+), and a creditworthy co-applicant (parent, sibling, or legal guardian) who has a steady income source.",
      },
    },
    {
      "@type": "Question",
      "name": "What documents are required for an education loan application?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Standard documentation includes: (1) Student academic records (10th, 12th, graduation marksheets, standardized test scores like GRE/IELTS/TOEFL); (2) University offer letter and estimated fee structure; (3) KYC documents (Aadhaar, PAN, Passport); (4) Co-applicant financial documents (latest salary slips or ITR for 2–3 years, 6 months bank statements); and (5) Property papers if applying for a secured loan.",
      },
    },
    {
      "@type": "Question",
      "name": "How much education loan amount can I get?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Loan amounts vary by lender and course. Secured loans from leading Indian public and private banks can go up to ₹1.5 Crore to ₹2 Crore+. Unsecured loans from specialized NBFCs and international student lenders typically range from ₹25 Lakh up to ₹75 Lakh–₹1 Crore, depending on the country, course, and university tier.",
      },
    },
    {
      "@type": "Question",
      "name": "What expenses does an education loan cover? Does it include living expenses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Yes, comprehensive study abroad education loans cover 100% of approved expenses, including university tuition fees, examination and library charges, accommodation and hostel costs, food and living allowances, books and study equipment (such as a laptop), travel airfare, and student health insurance.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the interest rate on education loans and how is EMI calculated?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Education loan interest rates in India typically range from 8.40% to 11.50%+ depending on the lender type (public banks vs private banks vs NBFCs), loan security (collateral vs non-collateral), and student profile. Repayment EMI is calculated based on the total disbursed amount, agreed interest rate, and chosen tenure (usually 10 to 15 years), kicking in after the moratorium period.",
      },
    },
    {
      "@type": "Question",
      "name": "How does education loan repayment and the moratorium period work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Education loans feature a student moratorium period (repayment holiday), which typically covers the course duration plus 6 to 12 months after graduation. During the moratorium, you may choose to pay simple interest, partial interest, or no interest (as permitted by the lender). Regular monthly EMI payments begin once the moratorium period ends.",
      },
    },
    {
      "@type": "Question",
      "name": "Can I get an education loan for studying in the USA, Canada, UK, or Australia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Yes. Harbor Finance helps students explore and compare education loans for all premier study abroad destinations, including the USA (STEM MS, MBA), the UK (1-year master's degrees), Canada (diplomas and degrees), Australia, Germany, and Ireland. Partner lenders provide official sanction letters accepted for I-20, CAS, and student visa processing.",
      },
    },
    {
      "@type": "Question",
      "name": "Can I get an education loan sanction before getting a confirmed admit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Yes. Several partner lenders provide pre-visa or pre-admission in-principle sanction letters based on your profile and test scores. This helps demonstrate verified financial proof to universities during admission and expedites your visa appointment.",
      },
    },
    {
      "@type": "Question",
      "name": "Is Harbor Finance's comparison and advisory service really free for students?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Yes, our advisory service is 100% free for students and parents. We help you compare offers across 20+ banks and NBFCs, understand fine print, and navigate paperwork at zero charge. We are compensated by our lending partners when a loan is sanctioned, with no added fees passed on to you.",
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
          "Compare education loans for studying abroad across 20+ banks and NBFCs in India. Explore collateral-free student loans, compare interest rates & eligibility, and get free 1:1 expert guidance.",
      },
      { property: "og:title", content: "Harbor Finance | Education Loans for Study Abroad" },
      {
        property: "og:description",
        content:
          "Compare education loans for studying abroad across 20+ banks and NBFCs in India. Explore collateral-free student loans, interest rates, eligibility, and get free 1:1 guidance.",
      },
      { property: "og:url", content: "https://harborfintech.com/" },
      { name: "twitter:title", content: "Harbor Finance | Education Loans for Study Abroad" },
      {
        name: "twitter:description",
        content:
          "Compare education loans for studying abroad across 20+ banks and NBFCs in India with personalized 1:1 guidance from profile evaluation to disbursal.",
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
