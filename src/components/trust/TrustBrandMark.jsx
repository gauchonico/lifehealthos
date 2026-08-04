import { Image } from "@/components/ui/image";

export default function TrustBrandMark({ compact = false }) {
  return (
    <div className={`inline-flex items-center gap-3 ${compact ? "" : "rounded-2xl border border-white/70 bg-white/90 px-4 py-2 shadow-lg shadow-navy-900/5"}`}>
      <Image src="https://media.base44.com/images/public/6a554b016ff6fa6eb6e63b81/0b5f49e26_LHlogowtag-Copy.jpg" alt="LifeHealth" fittingType="fit" className="h-9 w-28 rounded-md object-contain" />
      {!compact && <span className="border-l border-slate-200 pl-3 text-xs font-bold uppercase tracking-[0.18em] text-navy-800">Trust Center</span>}
    </div>
  );
}
