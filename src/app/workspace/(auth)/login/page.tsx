import Link from "next/link";
import { login } from "@/app/workspace/actions";

export const metadata = { title: "Workspace Login", robots: { index: false, follow: false } };

export default async function WorkspaceLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="mb-1 font-heading text-xl font-bold text-navy-900">Workspace Login</h1>
        <p className="mb-6 text-sm text-slate-500">Admin: log in with your password. Everyone else: use the one-time code emailed to you.</p>

        <form action={login} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-600">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-600">Password / One-Time Code</label>
            <input
              type="password"
              name="password"
              required
              autoComplete="current-password"
              className="w-full rounded-xl border border-slate-200 px-4 py-2.5 font-mono text-sm focus:border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
            />
          </div>
          {error === "invalid" ? <p className="text-sm text-red-600">That email/password combination is invalid or expired.</p> : null}
          <button
            type="submit"
            className="w-full rounded-xl bg-teal-500 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-600"
          >
            Log In
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-slate-400">
          Need a code?{" "}
          <Link href="/workspace/request" className="font-semibold text-teal-600 hover:text-teal-700">
            Request access
          </Link>
        </p>
      </div>
    </div>
  );
}
