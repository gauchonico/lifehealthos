"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  isEmailAllowed,
  createAccessToken,
  verifyAccessToken,
  createSessionToken,
  SESSION_COOKIE_NAME,
} from "@/lib/workspaceAuth";
import { sendWorkspaceAccessEmail } from "@/lib/resend";

export async function requestAccess(formData: FormData) {
  const email = String(formData.get("email") || "").trim();

  if (!email) {
    redirect("/workspace/request?error=missing-email");
  }

  if (!isEmailAllowed(email)) {
    // Don't reveal whether an email is on the allowlist — same message either way.
    redirect("/workspace/request?sent=1");
  }

  const token = await createAccessToken(email);
  await sendWorkspaceAccessEmail(email, token);

  redirect("/workspace/request?sent=1");
}

export async function login(formData: FormData) {
  const email = String(formData.get("email") || "").trim();
  const password = String(formData.get("password") || "").trim();

  if (!email || !password || !(await verifyAccessToken(email, password))) {
    redirect("/workspace/login?error=invalid");
  }

  const session = await createSessionToken(email);
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE_NAME, session, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 7 * 24 * 60 * 60,
  });

  redirect("/workspace");
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE_NAME);
  redirect("/workspace/login");
}
