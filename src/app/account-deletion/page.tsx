import { Mail } from "lucide-react";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Account Deletion",
  description: "How to request deletion of your LifeHealth account and personal data.",
  path: "/account-deletion",
});

const DELETION_EMAIL = "support@lifehealth.global";
const MAILTO_HREF =
  `mailto:${DELETION_EMAIL}` +
  `?subject=${encodeURIComponent("Account Deletion Request")}` +
  `&body=${encodeURIComponent(
    "Full Name:\nEmail Address:\nCTI ID:\n\nI confirm I want to delete all of my user information from the LifeHealth Platform."
  )}`;

export default function AccountDeletion() {
  return (
    <div className="min-h-screen bg-white pt-28 pb-16">
      <div className="container-narrow">
        <h1 className="font-heading font-bold text-3xl md:text-4xl text-navy-900 mb-8">
          Account Deletion
        </h1>
        <div className="prose prose-slate max-w-none">
          <p className="text-slate-500 leading-relaxed text-lg mb-10">
            You have the right to erasure, blocking, removal, or destruction of your personal
            information held by LifeHealth. This page explains how to request deletion of your
            LifeHealth account and data.
          </p>

          <section className="mb-8">
            <h2 className="font-heading font-bold text-xl text-navy-900 mb-3">How to request deletion</h2>
            <p>
              Send an email to{" "}
              <a href={`mailto:${DELETION_EMAIL}`} className="text-teal-500 hover:text-teal-600 font-medium">
                {DELETION_EMAIL}
              </a>{" "}
              with the subject line &quot;Account Deletion Request&quot; and include the following information
              so we can verify your identity:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Full name</li>
              <li>Email address associated with your account</li>
              <li>Your CTI ID</li>
            </ul>
            <p>
              You&apos;ll also need to confirm in your message that you want to delete all of your user
              information from the LifeHealth Platform.
            </p>
            <a
              href={MAILTO_HREF}
              className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-xl transition-colors no-underline"
            >
              <Mail className="w-4 h-4" />
              Email a deletion request
            </a>
          </section>

          <section className="mb-8">
            <h2 className="font-heading font-bold text-xl text-navy-900 mb-3">What happens next</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                The information you submit is used solely to verify your identity and process your
                deletion request.
              </li>
              <li>
                Once your identity is verified, our Operations team tags your account for deletion.
                Your account is marked as <strong>Inactive</strong>, which immediately prevents any
                further use of it across LifeHealth platforms.
              </li>
              <li>
                Certain information may be retained for a limited period where required by law,
                regulatory obligations, or legitimate business purposes (for example, clinical
                records subject to healthcare recordkeeping requirements), consistent with our{" "}
                <a href="/privacy" className="text-teal-500 hover:text-teal-600 font-medium">Privacy Policy</a>.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl text-navy-900 mb-3">Questions</h2>
            <p>
              If you have questions about this process or your data, contact us at{" "}
              <a href={`mailto:${DELETION_EMAIL}`} className="text-teal-500 hover:text-teal-600 font-medium">
                {DELETION_EMAIL}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
