"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  isAdminEmail,
  verifyAdminPassword,
  createAccessToken,
  verifyAccessToken,
  createSessionToken,
  verifySessionToken,
  SESSION_COOKIE_NAME,
} from "@/lib/workspaceAuth";
import {
  ensureAccessRequest,
  getAccessRequestStatus,
  getAccessRequestEmail,
  decideAccessRequest,
  listAccessRequests,
} from "@/lib/accessRequests";
import { sendWorkspaceAccessEmail } from "@/lib/resend";

export async function requestAccess(formData: FormData) {
  const email = String(formData.get("email") || "").trim();

  if (!email) {
    redirect("/workspace/request?error=missing-email");
  }

  if (isAdminEmail(email)) {
    // The admin never requests a code — they log in with their password directly.
    redirect("/workspace/request?state=admin");
  }

  const status = await getAccessRequestStatus(email);

  if (status === "approved") {
    const token = await createAccessToken(email);
    await sendWorkspaceAccessEmail(email, token);
    redirect("/workspace/request?state=sent");
  }

  if (!status) {
    await ensureAccessRequest(email);
  }

  // Covers both the freshly-created "pending" case and an existing
  // "pending"/"denied" one — same message either way, so this never reveals
  // which emails have been denied vs. never asked at all.
  redirect("/workspace/request?state=pending");
}

export async function login(formData: FormData) {
  const email = String(formData.get("email") || "").trim();
  const password = String(formData.get("password") || "").trim();

  if (!email || !password) {
    redirect("/workspace/login?error=invalid");
  }

  if (isAdminEmail(email)) {
    if (!(await verifyAdminPassword(email, password))) {
      redirect("/workspace/login?error=invalid");
    }
    const session = await createSessionToken(email, "admin");
    await setSessionCookie(session);
    redirect("/workspace");
  }

  const status = await getAccessRequestStatus(email);
  if (status !== "approved" || !(await verifyAccessToken(email, password))) {
    redirect("/workspace/login?error=invalid");
  }

  const session = await createSessionToken(email, "member");
  await setSessionCookie(session);
  redirect("/workspace");
}

async function setSessionCookie(session: string) {
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE_NAME, session, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 7 * 24 * 60 * 60,
  });
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE_NAME);
  redirect("/workspace/login");
}

async function requireAdminSession() {
  const cookieStore = await cookies();
  const session = cookieStore.get(SESSION_COOKIE_NAME)?.value;
  const payload = session ? await verifySessionToken(session) : null;
  if (!payload || payload.role !== "admin") {
    throw new Error("Forbidden");
  }
}

export async function approveAccessRequest(id: string) {
  await requireAdminSession();
  await decideAccessRequest(id, "approved");

  const email = await getAccessRequestEmail(id);
  if (email) {
    const token = await createAccessToken(email);
    await sendWorkspaceAccessEmail(email, token);
  }

  redirect("/workspace/access-requests");
}

export async function denyAccessRequest(id: string) {
  await requireAdminSession();
  await decideAccessRequest(id, "denied");
  redirect("/workspace/access-requests");
}

export async function getAccessRequestsForAdmin() {
  await requireAdminSession();
  return listAccessRequests();
}
