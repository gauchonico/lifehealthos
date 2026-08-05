import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Check, X } from "lucide-react";
import { SESSION_COOKIE_NAME, verifySessionToken } from "@/lib/workspaceAuth";
import { getAccessRequestsForAdmin, approveAccessRequest, denyAccessRequest } from "@/app/workspace/actions";

export default async function AccessRequestsPage() {
  const cookieStore = await cookies();
  const session = cookieStore.get(SESSION_COOKIE_NAME)?.value;
  const payload = session ? await verifySessionToken(session) : null;

  if (!payload || payload.role !== "admin") {
    redirect("/workspace");
  }

  const requests = await getAccessRequestsForAdmin();
  const pending = requests.filter((r) => r.status === "pending");
  const decided = requests.filter((r) => r.status !== "pending");

  return (
    <div>
      <h1 className="mb-1 font-heading text-2xl font-bold text-navy-900">Access Requests</h1>
      <p className="mb-8 text-sm text-slate-500">Approving emails a one-time login code immediately — no extra step for them.</p>

      <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-400">
        Pending {pending.length > 0 ? `(${pending.length})` : ""}
      </h2>
      {pending.length === 0 ? (
        <p className="mb-8 text-sm text-slate-400">Nothing pending.</p>
      ) : (
        <ul className="mb-8 divide-y divide-slate-100 rounded-2xl border border-slate-200 bg-white">
          {pending.map((r) => (
            <li key={r._id} className="flex items-center justify-between px-5 py-4">
              <div>
                <p className="text-sm font-medium text-navy-900">{r.email}</p>
                <p className="text-xs text-slate-400">
                  Requested {r.requestedAt ? new Date(r.requestedAt).toLocaleString() : "—"}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <form action={approveAccessRequest.bind(null, r._id)}>
                  <button type="submit" className="inline-flex items-center gap-1.5 rounded-lg bg-teal-500 px-3 py-1.5 text-xs font-semibold text-white hover:bg-teal-600">
                    <Check className="h-3.5 w-3.5" /> Approve
                  </button>
                </form>
                <form action={denyAccessRequest.bind(null, r._id)}>
                  <button type="submit" className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:border-red-200 hover:text-red-600">
                    <X className="h-3.5 w-3.5" /> Deny
                  </button>
                </form>
              </div>
            </li>
          ))}
        </ul>
      )}

      <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-400">History</h2>
      {decided.length === 0 ? (
        <p className="text-sm text-slate-400">No decisions yet.</p>
      ) : (
        <ul className="divide-y divide-slate-100 rounded-2xl border border-slate-200 bg-white">
          {decided.map((r) => (
            <li key={r._id} className="flex items-center justify-between px-5 py-4">
              <p className="text-sm font-medium text-navy-900">{r.email}</p>
              <span className={`text-xs font-semibold uppercase ${r.status === "approved" ? "text-teal-600" : "text-slate-400"}`}>
                {r.status}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
