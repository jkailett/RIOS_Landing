"use client";

import { WHAT_IS_RIOS } from "@/app/data";
import { Reveal } from "./Reveal";

export function WhatIsRIOSSection() {
  return (
    <section id="what-is-rios" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-cyan-600 uppercase tracking-widest mb-4">
              {WHAT_IS_RIOS.label}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              {WHAT_IS_RIOS.headline}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {WHAT_IS_RIOS.description}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {WHAT_IS_RIOS.stats.map((stat, i) => (
              <div
                key={i}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200"
              >
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-violet-600 mb-3">
                  {stat.value}
                </div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
