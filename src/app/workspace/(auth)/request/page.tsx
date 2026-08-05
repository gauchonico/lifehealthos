import Link from "next/link";
import { requestAccess } from "@/app/workspace/actions";

export const metadata = { title: "Request Workspace Access", robots: { index: false, follow: false } };

export default async function RequestAccessPage({
  searchParams,
}: {
  searchParams: Promise<{ sent?: string; error?: string }>;
}) {
  const { sent, error } = await searchParams;

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="mb-1 font-heading text-xl font-bold text-navy-900">Request Workspace Access</h1>
        <p className="mb-6 text-sm text-slate-500">Enter your email and we&apos;ll send you a one-time password if it&apos;s approved.</p>

        {sent ? (
          <p className="rounded-lg bg-teal-50 px-4 py-3 text-sm text-teal-700">
            If that email is approved for access, a one-time password is on its way. Check your inbox.
          </p>
        ) : (
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
              Send Access Code
            </button>
          </form>
        )}

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
