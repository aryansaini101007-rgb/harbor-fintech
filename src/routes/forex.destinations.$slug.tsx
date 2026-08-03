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
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
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
