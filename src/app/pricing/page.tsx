import PricingContent from "./PricingContent";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Pricing",
  description:
    "LifeHealth pricing is based on the solution, scale, deployment model, capabilities, implementation needs, and support requirements relevant to each customer.",
  path: "/pricing",
});

export default function PricingPage() {
  return <PricingContent />;
}
