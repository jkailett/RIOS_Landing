"use client";

import { HOW_IT_WORKS } from "@/app/data";
import { Reveal } from "./Reveal";
import { CheckCircle } from "lucide-react";

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-cyan-400 uppercase tracking-widest mb-4">
              {HOW_IT_WORKS.label}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {HOW_IT_WORKS.headline}
            </h2>
          </div>
        </Reveal>

        <div className="space-y-12 mt-16">
          {HOW_IT_WORKS.steps.map((step, i) => (
            <Reveal key={i} delay={0.1 * i}>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center text-2xl font-bold">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-2">
                    {step.label}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-slate-300 leading-relaxed mb-4">{step.description}</p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-cyan-400" />
                    {step.tech}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
