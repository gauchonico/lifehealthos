export type FieldConfig =
  | { name: string; label: string; type: "string" | "text" | "url" | "date" | "tags" | "markdown" | "number"; required?: boolean }
  | { name: string; label: string; type: "select"; options: { label: string; value: string }[]; required?: boolean }
  | { name: string; label: string; type: "boolean" }
  | { name: string; label: string; type: "image" | "file"; required?: boolean };

export type CollectionConfig = {
  key: string;
  sanityType: string;
  label: string;
  fields: FieldConfig[];
  /** Field to display as the item's name in the list view. Defaults to "title". */
  titleField?: string;
  /** Whether to auto-generate a slug from titleField on create. Defaults to true. */
  hasSlug?: boolean;
};

export const collections: CollectionConfig[] = [
  {
    key: "resources",
    sanityType: "resource",
    label: "Resources",
    fields: [
      { name: "title", label: "Title", type: "string", required: true },
      {
        name: "type",
        label: "Type",
        type: "select",
        required: true,
        options: [
          { label: "Case Study", value: "case_study" },
          { label: "White Paper", value: "white_paper" },
          { label: "Product Brief", value: "product_brief" },
          { label: "News", value: "news" },
        ],
      },
      { name: "summary", label: "Summary", type: "text" },
      { name: "image", label: "Image", type: "image" },
      { name: "file", label: "File (PDF etc.)", type: "file" },
      { name: "body", label: "Body (Markdown)", type: "markdown" },
      { name: "tags", label: "Tags (comma-separated)", type: "tags" },
      { name: "publishDate", label: "Publish Date", type: "date" },
      { name: "isPublished", label: "Published", type: "boolean" },
    ],
  },
  {
    key: "videos",
    sanityType: "video",
    label: "Videos",
    fields: [
      { name: "title", label: "Title", type: "string", required: true },
      { name: "youtubeUrl", label: "YouTube URL", type: "url", required: true },
      { name: "featuredImage", label: "Featured Image", type: "image", required: true },
      { name: "summary", label: "Summary", type: "text" },
      { name: "tags", label: "Tags (comma-separated)", type: "tags" },
      { name: "publishDate", label: "Publish Date", type: "date" },
      { name: "isPublished", label: "Published", type: "boolean" },
    ],
  },
  {
    key: "webinars",
    sanityType: "webinar",
    label: "Webinars",
    fields: [
      { name: "title", label: "Title", type: "string", required: true },
      { name: "youtubeUrl", label: "YouTube URL", type: "url", required: true },
      { name: "featuredImage", label: "Featured Image", type: "image", required: true },
      { name: "summary", label: "Summary", type: "text" },
      { name: "tags", label: "Tags (comma-separated)", type: "tags" },
      { name: "publishDate", label: "Publish Date", type: "date" },
      { name: "isPublished", label: "Published", type: "boolean" },
    ],
  },
  {
    key: "faqs",
    sanityType: "faq",
    label: "FAQs",
    titleField: "question",
    hasSlug: false,
    fields: [
      { name: "question", label: "Question", type: "string", required: true },
      { name: "answer", label: "Answer", type: "text", required: true },
      { name: "category", label: "Category", type: "string" },
      { name: "relatedSolution", label: "Related Solution", type: "string" },
      { name: "order", label: "Order", type: "number" },
      { name: "isPublished", label: "Published", type: "boolean" },
    ],
  },
  {
    key: "documents",
    sanityType: "fileDocument",
    label: "Documents",
    hasSlug: false,
    fields: [
      { name: "title", label: "Title", type: "string", required: true },
      { name: "file", label: "File", type: "file", required: true },
      { name: "description", label: "Description", type: "text" },
      { name: "category", label: "Category", type: "string" },
      { name: "publishDate", label: "Publish Date", type: "date" },
      { name: "isPublished", label: "Published", type: "boolean" },
    ],
  },
];

export function getCollection(key: string): CollectionConfig | undefined {
  return collections.find((c) => c.key === key);
}
