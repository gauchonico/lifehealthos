import "server-only";
import { writeClient } from "@/sanity/writeClient";

export type AccessRequestStatus = "pending" | "approved" | "denied";

export type AccessRequest = {
  _id: string;
  email: string;
  status: AccessRequestStatus;
  requestedAt?: string;
  decidedAt?: string;
};

function idForEmail(email: string): string {
  const safe = email.trim().toLowerCase().replace(/[^a-z0-9]/g, "-");
  return `accessRequest.${safe}`;
}

/** Creates a pending request for this email if none exists yet. Idempotent. */
export async function ensureAccessRequest(email: string): Promise<void> {
  await writeClient.createIfNotExists({
    _id: idForEmail(email),
    _type: "accessRequest",
    email: email.trim().toLowerCase(),
    status: "pending",
    requestedAt: new Date().toISOString(),
  });
}

export async function getAccessRequestStatus(email: string): Promise<AccessRequestStatus | null> {
  const doc = await writeClient.fetch<{ status: AccessRequestStatus } | null>(
    `*[_type == "accessRequest" && email == $email][0]{ status }`,
    { email: email.trim().toLowerCase() },
  );
  return doc?.status ?? null;
}

export async function listAccessRequests(): Promise<AccessRequest[]> {
  return writeClient.fetch<AccessRequest[]>(
    `*[_type == "accessRequest"] | order(requestedAt desc){ _id, email, status, requestedAt, decidedAt }`,
  );
}

export async function getAccessRequestEmail(id: string): Promise<string | null> {
  const doc = await writeClient.fetch<{ email: string } | null>(`*[_id == $id][0]{ email }`, { id });
  return doc?.email ?? null;
}

export async function decideAccessRequest(id: string, status: "approved" | "denied"): Promise<void> {
  await writeClient.patch(id).set({ status, decidedAt: new Date().toISOString() }).commit();
}
