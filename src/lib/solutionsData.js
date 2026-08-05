// The per-solution content (name, headline, outcomes, FAQs, etc.) used to
// live here as a static array. It's now managed in Sanity (`solution`
// documents, editable via /workspace) — see src/sanity/queries.ts
// (allSolutionsQuery / solutionBySlugQuery) for how pages fetch it.
//
// `platforms` and `capabilities` below are a small, rarely-changing
// taxonomy that individual solutions reference by name (via
// includedPlatforms/includedCapabilities) — not solution-specific content,
// so they stay static here rather than moving into Sanity.

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
