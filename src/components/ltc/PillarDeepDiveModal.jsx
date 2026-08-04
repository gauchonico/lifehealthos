"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";

const slideContent = {
  "1": {
    title: "Patient Passport",
    subtitle: "The Foundation",
    slides: [
      {
        heading: "One Wallet. Seven Capabilities.",
        body: "LifeHealth Passport is the patient's lifelong, longitudinal health record. It aggregates data from hospitals, labs, pharmacies, and devices — giving families full ownership and control of their health information.",
        points: [
          "Genomics — genetic insights paired with video counseling",
          "Data Dashboards — personal and family-level health views",
          "Records & AI Concierge — download, summarize, and act on records",
          "E-Commerce — curated wellness marketplace (powered by RxSpark)",
          "Facility & Community Health — connected circle of care",
          "Remote Monitoring — therapeutic and continuous condition tracking",
          "Telemedicine & Consultations — primary care and specialist access"
        ]
      },
      {
        heading: "Patient-Owned & Consent-Driven",
        body: "The patient controls who sees what, and for how long. Consent is granular, auditable, and revocable — every data-sharing event is tracked.",
        points: [
          "Consent-based sharing via time-boxed QR code",
          "X-Validator biometric identity at every step",
          "Patient-owned — families control their data",
          "Granular permissions: who, what, and how long",
          "Fully revocable at any time"
        ]
      },
      {
        heading: "Connected Data Sources",
        body: "Passport doesn't replace existing systems — it sits above them, importing and unifying data from every source into one record.",
        points: [
          "Import from PointClickCare (PCC)",
          "Hospital electronic medical records connected",
          "MatchRite-connected health records integrated",
          "Pharmacy systems and lab systems linked",
          "Patient-uploaded documents via LifeUpload",
          "Future LifeHealth Connect integrations ready"
        ]
      }
    ]
  },
  "2": {
    title: "Nexus — Care Workspace",
    subtitle: "Empowering Care Teams",
    slides: [
      {
        heading: "A Clinical Workstation in Your Pocket",
        body: "LifeHealth Nexus gives doctors, nurses, and community health workers a single mobile app to access verified patient records, capture vitals, run telemedicine consults, and document care — anywhere they meet the patient.",
        points: [
          "Consented patient access — search by name or CTI ID",
          "Consent granted in-app with patient authorization",
          "One app for every clinical interaction",
          "Works on mobile and web"
        ]
      },
      {
        heading: "Capture at the Point of Care",
        body: "Every clinical action is captured bedside — vitals, vaccinations, prescriptions, lab orders — and written to the same verified Passport in real time.",
        points: [
          "Vitals capture with connected devices",
          "Vaccination records and immunization tracking",
          "Prescriptions and medication orders",
          "Laboratory test ordering from the encounter",
          "Integrated telemedicine with MedWand: heart, lung, ECG, temperature, dermatoscope"
        ]
      },
      {
        heading: "AI-Assisted Documentation",
        body: "VIMA AI transforms how caregivers document care — voice-to-note, structured fields, and automatic ICD-10 coding suggestions reduce administrative burden dramatically.",
        points: [
          "Voice-driven care documentation — speak naturally, VIMA structures it",
          "ICD-10 code suggestions automatically surfaced",
          "Care notes — voice-recorded or typed, saved against the encounter",
          "Consult log — searchable, replayable telemedicine exam records",
          "Every entry enriches the longitudinal record instantly"
        ]
      }
    ]
  },
  "3": {
    title: "Clinical Workflows",
    subtitle: "Intelligent & Integrated",
    slides: [
      {
        heading: "Intelligent & Integrated Orders",
        body: "Clinical workflows span the entire care process — from ordering tests and medications to managing care plans and tasks, all within one unified workspace.",
        points: [
          "Orders: Labs, Medications, Imaging — all from one interface",
          "Care Plans & Tasks — structured, assigned, and tracked",
          "Every order linked to the patient's longitudinal record",
          "VIMA assists with clinical decision support"
        ]
      },
      {
        heading: "Medication Management & Alerts",
        body: "Medication management, alerts, and notifications keep the care team informed and the patient safe — with automated checks and real-time flagging.",
        points: [
          "Medication Management — administration tracking and reconciliation",
          "Alerts & Notifications — critical values, allergies, interactions",
          "Drug interaction checking built in",
          "Automated reminders for care tasks and follow-ups",
          "Continuity of care across shifts and settings"
        ]
      }
    ]
  },
  "4": {
    title: "LifeLab — Diagnostics",
    subtitle: "Seamless Lab Experience",
    slides: [
      {
        heading: "From Order to Result — Automated",
        body: "LifeLab coordinates the complete diagnostic process — from order to result — without a single manual handoff or paper requisition. A 12-step workflow connects nursing home to lab to LifeHealth to PCC.",
        points: [
          "Order Sent → Phlebotomy Scheduled automatically",
          "Specimen Tracked → Analyzed with barcode workflows",
          "Results Integrated into LifeHealth automatically",
          "Sent to PCC (PointClickCare) automatically via bi-directional integration",
          "HL7 / ASTM / API standards — works with your lab"
        ]
      },
      {
        heading: "Specimen Tracking & Analyzer Integration",
        body: "End-to-end specimen lifecycle management with direct bidirectional connectivity to laboratory analyzers through middleware.",
        points: [
          "Barcode and specimen labeling at collection",
          "Real-time specimen tracking and status updates",
          "Analyzer integration through middleware (HL7/ASTM)",
          "Quality control and results collection",
          "Levey-Jennings tracking and Westgard rules"
        ]
      },
      {
        heading: "Results Distribution & Critical Alerts",
        body: "Once analysis is complete, results flow through LifeLab middleware back into LifeHealth and are immediately distributed to the right people — with critical values flagged automatically.",
        points: [
          "Treating physicians alerted with context and recommended actions",
          "Nursing staff notified in Nexus immediately",
          "Patient Passport updated without duplicate data entry",
          "PointClickCare (PCC) updated via bi-directional integration",
          "Critical values flagged with automated alerts"
        ]
      }
    ]
  },
  "5": {
    title: "Connected Care",
    subtitle: "Everywhere, All the Time",
    slides: [
      {
        heading: "Telemedicine & Remote Monitoring",
        body: "Because all clinical information lives in one ecosystem, care continues seamlessly regardless of where the patient is — or where the provider is.",
        points: [
          "In-person consultations from the same record",
          "Telemedicine visits with full clinical context",
          "Remote patient monitoring devices connected",
          "Medication adherence and vital sign history",
          "Functional assessments accumulated"
        ]
      },
      {
        heading: "Devices & Family Engagement",
        body: "Connected diagnostic devices and family engagement tools turn a static record into a living, continuously enriched health asset.",
        points: [
          "BINA facial health assessments integrated",
          "MedWand and connected diagnostic devices",
          "Family participation with patient authorization",
          "Care transitions and hospital admissions supported",
          "Secure portals for family communication and care updates"
        ]
      }
    ]
  }
};

const accentMap = {
  teal: { num: "bg-teal-500", text: "text-teal-600", border: "border-teal-200", bg: "bg-teal-50", dot: "bg-teal-500" },
  blue: { num: "bg-blue-500", text: "text-blue-600", border: "border-blue-200", bg: "bg-blue-50", dot: "bg-blue-500" },
  violet: { num: "bg-violet-500", text: "text-violet-600", border: "border-violet-200", bg: "bg-violet-50", dot: "bg-violet-500" },
  amber: { num: "bg-amber-500", text: "text-amber-600", border: "border-amber-200", bg: "bg-amber-50", dot: "bg-amber-500" },
  green: { num: "bg-green-500", text: "text-green-600", border: "border-green-200", bg: "bg-green-50", dot: "bg-green-500" }
};

export default function PillarDeepDiveModal({ pillarNumber, pillarColor, onClose }) {
  const data = slideContent[pillarNumber];
  const [slideIndex, setSlideIndex] = useState(0);
  const accent = accentMap[pillarColor] || accentMap.teal;

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!data) return null;

  const slide = data.slides[slideIndex];
  const total = data.slides.length;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-900/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 md:px-8 py-5 border-b border-slate-100 flex-shrink-0">
            <div className="flex items-center gap-3">
              <span className={`w-9 h-9 rounded-xl ${accent.num} text-white font-bold text-sm flex items-center justify-center`}>
                {pillarNumber}
              </span>
              <div>
                <h3 className="font-heading font-bold text-navy-900 text-lg leading-tight">{data.title}</h3>
                <p className="text-xs text-slate-400">{data.subtitle}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-400 hover:text-navy-900 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Slide content */}
          <div className="flex-1 overflow-y-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={slideIndex}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.2 }}
                className="p-6 md:p-8"
              >
                {/* Slide visual placeholder */}
                <div className={`rounded-2xl border-2 ${accent.border} ${accent.bg} p-8 md:p-12 mb-6 flex items-center justify-center min-h-[140px]`}>
                  <div className="text-center">
                    <p className={`text-xs font-semibold tracking-wider uppercase ${accent.text} mb-1`}>Capabilities Deck Slide {slideIndex + 1} of {total}</p>
                    <p className="text-slate-400 text-sm">{slide.heading}</p>
                  </div>
                </div>

                <h4 className="font-heading font-bold text-2xl text-navy-900 mb-3">{slide.heading}</h4>
                <p className="text-slate-500 leading-relaxed mb-6">{slide.body}</p>

                <div className="grid sm:grid-cols-2 gap-2.5">
                  {slide.points.map((p, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-slate-600 p-3 rounded-lg bg-slate-50">
                      <CheckCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${accent.text}`} />
                      {p}
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Footer navigation */}
          <div className="flex items-center justify-between px-6 md:px-8 py-4 border-t border-slate-100 flex-shrink-0">
            <button
              onClick={() => setSlideIndex(Math.max(0, slideIndex - 1))}
              disabled={slideIndex === 0}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-slate-600 hover:text-navy-900 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-4 h-4" /> Previous
            </button>

            {/* Slide dots */}
            <div className="flex items-center gap-2">
              {data.slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSlideIndex(i)}
                  className={`h-2 rounded-full transition-all ${i === slideIndex ? `${accent.dot} w-8` : "bg-slate-200 w-2 hover:bg-slate-300"}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => setSlideIndex(Math.min(total - 1, slideIndex + 1))}
              disabled={slideIndex === total - 1}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-slate-600 hover:text-navy-900 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              Next <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
