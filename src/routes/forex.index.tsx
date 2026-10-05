import { createFileRoute } from "@tanstack/react-router";
import { lazy } from "react";
import { ClientPage } from "../components/shared/ClientPage";

const ForexPage = lazy(() => import("../pages/ForexPage"));

export const Route = createFileRoute("/forex/")({
  head: () => ({
    links: [
      {
        rel: "canonical",
        href: "https://harborfintech.com/forex",
      },
    ],
    meta: [
      { title: "Harbor Forex — Move Your Money Faster | International Student Transfers" },
      {
        name: "description",
        content:
          "Harbor Forex offers competitive exchange rates, multi-currency forex cards and international money transfers for students and travellers going abroad.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://harborfintech.com/forex" },
      { property: "og:title", content: "Harbor Forex — Move Your Money Faster | International Student Transfers" },
      {
        property: "og:description",
        content:
          "Forex cards, live rates and international transfers built for students studying abroad.",
      },
      { property: "og:image", content: "https://harborfintech.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Harbor Forex — Move Your Money Faster | International Student Transfers" },
      {
        name: "twitter:description",
        content:
          "Forex cards, live rates and international transfers built for students studying abroad.",
      },
      { name: "twitter:image", content: "https://harborfintech.com/og-image.png" },
    ],
  }),
  component: () => (
    <ClientPage>
      <ForexPage />
    </ClientPage>
  ),
});
