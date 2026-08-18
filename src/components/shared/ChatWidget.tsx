"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { X, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { searchFaqs } from "@/lib/faqSearch";
import type { ChatFaq } from "@/app/api/faqs/route";

type ChatMessage = {
  role: "user" | "bot";
  text: string;
  suggestions?: ChatFaq[];
};

const WELCOME: ChatMessage = {
  role: "bot",
  text: "Hi! Ask me anything about LifeHealth — our platform, solutions, or how to get started.",
};

const NO_MATCH_TEXT =
  "I couldn't find an answer to that in our FAQs. Try rephrasing, or reach our team directly on the Contact page.";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [faqs, setFaqs] = useState<ChatFaq[] | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open || faqs !== null) return;
    fetch("/api/faqs")
      .then((res) => res.json())
      .then((data) => setFaqs(data.faqs ?? []))
      .catch(() => setFaqs([]));
  }, [open, faqs]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  function ask(question: string) {
    const trimmed = question.trim();
    if (!trimmed || !faqs) return;

    const matches = searchFaqs(trimmed, faqs);
    const [best, ...rest] = matches;

    setMessages((prev) => [
      ...prev,
      { role: "user", text: trimmed },
      best
        ? { role: "bot", text: best.answer, suggestions: rest }
        : { role: "bot", text: NO_MATCH_TEXT },
    ]);
    setInput("");
  }

  return (
    <div className="fixed bottom-6 right-6 z-[90] flex flex-col items-end gap-3">
      {open && (
        <div className="w-[92vw] max-w-[360px] h-[480px] max-h-[70vh] flex flex-col rounded-2xl border border-slate-200 bg-white shadow-2xl overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 bg-navy-900 text-white shrink-0">
            <span className="font-heading font-semibold text-sm">Ask LifeHealth</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="text-white/80 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-slate-50">
            {messages.map((message, i) => (
              <div key={i} className={cn("flex", message.role === "user" ? "justify-end" : "justify-start")}>
                <div
                  className={cn(
                    "max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed",
                    message.role === "user"
                      ? "bg-teal-500 text-white rounded-br-sm"
                      : "bg-white border border-slate-200 text-slate-700 rounded-bl-sm"
                  )}
                >
                  {message.text}
                  {message.text === NO_MATCH_TEXT && (
                    <Link href="/contact" className="block mt-2 text-teal-600 font-medium hover:underline">
                      Go to Contact →
                    </Link>
                  )}
                  {message.suggestions && message.suggestions.length > 0 && (
                    <div className="mt-2 flex flex-col gap-1.5">
                      <span className="text-xs text-slate-400">You might also ask:</span>
                      {message.suggestions.map((s) => (
                        <button
                          key={s._id}
                          type="button"
                          onClick={() => ask(s.question)}
                          className="text-left text-xs text-teal-700 hover:underline"
                        >
                          {s.question}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {open && faqs === null && (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-sm border border-slate-200 bg-white px-3 py-2 text-sm text-slate-400">
                  Loading answers…
                </div>
              </div>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              ask(input);
            }}
            className="flex items-center gap-2 border-t border-slate-200 p-3 shrink-0"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question…"
              disabled={!faqs}
              className="flex-1 rounded-full border border-slate-200 px-3.5 py-2 text-sm outline-none focus:border-teal-400 disabled:bg-slate-50"
            />
            <button
              type="submit"
              disabled={!faqs || !input.trim()}
              aria-label="Send"
              className="shrink-0 w-9 h-9 rounded-full bg-teal-500 text-white flex items-center justify-center hover:bg-teal-600 disabled:opacity-50 transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      <div className="relative w-16 h-16">
        {!open && (
          <span
            aria-hidden
            className="absolute inset-0 rounded-full bg-teal-400"
            style={{ animation: "fab-ring 2.2s cubic-bezier(0.4,0,0.6,1) infinite" }}
          />
        )}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close chat" : "Open chat"}
          className="relative w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center overflow-hidden hover:scale-105 transition-transform"
        >
          {open ? (
            <span className="w-full h-full bg-teal-500 flex items-center justify-center text-white">
              <X className="w-6 h-6" />
            </span>
          ) : (
            <img
              src="/LH-GIFS/WAVING.gif"
              alt="Chat with us"
              className="w-[150%] h-[100%] object-cover"
            />
          )}
        </button>
      </div>
    </div>
  );
}
