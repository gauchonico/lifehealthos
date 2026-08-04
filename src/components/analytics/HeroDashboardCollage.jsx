import { Image } from "@/components/ui/image";

const cards = [
  { title: "Master Map Uganda", image: "https://media.base44.com/images/public/6a554b016ff6fa6eb6e63b81/76c25ce80_MasterMapUganda.png", className: "col-span-2 row-span-2" },
  { title: "Hospital CHIP", image: "https://media.base44.com/images/public/6a554b016ff6fa6eb6e63b81/ec4e293d5_HospitalCHIPDashboard.png", className: "" },
  { title: "ARISE programme", image: "https://media.base44.com/images/public/6a554b016ff6fa6eb6e63b81/9839ec244_ARISEDB.png", className: "" }
];

export default function HeroDashboardCollage() {
  return <div className="grid grid-cols-3 grid-rows-2 gap-3 rounded-2xl border border-white/15 bg-white/5 p-3 shadow-2xl shadow-black/20">{cards.map((card) => <figure key={card.title} className={`group relative min-h-0 overflow-hidden rounded-xl border border-white/10 bg-slate-900 ${card.className}`}><Image src={card.image} alt={card.title} fittingType="fit" className="block h-full min-h-[110px] w-full bg-slate-100" /><figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/95 to-transparent px-3 pb-2 pt-8 text-xs font-semibold text-white">{card.title}</figcaption></figure>)}</div>;
}
