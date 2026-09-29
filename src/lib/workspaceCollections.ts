export type ObjectListItemField = { name: string; label: string; multiline?: boolean };

export type FieldConfig =
  | { name: string; label: string; type: "string" | "text" | "url" | "date" | "tags" | "markdown" | "number"; required?: boolean }
  | {
      name: string;
      label: string;
      type: "select";
      options: { label: string; value: string }[];
      required?: boolean;
      /** Pre-selected when the document has no value yet (new documents, or ones created before the field existed). */
      defaultValue?: string;
    }
  | { name: string; label: string; type: "boolean" }
  | { name: string; label: string; type: "image" | "file"; required?: boolean }
  /** A video file uploaded from the browser to Hostinger (see VideoUploadField); stored on the document as a plain URL string field. */
  | { name: string; label: string; type: "videoFile" }
  /** A repeatable list of small objects, e.g. { title, description } pairs. Stored as a Sanity object array with `_type: itemType`. */
  | { name: string; label: string; type: "objectList"; itemType: string; itemFields: ObjectListItemField[] };

export type CollectionConfig = {
  key: string;
  sanityType: string;
  label: string;
  fields: FieldConfig[];
  /** Field to display as the item's name in the list view. Defaults to "title". */
  titleField?: string;
  /** Whether to auto-generate a slug from titleField on create. Defaults to true. */
  hasSlug?: boolean;
  /** Name of a "select" field to group the list view into sections by, e.g. "category". */
  groupByField?: string;
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
      { name: "youtubeUrl", label: "YouTube URL (leave empty if uploading a file below)", type: "url" },
      { name: "videoFileUrl", label: "Or Upload a Video File", type: "videoFile" },
      {
        name: "orientation",
        label: "Orientation (of the video and its featured image)",
        type: "select",
        required: true,
        defaultValue: "landscape",
        options: [
          { label: "Landscape (16:9)", value: "landscape" },
          { label: "Portrait (9:16)", value: "portrait" },
        ],
      },
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
    key: "news",
    sanityType: "news",
    label: "News",
    fields: [
      { name: "title", label: "Title", type: "string", required: true },
      { name: "excerpt", label: "Excerpt", type: "text" },
      { name: "coverImage", label: "Cover Image", type: "image" },
      { name: "body", label: "Body (Markdown)", type: "markdown" },
      { name: "tags", label: "Tags (comma-separated)", type: "tags" },
      { name: "publishDate", label: "Publish Date", type: "date" },
      { name: "isPublished", label: "Published", type: "boolean" },
    ],
  },
  {
    key: "solutions",
    sanityType: "solution",
    label: "Solutions",
    titleField: "name",
    fields: [
      { name: "name", label: "Name", type: "string", required: true },
      { name: "shortName", label: "Short Name", type: "string" },
      {
        name: "icon",
        label: "Icon",
        type: "select",
        options: [
          "Building2", "Stethoscope", "FlaskConical", "Microscope", "Landmark", "Shield",
          "Home", "BedDouble", "Heart", "Briefcase", "Ribbon", "Users", "Globe", "Activity",
        ].map((v) => ({ label: v, value: v })),
      },
      { name: "headline", label: "Headline", type: "string" },
      { name: "coreMessage", label: "Core Message", type: "text" },
      { name: "summary", label: "Summary", type: "text" },
      {
        name: "outcomes",
        label: "Outcomes",
        type: "objectList",
        itemType: "outcome",
        itemFields: [
          { name: "title", label: "Title" },
          { name: "description", label: "Description", multiline: true },
        ],
      },
      { name: "challenges", label: "Challenges (comma-separated)", type: "tags" },
      { name: "includedPlatforms", label: "Included Platforms (comma-separated)", type: "tags" },
      { name: "includedCapabilities", label: "Included Capabilities (comma-separated)", type: "tags" },
      { name: "optionalCapabilities", label: "Optional Capabilities (comma-separated)", type: "tags" },
      { name: "pricingDrivers", label: "Pricing Drivers (comma-separated)", type: "tags" },
      {
        name: "faqs",
        label: "FAQs",
        type: "objectList",
        itemType: "solutionFaq",
        itemFields: [
          { name: "question", label: "Question" },
          { name: "answer", label: "Answer", multiline: true },
        ],
      },
      { name: "order", label: "Order", type: "number" },
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
  {
    key: "quickLinks",
    sanityType: "quickLink",
    label: "Quick Links",
    hasSlug: false,
    groupByField: "category",
    fields: [
      { name: "title", label: "Title", type: "string", required: true },
      { name: "url", label: "URL", type: "url", required: true },
      { name: "description", label: "Description", type: "text" },
      {
        name: "category",
        label: "Category",
        type: "select",
        options: [
          { label: "Dashboard", value: "dashboard" },
          { label: "Demo", value: "demo" },
          { label: "Tool", value: "tool" },
          { label: "Other", value: "other" },
        ],
      },
      { name: "order", label: "Order", type: "number" },
    ],
  },
];

export function getCollection(key: string): CollectionConfig | undefined {
  return collections.find((c) => c.key === key);
}
