import Home2Content from "./Home2Content";
import { pageMetadata } from "@/lib/seo";

export const metadata = {
  ...pageMetadata({
    title: "Home — Concept 2",
    description:
      "A modern landing page concept for LifeHealth exploring an alternate homepage layout.",
    path: "/home-2",
  }),
  // Design concept, not the canonical homepage — keep it out of search
  // results so it never competes with "/" for indexing.
  robots: { index: false, follow: true },
};

export default function Home2Page() {
  return <Home2Content />;
}
