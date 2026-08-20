"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "@/app/data";
import { Reveal } from "./Reveal";

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/5 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
        aria-expanded={open}
      >
        <span className="pr-4 font-display text-base font-semibold text-white">
          {q}
        </span>
        <ChevronDown
          size={20}
          className={`shrink-0 text-muted transition-transform duration-300 ${
            open ? "rotate-180 text-accent" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-sm leading-relaxed text-muted">{a}</p>
      </div>
    </div>
  );
}

export function FAQSection() {
  return (
    <section id="faq" className="relative bg-base py-20">
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="container-page relative z-10">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <span className="section-label">FAQ</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Pertanyaan yang Sering Ditanyakan
            </h2>
          </Reveal>

          <Reveal delay={1}>
            <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm">
              {FAQS.map((faq) => (
                <FAQItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
