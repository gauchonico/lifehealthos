import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

// Sanity webhook target (Settings → API → Webhooks). Configure the webhook
// to POST here with `?secret=<SANITY_REVALIDATE_SECRET>` on the URL, on
// "Create", "Update", and "Delete" for all document types. On every hit we
// just blow away the whole site's cache — simple, and cheap enough at this
// site's size — so the next visit to any page re-fetches fresh Sanity data.
export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");
  if (!secret || secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  revalidatePath("/", "layout");

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
