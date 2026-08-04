import { Building2, Stethoscope, FlaskConical, Microscope, Landmark, Shield, Home, BedDouble, Heart, Briefcase, Ribbon } from "lucide-react";

export const solutions = [
  {
    id: "hospitals",
    name: "Hospitals & Health Systems",
    slug: "hospitals",
    icon: Building2,
    shortName: "Hospitals",
    headline: "Everything Your Hospital Needs. One Operating System.",
    coreMessage: "An integrated healthcare operating environment connecting patients, clinicians, facilities, laboratories, analytics, and AI.",
    summary: "Transform hospital operations with a unified digital platform that connects every department, clinician, and patient touchpoint.",
    outcomes: [
      { title: "Better Clinical Coordination", description: "Unified patient records and care pathways across all departments and specialties." },
      { title: "Improved Patient Flow", description: "Real-time bed management, scheduling, and capacity optimization." },
      { title: "Reduced Administrative Burden", description: "Automated workflows, documentation, and reporting to free clinical time." },
      { title: "Integrated Laboratory Workflows", description: "Seamless ordering, specimen tracking, and result delivery." },
      { title: "Executive Visibility", description: "Real-time dashboards and analytics for operational and clinical performance." },
      { title: "Improved Interoperability", description: "Connect with external systems, payers, and regional health networks." }
    ],
    challenges: [
      "Fragmented systems that don't communicate",
      "Paper-based or siloed clinical workflows",
      "Limited visibility into operational performance",
      "Disconnected laboratory and diagnostic processes",
      "Poor patient experience across touchpoints",
      "Difficulty meeting reporting and compliance requirements"
    ],
    includedPlatforms: ["Passport", "Nexus", "CHIP", "LifeLab", "LifeData", "VIMA"],
    includedCapabilities: ["Dynamic Consent", "LifeHealth Connect", "X-Validator", "Advanced Analytics"],
    optionalCapabilities: ["Payments", "Device Integration", "Genomics", "Document Management"],
    pricingDrivers: ["Number of hospitals", "Number of beds", "Number of clinicians", "Annual patient volume"],
    faqs: [
      { question: "Can LifeHealth integrate with our existing systems?", answer: "Yes. LifeHealth is interoperable by design, supporting FHIR, HL7, and custom APIs to connect with your existing EHR, LIS, and other systems." },
      { question: "How long does implementation typically take?", answer: "Implementation timelines depend on scale and complexity. A typical hospital deployment ranges from 12 to 24 weeks, with phased rollout options available." },
      { question: "Can we deploy on our own infrastructure?", answer: "Absolutely. LifeHealth supports public cloud, private cloud, hybrid, on-premises, and sovereign deployment models." }
    ]
  },
  {
    id: "clinics",
    name: "Clinics & Primary Care",
    slug: "clinics",
    icon: Stethoscope,
    shortName: "Clinics",
    headline: "Simple, connected care delivery for every clinic.",
    coreMessage: "Simple, connected care delivery for clinics and physician networks.",
    summary: "Digitize patient records, streamline scheduling, enable telemedicine, and coordinate care across locations.",
    outcomes: [
      { title: "Digital Patient Records", description: "Complete electronic health records accessible from any location." },
      { title: "Smart Scheduling", description: "Automated appointment management with patient self-booking." },
      { title: "Telemedicine Ready", description: "Built-in video consultations and remote care capabilities." },
      { title: "Clinical Documentation", description: "AI-assisted note-taking and structured clinical documentation." },
      { title: "Lab & Referral Coordination", description: "Seamless ordering and result tracking across partner facilities." },
      { title: "Multi-Location Management", description: "Easily expand and manage care across multiple clinic sites." }
    ],
    challenges: [
      "Manual patient record keeping",
      "Inefficient scheduling and patient flow",
      "No telemedicine capability",
      "Disconnected from laboratories and specialists",
      "Difficulty scaling across locations"
    ],
    includedPlatforms: ["Passport", "Nexus", "CHIP", "LifeData"],
    includedCapabilities: ["Dynamic Consent", "LifeHealth Connect"],
    optionalCapabilities: ["LifeLab", "VIMA", "Advanced Analytics", "Payments"],
    pricingDrivers: ["Number of clinics", "Number of clinicians", "Monthly patient visits"],
    faqs: []
  },
  {
    id: "laboratories",
    name: "Laboratories & Diagnostics",
    slug: "laboratories",
    icon: FlaskConical,
    shortName: "Laboratories",
    headline: "Modernize your laboratory. Connect to the ecosystem.",
    coreMessage: "Modernize laboratory operations and connect diagnostics to the wider healthcare ecosystem.",
    summary: "Electronic orders, specimen tracking, analyzer integration, barcode workflows, and network analytics — all connected.",
    outcomes: [
      { title: "Electronic Orders", description: "Digital test ordering with automated validation and routing." },
      { title: "Specimen Tracking", description: "End-to-end specimen lifecycle management with barcode workflows." },
      { title: "Analyzer Integration", description: "Direct bidirectional connectivity with laboratory analyzers." },
      { title: "Faster Results", description: "Automated result validation, approval, and delivery workflows." },
      { title: "Quality Control", description: "Built-in QC management, Levey-Jennings tracking, and Westgard rules." },
      { title: "Network Analytics", description: "Operational dashboards across single or multi-site laboratory networks." }
    ],
    challenges: [
      "Manual test ordering and result reporting",
      "Limited specimen tracking and traceability",
      "Disconnected analyzers requiring manual data entry",
      "No quality control automation",
      "Poor visibility across multiple laboratory sites"
    ],
    includedPlatforms: ["LifeLab", "Nexus", "LifeData"],
    includedCapabilities: ["X-Validator", "LifeHealth Connect", "Advanced Analytics"],
    optionalCapabilities: ["Passport", "VIMA", "Device Integration"],
    pricingDrivers: ["Number of laboratories", "Number of analyzers", "Annual test volume", "Number of users"],
    faqs: []
  },
  {
    id: "clinical-research",
    name: "Clinical Research",
    slug: "clinical-research",
    icon: Microscope,
    shortName: "Research",
    headline: "A connected research environment, from recruitment to evidence.",
    coreMessage: "Recruit, consent, engage, and manage research participants through a connected research environment.",
    summary: "Participant recruitment, dynamic consent, ePRO, study management, registries, pharmacovigilance, and real-world evidence.",
    outcomes: [
      { title: "Participant Recruitment", description: "Digital screening, eligibility assessment, and enrollment workflows." },
      { title: "Dynamic Consent", description: "Granular, auditable, patient-controlled consent management." },
      { title: "ePRO & Data Capture", description: "Electronic patient-reported outcomes and structured data collection." },
      { title: "Study Visit Management", description: "Scheduling, reminders, and visit documentation for clinical trials." },
      { title: "Registries & Surveillance", description: "Disease registries, pharmacovigilance, and safety reporting." },
      { title: "Real-World Evidence", description: "Analytics and reporting for real-world data and research outcomes." }
    ],
    challenges: [
      "Slow and expensive participant recruitment",
      "Paper-based or inflexible consent processes",
      "Fragmented data collection across sites",
      "Limited real-time study visibility",
      "Difficulty generating real-world evidence"
    ],
    includedPlatforms: ["LifeResearch", "Passport", "Nexus", "LifeData", "VIMA"],
    includedCapabilities: ["Dynamic Consent", "X-Validator", "Advanced Analytics"],
    optionalCapabilities: ["LifeLab", "Genomics", "Device Integration"],
    pricingDrivers: ["Number of studies", "Number of sites", "Number of participants", "Number of research users"],
    faqs: []
  },
  {
    id: "ministry-of-health",
    name: "Ministry of Health",
    slug: "ministry-of-health",
    icon: Landmark,
    shortName: "Government",
    headline: "National digital health infrastructure. One platform.",
    coreMessage: "Digital public health infrastructure connecting citizens, providers, facilities, laboratories, research, and national intelligence.",
    summary: "Enable national interoperability, population health analytics, disease surveillance, and citizen engagement at sovereign scale.",
    outcomes: [
      { title: "National Interoperability", description: "Connect disparate health systems into a unified digital health layer." },
      { title: "Population Health Analytics", description: "Real-time dashboards for public health indicators and outcomes." },
      { title: "Disease Surveillance", description: "Automated case detection, reporting, and outbreak management." },
      { title: "Community Health Coordination", description: "Connect frontline workers to facilities and national oversight." },
      { title: "Citizen Engagement", description: "Health records, vaccination certificates, and service access for citizens." },
      { title: "Sovereign Governance", description: "Data residency, privacy controls, and regulatory compliance." }
    ],
    challenges: [
      "Fragmented national health information systems",
      "Limited real-time public health visibility",
      "Paper-based community health programmes",
      "Disconnected laboratory networks",
      "Citizen data scattered across providers"
    ],
    includedPlatforms: ["Passport", "Nexus", "CHIP", "LifeLab", "LifeData", "VIMA", "LifeResearch"],
    includedCapabilities: ["Dynamic Consent", "LifeHealth Connect", "X-Validator", "Advanced Analytics"],
    optionalCapabilities: ["LifeCommerce", "Genomics", "Device Integration"],
    pricingDrivers: ["Population covered", "Number of facilities", "Number of health workers", "Deployment model"],
    faqs: []
  },
  {
    id: "insurance",
    name: "Insurance Companies & Payers",
    slug: "insurance",
    icon: Shield,
    shortName: "Payers",
    headline: "Better member engagement. Smarter care coordination.",
    coreMessage: "Improve member engagement, care coordination, verification, analytics, and access to healthcare services.",
    summary: "Member health engagement, authorized records access, care navigation, telemedicine, and population analytics.",
    outcomes: [
      { title: "Member Health Engagement", description: "Digital health tools and wellness programmes for covered members." },
      { title: "Patient-Authorized Records", description: "Consent-based access to member health data from providers." },
      { title: "Care Navigation", description: "Guided pathways connecting members to the right care at the right time." },
      { title: "Telemedicine Access", description: "Virtual care channels integrated with member benefits." },
      { title: "Risk & Population Analytics", description: "Predictive analytics and stratification for covered populations." },
      { title: "Reduced Fragmentation", description: "Unified view across providers, claims, and member interactions." }
    ],
    challenges: [
      "Disconnected member health data",
      "Fragmented provider networks",
      "High administrative costs for claims and verification",
      "Limited visibility into member health outcomes",
      "Poor member engagement with health services"
    ],
    includedPlatforms: ["Passport", "Nexus", "LifeData", "LifeCommerce", "VIMA"],
    includedCapabilities: ["Dynamic Consent", "LifeHealth Connect", "Advanced Analytics"],
    optionalCapabilities: ["X-Validator", "Device Integration"],
    pricingDrivers: ["Covered lives", "Number of care partners", "Number of internal users"],
    faqs: []
  },
  {
    id: "home-healthcare",
    name: "Home Healthcare",
    slug: "home-healthcare",
    icon: Home,
    shortName: "Home Care",
    headline: "More visits per caregiver. Cleaner claims. Higher margins.",
    coreMessage: "LifeHealth makes every caregiver more productive and every visit more billable — documentation in 10 minutes instead of 20 means more visits per day, verified visits mean claims that get paid the first time, and real-time oversight means you catch revenue leaks before they cost you.",
    summary: "Faster documentation that frees caregivers for more visits, GPS-verified proof of service that protects reimbursement, smarter scheduling that cuts drive time and overtime, and dashboards that show exactly where money is made and lost.",
    outcomes: [
      { title: "More Visits Per Day", description: "Voice and mobile documentation cuts charting time in half — caregivers fit more billable visits into every shift." },
      { title: "Smart Scheduling", description: "Route optimization reduces drive time, mileage costs, and overtime while increasing visit capacity." },
      { title: "Cleaner Claims, Faster Payment", description: "Complete, verified documentation flows straight to billing — fewer denials, less rework, faster reimbursement." },
      { title: "Visit Verification", description: "GPS-enabled proof of service protects every claim and shields you from audits and fraud exposure." },
      { title: "New Billable Services", description: "Telemedicine and remote monitoring open reimbursable service lines without adding field staff." },
      { title: "Revenue & Operations Dashboards", description: "Real-time visibility into caregiver productivity, visit volumes, denials, and margin by branch." }
    ],
    challenges: [
      "Paper documentation eats billable hours and delays claims",
      "No visibility into whether caregivers are where they should be",
      "Denied and delayed claims from incomplete or unverifiable documentation",
      "Manual scheduling wastes drive time, fuel, and overtime budget",
      "Caregivers doing 4 visits a day when they could do 6"
    ],
    includedPlatforms: ["Passport", "Nexus", "LifeData", "VIMA"],
    includedCapabilities: ["Dynamic Consent", "LifeHealth Connect"],
    optionalCapabilities: ["Device Integration", "Advanced Analytics", "X-Validator"],
    pricingDrivers: ["Number of caregivers", "Number of active patients", "Number of branches", "Monthly visits"],
    faqs: []
  },
  {
    id: "nursing-homes",
    name: "Nursing Homes",
    slug: "nursing-homes",
    icon: BedDouble,
    shortName: "Nursing Homes",
    headline: "Grow revenue. Cut costs. Unlock new income streams.",
    coreMessage: "LifeHealth turns your facility into a stronger business — better reimbursement capture and cleaner claims, fewer costly errors, penalties, and readmissions, higher occupancy and staff retention, plus new billable services like telemedicine and connected diagnostics.",
    summary: "Revenue-ready documentation, billing and reimbursement support, cost-saving workflows, telemedicine and lab services that generate income, and analytics that protect your bottom line.",
    outcomes: [
      { title: "Resident Longitudinal Record", description: "Complete digital care history for every resident." },
      { title: "Medication & Care Plans", description: "Structured care plans with medication administration tracking." },
      { title: "Telemedicine", description: "Remote specialist consultations without patient transport." },
      { title: "Laboratory Integration", description: "Connected ordering and result delivery for routine and urgent tests." },
      { title: "Family Engagement", description: "Secure portals for family communication and care updates." },
      { title: "Staff Workflow Support", description: "Task management, shift handoffs, and workload optimization." }
    ],
    challenges: [
      "Paper-based resident records",
      "Limited access to specialist consultations",
      "Disconnected from laboratories and pharmacies",
      "Family communication is manual and inconsistent",
      "Limited data for quality improvement"
    ],
    includedPlatforms: ["Passport", "Nexus", "LifeData", "VIMA"],
    includedCapabilities: ["Dynamic Consent", "LifeHealth Connect"],
    optionalCapabilities: ["LifeLab", "Advanced Analytics", "Device Integration"],
    pricingDrivers: ["Number of facilities", "Number of beds or residents", "Number of clinical users"],
    faqs: []
  },
  {
    id: "community-health",
    name: "Community Health",
    slug: "community-health",
    icon: Heart,
    shortName: "Community",
    headline: "Equip frontline health workers. Connect communities.",
    coreMessage: "Equip frontline health workers while connecting community activities to facilities, citizens, and health-system leadership.",
    summary: "Mobile and offline workflows, community registration, referrals, telemedicine, device capture, and programme monitoring.",
    outcomes: [
      { title: "Mobile & Offline Workflows", description: "Field-ready apps that work with or without internet connectivity." },
      { title: "Community Registration", description: "Household and individual registration for population-level programmes." },
      { title: "Referrals & Follow-up", description: "Structured referral pathways from community to facility and back." },
      { title: "Device Capture", description: "Integration with point-of-care devices for field-based screening." },
      { title: "Programme Monitoring", description: "Real-time dashboards for programme coverage and outcomes." },
      { title: "Population Analytics", description: "Aggregated health intelligence from community-level data." }
    ],
    challenges: [
      "No digital tools for frontline workers",
      "Data lost between community and facility levels",
      "Manual programme monitoring and reporting",
      "Limited connectivity in remote areas",
      "No population-level analytics"
    ],
    includedPlatforms: ["Passport", "Nexus", "LifeData", "VIMA"],
    includedCapabilities: ["X-Validator", "LifeHealth Connect", "Dynamic Consent"],
    optionalCapabilities: ["LifeLab", "Advanced Analytics", "Device Integration"],
    pricingDrivers: ["Number of health workers", "Population covered", "Number of facilities", "Programme scope"],
    faqs: []
  },
  {
    id: "disease-care",
    name: "Disease Care & Health Associations",
    slug: "disease-care",
    icon: Ribbon,
    shortName: "Associations",
    headline: "Purpose-built for disease-focused associations and patient communities.",
    coreMessage: "Connect patient communities, disease registries, care programmes, research, and advocacy through one platform built for condition-focused organizations.",
    summary: "Patient registries, condition-specific care pathways, community engagement, research participation, and population insights for disease associations — from sickle cell to lung health and beyond.",
    outcomes: [
      { title: "Disease Registries", description: "Structured, longitudinal registries of patients living with your condition — consented, secure, and research-ready." },
      { title: "Condition-Specific Care Pathways", description: "Standardized care protocols, screening programmes, and follow-up workflows tailored to your disease area." },
      { title: "Patient Community Engagement", description: "Digital tools for education, self-management, appointment reminders, and peer support programmes." },
      { title: "Research & Trial Recruitment", description: "Connect your patient community to relevant studies with dynamic consent and eligibility screening." },
      { title: "Geographic Disease Mapping", description: "Visualize patient distribution, care access gaps, and programme coverage on interactive maps." },
      { title: "Advocacy-Ready Analytics", description: "Evidence and insights that strengthen funding applications, policy advocacy, and programme reporting." }
    ],
    challenges: [
      "No unified registry of patients living with the condition",
      "Fragmented care across providers with no shared record",
      "Difficulty recruiting patients into relevant research",
      "Limited data to support advocacy and funding applications",
      "Manual, paper-based programme monitoring",
      "No visibility into geographic care gaps"
    ],
    includedPlatforms: ["Passport", "Nexus", "LifeData", "LifeResearch", "VIMA"],
    includedCapabilities: ["Dynamic Consent", "LifeHealth Connect", "Advanced Analytics"],
    optionalCapabilities: ["LifeLab", "Genomics", "Device Integration", "X-Validator"],
    pricingDrivers: ["Number of registered patients", "Number of care programmes", "Number of partner facilities", "Research scope"],
    faqs: [
      { question: "Can we run a national disease registry on LifeHealth?", answer: "Yes. LifeHealth supports consented, longitudinal disease registries at any scale — from a regional programme to a national registry — with full data governance and privacy controls." },
      { question: "How do patients join our registry?", answer: "Patients enroll through the Passport app or through partner facilities, with dynamic consent capturing exactly what they agree to share with your association and with researchers." },
      { question: "Can we connect our registry to research studies?", answer: "Absolutely. LifeResearch connects your patient community to relevant clinical trials and studies, with eligibility screening and per-study consent built in." }
    ]
  },
  {
    id: "employers",
    name: "Employers",
    slug: "employers",
    icon: Briefcase,
    shortName: "Employers",
    headline: "Healthier teams. Better outcomes. Lower costs.",
    coreMessage: "Employee health engagement, wellness programmes, telemedicine access, and population health analytics for employers.",
    summary: "Digital health tools, telemedicine access, wellness programmes, and workforce health analytics.",
    outcomes: [
      { title: "Employee Health Engagement", description: "Digital health profiles and wellness programmes for employees." },
      { title: "Telemedicine Access", description: "On-demand virtual care for employees and dependents." },
      { title: "Wellness Programmes", description: "Structured programmes for preventive care and chronic condition management." },
      { title: "Health Analytics", description: "Aggregated workforce health insights for HR and leadership." },
      { title: "Benefits Integration", description: "Connected health benefits administration and utilization tracking." },
      { title: "Reduced Absenteeism", description: "Proactive health management to reduce sick days and improve productivity." }
    ],
    challenges: [
      "High healthcare costs with limited visibility into outcomes",
      "Fragmented employee health benefits",
      "Low engagement with wellness initiatives",
      "No digital health tools for employees",
      "Limited workforce health data"
    ],
    includedPlatforms: ["Passport", "Nexus", "LifeData", "VIMA"],
    includedCapabilities: ["Dynamic Consent", "LifeHealth Connect"],
    optionalCapabilities: ["LifeCommerce", "Advanced Analytics", "Device Integration"],
    pricingDrivers: ["Number of employees", "Number of locations", "Programme scope"],
    faqs: []
  }
];

export const platforms = [
  { name: "Passport", user: "Patients & Citizens", purpose: "Personal health record, identity, consent, and engagement for individuals.", color: "#14B8A6", icon: "Shield" },
  { name: "Nexus", user: "Healthcare Providers", purpose: "Clinical workflows, EHR, telemedicine, and care coordination for healthcare professionals.", color: "#3B82F6", icon: "Stethoscope" },
  { name: "CHIP", user: "Health Facilities", purpose: "Facility management, scheduling, bed management, and operational workflows.", color: "#8B5CF6", icon: "Building2" },
  { name: "LifeLab", user: "Laboratory Professionals", purpose: "Laboratory information management, specimen tracking, and analyzer integration.", color: "#F59E0B", icon: "FlaskConical" },
  { name: "LifeResearch", user: "Researchers", purpose: "Clinical trial management, participant engagement, registries, and research analytics.", color: "#EC4899", icon: "Microscope" },
  { name: "LifeData", user: "Decision Makers", purpose: "Analytics, dashboards, population health intelligence, and real-world evidence.", color: "#10B981", icon: "BarChart3" },
  { name: "LifeCommerce", user: "Payers & Partners", purpose: "Health marketplace, benefits administration, and commercial services.", color: "#F97316", icon: "ShoppingBag" },
  { name: "VIMA", user: "All Users", purpose: "AI assistant for clinical decision support, workflow automation, and intelligent insights.", color: "#6366F1", icon: "Sparkles" }
];

export const capabilities = [
  { name: "Dynamic Consent", description: "Patient-controlled, granular, auditable consent management." },
  { name: "LifeHealth Connect", description: "Interoperability engine for FHIR, HL7, APIs, and external systems." },
  { name: "X-Validator", description: "Data quality assurance and validation framework." },
  { name: "Advanced Analytics", description: "Configurable dashboards, reporting, and business intelligence." },
  { name: "Payments", description: "Integrated billing, payment processing, and financial workflows." },
  { name: "Device Integration", description: "Connected medical devices and IoT health sensors." },
  { name: "Genomics", description: "Genomic data management and integration where applicable." },
  { name: "Document Management", description: "Clinical document storage, sharing, and lifecycle management." }
];

export const getSolutionBySlug = (slug) => solutions.find(s => s.slug === slug);