import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How LifeHealth collects, uses, and protects personal and health-related information on the LifeHealth telemedicine platform.",
  path: "/privacy",
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
        text: "Welcome to LifeHealth, a telemedicine platform designed to connect patients with healthcare professionals for convenient and timely medical consultations. Our mission is to provide an accessible, user-friendly, and secure environment for telehealth services. This privacy policy aims to inform you about how we handle personal and health-related information on the LifeHealth app.",
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
        text: "This privacy policy outlines our practices regarding the collection, use, and protection of your personal and medical information. It is designed to help you understand our role and responsibilities in your healthcare journey, the nature of the data collected and how it is used, your rights and choices concerning your personal information, and the security measures we employ to protect your data. By using the LifeHealth app, you agree to the collection and use of information in accordance with this policy.",
      },
      { type: "h3", text: "Age Restriction" },
      {
        type: "p",
        text: "The LifeHealth services are intended solely for individuals who are 18 years of age or older. By using our services, you affirm that you meet this age requirement.",
      },
    ],
  },
  {
    title: "3. No Medical Advice Provided",
    blocks: [
      { type: "h3", text: "Clarification of Role" },
      {
        type: "p",
        text: "LifeHealth is a technology platform that facilitates communication between patients and third-party healthcare providers. It is essential to understand that LifeHealth itself does not provide medical advice, diagnosis, or treatment. Our primary role is to offer a secure and efficient platform for telemedicine services, connecting patients with licensed healthcare professionals.",
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
        text: "In facilitating telemedicine services, LifeHealth collects and processes personal and health-related information as necessary. This includes but is not limited to user registration data, appointment details, communication logs, and any data shared by third-party providers. Our use of this data is primarily for facilitating and improving our services, and ensuring a seamless healthcare experience.",
      },
      { type: "h3", text: "User Consent and Data Rights" },
      {
        type: "p",
        text: "By using LifeHealth, users consent to the collection, storage, and use of their personal and health-related information by LifeHealth and third-party providers. Users retain the right to access, modify, and request deletion of their personal data in accordance with our data retention policies and applicable laws.",
      },
      { type: "h3", text: "Use of Anonymized Data" },
      {
        type: "p",
        text: "LifeHealth may use anonymized medical data for research, quality improvement, and operational purposes. This data, stripped of any personally identifiable information, is utilized in a manner that does not violate privacy or HIPAA regulations. Our commitment to data privacy extends to the use of such anonymized information.",
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
        text: "LifeHealth is committed to advancing healthcare services and contributing to medical research. To this end, we may use anonymized medical data collected through our platform. This data is processed to remove any personally identifiable information, ensuring patient confidentiality and compliance with HIPAA and other privacy laws.",
      },
      { type: "h3", text: "Purposes of Using Anonymized Data" },
      {
        type: "p",
        text: "The anonymized data may be utilized for various purposes, including, but not limited to:",
      },
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
        text: "We employ rigorous methods to anonymize data, ensuring that individual patients cannot be identified. This process involves removing or altering personal identifiers, such as names, addresses, and social security numbers, as well as any other information that could be used to trace the data back to an individual.",
      },
      { type: "h3", text: "User Consent and Opt-Out Options" },
      {
        type: "p",
        text: "By using LifeHealth, users consent to the use of their anonymized data for the purposes outlined above. However, we respect the right of our users to opt out of this use. Users can indicate their preference through their account settings or by contacting our support team.",
      },
      { type: "h3", text: "Data Sharing with Third Parties" },
      {
        type: "p",
        text: "In certain instances, anonymized data may be shared with third-party organizations for research or healthcare improvement initiatives. These entities are carefully selected and are required to adhere to our data protection standards and privacy laws.",
      },
      { type: "h3", text: "Security of Anonymized Data" },
      {
        type: "p",
        text: "We maintain stringent security measures to protect anonymized data against unauthorized access, alteration, or dissemination. Our commitment to data security extends to all forms of data, whether individual, aggregated, or anonymized.",
      },
    ],
  },
  {
    title: "6. Compliance with HIPAA and State Laws",
    blocks: [
      { type: "h3", text: "Commitment to Regulatory Compliance" },
      {
        type: "p",
        text: "LifeHealth is dedicated to upholding the highest standards of privacy and security in healthcare. We adhere strictly to the Health Insurance Portability and Accountability Act (HIPAA) and relevant state laws regarding the handling and protection of personal health information (PHI).",
      },
      { type: "h3", text: "HIPAA Compliance" },
      {
        type: "p",
        text: "As a telemedicine platform facilitating the exchange of PHI, we implement rigorous safeguards to ensure HIPAA compliance. These measures include, but are not limited to:",
      },
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
        text: "In addition to federal regulations, LifeHealth recognizes and adheres to the varying healthcare privacy laws that exist at the state level. We continuously monitor changes in state legislation to ensure our practices remain compliant with the latest legal requirements.",
      },
      { type: "h3", text: "Data Protection and Security Measures" },
      {
        type: "p",
        text: "To protect the privacy and security of user data, we employ a variety of technical, administrative, and physical safeguards. These measures are designed to protect PHI from unauthorized access, disclosure, alteration, and destruction. They include, but are not limited to:",
      },
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
        text: "LifeHealth is committed to transparency in our compliance efforts. In the event of a data breach or non-compliance issue, we will promptly inform affected users and take immediate steps to rectify the situation, in line with regulatory requirements.",
      },
      { type: "h3", text: "User Cooperation and Responsibility" },
      {
        type: "p",
        text: "We also seek the cooperation of our users in maintaining the security of their PHI. Users are encouraged to use strong passwords, log out of their accounts after use, and report any suspected security breaches to LifeHealth immediately.",
      },
    ],
  },
  {
    title: "7. Data Collection and Use",
    blocks: [
      { type: "h3", text: "Types of Data Collected" },
      {
        type: "p",
        text: "LifeHealth collects various types of data to provide and improve our telemedicine services. This data includes, but is not limited to:",
      },
      {
        type: "ul",
        items: [
          "Personal identification information, such as names, email addresses, and phone numbers",
          "Health information: medical history, current health conditions, treatment plans, and other health-related information provided by healthcare providers or entered by patients",
          "Technical and usage data: information on how users interact with our service, including login data, user interface interactions, and technical details about devices used to access our platform",
        ],
      },
      { type: "h3", text: "Purpose of Data Collection" },
      {
        type: "p",
        text: "The data we collect serves multiple purposes:",
      },
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
        text: "By using LifeHealth, users consent to the collection and use of their data as outlined in this policy. Users have the right to access, modify, or delete their personal information. LifeHealth provides tools and settings within the app for users to control their data and privacy preferences.",
      },
      { type: "h3", text: "Data Sharing and Disclosure" },
      {
        type: "p",
        text: "LifeHealth may share user data with third-party service providers and partners to the extent necessary for providing and improving our services. This includes sharing with healthcare providers for the purpose of medical consultations and treatment. We require all third parties to respect the security of your data and to treat it in accordance with the law.",
      },
      { type: "h3", text: "Data Retention" },
      {
        type: "p",
        text: "We retain personal data only for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements. After this period, the data is securely deleted or anonymized.",
      },
      { type: "h3", text: "Children's Privacy" },
      {
        type: "p",
        text: "LifeHealth is committed to protecting the privacy of children. Our services are not intended for use by individuals under the age of consent in their jurisdiction. We do not knowingly collect personal information from children without parental consent.",
      },
    ],
  },
  {
    title: "8. Data Sharing and Disclosure",
    blocks: [
      { type: "h3", text: "Overview of Data Sharing Practices" },
      {
        type: "p",
        text: "LifeHealth is committed to maintaining the confidentiality and integrity of user data. However, there are circumstances under which we may share or disclose personal and health-related information. This section outlines those circumstances and the principles guiding our data sharing practices.",
      },
      { type: "h3", text: "Sharing with Healthcare Providers" },
      {
        type: "p",
        text: "Data relevant to medical consultations and treatments is shared with third-party healthcare providers using our platform. This includes, but is not limited to, medical history, test results, and treatment plans. Healthcare providers are bound by professional confidentiality and privacy laws, including HIPAA, in their use of this information.",
      },
      { type: "h3", text: "Sharing with Third-Party Service Providers" },
      {
        type: "p",
        text: "We engage various third-party service providers to support the operation of our platform. This may include data hosting, payment processing, and customer support services. These providers are contractually bound to protect the data and use it only for the purposes for which it was shared.",
      },
      { type: "h3", text: "Legal and Regulatory Disclosures" },
      {
        type: "p",
        text: "We may disclose data when required by law, such as in response to valid requests from law enforcement or other governmental authorities. In such cases, we take steps to ensure that any disclosure is limited to what is legally required.",
      },
      { type: "h3", text: "Data Sharing for Research and Development" },
      {
        type: "p",
        text: "Anonymized or aggregated data may be shared with research institutions or used for developing new features and services. This is done in a way that does not compromise individual privacy. Participation in such research is voluntary, and users can opt out through their account settings.",
      },
      { type: "h3", text: "Data Sharing in Business Transfers" },
      {
        type: "p",
        text: "In the event of a merger, acquisition, or sale of assets, user data may be transferred as part of the business assets. Users will be notified in advance of any such transfer and its implications for their data.",
      },
      { type: "h3", text: "User Consent and Opt-Out" },
      {
        type: "p",
        text: "Users have control over their data sharing preferences. We provide settings within the app to manage these preferences, and users can opt out of non-essential data sharing. Users are informed of their data sharing options at the time of data collection and can modify their preferences at any time.",
      },
      { type: "h3", text: "Ensuring Data Security in Sharing" },
      {
        type: "p",
        text: "All data sharing is conducted with a commitment to data security. We employ encryption, access controls, and other security measures to safeguard data during transmission and while in the custody of third parties.",
      },
    ],
  },
  {
    title: "10. Location Data",
    blocks: [
      { type: "h3", text: "Collection of Location Information" },
      {
        type: "p",
        text: "To support the effective delivery of telemedicine and digital health services, LifeHealth may collect and process location information from a user's device when the LifeHealth mobile application is in use. Location information may include approximate or precise geographic location derived from device GPS signals, IP address, mobile network data, or other location-enabled technologies available on the user's device.",
      },
      { type: "h3", text: "Purpose of Location Data" },
      {
        type: "p",
        text: "Location information is collected and used solely to facilitate healthcare service delivery on the platform. Specifically, location data may be used to:",
      },
      {
        type: "ul",
        items: [
          "Enable healthcare professionals providing telemedicine consultations to understand the user's geographic context during a consultation",
          "Assist healthcare professionals in recommending appropriate healthcare facilities, including laboratories, pharmacies, and diagnostic centers located near the user",
          "Facilitate coordination of in-person healthcare services when necessary, including home visits by healthcare professionals or emergency response support",
          "Improve the efficiency and relevance of healthcare referrals and service coordination within the LifeHealth platform",
        ],
      },
      {
        type: "p",
        text: "The collection of location information helps healthcare providers complete the service loop between digital consultations and physical healthcare services that may be required following a consultation.",
      },
      { type: "h3", text: "User Control" },
      {
        type: "p",
        text: "Location services are enabled only with the user's permission through the device settings or application permissions. Users may choose to disable location access at any time through their device settings; however, certain features of the LifeHealth platform may not function optimally without location information.",
      },
      { type: "h3", text: "Data Protection" },
      {
        type: "p",
        text: "Location data collected through the LifeHealth platform is treated as sensitive personal information and is handled in accordance with applicable data protection laws and the security safeguards described in this Privacy Policy. Location information is used only for healthcare service delivery and is not sold or used for unrelated commercial purposes.",
      },
    ],
  },
  {
    title: "11. User Rights and Access",
    blocks: [
      { type: "h3", text: "Respecting User Rights" },
      {
        type: "p",
        text: "At LifeHealth, we recognize and respect the rights of our users regarding their personal and health-related data. This section outlines the rights you have concerning your data and how you can exercise these rights.",
      },
      { type: "h3", text: "Age Verification" },
      {
        type: "p",
        text: "By using LifeHealth, users acknowledge and affirm that they are at least 18 years of age. Our services are not designed for children or minors under the age of 18. If it comes to our attention that a user is under 18, we reserve the right to terminate their access to our services.",
      },
      { type: "h3", text: "Access to Your Data" },
      {
        type: "p",
        text: "Users have the right to access the personal and health-related information held about them on the LifeHealth platform. You can request access to your data at any time through the app's settings or by contacting our customer support team.",
      },
      { type: "h3", text: "Corrections and Updates" },
      {
        type: "p",
        text: "If your information is incorrect, incomplete, or has changed, you have the right to have it corrected or updated. Corrections can be made directly through the app or by making a request to our support team.",
      },
      { type: "h3", text: "Data Portability" },
      {
        type: "p",
        text: "Users have the right to data portability, allowing you to obtain a copy of your data in a structured, commonly used, and machine-readable format. This right enables you to transfer your data to another service provider if you choose.",
      },
      { type: "h3", text: "Deletion of Data" },
      {
        type: "p",
        text: "You have the right to request the deletion of your personal data from our systems, subject to any legal or regulatory requirements to retain certain information. Requests for deletion can be made through the app or by contacting our support team.",
      },
      { type: "h3", text: "Opting Out of Data Use" },
      {
        type: "p",
        text: "Users can opt out of certain uses of their data, such as for marketing or research purposes. This can be done through the app's privacy settings. Opting out may affect the availability or quality of certain features or services on the platform.",
      },
      { type: "h3", text: "Grievance Redressal" },
      {
        type: "p",
        text: "If you have concerns or grievances regarding the handling of your data, you can contact our Data Protection Officer or customer support team. We are committed to addressing and resolving such concerns promptly and effectively.",
      },
      { type: "h3", text: "Changes in Personal Circumstances" },
      {
        type: "p",
        text: "Users are encouraged to keep their personal information up-to-date and inform us of any significant changes that might affect their use of the LifeHealth services.",
      },
      { type: "h3", text: "Security of Your Data" },
      {
        type: "p",
        text: "We take the security of your data seriously and have implemented measures to protect it from unauthorized access, disclosure, alteration, or destruction.",
      },
    ],
  },
  {
    title: "12. Security Measures",
    blocks: [
      { type: "h3", text: "Commitment to Data Security" },
      {
        type: "p",
        text: "At LifeHealth, the security of our users' personal and health-related information is of paramount importance. We implement a comprehensive range of security measures to protect data against unauthorized access, disclosure, alteration, and destruction.",
      },
      { type: "h3", text: "Technical Safeguards" },
      {
        type: "ul",
        items: [
          "Encryption: we use advanced encryption technologies to secure data during transmission and while stored on our systems",
          "Secure data storage: our data storage solutions are designed to ensure the integrity and confidentiality of user data",
          "Access controls: access to personal and health information is strictly controlled and limited to authorized personnel only, based on the principle of least privilege",
        ],
      },
      { type: "h3", text: "Administrative Safeguards" },
      {
        type: "ul",
        items: [
          "Staff training: all LifeHealth employees undergo regular training on data privacy and security practices",
          "Privacy policies and procedures: we maintain robust policies and procedures to manage and protect personal and health information",
          "Regular audits: we conduct regular audits to assess our compliance with privacy and security policies and to identify and rectify any potential vulnerabilities",
        ],
      },
      { type: "h3", text: "Physical Safeguards" },
      {
        type: "p",
        text: "Our servers and data centers are located in secure facilities with restricted access.",
      },
      { type: "h3", text: "Disaster Recovery and Business Continuity" },
      {
        type: "p",
        text: "We have plans in place for data backup and recovery to ensure the continuity of our services in the event of a physical or technical incident.",
      },
      { type: "h3", text: "Incident Response" },
      {
        type: "ul",
        items: [
          "Monitoring and detection: we continuously monitor our systems for security incidents and have protocols in place for identifying and responding to breaches",
          "Breach notification: in the event of a data breach, we will promptly notify affected users and relevant authorities as required by law and take immediate steps to mitigate any potential harm",
        ],
      },
      { type: "h3", text: "Continuous Improvement" },
      {
        type: "p",
        text: "Our security measures are regularly reviewed and updated to adapt to new threats and technological advancements. We are committed to continuously improving our security practices to protect user data.",
      },
    ],
  },
  {
    title: "13. Policy Updates and User Notifications",
    blocks: [
      { type: "h3", text: "Policy Updates" },
      {
        type: "p",
        text: "LifeHealth is committed to continuously improving our services and policies to better serve our users and comply with legal and regulatory requirements. As such, our privacy policy is subject to change.",
      },
      { type: "h3", text: "Notification of Changes" },
      {
        type: "p",
        text: "We will inform users of any significant changes to this privacy policy. Notifications may be made through the LifeHealth platform, via email, or other appropriate communication channels. The effective date at the top of the privacy policy will be updated to reflect when these changes take place.",
      },
      { type: "h3", text: "User Responsibility" },
      {
        type: "p",
        text: "We encourage users to regularly review this policy to stay informed about how we are protecting their personal information. Your continued use of the LifeHealth services following any changes to this policy constitutes your acceptance of those changes. If you do not agree with the changes, you should discontinue use of our services.",
      },
      { type: "h3", text: "Feedback and Inquiries" },
      {
        type: "p",
        text: "We welcome feedback and inquiries regarding our privacy policy and practices. Users can contact us through the app or via the contact information provided in this policy for any questions or concerns.",
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

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white pt-28 pb-16">
      <div className="container-narrow">
        <h1 className="font-heading font-bold text-3xl md:text-4xl text-navy-900 mb-8">Privacy Policy</h1>
        <div className="prose prose-slate max-w-none">
          <p className="text-slate-500 leading-relaxed text-lg mb-10">
            This Privacy Policy describes how LifeHealth collects, uses, and protects your personal
            and health-related information when you use the LifeHealth app and platform.
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
