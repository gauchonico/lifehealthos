import AboutContent from "./AboutContent";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Us",
  description:
    "CTI Africa LLC is a U.S.-headquartered technology company with 20+ years of experience building digital health and humanitarian solutions across Africa and beyond.",
  path: "/about",
});

export default function AboutPage() {
  return <AboutContent />;
}
