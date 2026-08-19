"use client";

import Link from "next/link";
import { Play, FileCheck, FlaskConical, Users, Heart } from "lucide-react";
import { motion } from "framer-motion";
import WelcomeGateway from "@/components/home/WelcomeGateway";

const floatingCards = [
  { icon: FileCheck, label: "Patient Record", sub: "Secure & shared", x: "-left-6", y: "top-10" },
  { icon: FlaskConical, label: "Lab Result", sub: "Ready in minutes", x: "-right-4", y: "top-1/3" },
  { icon: Users, label: "Care Team", sub: "Connected", x: "left-1/4", y: "-bottom-6" },
];

const storeLinks = [
  {
    icon: "/playstore.svg",
    store: "Download on Google Play",
    href: "https://play.google.com/store/apps/details?id=com.mylifehealthwallet.mylifehealthwallet",
  },
  {
    icon: "/game.svg",
    store: "Download on the App Store",
    href: "https://apps.apple.com/us/app/my-lifehealth-wallet/id6502951710",
  },
];

const pathChips = [
  { label: "I'm a Patient", href: "/platform", tone: "bg-rose-50 text-rose-700 border-rose-100 hover:border-rose-300" },
  { label: "I'm a Doctor", href: "/solutions/clinics", tone: "bg-sky-50 text-sky-700 border-sky-100 hover:border-sky-300" },
  { label: "Set Up a Telemedicine Center", href: "/contact?interest=telemedicine-center", tone: "bg-violet-50 text-violet-700 border-violet-100 hover:border-violet-300" },
  { label: "I Run a Facility", href: "/solutions/hospitals", tone: "bg-amber-50 text-amber-700 border-amber-100 hover:border-amber-300" },
  { label: "I'm in Government", href: "/solutions/ministry-of-health", tone: "bg-emerald-50 text-emerald-700 border-emerald-100 hover:border-emerald-300" },
  { label: "I'm a Researcher", href: "/solutions/clinical-research", tone: "bg-indigo-50 text-indigo-700 border-indigo-100 hover:border-indigo-300" },
  { label: "I'm a Payer / Employer", href: "/solutions/insurance", tone: "bg-orange-50 text-orange-700 border-orange-100 hover:border-orange-300" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-slate-50 to-teal-50/60">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-teal-400/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-brandred-300/10 rounded-full blur-3xl" />
      </div>

      <div className="relative container-wide pt-28 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-brandred-100 text-navy-800 text-xs font-semibold tracking-wider uppercase rounded-full mb-6 shadow-sm">
              <Heart className="w-3.5 h-3.5 text-brandred-500 fill-brandred-500" />
              Beyond the Future of Healthcare
            </span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-navy-900 tracking-tight leading-[1.08] mb-5">
              Better care begins with{" "}
              <span className="text-teal-600">one connected system.</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed max-w-xl mb-8">
              From the patient at home to the ministry of health — LifeHealth connects people, data, and care so every decision is informed, every record is safe, and every outcome is better.
            </p>

            <WelcomeGateway />

            <div className="mb-5 flex flex-nowrap items-center gap-3">
              {storeLinks.map(({ icon, store, href }) => (
                <a
                  key={store}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center gap-2.5 rounded-xl border border-teal-200 bg-white px-3 py-2.5 text-sm shadow-sm transition-colors hover:border-teal-400 sm:flex-initial sm:gap-3 sm:px-4 sm:py-3"
                >
                  <img src={icon} alt="" className="h-8 w-8 shrink-0 sm:h-9 sm:w-9" />
                  <span className="min-w-0">
                    <span className="block text-[11px] text-slate-500 sm:text-xs">LifeHealth Passport</span>
                    <span className="block truncate font-semibold text-navy-900">{store}</span>
                  </span>
                </a>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-white/80 bg-white/70 p-3 shadow-sm">
              <span className="mr-1 text-xs font-semibold uppercase tracking-wider text-teal-700">Find Your Path</span>
              {pathChips.map((chip) => (
                <Link
                  key={chip.label}
                  href={chip.href}
                  className={`inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-semibold transition-transform hover:-translate-y-0.5 ${chip.tone}`}
                >
                  {chip.label}
                </Link>
              ))}
            </div>

            <p className="mt-5 text-sm text-slate-400">
              Trusted by ministries, hospitals, labs, and research networks across <span className="text-teal-600 font-medium">13 countries</span>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-navy-900/10 ring-1 ring-slate-200">
                <img
                  src="https://media.base44.com/images/public/6a554b016ff6fa6eb6e63b81/d4d6e4117_generated_image.png"
                  alt="A smiling, diverse healthcare team in a bright modern clinic"
                  className="w-full h-[520px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/30 via-transparent to-transparent" />
              </div>

              {floatingCards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + i * 0.2, duration: 0.5 }}
                    className={`absolute ${card.x} ${card.y} flex items-center gap-3 px-4 py-3 rounded-2xl bg-white shadow-xl border border-slate-100`}
                  >
                    <div className="w-9 h-9 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-navy-900 leading-none">{card.label}</p>
                      <p className="text-[11px] text-slate-500 mt-0.5">{card.sub}</p>
                    </div>
                  </motion.div>
                );
              })}

              <Link
                href="/lifehealth-tv"
                className="absolute -bottom-5 right-2 inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-brandred-500 hover:bg-brandred-400 text-white text-sm font-semibold shadow-xl transition-colors"
              >
                <Play className="w-4 h-4 fill-white" />
                Welcome to LifeHealth
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
