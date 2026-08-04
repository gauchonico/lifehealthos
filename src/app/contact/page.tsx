import ContactContent from "./ContactContent";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Tell us about your organization and we'll schedule a conversation to explore how LifeHealth can support your goals.",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactContent />;
}
