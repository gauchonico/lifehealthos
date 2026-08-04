const partners = [
  { name: "IBM", detail: "Platinum Partner · VIMA AI on watsonx" },
  { name: "ESRI", detail: "Geospatial & mapping intelligence" },
  { name: "NHS UK", detail: "Director of Global Health partnership" },
  { name: "Abbott", detail: "Diagnostics & device integration" },
  { name: "Uganda MoH", detail: "Ministry of Health infrastructure" },
  { name: "Caritas", detail: "9.5M patients · 3,000 facilities" },
  { name: "Standard Bank", detail: "Financial integration & payments" },
  { name: "MTN", detail: "200M subscriber distribution" },
  { name: "Africa CDC", detail: "SINCEP-Africa surveillance program" },
];

export default function PartnersSection() {
  return (
    <section className="py-16 bg-slate-50 border-y border-slate-100">
      <div className="container-wide">
        <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-8">
          Trusted by global partners across AI, mapping, health systems, ministries, and humanitarian networks
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-9 gap-3">
          {partners.map((p) => (
            <div
              key={p.name}
              className="flex flex-col items-center justify-center text-center p-4 rounded-xl bg-white border border-slate-100 hover:border-teal-200 transition-colors group"
            >
              <span className="font-heading font-bold text-navy-900 text-sm mb-1 group-hover:text-teal-600 transition-colors">{p.name}</span>
              <span className="text-[10px] text-slate-400 leading-tight hidden lg:block">{p.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
