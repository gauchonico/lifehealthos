import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Legal",
  description: "Privacy policies, terms of use, and account deletion for LifeHealth.",
  path: "/legal",
});

const legalLinks = [
  {
    group: "Privacy",
    items: [
      { label: "Privacy Policy", description: "General privacy policy for the LifeHealth platform.", href: "/privacy" },
      { label: "Privacy Policy — Mobile App", description: "Privacy policy for the LifeHealth mobile app.", href: "/privacy-mobile" },
      { label: "Privacy Policy — Passport Mobile Platform", description: "GDPR and HIPAA-aligned policy for the LifeHealth Passport app.", href: "/privacy-passport-mobile" },
    ],
  },
  {
    group: "Terms & Consent",
    items: [
      { label: "Terms of Use", description: "Terms governing use of the LifeHealth website and services.", href: "/terms" },
      { label: "Terms and Conditions — Nexus and Passport", description: "Terms specific to the Nexus and Passport products.", href: "/terms-and-conditions-nexus-and-passport" },
      { label: "Consent Form — Passport Web & Mobile", description: "Consent form for using LifeHealth Passport on web and mobile.", href: "/consent-form-passport-web-mobile" },
    ],
  },
  {
    group: "Accessibility & Account",
    items: [
      { label: "Accessibility", description: "Our commitment to an accessible LifeHealth experience.", href: "/accessibility" },
      { label: "Account Deletion", description: "How to request deletion of your LifeHealth account and data.", href: "/account-deletion" },
    ],
  },
];

export default function Legal() {
  return (
    <div className="min-h-screen bg-white pt-28 pb-16">
      <div className="container-narrow">
        <h1 className="font-heading font-bold text-3xl md:text-4xl text-navy-900 mb-4">Legal</h1>
        <p className="text-slate-500 leading-relaxed text-lg mb-10">
          Privacy policies, terms of use, and account information for the LifeHealth platform.
        </p>

        <div className="space-y-10">
          {legalLinks.map((group) => (
            <div key={group.group}>
              <h2 className="font-heading font-semibold text-lg text-navy-900 mb-4">{group.group}</h2>
              <div className="space-y-3">
                {group.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center justify-between gap-4 rounded-2xl border border-slate-100 p-5 hover:border-teal-200 hover:bg-teal-50/40 transition-colors"
                  >
                    <div>
                      <p className="font-medium text-navy-900">{item.label}</p>
                      <p className="text-sm text-slate-500 mt-0.5">{item.description}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-teal-500 flex-shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
