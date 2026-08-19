"use client";

import {
  UserPlus,
  HeartPulse,
  FlaskConical,
  Video,
  Syringe,
  ClipboardList,
  Stethoscope,
  Activity,
  Search,
  QrCode,
} from "lucide-react";

const tiles = [
  { l: "Add User", i: UserPlus },
  { l: "Blood Type", i: HeartPulse },
  { l: "Order Labs", i: FlaskConical },
  { l: "Medwand", i: Video },
  { l: "Referrals", i: UserPlus },
  { l: "Vaccinations", i: Syringe },
  { l: "Order Px", i: ClipboardList },
  { l: "Provider Visit", i: Stethoscope },
  { l: "Vitals", i: Activity },
];

export default function NexusVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[320px]">
      <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-[radial-gradient(closest-side,rgba(127,184,50,0.35),transparent_70%)] blur-3xl" />
      <div className="rounded-[2.5rem] border border-navy-800 bg-navy-900 p-2.5 shadow-2xl shadow-navy-900/25">
        <div className="overflow-hidden rounded-[2.1rem] bg-teal-50 text-navy-800">
          <div className="bg-teal-100/80 px-4 pt-4 pb-3">
            <div className="flex items-center gap-2 text-[11px] font-semibold text-navy-900">
              <HeartPulse className="h-4 w-4 text-brandred-500" /> LifeHealth Nexus
            </div>
            <div className="text-[9px] text-navy-900/60">The Provider&apos;s App</div>
            <div className="mt-3 flex items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-white text-brandred-500">
                <HeartPulse className="h-4 w-4" />
              </div>
              <div className="leading-tight">
                <div className="text-[9px] text-navy-900/60">Hello</div>
                <div className="text-xs font-bold text-navy-900">Dr. Sarah Chen</div>
                <div className="text-[8px] text-navy-900/60">CTI_78_BK_0000001</div>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[10px] text-slate-500 shadow-sm">
              <Search className="h-3 w-3" /> Search Patient
            </div>
          </div>
          <div className="grid grid-cols-3 gap-1.5 bg-teal-50 p-2.5">
            {tiles.map((t) => (
              <div
                key={t.l}
                className="flex aspect-square flex-col items-center justify-center gap-1 rounded-lg bg-teal-100/60 text-navy-900"
              >
                <t.i className="h-4 w-4" />
                <div className="text-[8px] font-medium">{t.l}</div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-1.5 bg-teal-100/60 px-2.5 py-2 text-[8px] font-medium text-navy-900">
            <div className="flex items-center justify-center gap-1 rounded-md bg-white py-1.5">
              <ClipboardList className="h-3 w-3" /> Patient Notes
            </div>
            <div className="flex items-center justify-center gap-1 rounded-md bg-white py-1.5">
              <Activity className="h-3 w-3" /> Vima
            </div>
            <div className="flex items-center justify-center gap-1 rounded-md bg-white py-1.5">
              <QrCode className="h-3 w-3" /> QR Code
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
