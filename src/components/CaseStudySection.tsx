"use client";

import { CASE_STUDY } from "@/app/data";
import { Reveal } from "./Reveal";
import { ExternalLink, CheckCircle } from "lucide-react";

export function CaseStudySection() {
  return (
    <section id="case-study" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-cyan-600 uppercase tracking-widest mb-4">
              {CASE_STUDY.label}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              {CASE_STUDY.headline}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {CASE_STUDY.intro}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 text-white">
            <div className="flex flex-col md:flex-row justify-between items-start mb-8">
              <div>
                <h3 className="text-3xl font-bold mb-2">{CASE_STUDY.client.name}</h3>
                <p className="text-cyan-400 font-medium mb-1">{CASE_STUDY.client.platform}</p>
                <p className="text-slate-400">{CASE_STUDY.client.niche}</p>
              </div>
              <a
                href="https://ciciprofit.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 font-semibold rounded-full hover:scale-105 transition-transform mt-4 md:mt-0"
              >
                Visit Live Site
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {CASE_STUDY.stats.map((stat, i) => (
                <div key={i} className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700">
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-slate-300">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="mb-8">
              <h4 className="text-xl font-bold mb-4 text-cyan-400">Pipeline Flow:</h4>
              <div className="space-y-2">
                {CASE_STUDY.pipeline.map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4 text-cyan-400">Outcomes:</h4>
              <div className="space-y-2">
                {CASE_STUDY.outcomes.map((outcome, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
