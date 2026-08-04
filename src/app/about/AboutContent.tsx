"use client";

import SectionHeading from "@/components/shared/SectionHeading";
import CTABanner from "@/components/shared/CTABanner";
import { Target, Globe, Heart, Zap, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";

const values = [
  { icon: Target, title: "Purpose-Driven", desc: "We exist to improve healthcare outcomes through technology — not to build a product, but to close a gap that affects billions." },
  { icon: Globe, title: "Global by Design", desc: "Built for diverse healthcare systems, cultures, and regulatory environments — from rural clinics to national ministries." },
  { icon: Heart, title: "Patient-Centered", desc: "Every design decision starts with the patient and citizen experience. Families own their data." },
  { icon: Zap, title: "Innovation at Scale", desc: "Proprietary IP developed over five years. We build once, assemble many solutions, and deploy anywhere." },
];

const leadership = [
  {
    name: "Michael Landau, JD, MSc",
    title: "Founder & Executive Chairman",
    bio: "Michael drives the vision of CTI-LifeHealth as an experienced social entrepreneur with over 20 years building digital and humanitarian solutions across Africa. He has cultivated deep partnerships with governments, multilaterals, and international institutions including the United Nations, World Bank, European Union, EDCTP, and Africa CDC. Michael has served on the Strategy Council of the UN Global Alliance for ICT and Development, and was a member of the UN Global Compact and UN Office for Partnerships.",
    photo: "https://media.base44.com/images/public/6a554b016ff6fa6eb6e63b81/d22212bfa_MichaelLandau.jpg",
    focalPoint: [0.5, 0.35]
  },
  {
    name: "Alvin Francis",
    title: "Chief Product & Technology Officer",
    bio: "Alvin leads product, engineering, and AI strategy at LifeHealth, driving the technology vision behind the company's mission to expand healthcare access across emerging markets. He brings more than 15 years of enterprise software leadership, spanning global engineering organizations, AI product innovation, and SaaS transformation at IBM and EXFO. Alvin holds an MBA from the Ivey School of Business and an MASc in Electrical Engineering from the University of Toronto.",
    photo: "https://media.base44.com/images/public/6a554b016ff6fa6eb6e63b81/54c18b06a_Alvin_Francis.jpg",
    focalPoint: [0.5, 0.22]
  },
];

const advisors = [
  { name: "Dr. Robert Redfield, MD", role: "Former Director, US CDC", detail: "Global Health Leader", photo: "https://media.base44.com/images/public/6a554b016ff6fa6eb6e63b81/82b0f6dbc_Robert-R-Redfield.png" },
  { name: "Dr. Ged Byrne, MD", role: "Director of Global Health, HEE NHS", detail: "NHS UK", photo: "https://media.base44.com/images/public/6a554b016ff6fa6eb6e63b81/c82784244_GERDBERNE.png" },
  { name: "Jean Philbert Nsengimana", role: "Chief Digital Advisor, Africa CDC", detail: "FAPH, MPA, MBA, PMP, MSc", photo: "https://media.base44.com/images/public/6a554b016ff6fa6eb6e63b81/7e459e9c4_jeanPhilbertNsengimana.jpeg" },
  { name: "Eliot (Lee) Sander", role: "Former CEO, New York MTA", detail: "Former President, Bombardier Americas", photo: "https://media.base44.com/images/public/6a554b016ff6fa6eb6e63b81/0facdcbc7_eliiotLEEsander.png" },
  { name: "Samir Suleymanov", role: "Former World Bank & IMF Executive", detail: "Global Finance & Health", photo: "https://media.base44.com/images/public/6a554b016ff6fa6eb6e63b81/3cbdb6281_samirsuleymanov.jpg" },
  { name: "Dr. David Landau, MD", role: "Founder, London Oncology Clinic", detail: "Senior Fellow, Policy Exchange UK", photo: "https://media.base44.com/images/public/6a554b016ff6fa6eb6e63b81/559ca11d3_david-landau.png" },
  { name: "Rabbi David Rosen", role: "Former Chief Rabbi of Ireland", detail: "Global AI Ethics Leadership", photo: "https://media.base44.com/images/public/6a554b016ff6fa6eb6e63b81/571667681_yosef.jpg" },
  { name: "Hon. Abdulai Janneh", role: "Ambassador, African Commission on Human Rights", detail: "", photo: "https://media.base44.com/images/public/6a554b016ff6fa6eb6e63b81/0b44a1a3e_Abdoulie-Janneh_Board-member-1.jpeg" },
  { name: "Dr. Michael Zelefsky, MD", role: "Vice Chair, Oncology, NYU", detail: "", photo: "https://media.base44.com/images/public/6a554b016ff6fa6eb6e63b81/a198bd47d_MichaleZelefsky.png" },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20 bg-gradient-to-br from-navy-900 via-navy-900 to-navy-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative container-wide text-center">
          <span className="inline-block px-3 py-1.5 bg-teal-500/20 text-teal-300 text-xs font-semibold tracking-wider uppercase rounded-full mb-6">About CTI-LifeHealth</span>
          <h1 className="font-heading font-bold text-3xl md:text-5xl text-white tracking-tight mb-6">
            Real People. Real Relationships. <span className="text-teal-400">Real Impact.</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            CTI Africa LLC is a U.S.-headquartered technology company with 20+ years of experience building digital health and humanitarian solutions across Africa and beyond. We are the anchor technology partner of a €14M EU-funded program spanning 13 countries and 4 million people.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8 text-sm text-slate-400">
            {["New York", "London", "Toronto", "Kampala"].map(city => (
              <span key={city} className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-teal-400" /> {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <SectionHeading badge="Our Mission" title="Bridging Critical Healthcare Gaps — At Scale." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-center max-w-3xl mx-auto">
            <div className="p-6 rounded-2xl bg-teal-50 border border-teal-100">
              <p className="font-heading font-bold text-navy-900 mb-2">Vision</p>
              <p className="text-slate-600 text-sm leading-relaxed italic">&quot;A world where AI-powered insights make healthcare accessible, equitable, and sustainable for all.&quot;</p>
            </div>
            <div className="p-6 rounded-2xl bg-navy-50 border border-slate-100" style={{background:"#f8fafc"}}>
              <p className="font-heading font-bold text-navy-900 mb-2">Mission</p>
              <p className="text-slate-600 text-sm leading-relaxed italic">&quot;We bridge critical infrastructure gaps with precision medicine, real-time data, and scalable digital health solutions — empowering individuals, providers, and nations toward universal primary care.&quot;</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((val, i) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-100"
                >
                  <Icon className="w-8 h-8 text-teal-500 mb-4" />
                  <h3 className="font-heading font-semibold text-navy-900 mb-2">{val.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{val.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-slate-50">
        <div className="container-wide">
          <SectionHeading badge="Core Team" title="The People Behind the Platform." subtitle="LifeHealth is built by experienced leaders who have spent decades at the intersection of technology, healthcare, and humanitarian impact." />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {leadership.map((person, i) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm"
              >
                <Image
                  src={person.photo}
                  alt={person.name}
                  focalPointX={person.focalPoint[0]}
                  focalPointY={person.focalPoint[1]}
                  className="mb-5 h-20 w-20 overflow-hidden rounded-full border-2 border-teal-100"
                />
                <h3 className="font-heading font-bold text-navy-900 text-lg mb-1">{person.name}</h3>
                <p className="text-xs font-semibold text-teal-600 uppercase tracking-wide mb-4">{person.title}</p>
                <p className="text-sm text-slate-500 leading-relaxed">{person.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <SectionHeading badge="Council Of Global Elders" title="A Council Of Global Leaders." subtitle="Healthcare Executives, Government Officials, And Humanitarian Leaders Who Guide LifeHealth's Mission And Strategy." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {advisors.map((a, i) => (
              <motion.div
                key={a.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex items-start gap-4 p-5 rounded-xl border border-slate-100 bg-slate-50"
              >
                <Image
                  src={a.photo}
                  alt={a.name}
                  className="h-14 w-14 flex-shrink-0 overflow-hidden rounded-full border border-slate-200"
                />
                <div>
                  <p className="font-heading font-semibold text-navy-900 text-sm">{a.name}</p>
                  <p className="text-xs text-teal-600 font-medium mt-0.5">{a.role}</p>
                  {a.detail && <p className="text-xs text-slate-400 mt-0.5">{a.detail}</p>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
