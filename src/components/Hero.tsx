"use client";

import { HERO, SITE } from "@/app/data";
import { Reveal } from "./Reveal";
import { ArrowRight, MessageCircle, Activity } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 bg-dark-deep overflow-hidden">
      {/* Animated Ambient Blobs (Cinema Dark) */}
      <div className="blob-animated absolute top-20 left-10 w-80 h-80 bg-accent-primary rounded-full" style={{ animationDelay: '0s' }} />
      <div className="blob-animated absolute top-1/3 right-20 w-96 h-96 bg-blue-500 rounded-full" style={{ animationDelay: '2s' }} />
      <div className="blob-animated absolute bottom-10 left-1/3 w-72 h-72 bg-indigo-500 rounded-full" style={{ animationDelay: '4s' }} />

      {/* Gradient Overlay (Deep to Base) */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-deep via-dark-elevated to-dark-base" />

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center pt-24 pb-16">
        {/* Section Label */}
        <Reveal>
          <div className="inline-block px-4 py-2 rounded-[16px] border border-border-subtle bg-surface backdrop-blur-md mb-8">
            <span className="section-label">{HERO.label}</span>
          </div>
        </Reveal>

        {/* Main Headline */}
        <Reveal delay={0.1}>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 whitespace-pre-line text-balance text-fg-primary">
            {HERO.headline}
          </h1>
        </Reveal>

        {/* Subhead + Motto */}
        <Reveal delay={0.2}>
          <p className="text-xl md:text-2xl text-fg-muted max-w-4xl mx-auto leading-relaxed mb-2">
            {HERO.subhead}
          </p>
          <p className="text-lg md:text-xl font-semibold tracking-widest text-accent-primary mb-10">
            {HERO.motto}
          </p>
        </Reveal>

        {/* CTA Buttons */}
        <Reveal delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            {/* Primary CTA */}
            <a
              href={HERO.ctaPrimaryHref}
              className="btn-primary"
            >
              {HERO.ctaPrimary}
              <ArrowRight className="w-5 h-5" />
            </a>

            {/* Secondary CTA — WhatsApp */}
            <a
              href={SITE.waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <MessageCircle className="w-5 h-5" />
              {HERO.ctaSecondary}
            </a>
          </div>

          {/* RIOS Live Demo CTA */}
          <Link
            href="/rios-live"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[16px] border border-accent-primary/30 text-accent-primary font-medium transition-all duration-300 ease-expo-out hover:border-accent-primary hover:bg-accent-primary/5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-deep focus:ring-accent-primary text-sm"
          >
            <Activity className="w-4 h-4 animate-pulse" />
            See RIOS in Action
          </Link>
        </Reveal>

        {/* Trust Badges */}
        <Reveal delay={0.4}>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-fg-muted mt-12">
            {HERO.trust.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent-primary" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Subtle Bottom Fade (Dark to Darker) */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-dark-deep to-transparent pointer-events-none" />
    </section>
  );
}
