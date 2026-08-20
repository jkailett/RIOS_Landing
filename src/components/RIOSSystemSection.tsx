"use client";

import { useState } from "react";
import { RIOS_SYSTEM, PIPELINE_NODES } from "@/app/data";
import { Reveal } from "./Reveal";
import * as Icons from "lucide-react";

export function RIOSSystemSection() {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  return (
    <section id="system" className="py-24 px-6 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-cyan-400 uppercase tracking-widest mb-4">
              {RIOS_SYSTEM.label}
            </p>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {RIOS_SYSTEM.headline}
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8">
              {RIOS_SYSTEM.subhead}
            </p>
            <a
              href={RIOS_SYSTEM.ctaHref}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-semibold rounded-full hover:scale-105 transition-transform"
            >
              {RIOS_SYSTEM.ctaText}
              <Icons.ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </Reveal>

        {/* PIPELINE VISUAL — Klik-able Nodes */}
        <Reveal delay={0.3}>
          <div className="mt-20">
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {PIPELINE_NODES.map((node, i) => {
                const IconComponent = node.icon ? (Icons as any)[node.icon] : null;
                return (
                  <div key={node.id} className="flex items-center">
                    <button
                      onClick={() => setActiveNode(activeNode === node.id ? null : node.id)}
                      className={`
                        px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wider transition-all flex items-center gap-2
                        ${
                          activeNode === node.id
                            ? "bg-gradient-to-r from-cyan-500 to-violet-500 text-white scale-110 shadow-lg shadow-cyan-500/30"
                            : "bg-slate-700/50 text-slate-300 hover:bg-slate-700 hover:text-white"
                        }
                      `}
                    >
                      {IconComponent && <IconComponent className="w-4 h-4" />}
                      {node.label}
                    </button>
                    {i < PIPELINE_NODES.length - 1 && (
                      <Icons.ArrowRight className="w-5 h-5 text-slate-500 mx-2 hidden md:block" />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Detail Panel */}
            {activeNode && (
              <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-3xl p-8 mt-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
                {PIPELINE_NODES.filter((n) => n.id === activeNode).map((node) => (
                  <div key={node.id}>
                    <h3 className="text-3xl font-bold text-cyan-400 mb-4">{node.title}</h3>
                    <p className="text-lg text-slate-300 leading-relaxed">{node.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
