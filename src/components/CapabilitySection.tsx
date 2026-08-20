"use client";

import { CAPABILITIES } from "@/app/data";
import { Reveal } from "./Reveal";
import * as Icons from "lucide-react";

export function CapabilitySection() {
  return (
    <section id="capabilities" className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-cyan-600 uppercase tracking-widest mb-4">
              {CAPABILITIES.label}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              {CAPABILITIES.headline}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {CAPABILITIES.intro}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {CAPABILITIES.items.map((item, i) => {
            const IconComponent = Icons[item.icon as keyof typeof Icons] as React.ElementType;
            return (
              <Reveal key={i} delay={0.1 * i}>
                <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-cyan-300 hover:shadow-lg hover:shadow-cyan-100 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{item.name}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
