"use client";

import { VISION_MISSION } from "@/app/data";
import { Reveal } from "./Reveal";
import { Target, Lightbulb } from "lucide-react";

export function VisionMissionSection() {
  return (
    <section id="vision-mission" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
              {VISION_MISSION.label}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-slate-900">
              {VISION_MISSION.headline}
            </h2>
          </div>
        </Reveal>

        {/* Vision */}
        <Reveal delay={0.1}>
          <div className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-accent/5 to-violet/5 border border-accent/10">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-violet flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Visi</h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  {VISION_MISSION.vision}
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Missions */}
        <Reveal delay={0.2}>
          <div className="p-8 rounded-2xl bg-gradient-to-br from-violet/5 to-accent/5 border border-violet/10">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-violet to-accent flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mt-2">Misi</h3>
            </div>
            <div className="space-y-4 ml-16">
              {VISION_MISSION.missions.map((mission, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-violet flex items-center justify-center text-white font-bold text-sm">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p className="text-slate-700 leading-relaxed pt-1.5">
                    {mission}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
