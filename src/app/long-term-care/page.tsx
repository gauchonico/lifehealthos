import LongTermCareContent from "./LongTermCareContent";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "LifeHealth for Long-Term Care",
  description:
    "The Digital Operating System for Nursing Homes and Home Healthcare. One Patient. One Record. Every Interaction. Better Care.",
  path: "/long-term-care",
});

export default function LongTermCarePage() {
  return <LongTermCareContent />;
}
