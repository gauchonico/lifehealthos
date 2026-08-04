import { ChevronRight } from "lucide-react";
import TrustBrandMark from "@/components/trust/TrustBrandMark";

const items = [["Overview", "overview"], ["13 Principles", "13-trust-principles"], ["Privacy", "privacy"], ["Dynamic Consent", "dynamic-consent"], ["AI & VIMA", "ai-vima"], ["Security", "security"], ["Identity & X-Validator", "identity-x-validator"], ["Interoperability", "interoperability"], ["Data Sovereignty", "data-sovereignty"], ["Research", "research"], ["Compliance", "compliance"], ["Trust Documents", "trust-documents"], ["FAQ", "faq"]];

export default function TrustSubnav() {
  return <nav className="sticky top-16 z-30 border-y border-teal-800 bg-primary text-white shadow-lg shadow-navy-900/10 lg:top-20"><div className="container-wide flex items-center gap-4 py-2"><div className="flex flex-none items-center gap-3 border-r border-white/20 pr-4"><TrustBrandMark compact/><span className="hidden text-xs font-extrabold uppercase tracking-[0.16em] text-lime-300 xl:block">LifeHealth<br/>Trust Center</span></div><div className="flex min-w-0 items-center gap-1 overflow-x-auto py-1">{items.map(([label, id], index) => <a key={id} href={`#${id}`} className={`flex flex-none items-center gap-1 rounded-lg px-3 py-2 text-xs font-bold transition-colors ${index === 0 ? "bg-lime-300 text-primary" : "text-teal-50 hover:bg-white/10 hover:text-lime-200"}`}>{label}{index === 1 && <ChevronRight className="h-3 w-3 text-lime-300"/>}</a>)}</div></div></nav>;
}
