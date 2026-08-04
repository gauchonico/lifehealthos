"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FaqAccordion({ faqs }) {
  return (
    <Accordion type="single" collapsible className="max-w-3xl mx-auto">
      {faqs.map((faq, i) => (
        <AccordionItem key={faq._id ?? i} value={`faq-${i}`}>
          <AccordionTrigger className="text-left font-heading font-semibold text-navy-900">{faq.question}</AccordionTrigger>
          <AccordionContent className="text-slate-500 leading-relaxed">{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
