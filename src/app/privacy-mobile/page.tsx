import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy — Mobile App",
  description:
    "How the LifeHealth mobile app collects, uses, and protects personal and health-related information.",
  path: "/privacy-mobile",
});

type Block =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] };

type Section = { title: string; blocks: Block[] };

const sections: Section[] = [
  {
    title: "1. Introduction to LifeHealth",
    blocks: [
      {
        type: "p",
        text: "Welcome to LifeHealth, a telemedicine platform designed to connect patients with healthcare professionals for convenient and timely medical consultations. Our mission is to provide an accessible, user-friendly, and secure environment for telehealth services. This privacy policy aims to inform you about how we handle personal and health-related information on the LifeHealth mobile app.",
      },
    ],
  },
  {
    title: "2. Our Services",
    blocks: [
      {
        type: "p",
        text: "LifeHealth serves as a digital bridge between patients and third-party healthcare providers. Our services include facilitating video calls for medical consultations, providing access to Electronic Health Records (EHR), and enabling healthcare providers to order labs and medications. All medical information, including patient records, lab results, and prescription details, are uploaded and managed by third-party healthcare providers, labs, and medical professionals.",
      },
      { type: "h3", text: "Purpose of This Privacy Policy" },
      {
        type: "p",
        text: "This privacy policy outlines our practices regarding the collection, use, and protection of your personal and medical information on the LifeHealth mobile app. It is designed to help you understand our role and responsibilities in your healthcare journey, the nature of the data collected and how it is used, your rights and choices concerning your personal information, and the security measures we employ to protect your data. By using the LifeHealth app, you agree to the collection and use of information in accordance with this policy. We are committed to respecting your privacy and ensuring the confidentiality and security of your personal information.",
      },
      { type: "h3", text: "Age Restriction" },
      {
        type: "p",
        text: "The LifeHealth services are intended solely for individuals who are 18 years of age or older.",
      },
    ],
  },
  {
    title: "3. No Medical Advice Provided",
    blocks: [
      { type: "h3", text: "Clarification of Role" },
      {
        type: "p",
        text: "LifeHealth is a technology platform that facilitates communication between patients and third-party healthcare providers. LifeHealth itself does not provide medical advice, diagnosis, or treatment. Our primary role is to offer a secure and efficient platform for telemedicine services, connecting patients with licensed healthcare professionals.",
      },
      { type: "h3", text: "Medical Advice by Third-Party Providers" },
      {
        type: "p",
        text: "The relationship formed is solely between you and your healthcare provider. LifeHealth is not a party to this relationship and has no involvement in the medical advice or treatment provided. Our role is limited to facilitating access to these services through our platform.",
      },
      { type: "h3", text: "Acknowledgment and Release of Liability" },
      {
        type: "p",
        text: "By using the LifeHealth platform, you acknowledge that LifeHealth is not responsible for the medical advice or treatment provided by third-party healthcare providers. You agree to hold LifeHealth harmless from any claims, liabilities, damages, or losses arising out of or in any way connected with the medical services obtained through the use of our platform.",
      },
      { type: "h3", text: "Disclaimer of Liability" },
      {
        type: "p",
        text: "LifeHealth disclaims any liability for the medical advice, treatment, or decisions made by the third-party healthcare providers using our platform. We are not responsible for the outcomes of medical consultations or treatments that occur through the use of our service. Patients are encouraged to discuss any concerns or questions directly with their healthcare providers.",
      },
    ],
  },
  {
    title: "4. Third-Party Providers and Data",
    blocks: [
      { type: "h3", text: "Data Provided by Third Parties" },
      {
        type: "p",
        text: "LifeHealth operates as a conduit between patients and third-party healthcare providers, including physicians, nurses, and laboratory technicians. The medical records, lab results, imaging, prescriptions, and other health-related data accessible through our platform are provided and managed by these third-party entities. LifeHealth does not create, modify, or directly manage this medical information.",
      },
      { type: "h3", text: "Role of Third-Party Healthcare Providers" },
      {
        type: "p",
        text: "The healthcare providers using LifeHealth are independent professionals responsible for their services and compliance with applicable laws, including HIPAA and state-specific regulations. They are tasked with ensuring the accuracy, completeness, and timeliness of the medical information they provide and manage on the platform.",
      },
      { type: "h3", text: "Data Collection and Use" },
      {
        type: "p",
        text: "In facilitating telemedicine services, LifeHealth collects and processes personal and health-related information as necessary, including user registration data, appointment details, communication logs, and any data shared by third-party providers. Our use of this data is primarily for facilitating and improving our services, and ensuring a seamless healthcare experience.",
      },
      { type: "h3", text: "User Consent and Data Rights" },
      {
        type: "p",
        text: "By using LifeHealth, users consent to the collection, storage, and use of their personal and health-related information by LifeHealth and third-party providers. Users retain the right to access, modify, and request deletion of their personal data in accordance with our data retention policies and applicable laws.",
      },
      { type: "h3", text: "Use of Anonymized Data" },
      {
        type: "p",
        text: "LifeHealth may use anonymized medical data for research, quality improvement, and operational purposes. This data, stripped of any personally identifiable information, is utilized in a manner that does not violate privacy or HIPAA regulations.",
      },
      { type: "h3", text: "Policy Changes and User Notification" },
      {
        type: "p",
        text: "LifeHealth reserves the right to update or modify this privacy policy at any time. Changes to the policy will be communicated to users through the LifeHealth platform or via email. Continued use of the service after any such changes constitutes acceptance of the new terms and conditions.",
      },
      { type: "h3", text: "International Data Transfer" },
      {
        type: "p",
        text: "If applicable, LifeHealth complies with laws governing the international transfer of medical data, ensuring that user data is protected irrespective of geographic boundaries.",
      },
    ],
  },
  {
    title: "5. Use of Medical Data",
    blocks: [
      { type: "h3", text: "Anonymized Data for Improvement and Research" },
      {
        type: "p",
        text: "LifeHealth is committed to advancing healthcare services and contributing to medical research. We may use anonymized medical data collected through our platform, processed to remove any personally identifiable information, ensuring patient confidentiality and compliance with HIPAA and other privacy laws.",
      },
      { type: "h3", text: "Purposes of Using Anonymized Data" },
      { type: "p", text: "The anonymized data may be utilized for various purposes, including, but not limited to:" },
      {
        type: "ul",
        items: [
          "Enhancing the functionality and user experience of our platform",
          "Conducting health-related research and analysis",
          "Improving healthcare service delivery and outcomes",
          "Supporting public health initiatives and healthcare policy development",
        ],
      },
      { type: "h3", text: "Data Anonymization Process" },
      {
        type: "p",
        text: "We employ rigorous methods to anonymize data, ensuring that individual patients cannot be identified, including removing or altering personal identifiers such as names, addresses, and social security numbers.",
      },
      { type: "h3", text: "User Consent and Opt-Out Options" },
      {
        type: "p",
        text: "By using LifeHealth, users consent to the use of their anonymized data for the purposes outlined above. Users can opt out through their account settings or by contacting our support team.",
      },
      { type: "h3", text: "Data Sharing with Third Parties" },
      {
        type: "p",
        text: "In certain instances, anonymized data may be shared with third-party organizations for research or healthcare improvement initiatives, subject to our data protection standards and privacy laws.",
      },
      { type: "h3", text: "Security of Anonymized Data" },
      {
        type: "p",
        text: "We maintain stringent security measures to protect anonymized data against unauthorized access, alteration, or dissemination.",
      },
    ],
  },
  {
    title: "6. Compliance with HIPAA and State Laws",
    blocks: [
      { type: "h3", text: "Commitment to Regulatory Compliance" },
      {
        type: "p",
        text: "LifeHealth is dedicated to upholding the highest standards of privacy and security in healthcare, adhering strictly to HIPAA and relevant state laws regarding the handling and protection of personal health information (PHI).",
      },
      { type: "h3", text: "HIPAA Compliance" },
      { type: "p", text: "As a telemedicine platform facilitating the exchange of PHI, we implement rigorous safeguards, including, but not limited to:" },
      {
        type: "ul",
        items: [
          "Ensuring that all PHI transmitted through our platform is encrypted and securely stored",
          "Training our staff regularly on HIPAA regulations and best practices for data security",
          "Conducting regular audits and assessments to ensure ongoing compliance",
        ],
      },
      { type: "h3", text: "State Law Adherence" },
      {
        type: "p",
        text: "LifeHealth recognizes and adheres to the varying healthcare privacy laws that exist at the state level, and continuously monitors changes in state legislation.",
      },
      { type: "h3", text: "Data Protection and Security Measures" },
      { type: "p", text: "We employ a variety of technical, administrative, and physical safeguards, including, but not limited to:" },
      {
        type: "ul",
        items: [
          "Advanced encryption technologies for data transmission and storage",
          "Access controls to ensure that only authorized personnel have access to PHI",
          "Regular security assessments and updates to our systems and practices",
        ],
      },
      { type: "h3", text: "Reporting and Transparency" },
      {
        type: "p",
        text: "In the event of a data breach or non-compliance issue, we will promptly inform affected users and take immediate steps to rectify the situation, in line with regulatory requirements.",
      },
      { type: "h3", text: "User Cooperation and Responsibility" },
      {
        type: "p",
        text: "Users are encouraged to use strong passwords, log out of their accounts after use, and report any suspected security breaches to LifeHealth immediately.",
      },
    ],
  },
  {
    title: "7. Data Collection and Use",
    blocks: [
      { type: "h3", text: "Types of Data Collected" },
      { type: "p", text: "LifeHealth collects various types of data to provide and improve our telemedicine services, including, but not limited to:" },
      {
        type: "ul",
        items: [
          "Personal identification information, such as names, email addresses, and phone numbers",
          "Health information: medical history, current health conditions, treatment plans, and other health-related information provided by healthcare providers or entered by patients",
          "Technical and usage data: login data, user interface interactions, and technical details about devices used to access our platform",
        ],
      },
      { type: "h3", text: "Purpose of Data Collection" },
      { type: "p", text: "The data we collect serves multiple purposes:" },
      {
        type: "ul",
        items: [
          "To provide services: facilitating consultations, processing payments, and enabling communication between patients and healthcare providers",
          "To improve user experience: enhancing the functionality and accessibility of our platform based on user interactions and feedback",
          "To support and maintain our services: ensuring the ongoing security and operational functionality of our platform",
          "For customer support: assisting users with inquiries, troubleshooting, and resolving issues",
        ],
      },
      { type: "h3", text: "User Consent and Control" },
      {
        type: "p",
        text: "Users have the right to access, modify, or delete their personal information. LifeHealth provides tools and settings within the app for users to control their data and privacy preferences.",
      },
      { type: "h3", text: "Data Sharing and Disclosure" },
      {
        type: "p",
        text: "LifeHealth may share user data with third-party service providers and partners to the extent necessary for providing and improving our services, including sharing with healthcare providers for the purpose of medical consultations and treatment.",
      },
      { type: "h3", text: "Data Retention" },
      {
        type: "p",
        text: "We retain personal data only for as long as necessary to fulfill the purposes we collected it for, including satisfying any legal, accounting, or reporting requirements. After this period, the data is securely deleted or anonymized.",
      },
      { type: "h3", text: "Children's Privacy" },
      {
        type: "p",
        text: "Our services are not intended for use by individuals under the age of consent in their jurisdiction. We do not knowingly collect personal information from children without parental consent.",
      },
    ],
  },
  {
    title: "8. Data Sharing and Disclosure",
    blocks: [
      { type: "h3", text: "Overview of Data Sharing Practices" },
      {
        type: "p",
        text: "LifeHealth is committed to maintaining the confidentiality and integrity of user data. There are circumstances under which we may share or disclose personal and health-related information, outlined below.",
      },
      { type: "h3", text: "Sharing with Healthcare Providers" },
      {
        type: "p",
        text: "Data relevant to medical consultations and treatments is shared with third-party healthcare providers using our platform, including medical history, test results, and treatment plans.",
      },
      { type: "h3", text: "Sharing with Third-Party Service Providers" },
      {
        type: "p",
        text: "We engage various third-party service providers to support the operation of our platform, including data hosting, payment processing, and customer support services.",
      },
      { type: "h3", text: "Legal and Regulatory Disclosures" },
      {
        type: "p",
        text: "We may disclose data when required by law, such as in response to valid requests from law enforcement or other governmental authorities.",
      },
      { type: "h3", text: "Data Sharing for Research and Development" },
      {
        type: "p",
        text: "Anonymized or aggregated data may be shared with research institutions or used for developing new features and services. Participation in such research is voluntary.",
      },
      { type: "h3", text: "Data Sharing in Business Transfers" },
      {
        type: "p",
        text: "In the event of a merger, acquisition, or sale of assets, user data may be transferred as part of the business assets. Users will be notified in advance.",
      },
      { type: "h3", text: "User Consent and Opt-Out" },
      {
        type: "p",
        text: "We provide settings within the app to manage data sharing preferences, and users can opt out of non-essential data sharing at any time.",
      },
      { type: "h3", text: "Ensuring Data Security in Sharing" },
      {
        type: "p",
        text: "We employ encryption, access controls, and other security measures to safeguard data during transmission and while in the custody of third parties.",
      },
    ],
  },
  {
    title: "10. Location Data",
    blocks: [
      { type: "h3", text: "Collection of Location Information" },
      {
        type: "p",
        text: "LifeHealth may collect and process location information from a user's device when the LifeHealth mobile application is in use, derived from device GPS signals, IP address, mobile network data, or other location-enabled technologies.",
      },
      { type: "h3", text: "Purpose of Location Data" },
      { type: "p", text: "Location data may be used to:" },
      {
        type: "ul",
        items: [
          "Enable healthcare professionals to understand the user's geographic context during a consultation",
          "Recommend appropriate healthcare facilities, including laboratories, pharmacies, and diagnostic centers near the user",
          "Facilitate coordination of in-person healthcare services when necessary, including home visits or emergency response support",
          "Improve the efficiency and relevance of healthcare referrals and service coordination",
        ],
      },
      { type: "h3", text: "User Control" },
      {
        type: "p",
        text: "Location services are enabled only with the user's permission through device settings. Users may disable location access at any time, though some features may not function optimally without it.",
      },
      { type: "h3", text: "Data Protection" },
      {
        type: "p",
        text: "Location data is treated as sensitive personal information and is used only for healthcare service delivery — it is not sold or used for unrelated commercial purposes.",
      },
    ],
  },
  {
    title: "11. User Rights and Access",
    blocks: [
      { type: "h3", text: "Age Verification" },
      {
        type: "p",
        text: "By using LifeHealth, users affirm they are at least 18 years of age. If it comes to our attention that a user is under 18, we reserve the right to terminate their access to our services.",
      },
      { type: "h3", text: "Access, Correction, Portability, and Deletion" },
      {
        type: "p",
        text: "Users have the right to access the personal and health-related information held about them, request corrections, obtain a portable copy of their data, and request deletion of their personal data, subject to legal or regulatory retention requirements. Requests can be made through the app or by contacting our support team.",
      },
      { type: "h3", text: "Opting Out of Data Use" },
      {
        type: "p",
        text: "Users can opt out of certain uses of their data, such as for marketing or research purposes, through the app's privacy settings.",
      },
      { type: "h3", text: "Grievance Redressal" },
      {
        type: "p",
        text: "If you have concerns regarding the handling of your data, you can contact our Data Protection Officer or customer support team.",
      },
    ],
  },
  {
    title: "12. Security Measures",
    blocks: [
      {
        type: "p",
        text: "We implement a comprehensive range of technical, administrative, and physical safeguards to protect data against unauthorized access, disclosure, alteration, and destruction.",
      },
      { type: "h3", text: "Technical Safeguards" },
      {
        type: "ul",
        items: [
          "Encryption of data during transmission and while stored on our systems",
          "Secure data storage designed to ensure integrity and confidentiality",
          "Access controls limited to authorized personnel, based on the principle of least privilege",
        ],
      },
      { type: "h3", text: "Administrative and Physical Safeguards" },
      {
        type: "ul",
        items: [
          "Regular staff training on data privacy and security practices",
          "Robust policies and procedures to manage and protect personal and health information",
          "Regular audits to assess compliance and identify vulnerabilities",
          "Secure facilities with restricted access for servers and data centers",
        ],
      },
      { type: "h3", text: "Incident Response" },
      {
        type: "p",
        text: "We continuously monitor our systems for security incidents and will promptly notify affected users and relevant authorities in the event of a data breach, as required by law.",
      },
    ],
  },
  {
    title: "13. Policy Updates and User Notifications",
    blocks: [
      {
        type: "p",
        text: "This privacy policy is subject to change. We will inform users of any significant changes through the LifeHealth platform, via email, or other appropriate communication channels, and update the effective date accordingly. Continued use of the LifeHealth services after any such changes constitutes acceptance of those changes.",
      },
      { type: "h3", text: "Feedback and Inquiries" },
      {
        type: "p",
        text: "We welcome feedback and inquiries regarding our privacy policy and practices. Users can contact us through the app or via the contact information provided in this policy.",
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

export default function PrivacyMobile() {
  return (
    <div className="min-h-screen bg-white pt-28 pb-16">
      <div className="container-narrow">
        <h1 className="font-heading font-bold text-3xl md:text-4xl text-navy-900 mb-8">
          Privacy Policy — Mobile App
        </h1>
        <div className="prose prose-slate max-w-none">
          <p className="text-slate-500 leading-relaxed text-lg mb-10">
            This Privacy Policy describes how the LifeHealth mobile app collects, uses, and protects
            your personal and health-related information.
          </p>
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
