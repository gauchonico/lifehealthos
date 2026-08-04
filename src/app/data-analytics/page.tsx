import DataAnalyticsContent from "./DataAnalyticsContent";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Data & Analytics",
  description:
    "Your data, visualized. Your decisions, informed. Map patients and facilities, track performance in real time, and analyze outcomes with LifeData and BIP.",
  path: "/data-analytics",
});

export default function DataAnalyticsPage() {
  return <DataAnalyticsContent />;
}
