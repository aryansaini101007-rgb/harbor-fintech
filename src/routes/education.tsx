import { createFileRoute } from "@tanstack/react-router";
import { lazy } from "react";
import { ClientPage } from "../components/shared/ClientPage";

const EducationPage = lazy(() => import("../pages/EducationPage"));

export const Route = createFileRoute("/education")({
  head: () => ({
    links: [
      {
        rel: "canonical",
        href: "https://harborfintech.com/education",
      },
    ],
    meta: [
      { title: "Education Loans for Study Abroad | Harbor Finance" },
      {
        name: "description",
        content:
          "Compare education loans from 20+ banks and NBFCs with expert guidance from Harbor Finance — profile evaluation, documentation, processing and disbursal support.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://harborfintech.com/education" },
      { property: "og:title", content: "Education Loans for Study Abroad | Harbor Finance" },
      {
        property: "og:description",
        content:
          "Compare education loans from 20+ banks and NBFCs with expert guidance from Harbor Finance — profile evaluation, documentation, processing and disbursal support.",
      },
      { property: "og:image", content: "https://harborfintech.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Education Loans for Study Abroad | Harbor Finance" },
      {
        name: "twitter:description",
        content:
          "Compare education loans from 20+ banks and NBFCs with expert guidance from Harbor Finance — profile evaluation, documentation, processing and disbursal support.",
      },
      { name: "twitter:image", content: "https://harborfintech.com/og-image.png" },
    ],
  }),
  component: () => (
    <ClientPage>
      <EducationPage />
    </ClientPage>
  ),
});
