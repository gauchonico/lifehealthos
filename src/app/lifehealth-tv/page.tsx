import LifeHealthTVContent from "./LifeHealthTVContent";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "LifeHealth TV",
  description:
    "Product walkthroughs, real deployment stories, and conversations with the people building healthcare for billions — now on YouTube.",
  path: "/lifehealth-tv",
});

export default function LifeHealthTVPage() {
  return <LifeHealthTVContent />;
}
