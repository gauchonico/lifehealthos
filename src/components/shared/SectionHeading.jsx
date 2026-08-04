export default function SectionHeading({ badge, title, subtitle = "", align = "center", light = false }) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""} mb-12 lg:mb-16`}>
      {badge && (
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 ${
          light ? "bg-teal-500/20 text-teal-300" : "bg-teal-50 text-teal-600"
        }`}>
          {badge}
        </span>
      )}
      <h2 className={`font-heading font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight ${
        light ? "text-white" : "text-navy-900"
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg md:text-xl leading-relaxed ${
          light ? "text-slate-300" : "text-slate-500"
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
