export const trustScores = [
  { title: "Privacy by Design", text: "Privacy is considered from the start of every capability.", icon: "Shield" },
  { title: "AI Transparency", text: "VIMA is designed to explain its role and remain accountable.", icon: "Sparkles" },
  { title: "Dynamic Consent", text: "People can understand and update permissions over time.", icon: "SlidersHorizontal" },
  { title: "Identity Verification", text: "X-Validator supports trusted identity and event checks.", icon: "BadgeCheck" },
  { title: "Security", text: "Protection is designed across systems, users, and operations.", icon: "LockKeyhole" },
  { title: "Open Standards", text: "Interoperability is built around open healthcare standards.", icon: "Network" },
];

export const principles = [
  ["People First", "Technology exists to improve people's lives — not the other way around."],
  ["You Control Your Information", "Individuals decide who, what, when, why, and how long information is shared."],
  ["Privacy by Design", "Privacy is engineered into every layer, never added afterwards."],
  ["Transparency", "No hidden data collection. No surprises. Everything explained clearly."],
  ["Dynamic Consent", "Consent evolves. Individuals remain in control and permissions can change anytime."],
  ["Trusted Identity", "Identity, permission, healthcare, location, and event verification work together."],
  ["Responsible AI", "AI assists, humans decide, and AI should explain its role."],
  ["Continuous Security", "Encryption, authentication, monitoring, resilience, and recovery are continuous responsibilities."],
  ["Open Healthcare", "FHIR, HL7, APIs, and interoperability help prevent vendor lock-in."],
  ["Data Creates Better Health", "Responsible use can support research, planning, and population health — never exploitation."],
  ["Data Sovereignty", "Individuals, healthcare organizations, governments, and countries retain appropriate control."],
  ["Trust Must Be Earned", "Every interaction, release, and partnership should strengthen trust."],
  ["Better Together", "Governments, providers, researchers, communities, industry, and patients move healthcare forward together."],
].map(([title, text], index) => ({ number: index + 1, title, text }));

export const trustFaqs = [
  ["Who controls information in LifeHealth?", "LifeHealth is designed so individuals and authorized organizations can understand and manage appropriate access to information."],
  ["What does dynamic consent mean?", "It means permissions can be reviewed and changed as needs and circumstances evolve."],
  ["Does VIMA make clinical decisions?", "VIMA is designed to assist people and teams; clinical accountability remains with qualified human professionals."],
  ["Which standards support interoperability?", "LifeHealth is designed around healthcare standards including FHIR, HL7, and secure APIs, based on each implementation's requirements."],
  ["How does LifeHealth support data sovereignty?", "Governance can be configured to reflect appropriate organizational, jurisdictional, and individual control requirements."],
  ["Are trust documents available?", "The Trust Documents area provides the current approved materials as they become available."],
  ["How is access to information managed?", "Access is intended to follow appropriate roles, permissions, consent choices, and governance requirements."],
  ["What is privacy by design?", "It is the practice of considering privacy requirements at the start of product and system design."],
  ["Can consent be changed?", "The dynamic consent model is designed to support review and changes to permissions when appropriate."],
  ["How is identity verified?", "X-Validator is the LifeHealth capability intended to support identity, permission, location, time, and event verification."],
  ["What is de-identification?", "It is a governance process that helps reduce direct identification risk when information is used for approved purposes."],
  ["How does LifeHealth support research?", "Research workflows are designed around appropriate consent, governance, privacy safeguards, and accountable partnerships."],
  ["What is an audit record?", "An audit record helps provide accountability by documenting relevant activity within a governed system."],
  ["How does LifeHealth approach cybersecurity?", "Cybersecurity is approached as an ongoing operational responsibility across technology, people, processes, and resilience planning."],
  ["What happens during a service disruption?", "Continuity and recovery requirements are assessed as part of each deployment's operational design."],
  ["Can governments set their own governance requirements?", "LifeHealth is designed to support jurisdictional and public-sector governance requirements where applicable."],
  ["Does LifeHealth lock organizations into one vendor?", "The platform is designed to support interoperability and open standards rather than unnecessary lock-in."],
  ["Where can I find the Privacy Policy?", "The Privacy Policy is available from the LifeHealth website and will be linked through the document library."],
  ["How are new trust commitments communicated?", "The Trust Dashboard is intended to publish verified updates as monitoring and governance sources are connected."],
  ["Who can I contact about a trust question?", "Please contact the LifeHealth team for questions about your organization, deployment, or governance requirements."],
];

export const documents = ["Privacy Policy", "Security Overview", "AI Principles", "Data Governance", "Dynamic Consent White Paper", "Interoperability Documentation"];