import Link from "next/link";
import { requestAccess } from "@/app/workspace/actions";

export const metadata = { title: "Request Workspace Access", robots: { index: false, follow: false } };

const STATE_MESSAGES: Record<string, string> = {
  sent: "You're approved — a one-time password is on its way. Check your inbox.",
  pending: "Request received. An admin needs to approve you before you can log in — check back once you've heard from them.",
  admin: "That's the admin account — log in directly with your password instead of requesting a code.",
};

export default async function RequestAccessPage({
  searchParams,
}: {
  searchParams: Promise<{ state?: string; error?: string }>;
}) {
  const { state, error } = await searchParams;
  const message = state ? STATE_MESSAGES[state] : null;

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="mb-1 font-heading text-xl font-bold text-navy-900">Request Workspace Access</h1>
        <p className="mb-6 text-sm text-slate-500">Enter your email to request access, or to get a fresh login code if you're already approved.</p>

        {message ? (
          <p className="mb-4 rounded-lg bg-teal-50 px-4 py-3 text-sm text-teal-700">{message}</p>
        ) : null}

        <form action={requestAccess} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-600">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
            />
          </div>
          {error === "missing-email" ? <p className="text-sm text-red-600">Enter an email address.</p> : null}
          <button
            type="submit"
            className="w-full rounded-xl bg-teal-500 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-600"
          >
            Request Access
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-slate-400">
          Already have a code?{" "}
          <Link href="/workspace/login" className="font-semibold text-teal-600 hover:text-teal-700">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
