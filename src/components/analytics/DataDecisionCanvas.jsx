import { Image } from "@/components/ui/image";

const visuals = [
  { title: "National and district intelligence", image: "https://media.base44.com/images/public/6a554b016ff6fa6eb6e63b81/76c25ce80_MasterMapUganda.png" },
  { title: "Population health", image: "https://media.base44.com/images/public/6a554b016ff6fa6eb6e63b81/9839ec244_ARISEDB.png" },
  { title: "Hospital operations", image: "https://media.base44.com/images/public/6a554b016ff6fa6eb6e63b81/ec4e293d5_HospitalCHIPDashboard.png" },
  { title: "Network intelligence", image: "https://media.base44.com/images/public/6a554b016ff6fa6eb6e63b81/fe528693c_IndepthMasterDB.png" },
  { title: "Decision-ready history", image: "https://media.base44.com/images/public/6a554b016ff6fa6eb6e63b81/850a2d825_image.png" }
];

export default function DataDecisionCanvas() {
  const [map, ...collage] = visuals;
  const wide = collage.pop();
  return <section className="bg-white py-16 md:py-20"><div className="container-wide"><div className="max-w-3xl"><span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-teal-700">LifeData & BIP</span><h2 className="mt-4 font-heading text-3xl font-bold text-navy-900 md:text-4xl">Your health system, made visible for better decisions.</h2><p className="mt-3 text-lg leading-relaxed text-slate-500">One governed data structure can become a national map, a facility view, a programme dashboard or a historical decision view—without creating separate versions of the truth.</p></div><div className="mt-10 grid gap-5 lg:grid-cols-[1.3fr_1fr]"><VisualCard item={map} large /><div className="grid grid-cols-2 gap-5">{collage.map((item) => <VisualCard key={item.title} item={item} />)}</div></div><VisualCard item={wide} wide /></div></section>;
}

function VisualCard({ item, large, wide }) {
  return <figure className={`overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm ${wide ? "mt-5" : ""}`}><Image src={item.image} alt={item.title} fittingType="fit" className={`block w-full bg-slate-100 ${large ? "aspect-[4/3]" : wide ? "aspect-[21/8]" : "aspect-video"}`} /><figcaption className="px-4 py-3 text-sm font-semibold text-navy-900">{item.title}</figcaption></figure>;
}
