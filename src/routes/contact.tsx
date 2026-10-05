import { createFileRoute } from "@tanstack/react-router";
import { lazy } from "react";
import { ClientPage } from "../components/shared/ClientPage";

const ContactPage = lazy(() => import("../pages/ContactPage"));

export const Route = createFileRoute("/contact")({
  head: () => ({
    links: [
      {
        rel: "canonical",
        href: "https://harborfintech.com/contact",
      },
    ],
    meta: [
      { title: "Contact Harbor Finance | Talk to an Education Loan Expert" },
      {
        name: "description",
        content:
          "Speak with the Harbor Finance team in Noida about your education loan, lender options and study-abroad financing plans.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://harborfintech.com/contact" },
      { property: "og:title", content: "Contact Harbor Finance | Talk to an Education Loan Expert" },
      {
        property: "og:description",
        content:
          "Speak with the Harbor Finance team in Noida about your education loan, lender options and study-abroad financing plans.",
      },
      { property: "og:image", content: "https://harborfintech.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Contact Harbor Finance | Talk to an Education Loan Expert" },
      {
        name: "twitter:description",
        content:
          "Speak with the Harbor Finance team in Noida about your education loan, lender options and study-abroad financing plans.",
      },
      { name: "twitter:image", content: "https://harborfintech.com/og-image.png" },
    ],
  }),
  component: () => (
    <ClientPage>
      <ContactPage />
    </ClientPage>
  ),
});
