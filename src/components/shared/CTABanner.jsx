import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTABanner({
  headline = "Let's build the future of healthcare together.",
  subtitle = "Start your journey with LifeHealth OS today.",
  primaryCTA = { label: "Book a Strategy Session", href: "/contact" }
}) {
  return (
    <section className="relative bg-navy-900 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://media.base44.com/images/public/6a554b016ff6fa6eb6e63b81/7318e31b1_generated_45527cb5.png"
          alt="Healthcare professionals collaborating"
          className="absolute inset-0 w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/95 to-navy-900/90" />
      </div>
      <div className="relative container-wide py-20 lg:py-28 text-center">
        <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white tracking-tight mb-4">
          {headline}
        </h2>
        <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">{subtitle}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={primaryCTA.href}
            className="inline-flex items-center gap-2 px-8 py-4 bg-teal-500 hover:bg-teal-400 text-white font-semibold rounded-xl transition-all shadow-lg shadow-teal-500/25"
          >
            {primaryCTA.label}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
