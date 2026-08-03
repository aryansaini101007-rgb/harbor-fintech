import { createFileRoute } from "@tanstack/react-router";
import { lazy } from "react";
import { ClientPage } from "../components/shared/ClientPage";

const EducationPage = lazy(() => import("../pages/EducationPage"));

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Harbor Finance | Education Loans for Study Abroad" },
      {
        name: "description",
        content:
          "Harbor Finance helps students compare education loans from 20+ banks and NBFCs for studying abroad, with expert guidance from profile evaluation to disbursal.",
      },
      { property: "og:title", content: "Harbor Finance | Education Loans for Study Abroad" },
      {
        property: "og:description",
        content:
          "Compare education loans from leading banks and NBFCs with end-to-end guidance from Harbor Finance.",
      },
    ],
  }),
  component: () => (
    <ClientPage>
      <EducationPage />
    </ClientPage>
  ),
});
