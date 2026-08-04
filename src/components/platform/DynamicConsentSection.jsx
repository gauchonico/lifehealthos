import PlatformShowcaseCard from "@/components/platform/PlatformShowcaseCard";

const consentDeck = "https://media.base44.com/files/public/6a554b016ff6fa6eb6e63b81/b779f1749_ConsentPPT.pdf";

export default function DynamicConsentSection() {
  return <section id="dynamic-consent" className="scroll-mt-28 bg-slate-50 py-16 lg:py-20">
    <div className="container-wide">
      <div className="mb-8 max-w-3xl"><p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-600">Trust, consent & verification</p><h2 className="mt-3 font-heading text-3xl font-bold text-navy-900">Dynamic Consent is a shared LifeHealth capability</h2><p className="mt-3 leading-relaxed text-slate-600">The approved framework positions consent as an ongoing, understandable participant choice—not a single form. It connects Passport, Nexus, VIMA and X‑Validator across research, public health and clinical activity.</p></div>
      <div className="space-y-6">
        <PlatformShowcaseCard id="xvalidator" eyebrow="X‑Validator · identity & evidence" title="Verification that travels with the interaction" description="X‑Validator is presented in the approved capabilities deck as the shared verification layer for identity and auditable clinical interactions across Passport and Nexus." points={["Verify a person and support re-verification when the situation requires it.", "Create an auditable record around the interaction, including the verified identity and relevant event context.", "Support consent-first clinical and research workflows rather than treating verification as a separate experience."]} pdfUrl="https://media.base44.com/files/public/6a554b016ff6fa6eb6e63b81/32924953d_LHCapabilitiesDeck.pdf" page={11} />
        <PlatformShowcaseCard id="consent-framework" eyebrow="Dynamic Consent Assurance Framework" title="Consent designed for understanding and continued choice" description="The framework scales the consent experience to the activity, risk, intrusiveness, data sensitivity and reversibility—giving participants clear information and an opportunity to make informed choices." points={["A1–A5 assurance levels guide the appropriate consent experience for each use case.", "Participant-facing explanation, review and comprehension can be tailored to the context.", "Consent status and changes can be carried across the connected LifeHealth ecosystem."]} pdfUrl={consentDeck} page={5} />
      </div>
    </div>
  </section>;
}
