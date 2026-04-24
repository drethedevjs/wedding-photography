"use client";

import { InvestmentFAQProps } from "@/interface/InvestmentInterfaces";
import { useState } from "react";

/**
 * Clean expand/collapse FAQ accordion.
 * Only one item open at a time to keep the page calm.
 */
export default function InvestmentFAQ({ items }: InvestmentFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!items || items.length === 0) return null;

  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 md:px-10 py-20 md:py-28 max-w-3xl">
        <div className="text-center mb-14 md:mb-20">
          <p className="font-display italic text-gold tracking-[0.35em] uppercase text-[11px] sm:text-lg mb-5">
            Questions, Answered
          </p>
          <h2 className="font-display text-dark text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight">
            What couples usually ask
          </h2>
          <div className="h-px w-16 bg-gold mx-auto mt-8" />
        </div>

        <div className="border-t border-lightGray">
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;
            const panelId = `faq-panel-${idx}`;
            const buttonId = `faq-button-${idx}`;

            return (
              <div
                key={`${item.question}-${idx}`}
                className="border-b border-lightGray"
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between gap-6 text-left py-7 md:py-8 rounded-none ring-0 p-0 font-normal not-italic text-dark hover:text-primaryDark transition-colors"
                  >
                    <span className="font-display text-dark text-xl md:text-2xl lg:text-3xl leading-snug tracking-tight pr-2">
                      {item.question}
                    </span>
                    <span
                      aria-hidden
                      className={`shrink-0 text-gold text-2xl md:text-3xl leading-none transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-all duration-500 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 pb-7 md:pb-9"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="font-body text-secondary text-base md:text-lg leading-relaxed max-w-2xl">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
