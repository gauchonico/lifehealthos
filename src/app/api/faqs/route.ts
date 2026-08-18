import { NextResponse } from "next/server";
import { client } from "@/sanity/client";
import { allFaqsQuery } from "@/sanity/queries";

export type ChatFaq = {
  _id: string;
  question: string;
  answer: string;
  category?: string;
};

// Backs the FAQ chat widget. Cached and revalidated on the same Sanity
// webhook as the rest of the site (see /api/revalidate).
export async function GET() {
  const faqs = await client.fetch<ChatFaq[]>(allFaqsQuery, {}, { next: { revalidate: 300 } });
  return NextResponse.json({ faqs });
}
