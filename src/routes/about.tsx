import { createFileRoute } from "@tanstack/react-router";
import { lazy } from "react";
import { ClientPage } from "../components/shared/ClientPage";

const AboutPage = lazy(() => import("../pages/AboutPage"));

export const Route = createFileRoute("/about")({
  head: () => ({
    links: [
      {
        rel: "canonical",
        href: "https://harborfintech.com/about",
      },
    ],
    meta: [
      { title: "About Harbor Finance | Study Abroad Education Loan Experts" },
      {
        name: "description",
        content:
          "Harbor Finance simplifies study-abroad education financing — 20+ banks and NBFCs, 4,000+ students funded and 5+ years of education loan expertise.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://harborfintech.com/about" },
      { property: "og:title", content: "About Harbor Finance | Study Abroad Education Loan Experts" },
      {
        property: "og:description",
        content:
          "Harbor Finance simplifies study-abroad education financing — 20+ banks and NBFCs, 4,000+ students funded and 5+ years of education loan expertise.",
      },
      { property: "og:image", content: "https://harborfintech.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "About Harbor Finance | Study Abroad Education Loan Experts" },
      {
        name: "twitter:description",
        content:
          "Harbor Finance simplifies study-abroad education financing — 20+ banks and NBFCs, 4,000+ students funded and 5+ years of education loan expertise.",
      },
      { name: "twitter:image", content: "https://harborfintech.com/og-image.png" },
    ],
  }),
  component: () => (
    <ClientPage>
      <AboutPage />
    </ClientPage>
  ),
});
