import { createFileRoute } from "@tanstack/react-router";
import { lazy } from "react";
import { ClientPage } from "../components/shared/ClientPage";

const EducationPage = lazy(() => import("../pages/EducationPage"));

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: "Education Loans for Study Abroad | Harbor Finance" },
      {
        name: "description",
        content:
          "Compare education loans from 20+ banks and NBFCs with expert guidance from Harbor Finance — profile evaluation, documentation, processing and disbursal support.",
      },
      { property: "og:title", content: "Education Loans for Study Abroad | Harbor Finance" },
      {
        property: "og:description",
        content: "Expert education loan assistance for students heading abroad.",
      },
    ],
  }),
  component: () => (
    <ClientPage>
      <EducationPage />
    </ClientPage>
  ),
});
