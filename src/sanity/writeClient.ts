import "server-only";
import { createClient } from "next-sanity";
import { projectId, dataset, apiVersion } from "./client";

// Server-only: holds a write-scoped Sanity token. The `server-only` import
// makes any accidental import from a Client Component fail the build rather
// than leaking the token into browser JS.
export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN,
  perspective: "raw",
});
