"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const buildNavItems = (solutions) => [
  {
    label: "Solutions",
    children: solutions.map((s) => ({ label: s.name, href: `/solutions/${s.slug}` })),
  },
  {
    label: "Platform",
    children: [
      { label: "LifeHealth Overview", href: "/platform" },
      { label: "Data & Analytics", href: "/data-analytics" },
      { label: "MPWR Loyalty Platform", href: "/empower" },
      { label: "Passport", href: "/products/passport" },
      { label: "Nexus", href: "/products/nexus" },
      { label: "X-Validator", href: "/products/xvalidator" },
      { label: "CHIP", href: "/platform#chip" },
      { label: "LifeLab", href: "/products/lifelab" },
      { label: "LifeResearch", href: "/platform#liferesearch" },
      { label: "LifeData", href: "/platform#lifedata" },
      { label: "LifeCommerce", href: "/platform#lifecommerce" },
      { label: "VIMA", href: "/products/vima" },
    ],
  },
  {
    label: "Pricing",
    children: [{ label: "Pricing Overview", href: "/pricing" }],
  },
  {
    label: "Resources",
    children: [
      { label: "Case Studies", href: "/resources/case-studies" },
      { label: "White Papers", href: "/resources/white-papers" },
      { label: "Product Briefs", href: "/resources/product-briefs" },
      { label: "Videos & Webinars", href: "/resources/videos-webinars" },
      { label: "How-To Guides", href: "/how-to" },
      { label: "News", href: "/resources/news" },
      { label: "FAQ", href: "/faq" },
      { label: "Legal", href: "/legal" },
    ],
  },
  {
    label: "LifeHealth TV",
    children: [
      { label: "Overview", href: "/lifehealth-tv" },
      { label: "How-To Guides", href: "/how-to" },
      { label: "Platform Tours", href: "/lifehealth-tv" },
      { label: "Real Deployments", href: "/lifehealth-tv" },
      { label: "Product Demos", href: "/lifehealth-tv" },
    ],
  },
  {
    label: "Workspace",
    children: [{ label: "Admin", href: "/workspace" }],
  },
  {
    label: "Company",
    children: [
      { label: "About LifeHealth", href: "/about" },
      { label: "Trust Center", href: "/trust-center" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

function NavLink({ href, external, className, children }) {
  if (external) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

/**
 * @param {{ solutions?: { name: string, slug: string }[] }} props
 */
export default function Header({ solutions = [] }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const pathname = usePathname();
  const navItems = buildNavItems(solutions);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-xl">
      <div className="container-wide">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center group">
            <img
              src="https://media.base44.com/images/public/6a554b016ff6fa6eb6e63b81/0b5f49e26_LHlogowtag-Copy.jpg"
              alt="LifeHealth — Beyond the Future of Healthcare"
              className="h-10 lg:h-12 w-auto object-contain"
            />
          </Link>

          <nav ref={dropdownRef} className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                <button
                  onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors text-slate-700 hover:text-navy-900 hover:bg-teal-50"
                >
                  {item.label}
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform ${
                      activeDropdown === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50"
                    >
                      {item.children.map((child) => (
                        <NavLink
                          key={child.label}
                          href={child.href}
                          external={child.external}
                          className="block px-4 py-2.5 text-sm text-slate-600 hover:text-navy-900 hover:bg-slate-50 transition-colors"
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-teal-500 hover:bg-teal-600 text-white text-sm font-semibold rounded-lg transition-colors shadow-sm"
            >
              Book a Strategy Session
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden rounded-lg p-2 text-navy-900 transition-colors hover:bg-teal-50"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="container-wide py-4 max-h-[80vh] overflow-y-auto">
              {navItems.map((item) => (
                <MobileNavItem key={item.label} item={item} />
              ))}
              <div className="pt-4 mt-4 border-t border-slate-100">
                <Link
                  href="/contact"
                  className="block w-full text-center px-5 py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg transition-colors"
                >
                  Book a Strategy Session
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function MobileNavItem({ item }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-50 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-3 text-sm font-medium text-slate-700"
      >
        {item.label}
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="overflow-hidden"
          >
            <div className="pb-3 pl-4 space-y-1">
              {item.children.map((child) => (
                <NavLink
                  key={child.label}
                  href={child.href}
                  external={child.external}
                  className="block py-2 text-sm text-slate-500 hover:text-teal-600"
                >
                  {child.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
