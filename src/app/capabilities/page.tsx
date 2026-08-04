import CapabilitiesContent from "./CapabilitiesContent";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Capabilities Overview",
  description:
    "Bringing personal responsibility, compassion, and digital sovereignty to healthcare — the full LifeHealth capabilities overview.",
  path: "/capabilities",
});

export default function CapabilitiesPage() {
  return <CapabilitiesContent />;
}
