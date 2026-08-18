import type { ChatFaq } from "@/app/api/faqs/route";

const STOPWORDS = new Set([
  "a", "an", "the", "is", "are", "was", "were", "be", "been", "being",
  "do", "does", "did", "have", "has", "had", "i", "you", "we", "they",
  "it", "this", "that", "of", "for", "to", "in", "on", "with", "and",
  "or", "what", "how", "why", "can", "will", "your", "my", "about",
]);

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((word) => word.length > 1 && !STOPWORDS.has(word));
}

export type FaqMatch = ChatFaq & { score: number };

// Plain keyword-overlap scoring (question terms weighted higher than
// answer/category terms) — no external search service or API needed.
export function searchFaqs(query: string, faqs: ChatFaq[], limit = 3): FaqMatch[] {
  const queryTokens = tokenize(query);
  if (queryTokens.length === 0) return [];

  const scored = faqs.map((faq) => {
    const questionTokens = tokenize(faq.question);
    const answerTokens = tokenize(faq.answer);
    const categoryTokens = faq.category ? tokenize(faq.category) : [];

    let score = 0;
    for (const token of queryTokens) {
      if (questionTokens.includes(token)) score += 3;
      if (categoryTokens.includes(token)) score += 2;
      if (answerTokens.includes(token)) score += 1;
      if (faq.question.toLowerCase().includes(query.toLowerCase().trim()) && query.trim().length > 3) {
        score += 4;
      }
    }
    return { ...faq, score };
  });

  return scored
    .filter((faq) => faq.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}
