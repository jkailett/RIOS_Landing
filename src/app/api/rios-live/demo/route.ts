import { NextResponse } from "next/server";
import { Pool } from "pg";

// ===== DATABASE CONNECTION =====
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL?.includes("neon.tech")
    ? { rejectUnauthorized: false }
    : undefined,
});

// ===== DEMO EVENT TEMPLATES =====
const DEMO_AGENTS = [
  {
    agent: "EXECUTIVE ORCHESTRATOR",
    stage: "orchestrator",
    message:
      "Demo campaign initialized. Strategy: AI-driven content → Lead capture → Conversion pipeline",
    delay: 0,
  },
  {
    agent: "RESEARCH AGENT",
    stage: "research",
    message:
      "Market analysis complete. 5 trending topics identified. Target audience: Tech-forward SMBs. Confidence: 97%",
    delay: 2000,
  },
  {
    agent: "HOOK AGENT",
    stage: "hook",
    message:
      'Hook generated: "How AI Builds Your Next Campaign in 8 Minutes" — Engagement score: 96/100. Verdict: APPROVED',
    delay: 4000,
  },
  {
    agent: "SCRIPT AGENT",
    stage: "script",
    message:
      "Narrative arc constructed. Structure: Problem → Solution → CTA. Tone: Professional, energetic. Duration: 60 seconds.",
    delay: 6000,
  },
  {
    agent: "SCENE AGENT",
    stage: "scene",
    message:
      "Visual storyboard planned. 4 scenes with split-screen UI demo. Avatar positioning: Center-right, 35% frame.",
    delay: 8000,
  },
  {
    agent: "VISUAL INTELLIGENCE",
    stage: "visual",
    message:
      "Stock assets matched: tech UI screens, gradient overlays. Color grading: Cyber Blue + Royal Purple. Transitions: Smooth fade, 12 cuts.",
    delay: 10000,
  },
  {
    agent: "EDIT AGENT",
    stage: "edit",
    message:
      "Edit assembled. Captions: Bold, keyword-highlighted. Music: Upbeat tech underscore. Export: 1080x1920, H.264, 60fps.",
    delay: 12000,
  },
  {
    agent: "QA AGENT",
    stage: "qa",
    message:
      "Quality validation complete. Audio: ✓ Clear. Visuals: ✓ Sharp. Message: ✓ On-brand. Verdict: READY TO DEPLOY",
    delay: 14000,
  },
];

// ===== POST /api/rios-live/demo =====
export async function POST() {
  try {
    // Validate DATABASE_URL
    if (!process.env.DATABASE_URL) {
      return NextResponse.json(
        {
          error: "DATABASE_URL not configured",
          hint: "Set DATABASE_URL in Vercel environment variables",
        },
        { status: 500 }
      );
    }

    // Generate unique demo campaign ID
    const campaignId = `camp_demo_${Date.now()}`;
    const client = "DEMO_CLIENT";

    // Insert demo events with progressive timestamps
    const insertPromises = DEMO_AGENTS.map((template, idx) => {
      const timestamp = new Date(Date.now() + template.delay).toISOString();
      const eventId = `evt_demo_${Date.now()}_${idx}`;

      return pool.query(
        `
        INSERT INTO "RiosEvent" (
          event_id,
          timestamp,
          campaign_id,
          client,
          agent,
          stage,
          status,
          score,
          public_message,
          visibility
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
        `,
        [
          eventId,
          timestamp,
          campaignId,
          client,
          template.agent,
          template.stage,
          idx === DEMO_AGENTS.length - 1 ? "completed" : "active",
          idx === DEMO_AGENTS.length - 1 ? 96 : null,
          template.message,
          "public_safe",
        ]
      );
    });

    await Promise.all(insertPromises);

    return NextResponse.json(
      {
        success: true,
        campaign_id: campaignId,
        events_created: DEMO_AGENTS.length,
        message: `Demo campaign ${campaignId} created with ${DEMO_AGENTS.length} events`,
        timeline: "Events will appear progressively over 14 seconds",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("[API /rios-live/demo] Error:", error);
    return NextResponse.json(
      {
        error: "Failed to create demo campaign",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
