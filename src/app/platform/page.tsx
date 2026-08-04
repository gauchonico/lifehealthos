import PlatformContent from "./PlatformContent";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "The Platform",
  description:
    "LifeHealth solutions are assembled from interoperable platforms and shared capabilities — Passport, Nexus, CHIP, LifeLab, LifeResearch, LifeData, LifeCommerce, and VIMA.",
  path: "/platform",
});

export default function PlatformPage() {
  return <PlatformContent />;
}
