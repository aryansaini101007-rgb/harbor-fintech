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
      { title: "Harbor Forex — Student Forex & International Money Transfers | Harbor Finance" },
      {
        name: "description",
        content:
          "Fast, transparent student forex for studying abroad. Compare competitive exchange rates, get multi-currency student forex cards, and make international university fee transfers.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://harborfintech.com/forex" },
      { property: "og:title", content: "Harbor Forex — Student Forex & International Money Transfers | Harbor Finance" },
      {
        property: "og:description",
        content:
          "Multi-currency student forex cards, live exchange rates, and international university fee transfers built for studying abroad.",
      },
      { property: "og:image", content: "https://harborfintech.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Harbor Forex — Student Forex & International Money Transfers | Harbor Finance" },
      {
        name: "twitter:description",
        content:
          "Multi-currency student forex cards, live exchange rates, and international university fee transfers built for studying abroad.",
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
