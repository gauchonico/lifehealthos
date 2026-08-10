import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy — Passport Mobile Platform",
  description:
    "GDPR and HIPAA-aligned privacy policy for the LifeHealth Passport mobile application.",
  path: "/privacy-passport-mobile",
});

type Block =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] };

type Section = { title: string; blocks: Block[] };

const sections: Section[] = [
  {
    title: "1. Introduction",
    blocks: [
      {
        type: "p",
        text: "The LifeHealth Mobile Application is operated by CTI Global. It functions as a secure digital health platform that enables patients to communicate with licensed healthcare professionals using smartphones and tablets.",
      },
      {
        type: "p",
        text: "This policy covers how personal data, health information, and protected health information gets collected, processed, stored, transferred, and safeguarded when using the app.",
      },
      {
        type: "p",
        text: "Standards alignment includes GDPR, UK GDPR, HIPAA Privacy/Security/Breach Notification Rules, U.S. privacy legislation, and international healthcare privacy principles.",
      },
    ],
  },
  {
    title: "2. Company Information",
    blocks: [
      { type: "p", text: "CTI Global — 44 Wall Street, New York, NY 10005, United States." },
      { type: "p", text: "General privacy enquiries: support@lifehealth.global" },
    ],
  },
  {
    title: "3. Scope",
    blocks: [
      {
        type: "p",
        text: "This policy covers the LifeHealth Mobile Application including the patient app, clinician app, caregiver app, secure messaging, appointment scheduling, prescription management, lab requests, electronic health records, payment functionality, and communications.",
      },
      { type: "p", text: "Third-party applications or linked services remain outside this policy's scope." },
    ],
  },
  {
    title: "4. Our Role",
    blocks: [
      {
        type: "p",
        text: "CTI Global provides technology services facilitating communication between providers and patients. The company does not provide diagnosis, treatment, or emergency services.",
      },
      {
        type: "p",
        text: "Healthcare providers remain independently responsible for diagnosis, treatment, prescriptions, clinical decisions, medical record accuracy, licensing, and regulatory compliance. No physician-patient relationship exists between CTI Global and users.",
      },
    ],
  },
  {
    title: "5. Categories of Information Collected",
    blocks: [
      { type: "h3", text: "Account Information" },
      { type: "p", text: "Full name, email, telephone, date of birth, username, encrypted passwords." },
      { type: "h3", text: "Health Information" },
      {
        type: "p",
        text: "Consultation notes, prescriptions, diagnoses, laboratory results, referral letters, allergies, medications, medical history, vaccination records, treatment plans.",
      },
      { type: "h3", text: "Device Information" },
      {
        type: "p",
        text: "Manufacturer, model, operating system version, application version, language, time zone, IP address, device identifier, crash logs, diagnostic logs, authentication logs.",
      },
      { type: "h3", text: "Network Information" },
      { type: "p", text: "IP address, connection timestamps, session identifiers, authentication tokens, security event logs." },
      { type: "h3", text: "Payment Information" },
      { type: "p", text: "Processed through PCI DSS-compliant providers; complete card details are not stored by CTI Global." },
    ],
  },
  {
    title: "6. Mobile Permissions",
    blocks: [
      { type: "h3", text: "Camera" },
      { type: "p", text: "Used for video consultations, document scanning, prescription uploads, laboratory report uploads, and profile photos. Access is revocable through device settings." },
      { type: "h3", text: "Microphone" },
      { type: "p", text: "Used for voice and video consultations. Required for voice communication features." },
      { type: "h3", text: "Photo Library" },
      { type: "p", text: "Used when uploading medical images, prescriptions, referral letters, laboratory reports, or insurance documents." },
      { type: "h3", text: "Notifications" },
      { type: "p", text: "For appointment reminders, prescription updates, clinician messages, and account security alerts. Marketing notifications require legal permission and consent." },
      { type: "h3", text: "Location" },
      { type: "p", text: "Used to identify nearby healthcare providers, pharmacies, laboratories, verify jurisdictional licensing, and improve scheduling. Disabling location access removes certain location-based services." },
      { type: "h3", text: "Biometric Authentication" },
      { type: "p", text: "Uses device Face ID, Touch ID, fingerprint, or facial recognition if enabled. Biometric templates stay exclusively on devices; CTI Global never receives or processes them." },
    ],
  },
  {
    title: "7. How We Use Information",
    blocks: [
      {
        type: "p",
        text: "Information supports account creation, user authentication, consultation scheduling, telemedicine services, secure messaging, payment processing, application performance improvement, fraud detection, unauthorized access prevention, healthcare regulation compliance, security maintenance, incident investigation, legal request responses, customer support, and user experience improvement through anonymized analytics.",
      },
      {
        type: "p",
        text: "The company does not sell Personal Information or Protected Health Information, and does not permit advertiser access to clinical data.",
      },
    ],
  },
  {
    title: "8. Mobile Analytics and Crash Reporting",
    blocks: [
      {
        type: "p",
        text: "The app may use trusted service providers collecting limited technical data including application crashes, performance metrics, device compatibility, operating system version, and diagnostic information.",
      },
      {
        type: "p",
        text: "Analytics minimize Personal Information collection where practicable. Non-essential analytics require consent where legally required.",
      },
    ],
  },
  {
    title: "9. Third-Party Software Development Kits (SDKs) and Service Providers",
    blocks: [
      {
        type: "p",
        text: "Third-party SDKs and service providers support cloud hosting, authentication, secure messaging, push notifications, payment processing, customer support, error logging, performance monitoring, fraud prevention, content delivery, security monitoring, and analytics.",
      },
      {
        type: "p",
        text: "Service providers receive only necessary information and cannot use data for unrelated commercial purposes. A list of significant providers is available upon request.",
      },
    ],
  },
  {
    title: "10. Sharing of Personal Information",
    blocks: [
      {
        type: "p",
        text: "CTI Global does not sell Personal Information or Protected Health Information. Information sharing occurs only when reasonably necessary for Platform operation or legally required.",
      },
      { type: "h3", text: "Healthcare Providers" },
      { type: "p", text: "Licensed physicians, nurses, specialists, psychologists, pharmacists, hospitals, laboratories, imaging facilities, and other healthcare professionals involved in care." },
      { type: "h3", text: "Healthcare Partners" },
      { type: "p", text: "Authorized laboratories, diagnostic centers, pharmacies, specialists, referral facilities, and emergency providers." },
      { type: "h3", text: "Technology Providers" },
      { type: "p", text: "Cloud infrastructure, cybersecurity, payment processors, authentication, email, SMS, video consultation, customer support, document storage, and backup providers." },
      { type: "h3", text: "Regulatory Authorities" },
      { type: "p", text: "Information disclosed where required to comply with law, court orders, subpoenas, law enforcement, public health reporting, regulatory investigations, public safety protection, and contractual enforcement." },
      { type: "h3", text: "Corporate Transactions" },
      { type: "p", text: "Personal Information may transfer during a merger, acquisition, restructuring, asset sale, financing, bankruptcy, or reorganization, subject to confidentiality obligations and legal safeguards." },
    ],
  },
  {
    title: "11. International Data Transfers",
    blocks: [
      {
        type: "p",
        text: "Personal Information may be processed in countries other than the country of origin. Safeguards include European Commission Standard Contractual Clauses, the UK International Data Transfer Agreement, binding contractual safeguards, vendor due diligence, data encryption, role-based access controls, data minimization, and transfer impact assessments.",
      },
      {
        type: "p",
        text: "Consent for transfers is obtained where legally required. Recipients maintain substantially equivalent privacy protections.",
      },
    ],
  },
  {
    title: "12. HIPAA Uses and Disclosures",
    blocks: [
      {
        type: "p",
        text: "Where HIPAA applies, Protected Health Information may be used or disclosed without additional authorization for:",
      },
      { type: "h3", text: "Treatment" },
      { type: "p", text: "Supporting healthcare professional diagnosis, treatment, referral, prescription, coordination, or monitoring." },
      { type: "h3", text: "Payment" },
      { type: "p", text: "Insurance verification, claims processing, billing, payment collection, financial reconciliation." },
      { type: "h3", text: "Healthcare Operations" },
      { type: "p", text: "Quality assurance, credential verification, fraud prevention, auditing, accreditation, security monitoring, risk management, operational improvement, training." },
      { type: "h3", text: "Legal Compliance" },
      { type: "p", text: "Public health reporting, judicial proceedings, law enforcement requests, government investigations, mandatory reporting, health and safety protection." },
      { type: "p", text: "Patient authorization is obtained where HIPAA requires it for specific disclosures." },
    ],
  },
  {
    title: "13. Data Retention",
    blocks: [
      {
        type: "p",
        text: "Information retention follows legal, regulatory, accounting, contractual, and healthcare obligations.",
      },
      { type: "h3", text: "Retention Schedule" },
      {
        type: "ul",
        items: [
          "Account information: duration of account plus six years",
          "Clinical records: minimum ten years after final clinical entry, or longer per law/professional standards",
          "Payment/billing records: seven years",
          "Security logs: up to twenty-four months",
          "Device/crash logs: up to eighteen months",
          "Consent records: ten years following withdrawal or closure",
          "Marketing preferences: until withdrawn, plus suppression period",
        ],
      },
      {
        type: "p",
        text: "Unnecessary information gets securely deleted, anonymized, or irreversibly de-identified per legal requirements and industry standards.",
      },
    ],
  },
  {
    title: "14. Information Security",
    blocks: [
      {
        type: "p",
        text: "CTI Global maintains comprehensive information security protecting data against unauthorized access, disclosure, alteration, destruction, or loss.",
      },
      {
        type: "p",
        text: "Safeguards include encryption of data in transit using TLS 1.2 or higher and stored data using AES-256 or equivalent standards, multi-factor authentication, role-based access controls, secure token management, automatic session expiration, device integrity verification, API authentication, vulnerability scanning, penetration testing, continuous monitoring, audit logging, disaster recovery, and employee training.",
      },
      {
        type: "p",
        text: "Mobile devices receive additional protections including platform-native hardware security, encrypted caches, certificate pinning, and remote invalidation.",
      },
      { type: "p", text: "No electronic transmission or storage is completely secure. Users should protect devices, passwords, and credentials." },
    ],
  },
  {
    title: "15. Your Privacy Rights",
    blocks: [
      { type: "p", text: "Depending on jurisdiction and applicable law, individuals may have rights including:" },
      {
        type: "ul",
        items: [
          "Being informed about information processing",
          "Accessing held Personal Information",
          "Requesting correction of inaccurate or incomplete information",
          "Requesting deletion, subject to retention obligations",
          "Restricting certain processing",
          "Objecting to legitimate interest processing",
          "Withdrawing consent-based processing",
          "Receiving information in structured formats",
          "Avoiding solely automated decision-making with legal effects",
          "Lodging complaints with applicable supervisory authorities",
        ],
      },
      {
        type: "p",
        text: "Requests are submitted through the application, account settings, or by contacting CTI Global. Reasonable identity verification may be required.",
      },
    ],
  },
];

function renderBlock(block: Block, key: number) {
  if (block.type === "h3") {
    return (
      <h3 key={key} className="font-heading font-semibold text-lg text-navy-900 mt-6 mb-2">
        {block.text}
      </h3>
    );
  }
  if (block.type === "ul") {
    return (
      <ul key={key} className="list-disc pl-6 space-y-1">
        {block.items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    );
  }
  return <p key={key}>{block.text}</p>;
}

export default function PrivacyPassportMobile() {
  return (
    <div className="min-h-screen bg-white pt-28 pb-16">
      <div className="container-narrow">
        <h1 className="font-heading font-bold text-3xl md:text-4xl text-navy-900 mb-4">
          Privacy Policy — Passport Mobile Platform
        </h1>
        <p className="text-slate-400 text-sm mb-8">
          CTI Global · International Edition (GDPR + HIPAA Aligned) · Effective Date: 16/07/2026 · Last Updated: 16/07/2026
        </p>
        <div className="prose prose-slate max-w-none">
          {sections.map((section) => (
            <section key={section.title} className="mb-8">
              <h2 className="font-heading font-bold text-xl text-navy-900 mb-3">{section.title}</h2>
              {section.blocks.map((block, i) => renderBlock(block, i))}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
