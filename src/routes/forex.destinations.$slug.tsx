import { createFileRoute } from "@tanstack/react-router";
import { lazy } from "react";
import { ClientPage } from "../components/shared/ClientPage";
import { getDestination } from "../features/forex/components/destinationsData";

const DestinationPage = lazy(() =>
  import("../features/forex/DestinationPage").then((m) => ({ default: m.ForexDestinationPage })),
);

export const Route = createFileRoute("/forex/destinations/$slug")({
  head: ({ params }) => {
    const dest = getDestination(params.slug);
    const title = dest
      ? `Study in ${dest.name} — Colleges, Tuition & Forex Guide | Harbor Finance`
      : "Study Abroad Destination Guide | Harbor Forex";
    const description = dest
      ? `Complete ${dest.name} study guide: top colleges, tuition, living costs, forex rates and visa updates for Indian students.`
      : "Study abroad destination guides, tuition details, forex rates and visa updates from Harbor Finance.";
    const pageUrl = `https://harborfintech.com/forex/destinations/${params.slug}`;
    return {
      links: [
        {
          rel: "canonical",
          href: pageUrl,
        },
      ],
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: pageUrl },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:image", content: "https://harborfintech.com/og-image.png" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: "https://harborfintech.com/og-image.png" },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://harborfintech.com/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Forex",
                item: "https://harborfintech.com/forex",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: dest ? dest.name : params.slug,
                item: pageUrl,
              },
            ],
          }),
        },
      ],
    };
  },
  component: DestinationRoute,
});

function DestinationRoute() {
  const { slug } = Route.useParams();
  return (
    <ClientPage>
      <DestinationPage slug={slug} />
    </ClientPage>
  );
}
