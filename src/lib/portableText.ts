// A deliberately small Markdown <-> Portable Text bridge, scoped to exactly
// what studio/schemaTypes/blockContent.ts allows: paragraphs, h2-h4,
// blockquote, bullet/numbered lists, strong/em/code, and links. No nested
// inline marks, no embedded images (those still go through Sanity Studio or
// a dedicated image field) — enough for real article bodies without pulling
// in a full markdown/rich-text engine.

type Span = { _type: "span"; _key: string; text: string; marks: string[] };
type LinkMarkDef = { _type: "link"; _key: string; href: string };
type Block = {
  _type: "block";
  _key: string;
  style: "normal" | "h2" | "h3" | "h4" | "blockquote";
  listItem?: "bullet" | "number";
  level?: number;
  markDefs: LinkMarkDef[];
  children: Span[];
};

function randomKey(): string {
  return crypto.randomUUID().replace(/-/g, "").slice(0, 12);
}

const INLINE_PATTERN = /\*\*(.+?)\*\*|__(.+?)__|\*(.+?)\*|_(.+?)_|`(.+?)`|\[(.+?)\]\((.+?)\)/g;

function parseInline(text: string, markDefs: LinkMarkDef[]): Span[] {
  const spans: Span[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  INLINE_PATTERN.lastIndex = 0;
  while ((match = INLINE_PATTERN.exec(text))) {
    if (match.index > lastIndex) {
      spans.push({ _type: "span", _key: randomKey(), text: text.slice(lastIndex, match.index), marks: [] });
    }

    const [, bold, boldAlt, italic, italicAlt, code, linkText, linkHref] = match;
    if (bold !== undefined || boldAlt !== undefined) {
      spans.push({ _type: "span", _key: randomKey(), text: bold ?? boldAlt, marks: ["strong"] });
    } else if (italic !== undefined || italicAlt !== undefined) {
      spans.push({ _type: "span", _key: randomKey(), text: italic ?? italicAlt, marks: ["em"] });
    } else if (code !== undefined) {
      spans.push({ _type: "span", _key: randomKey(), text: code, marks: ["code"] });
    } else if (linkText !== undefined && linkHref !== undefined) {
      const markDef: LinkMarkDef = { _type: "link", _key: randomKey(), href: linkHref };
      markDefs.push(markDef);
      spans.push({ _type: "span", _key: randomKey(), text: linkText, marks: [markDef._key] });
    }

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    spans.push({ _type: "span", _key: randomKey(), text: text.slice(lastIndex), marks: [] });
  }

  return spans.length ? spans : [{ _type: "span", _key: randomKey(), text, marks: [] }];
}

function makeBlock(style: Block["style"], text: string, listItem?: Block["listItem"]): Block {
  const markDefs: LinkMarkDef[] = [];
  const children = parseInline(text, markDefs);
  return { _type: "block", _key: randomKey(), style, ...(listItem ? { listItem, level: 1 } : {}), markDefs, children };
}

export function markdownToPortableText(markdown: string): Block[] {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const blocks: Block[] = [];
  let paragraphBuffer: string[] = [];

  const flushParagraph = () => {
    if (paragraphBuffer.length) {
      blocks.push(makeBlock("normal", paragraphBuffer.join(" ").trim()));
      paragraphBuffer = [];
    }
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (!line) {
      flushParagraph();
      continue;
    }
    if (line.startsWith("#### ")) {
      flushParagraph();
      blocks.push(makeBlock("h4", line.slice(5)));
    } else if (line.startsWith("### ")) {
      flushParagraph();
      blocks.push(makeBlock("h3", line.slice(4)));
    } else if (line.startsWith("## ") || line.startsWith("# ")) {
      flushParagraph();
      blocks.push(makeBlock("h2", line.replace(/^#{1,2}\s/, "")));
    } else if (line.startsWith("> ")) {
      flushParagraph();
      blocks.push(makeBlock("blockquote", line.slice(2)));
    } else if (/^[-*]\s/.test(line)) {
      flushParagraph();
      blocks.push(makeBlock("normal", line.slice(2), "bullet"));
    } else if (/^\d+\.\s/.test(line)) {
      flushParagraph();
      blocks.push(makeBlock("normal", line.replace(/^\d+\.\s/, ""), "number"));
    } else {
      paragraphBuffer.push(line);
    }
  }
  flushParagraph();

  return blocks;
}

export function portableTextToMarkdown(blocks: unknown): string {
  if (!Array.isArray(blocks)) return "";

  const lines = blocks.map((block) => {
    if (!block || block._type !== "block") return "";

    const markDefs: LinkMarkDef[] = block.markDefs || [];
    const text = (block.children || [])
      .map((span: Span) => {
        let t = span.text || "";
        if (span.marks?.includes("code")) t = `\`${t}\``;
        if (span.marks?.includes("strong")) t = `**${t}**`;
        if (span.marks?.includes("em")) t = `*${t}*`;
        const linkKey = span.marks?.find((m: string) => markDefs.some((d) => d._key === m));
        if (linkKey) {
          const href = markDefs.find((d) => d._key === linkKey)?.href || "";
          t = `[${t}](${href})`;
        }
        return t;
      })
      .join("");

    if (block.listItem === "bullet") return `- ${text}`;
    if (block.listItem === "number") return `1. ${text}`;
    if (block.style === "h2") return `## ${text}`;
    if (block.style === "h3") return `### ${text}`;
    if (block.style === "h4") return `#### ${text}`;
    if (block.style === "blockquote") return `> ${text}`;
    return text;
  });

  return lines.join("\n\n");
}
