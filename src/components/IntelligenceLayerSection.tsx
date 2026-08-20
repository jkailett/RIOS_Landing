"use client";

import { INTELLIGENCE_LAYER } from "@/app/data";
import { Reveal } from "./Reveal";
import * as Icons from "lucide-react";

export function IntelligenceLayerSection() {
  return (
    <section id="intelligence" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-cyan-600 uppercase tracking-widest mb-4">
              {INTELLIGENCE_LAYER.label}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              {INTELLIGENCE_LAYER.headline}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {INTELLIGENCE_LAYER.intro}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {INTELLIGENCE_LAYER.layers.map((layer, i) => {
            const IconComponent = Icons[layer.icon as keyof typeof Icons] as React.ElementType;
            return (
              <Reveal key={i} delay={0.1 * i}>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 hover:border-cyan-300 hover:shadow-lg hover:shadow-cyan-100 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2 text-sm uppercase tracking-wide">
                    {layer.step}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{layer.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
