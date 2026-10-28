"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <details
          key={index}
          className="faq-item-details border-b py-4"
          open={openIndex === index}
          onClick={(e) => {
            e.preventDefault();
            setOpenIndex(openIndex === index ? null : index);
          }}
        >
          <summary className="faq-question-summary font-semibold text-md cursor-pointer list-none flex justify-between items-center">
            {item.question}
            <span className="text-xl">
              {openIndex === index ? "−" : "+"}
            </span>
          </summary>
          <div className="faq-answer-content mt-2 text-gray-600">
            <p>{item.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
