import { createFileRoute } from "@tanstack/react-router";
import { lazy } from "react";
import { ClientPage } from "../components/shared/ClientPage";

const ContactPage = lazy(() => import("../pages/ContactPage"));

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Harbor Finance | Talk to an Education Loan Expert" },
      {
        name: "description",
        content:
          "Speak with the Harbor Finance team in Noida about your education loan, lender options and study-abroad financing plans.",
      },
      { property: "og:title", content: "Contact Harbor Finance" },
      {
        property: "og:description",
        content: "Get in touch for education loan guidance and study-abroad support.",
      },
    ],
  }),
  component: () => (
    <ClientPage>
      <ContactPage />
    </ClientPage>
  ),
});
