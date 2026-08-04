import Link from "next/link";
import { ArrowRight, LogIn, UserPlus, Compass, Calculator } from "lucide-react";
import { base44Path } from "@/lib/base44";

export default function WelcomeGateway() {
  return (
    <div className="grid sm:grid-cols-2 gap-4 mb-6">
      {/* New to LifeHealth */}
      <div className="rounded-2xl bg-white border border-teal-100 shadow-sm p-5">
        <div className="flex items-center gap-2 mb-1.5">
          <Compass className="w-4 h-4 text-teal-600" />
          <h3 className="font-heading font-bold text-navy-900 text-sm">New to LifeHealth?</h3>
        </div>
        <p className="text-xs text-slate-500 mb-4">Discover what we do and find the path that fits you.</p>
        <div className="flex flex-col gap-2">
          <Link href="/#solutions" className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-teal-600 hover:bg-teal-500 text-white text-sm font-semibold rounded-xl transition-colors">
            Explore Solutions <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <a href={base44Path("/pricing/estimator")} className="inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-teal-200 hover:border-teal-400 text-teal-700 text-sm font-semibold rounded-xl transition-colors">
            <Calculator className="w-3.5 h-3.5" /> Estimate Your Solution
          </a>
        </div>
      </div>

      {/* Existing user */}
      <div className="rounded-2xl bg-white border border-brandred-100 shadow-sm p-5">
        <div className="flex items-center gap-2 mb-1.5">
          <LogIn className="w-4 h-4 text-brandred-500" />
          <h3 className="font-heading font-bold text-navy-900 text-sm">Already with LifeHealth?</h3>
        </div>
        <p className="text-xs text-slate-500 mb-4">Welcome back — jump straight into your account.</p>
        <div className="flex flex-col gap-2">
          <a href="https://passport.lifehealth.app/login" className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-brandred-500 hover:bg-brandred-400 text-white text-sm font-semibold rounded-xl transition-colors">
            Log In <ArrowRight className="w-3.5 h-3.5" />
          </a>
          <a href="https://passport.lifehealth.app/register" className="inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-brandred-200 hover:border-brandred-400 text-brandred-600 text-sm font-semibold rounded-xl transition-colors">
            <UserPlus className="w-3.5 h-3.5" /> Sign Up
          </a>
        </div>
        <a href="https://healthadmin.lifehealth.app" target="_blank" rel="noreferrer" className="block mt-3 text-center text-[11px] text-slate-400 hover:text-brandred-500 transition-colors">
          Provider? Go to the Admin Portal →
        </a>
      </div>
    </div>
  );
}
