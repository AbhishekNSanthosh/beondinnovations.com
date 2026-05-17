"use client";

import { useState } from "react";
import FadeUp from "@/components/FadeUp";

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Most projects take between 6–12 weeks from kickoff to launch. MVPs and focused feature builds can be done in as little as 4 weeks. We'll give you an honest timeline estimate during discovery — before any work begins.",
  },
  {
    q: "Do I own the code once the project is done?",
    a: "Yes — 100%. You get full ownership of all source code, design files, and assets from day one. No licensing fees, no lock-in, and no dependency on us to keep things running.",
  },
  {
    q: "What does working with you look like day to day?",
    a: "You'll have direct access to the engineers doing the work — no middlemen. We do weekly syncs, share progress in a shared Slack or Notion space, and you can review the code at any time. Decisions get made fast.",
  },
  {
    q: "Do you work with early-stage startups or only established businesses?",
    a: "Both. We've helped founders take ideas from whiteboard to launched product, and we've helped established teams modernize legacy systems. The common thread: clients who want quality work done with clear communication.",
  },
  {
    q: "How do we get started?",
    a: "Send us a brief overview of what you're building at hello@beondinnovations.com. We'll schedule a 30-minute call, and follow up with honest thoughts and a proposed scope — no sales fluff.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-12 lg:py-24 bg-white">
      <div className="px-[5vw]">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-24 items-start">
          <FadeUp className="lg:sticky lg:top-28 lg:w-72 flex-shrink-0">
            <p className="text-emerald-600 text-sm font-semibold uppercase tracking-widest mb-3">
              FAQ
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-3 lg:mb-5">
              Common questions
            </h2>
            <p className="text-neutral-500 text-sm leading-relaxed">
              Don&apos;t see your question here?{" "}
              <a href="mailto:beondinnovations@gmail.com" className="text-emerald-600 hover:underline">
                Just ask us directly.
              </a>
            </p>
          </FadeUp>

          <div className="flex-1 space-y-3 w-full">
            {faqs.map((faq, i) => (
              <FadeUp key={i} delay={i * 60}>
                <div
                  className={`border rounded-2xl overflow-hidden transition-colors duration-200 ${
                    open === i
                      ? "border-emerald-200 bg-emerald-50/50"
                      : "border-neutral-200 bg-white hover:border-neutral-300"
                  }`}
                >
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 cursor-pointer"
                  >
                    <span className="font-semibold text-neutral-900 text-sm md:text-base">
                      {faq.q}
                    </span>
                    <span
                      className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                        open === i
                          ? "bg-emerald-600 text-white rotate-45"
                          : "bg-neutral-100 text-neutral-500"
                      }`}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M6 2v8M2 6h8" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      open === i ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="px-6 pb-6 text-neutral-500 text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
