import Link from "next/link";
import TrustHero from "@/components/trust/TrustHero";
import TrustPrinciples from "@/components/trust/TrustPrinciples";
import TrustFeatureSection from "@/components/trust/TrustFeatureSection";
import DynamicConsentDemo from "@/components/trust/DynamicConsentDemo";
import TrustDashboard from "@/components/trust/TrustDashboard";
import TrustResources from "@/components/trust/TrustResources";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "LifeHealth Trust Center — Trust is the Foundation of LifeHealth",
  description:
    "How LifeHealth builds privacy, security, and consent-aware information sharing into every layer of the platform.",
  path: "/trust-center",
});

const image = "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85";
const features: [string, string, string, string, string[]][] = [
  ["privacy", "Privacy", "Clear control over how information moves", "LifeHealth is designed to make information sharing understandable, consent-aware, and protected across the health ecosystem.", ["Consent-aware information sharing", "Role-based access", "Accountable governance", "Privacy-first design"]],
  ["ai-vima", "AI & VIMA", "Human-centered intelligence", "VIMA is designed as an explainable, privacy-aware assistant that supports people and teams without replacing professional judgment.", ["Human oversight", "Explainable assistance", "Privacy-first AI design", "Responsible future capabilities"]],
  ["security", "Security", "Continuous protection", "Security is a shared operational responsibility across access, monitoring, resilience, and recovery.", ["Encryption", "Authentication", "Audit-ready activity", "Threat monitoring"]],
  ["identity-x-validator", "Identity & X-Validator", "Trust the identity, context, and event", "X-Validator connects identity, permissions, place, time, and verified healthcare events.", ["Identity verification", "Location and time context", "Permission verification", "Verification chain"]],
  ["interoperability", "Interoperability", "An open healthcare ecosystem", "Passport, Nexus, LifeLab, CHIP, Connect, BIP, providers, laboratories, devices, and government systems are designed to connect through open standards.", ["FHIR and HL7", "Secure APIs", "Connected health systems", "No vendor lock-in"]],
  ["data-sovereignty", "Data Sovereignty", "Governance that respects local control", "LifeHealth is designed to support appropriate control by individuals, organizations, governments, and countries.", ["Individual control", "Organizational governance", "Jurisdiction-aware design", "Flexible deployment models"]],
  ["research", "Research", "Better health through responsible insight", "Consent, de-identification, governance, and accountable partnerships can help research and population health advance responsibly.", ["Privacy-aware research", "Consent-led participation", "Population health insight", "Responsible data governance"]],
];

export default function TrustCenter() {
  return (
    <main className="min-h-screen bg-white">
      <TrustHero />
      <TrustPrinciples />
      {features.slice(0, 1).map(([id, eyebrow, title, description, items]) => (
        <TrustFeatureSection key={id} id={id} eyebrow={eyebrow} title={title} description={description} items={items} image={image} />
      ))}
      <DynamicConsentDemo />
      {features.slice(1).map(([id, eyebrow, title, description, items], index) => (
        <TrustFeatureSection key={id} id={id} eyebrow={eyebrow} title={title} description={description} items={items} image={image} reverse={index % 2 === 0} />
      ))}
      <section id="compliance" className="scroll-mt-36 bg-slate-50 py-20">
        <div className="container-wide">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-teal-600">Compliance</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 md:text-4xl">A compliance-ready foundation</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {["HIPAA", "GDPR", "Kenya Data Protection Act", "Regional compliance readiness"].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-white p-6 text-sm font-bold text-navy-900 shadow-sm">
                {item}
                <p className="mt-3 text-sm font-normal leading-relaxed text-slate-500">Implementation requirements are assessed for each jurisdiction and deployment.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <TrustDashboard />
      <TrustResources />
      <section className="bg-primary py-24 text-center text-primary-foreground">
        <div className="container-narrow">
          <p className="font-display text-3xl font-bold leading-tight md:text-5xl">&ldquo;We believe healthcare advances when trust comes first.&rdquo;</p>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-slate-300">Everything we build exists to strengthen the confidence placed in us by patients, providers, governments, researchers, and communities.</p>
          <Link href="/contact" className="mt-10 inline-flex rounded-xl bg-secondary px-6 py-3.5 text-sm font-bold text-secondary-foreground shadow-lg transition-transform hover:-translate-y-0.5">Start Your LifeHealth Journey</Link>
        </div>
      </section>
    </main>
  );
}
