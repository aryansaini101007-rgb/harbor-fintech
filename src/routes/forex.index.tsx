import { createFileRoute } from "@tanstack/react-router";
import { lazy } from "react";
import { ClientPage } from "../components/shared/ClientPage";

const ForexPage = lazy(() => import("../pages/ForexPage"));

export const Route = createFileRoute("/forex/")({
  head: () => ({
    meta: [
      { title: "Harbor Forex — Move Your Money Faster" },
      {
        name: "description",
        content:
          "Harbor Forex offers competitive exchange rates, multi-currency forex cards and international money transfers for students and travellers going abroad.",
      },
      { property: "og:title", content: "Harbor Forex — Move Your Money Faster" },
      {
        property: "og:description",
        content:
          "Forex cards, live rates and international transfers built for students studying abroad.",
      },
    ],
  }),
  component: () => (
    <ClientPage>
      <ForexPage />
    </ClientPage>
  ),
});
