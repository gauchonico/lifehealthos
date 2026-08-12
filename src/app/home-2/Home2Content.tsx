"use client";

import Link from "next/link";
import { ArrowUpRight, CalendarCheck, Video, Fingerprint, Stethoscope, Microscope, BarChart3, PieChart } from "lucide-react";
import { motion } from "framer-motion";

const GREEN = "#1E7A46";
const GREEN_DARK = "#175C36";
const MINT = "#E7EFE4";

const trustedBy = [
  { name: "esri", dark: "text-white italic" },
  { name: "IBM", dark: "bg-[#0f62fe] text-white px-2 py-1 rounded" },
  { name: "NHS", dark: "bg-[#005EB8] text-white px-2 py-1 rounded italic" },
  { name: "Abbott", dark: "text-white italic" },
  { name: "Caritas", dark: "text-rose-300" },
];

const heroStats = [
  { value: "13+", label: "Countries Deployed" },
  { value: "7,972", label: "Facilities Operational" },
  { value: "31.8M", label: "Annual Patients" },
];

const passportFeatures = [
  { title: "Book an Appointment", desc: "Quick and easy appointments with top specialists." },
  { title: "Patient Vitals and Readings", desc: "Add and access your health vitals with a detailed explanation." },
];

const nexusFeatures = [
  { icon: Video, label: "Integrated Telemedicine" },
  { icon: Fingerprint, label: "Secure Identity & Data" },
  { icon: Stethoscope, label: "Capture Points of Care" },
];

const integrations = [
  {
    name: "LifeLab",
    desc: "Closing the loop between diagnostics and care, at every facility tier.",
    icon: Microscope,
    href: "/products/lifelab",
    featured: true,
  },
  {
    name: "X-Validator",
    desc: "An identity verification capability that pairs government-issued ID with live biometric face matching to confirm identity.",
    icon: Fingerprint,
    href: "/products/xvalidator",
    featured: false,
  },
  {
    name: "LifeData",
    desc: "Analytics, dashboards, and population health intelligence.",
    icon: BarChart3,
    href: "/data-analytics",
    featured: false,
  },
  {
    name: "LifeResearch",
    desc: "Clinical trial management, participant engagement, and registries.",
    icon: PieChart,
    href: "/solutions/clinical-research",
    featured: false,
  },
];

const hospitalOutcomes = [
  { title: "Clinical Coordination", desc: "Unified patient records and care pathways across all departments." },
  { title: "Patient Flow", desc: "Real-time bed management, scheduling, and capacity optimization." },
  { title: "Administrative Burden", desc: "Automated workflows, documentation, and reporting." },
  { title: "Lab Workflows", desc: "Seamless ordering, specimen tracking, and result delivery." },
  { title: "Executive Visibility", desc: "Real-time dashboards for operational and clinical performance." },
  { title: "Interoperability", desc: "Connect with external systems, payers, and regional networks." },
];

export default function Home2Content() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://media.base44.com/images/public/6a554b016ff6fa6eb6e63b81/d4d6e4117_generated_image.png"
            alt="A multi-generational family — LifeHealth patients"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: `linear-gradient(90deg, ${GREEN_DARK}f2 0%, ${GREEN_DARK}d9 35%, ${GREEN_DARK}80 65%, ${GREEN_DARK}4d 100%)` }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />
        </div>

        <div className="relative container-wide pt-32 pb-16 lg:pt-40">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-xl">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">
              Beyond The Future Of Healthcare
            </span>
            <h1 className="font-heading text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl">
              Patient Records. Clinical Tools. Connected Care.
            </h1>
            <p className="mt-5 max-w-md leading-relaxed text-slate-200">
              One integrated ecosystem bridging critical infrastructure gaps with precision medicine, real-time data, and scalable digital health solutions.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/platform"
                className="inline-flex items-center gap-1.5 rounded-full px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5"
                style={{ backgroundColor: GREEN, boxShadow: `0 12px 24px -8px ${GREEN}66` }}
              >
                Our Solutions <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="/solutions/hospitals"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/40 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-transform hover:-translate-y-0.5 hover:bg-white/10"
              >
                Choose By Industry <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-14 flex flex-wrap gap-x-10 gap-y-6 lg:mt-24 lg:justify-end"
          >
            {heroStats.map((stat, i) => (
              <div key={stat.label} className={`text-center ${i > 0 ? "border-l border-white/20 pl-10" : ""}`}>
                <p className="font-heading text-3xl font-bold text-white">{stat.value}</p>
                <p className="mt-1 text-xs leading-tight text-slate-200">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          <div className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-white/15 pt-8 lg:mt-24">
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-300">Trusted By:</span>
            {trustedBy.map((brand) => (
              <span key={brand.name} className={`font-heading text-lg font-bold ${brand.dark}`}>
                {brand.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Health / Passport */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: GREEN }}>
            Personal Health
          </span>
          <h2 className="mb-12 max-w-2xl font-heading text-3xl font-bold leading-tight text-navy-900 md:text-4xl">
            Keep your Personal Health in sync with <span className="italic" style={{ color: GREEN }}>My Passport App</span>
          </h2>

          <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr_1fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl p-8 text-white lg:p-10"
              style={{ backgroundColor: GREEN }}
            >
              <h3 className="mb-3 font-heading text-xl font-bold leading-snug">The leading and most trusted Healthcare Network</h3>
              <p className="mb-6 text-sm leading-relaxed text-white/85">
                Register on the Passport app now and enjoy a 30 day free trial period.
              </p>
              <a
                href="https://play.google.com/store/apps/details?id=com.mylifehealthwallet.mylifehealthwallet"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-sm font-semibold"
                style={{ color: GREEN }}
              >
                Learn More <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="space-y-6">
              {passportFeatures.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <span className="mt-1 flex h-8 w-8 flex-none items-center justify-center rounded-full" style={{ backgroundColor: MINT }}>
                    <CalendarCheck className="h-4 w-4" style={{ color: GREEN }} />
                  </span>
                  <div>
                    <h4 className="font-heading font-semibold text-navy-900">{f.title}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500">{f.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <img src="/passport.png" alt="A family using the LifeHealth Passport app together" className="mx-auto w-full max-w-sm" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Health Workers */}
      <section className="overflow-hidden pt-20 lg:pt-28" style={{ backgroundColor: MINT }}>
        <div className="container-wide grid items-end gap-12 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="pb-20 lg:pb-28">
            <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: GREEN }}>
              Health Workers
            </span>
            <h2 className="mb-5 font-heading text-3xl font-bold leading-tight text-navy-900 md:text-4xl">
              A complete clinical workstation in your pocket
            </h2>
            <p className="mb-8 max-w-md leading-relaxed text-slate-600">
              Doctors, nurses, and community health workers get a single mobile app to access verified patient records,
              capture vitals and vaccinations, run telemedicine consults, and document care — anywhere they meet the patient.
            </p>
            <Link
              href="/products/nexus"
              className="mb-10 inline-flex items-center gap-1.5 rounded-full px-6 py-3.5 text-sm font-semibold text-white"
              style={{ backgroundColor: GREEN }}
            >
              Learn More <ArrowUpRight className="h-4 w-4" />
            </Link>
            <div className="flex flex-wrap gap-8">
              {nexusFeatures.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.label} className="flex items-center gap-2.5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white">
                      <Icon className="h-4 w-4" style={{ color: GREEN }} />
                    </span>
                    <span className="max-w-20 text-xs font-semibold leading-tight text-navy-900">{f.label}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="flex justify-center lg:justify-end"
          >
            <img
              src="/nexus.png"
              alt="A doctor holding a phone running LifeHealth Nexus"
              className="w-full max-w-md object-contain object-bottom sm:max-w-lg lg:max-w-none lg:w-[115%]"
            />
          </motion.div>
        </div>
      </section>

      {/* Integrations */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: GREEN }}>
            Integrations
          </span>
          <h2 className="mb-4 max-w-xl font-heading text-3xl font-bold leading-tight text-navy-900 md:text-4xl">
            Integrations: Plug &amp; Play with LifeHealth
          </h2>
          <p className="mb-12 max-w-xl leading-relaxed text-slate-500">
            Transform your health process by integrating with our LifeHealth Platform modules. It&apos;s just a simple{" "}
            <span className="font-semibold" style={{ color: GREEN }}>api</span> and your facility is ready to go.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {integrations.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex flex-col justify-between rounded-2xl p-6"
                  style={{ backgroundColor: item.featured ? GREEN : MINT }}
                >
                  <div>
                    <h3 className={`mb-2 font-heading font-bold ${item.featured ? "text-white" : "text-navy-900"}`}>{item.name}</h3>
                    <p className={`text-sm leading-relaxed ${item.featured ? "text-white/85" : "text-slate-600"}`}>{item.desc}</p>
                  </div>
                  <div className="mt-8 flex items-end justify-between">
                    <Icon className="h-6 w-6" style={{ color: item.featured ? "white" : GREEN }} />
                    <Link
                      href={item.href}
                      className={`inline-flex items-center gap-1 text-xs font-semibold ${item.featured ? "text-white" : ""}`}
                      style={item.featured ? undefined : { color: GREEN }}
                    >
                      Learn More <ArrowUpRight className="h-3 w-3" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Health Facilities */}
      <section className="relative overflow-hidden" style={{ backgroundColor: GREEN_DARK }}>
        <img
          src="https://media.base44.com/images/public/6a554b016ff6fa6eb6e63b81/7318e31b1_generated_45527cb5.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-10"
        />
        <div className="relative container-wide pt-20 pb-14 lg:pt-28">
          <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">Health Facilities</span>
          <h2 className="mb-5 max-w-2xl font-heading text-3xl font-bold leading-tight text-white md:text-4xl">
            Everything Your Hospital Needs. One Operating System.
          </h2>
          <p className="mb-8 max-w-lg leading-relaxed text-slate-300">
            Transform hospital operations with a unified digital platform that connects every department, clinician, and patient touchpoint.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 rounded-full bg-white px-6 py-3.5 text-sm font-semibold"
              style={{ color: GREEN_DARK }}
            >
              Let&apos;s Talk <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link href="/products/vima" className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/90 hover:text-white">
              VIMA — Your AI-Powered Clinical Research Support <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        <div className="relative border-t border-white/10">
          <div className="container-wide grid grid-cols-2 gap-x-6 gap-y-8 py-10 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-0">
            {hospitalOutcomes.map((item, i) => (
              <div key={item.title} className={`lg:px-6 ${i > 0 ? "lg:border-l lg:border-white/10" : ""}`}>
                <h4 className="mb-1.5 font-heading text-sm font-bold text-white">{item.title}</h4>
                <p className="mb-2 text-xs leading-relaxed text-slate-300">{item.desc}</p>
                <Link href="/solutions/hospitals" className="inline-flex items-center gap-1 text-xs font-semibold text-teal-300">
                  Learn More <ArrowUpRight className="h-3 w-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
