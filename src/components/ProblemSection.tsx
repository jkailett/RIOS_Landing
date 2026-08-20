"use client";

import { PROBLEM } from "@/app/data";
import { Reveal } from "./Reveal";
import * as Icons from "lucide-react";

export function ProblemSection() {
  return (
    <section id="problem" className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-cyan-600 uppercase tracking-widest mb-4">
              {PROBLEM.label}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight whitespace-pre-line">
              {PROBLEM.headline}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {PROBLEM.intro}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {PROBLEM.issues.map((issue, i) => {
            const IconComponent = Icons[issue.icon as keyof typeof Icons] as React.ElementType;
            return (
              <Reveal key={i} delay={0.1 * i}>
                <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-red-300 hover:shadow-lg hover:shadow-red-100 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-3 text-lg">{issue.label}</h3>
                  <p className="text-slate-600 leading-relaxed">{issue.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
