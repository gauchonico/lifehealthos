import Link from "next/link";
import { MessageCircle, Music2 } from "lucide-react";
import { InstagramIcon } from "@/components/icons/BrandIcons";
import { base44Path } from "@/lib/base44";

const socialLinks = [
  { label: "X", href: "https://x.com/LifeHealth4W", icon: "X" },
  { label: "TikTok", href: "https://tiktok.com/@lifehealthglobal", icon: Music2 },
  { label: "WhatsApp Channel", href: "https://whatsapp.com/channel/0029VbCrkV32P59bVCPdvY0C", icon: MessageCircle },
  { label: "Instagram", href: "https://www.instagram.com/lifehealth4w/", icon: InstagramIcon },
];

const footerLinks = {
  Solutions: [
    { label: "Hospitals", href: "/solutions/hospitals" },
    { label: "Laboratories", href: "/solutions/laboratories" },
    { label: "Clinical Research", href: "/solutions/clinical-research" },
    { label: "Ministry of Health", href: "/solutions/ministry-of-health" },
    { label: "Home Healthcare", href: "/solutions/home-healthcare" },
    { label: "Community Health", href: "/solutions/community-health" },
  ],
  Platform: [
    { label: "Overview", href: "/platform" },
    { label: "Security", href: "/platform#security" },
    { label: "Interoperability", href: "/platform#interoperability" },
    { label: "AI (VIMA)", href: "/platform#vima" },
    { label: "LifeHealth Connect", href: "/platform#connect" },
  ],
  Resources: [
    { label: "Case Studies", href: "/resources/case-studies" },
    { label: "White Papers", href: "/resources/white-papers" },
    { label: "Videos & Webinars", href: "/resources/videos-webinars" },
    { label: "FAQ", href: "/faq" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="container-wide py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="inline-block mb-4 bg-white rounded-xl px-3 py-2">
              <img
                src="https://media.base44.com/images/public/6a554b016ff6fa6eb6e63b81/0b5f49e26_LHlogowtag-Copy.jpg"
                alt="LifeHealth — Beyond the Future of Healthcare"
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              One Healthcare Operating System connecting individuals, providers, and organizations to deliver better outcomes.
            </p>
            <div className="mt-5 flex items-center gap-2" aria-label="Follow LifeHealth">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Follow LifeHealth on ${social.label}`}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition-colors hover:border-teal-400 hover:text-teal-400"
                  >
                    {Icon === "X" ? <span className="text-sm font-bold">X</span> : <Icon className="h-4 w-4" />}
                  </a>
                );
              })}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-heading font-semibold text-sm text-white mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-slate-400 hover:text-teal-400 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} CTI Africa LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Terms of Use</Link>
            <Link href="/accessibility" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Accessibility</Link>
            <a href={base44Path("/admin")} className="text-xs text-slate-600 hover:text-teal-400 transition-colors">Admin</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
