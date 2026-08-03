import { createFileRoute } from "@tanstack/react-router";
import { lazy } from "react";
import { ClientPage } from "../components/shared/ClientPage";

const AboutPage = lazy(() => import("../pages/AboutPage"));

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Harbor Finance | Study Abroad Education Loan Experts" },
      {
        name: "description",
        content:
          "Harbor Finance simplifies study-abroad education financing — 20+ banks and NBFCs, 4,000+ students funded and 5+ years of education loan expertise.",
      },
      { property: "og:title", content: "About Harbor Finance | Education Loan Assistance" },
      {
        property: "og:description",
        content:
          "From profile evaluation to final disbursal, Harbor Finance handles the education loan journey so students can focus on their global education.",
      },
    ],
  }),
  component: () => (
    <ClientPage>
      <AboutPage />
    </ClientPage>
  ),
});
