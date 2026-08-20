"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowLeft, Activity, CheckCircle2, Circle, Play, TrendingUp, Users, Briefcase, Award, WifiOff, Wifi } from "lucide-react";

// ===== TYPES =====
type CampaignType = "content" | "lead-gen" | "whatsapp" | "follow-up";
type PipelineStage =
  | "orchestrator"
  | "research"
  | "hook"
  | "script"
  | "scene"
  | "visual"
  | "edit"
  | "qa";
type EventStatus = "completed" | "active" | "queued";

interface IntelligenceEvent {
  id: string;
  timestamp: string;
  agent: string;
  message: string;
  status: EventStatus;
}

interface CampaignConfig {
  id: CampaignType;
  label: string;
  icon: string;
  objective: string;
  events: Omit<IntelligenceEvent, "id" | "timestamp">[];
  output?: string; // Generated output snippet
}

// ===== DATA =====
const CAMPAIGNS: CampaignConfig[] = [
  {
    id: "content",
    label: "Content Campaign",
    icon: "📝",
    objective: "Create educational content to build brand authority",
    output: '"3 Retirement Myths That Could Cost You Millions" — 90-second educational video with data-backed insights, professional blue-grey palette, dynamic captions.',
    events: [
      {
        agent: "EXECUTIVE ORCHESTRATOR",
        message:
          "Campaign brief analyzed. Objective: Build brand authority through educational content. Strategy: Value-First → Engagement → Shareability",
        status: "completed",
      },
      {
        agent: "RESEARCH AGENT",
        message:
          "4 trending topics identified in financial planning space. Audience pain points: retirement anxiety, inflation concerns. Confidence: 96%",
        status: "completed",
      },
      {
        agent: "HOOK AGENT",
        message:
          'Generated 5 candidate hooks. Best: "3 Retirement Myths That Could Cost You Millions" — Score: 94/100. Verdict: APPROVED',
        status: "completed",
      },
      {
        agent: "SCRIPT AGENT",
        message:
          "Narrative arc constructed. Structure: Problem Identification → Data-Backed Insight → Actionable Framework. Tone: Authoritative yet approachable. Length: 90 seconds.",
        status: "completed",
      },
      {
        agent: "SCENE AGENT",
        message:
          "Visual storyboard planned. 6 scenes with split-screen data visualization. Avatar positioning: Center-left, 40% frame.",
        status: "completed",
      },
      {
        agent: "VISUAL INTELLIGENCE",
        message:
          "Stock footage matched: financial charts, lifestyle B-roll. Color grading: Professional blue-grey palette. Transitions: Smooth wipes, 18 total cuts.",
        status: "completed",
      },
      {
        agent: "EDIT AGENT",
        message:
          "Edit assembled. Captions: Dynamic, keyword-highlighted. Music: Subtle corporate underscore. Export: 1080x1920 (9:16), H.264, 60fps.",
        status: "completed",
      },
      {
        agent: "QA AGENT",
        message:
          "Quality validation complete. Audio levels: ✓ Balanced. Visuals: ✓ Clear. Message alignment: ✓ On-brand. Verdict: READY TO PUBLISH",
        status: "completed",
      },
    ],
  },
  {
    id: "lead-gen",
    label: "Lead Generation",
    icon: "🎯",
    objective: "Generate qualified leads for financial planning consultation",
    output: 'Landing page with "Is Your Financial Plan Retirement-Ready?" — free checklist CTA, 3-step form with trust signals, email auto-responder + CRM sync.',
    events: [
      {
        agent: "EXECUTIVE ORCHESTRATOR",
        message:
          "Campaign brief analyzed. Objective: Generate qualified leads for consultation. Strategy: Education → Problem Awareness → CTA with Lead Magnet",
        status: "completed",
      },
      {
        agent: "RESEARCH AGENT",
        message:
          "3 relevant market signals identified. Target audience: 35-50, mid-income earners seeking financial clarity. Confidence: 94%",
        status: "completed",
      },
      {
        agent: "HOOK AGENT",
        message:
          'Generated 5 candidate hooks. Best: "Is Your Financial Plan Retirement-Ready? Free Checklist Inside" — Score: 91/100. Verdict: APPROVED',
        status: "completed",
      },
      {
        agent: "SCRIPT AGENT",
        message:
          "Narrative constructed. CTA placement: Mid-video + end-screen. Lead magnet: Free downloadable checklist. Urgency: Soft deadline (limited slots).",
        status: "completed",
      },
      {
        agent: "SCENE AGENT",
        message:
          "Landing page flow designed. Hero CTA above fold, 3-step form, trust signals (testimonials + certifications).",
        status: "completed",
      },
      {
        agent: "VISUAL INTELLIGENCE",
        message:
          "Landing page visuals: Clean, trust-oriented. Form fields: Name, Email, Phone, Current Financial Goal. Submit button: High-contrast green.",
        status: "completed",
      },
      {
        agent: "EDIT AGENT",
        message:
          "Video + landing page integrated. UTM tracking enabled. Lead routing: Notion CRM + WhatsApp notification. Auto-reply configured.",
        status: "completed",
      },
      {
        agent: "QA AGENT",
        message:
          "Lead funnel tested. Form validation: ✓ Working. Email auto-responder: ✓ Sent. CRM sync: ✓ Confirmed. Verdict: CAMPAIGN LIVE",
        status: "completed",
      },
    ],
  },
  {
    id: "whatsapp",
    label: "WhatsApp Automation",
    icon: "💬",
    objective: "Build intelligent chatbot for 24/7 lead qualification and FAQ",
    output: 'WhatsApp chatbot with greeting "Hi! 👋 I\'m RIOS" — decision tree (Info/Schedule/Pricing), FAQ accuracy 100%, <2s response, auto-logs to Notion CRM.',
    events: [
      {
        agent: "EXECUTIVE ORCHESTRATOR",
        message:
          "Campaign brief analyzed. Objective: 24/7 lead qualification via WhatsApp. Strategy: Greeting → FAQ → Qualification Form → Human Handoff",
        status: "completed",
      },
      {
        agent: "RESEARCH AGENT",
        message:
          "Top 8 customer questions identified from historical chat data. Response templates drafted with tone: Friendly, professional, concise.",
        status: "completed",
      },
      {
        agent: "HOOK AGENT",
        message:
          'Opening message crafted: "Hi! 👋 I\'m RIOS, your assistant. How can I help you today?" — Conversion rate target: 75% engagement.',
        status: "completed",
      },
      {
        agent: "SCRIPT AGENT",
        message:
          "Conversation flow mapped. Decision tree: 3 branches (Info Request / Schedule Consultation / Pricing). Fallback: Escalate to human within 30s.",
        status: "completed",
      },
      {
        agent: "SCENE AGENT",
        message:
          "Chatbot UI designed for WhatsApp Official API. Quick-reply buttons, media attachments enabled. Multi-language support: ID + EN.",
        status: "completed",
      },
      {
        agent: "VISUAL INTELLIGENCE",
        message:
          "Welcome image designed: Brand logo + friendly greeting. Auto-sent on first message. File: JPG, <100KB for fast delivery.",
        status: "completed",
      },
      {
        agent: "EDIT AGENT",
        message:
          "Chatbot deployed. Webhook connected to Notion CRM. Lead data auto-logged: Name, inquiry type, timestamp, qualification score.",
        status: "completed",
      },
      {
        agent: "QA AGENT",
        message:
          "Chatbot tested across 12 scenarios. Response time: <2s. FAQ accuracy: ✓ 100%. Handoff logic: ✓ Smooth. Verdict: SYSTEM OPERATIONAL",
        status: "completed",
      },
    ],
  },
  {
    id: "follow-up",
    label: "Customer Follow-up",
    icon: "🔄",
    objective: "Nurture leads with personalized follow-up sequence",
    output: '3-email sequence: Day 1 value content, Day 4 social proof, Day 7 limited offer — mobile-first templates, optimized send times, deliverability ✓ inbox.',
    events: [
      {
        agent: "EXECUTIVE ORCHESTRATOR",
        message:
          "Campaign brief analyzed. Objective: Nurture cold leads into warm prospects. Strategy: Value Email Series → Reminder → Offer → Close",
        status: "completed",
      },
      {
        agent: "RESEARCH AGENT",
        message:
          "Lead segmentation complete. 3 groups identified: High-intent (10%), Medium (40%), Low (50%). Personalization rules applied.",
        status: "completed",
      },
      {
        agent: "HOOK AGENT",
        message:
          'Email subject lines generated. Best for High-Intent: "Ready to Finalize Your Plan?" — Open rate projection: 68%',
        status: "completed",
      },
      {
        agent: "SCRIPT AGENT",
        message:
          "3-email sequence drafted. Day 1: Value content. Day 4: Social proof + testimonial. Day 7: Limited-time offer. Tone: Helpful, non-pushy.",
        status: "completed",
      },
      {
        agent: "SCENE AGENT",
        message:
          "Email templates designed. Mobile-first, single CTA per email. Visuals: Minimal, trust-focused. Unsubscribe link: Footer, compliant.",
        status: "completed",
      },
      {
        agent: "VISUAL INTELLIGENCE",
        message:
          "Email banners created. Branded header, clean layout. CTA button: High-contrast purple. Responsive: ✓ Tested on Gmail, Outlook, Apple Mail.",
        status: "completed",
      },
      {
        agent: "EDIT AGENT",
        message:
          "Email automation scheduled. Send times optimized: 9 AM, 2 PM, 6 PM (local timezone). Tracking: Opens, clicks, conversions enabled.",
        status: "completed",
      },
      {
        agent: "QA AGENT",
        message:
          "Follow-up sequence tested. Deliverability: ✓ Inbox (not spam). Personalization tokens: ✓ Working. Unsubscribe: ✓ Functional. Verdict: SEQUENCE LIVE",
        status: "completed",
      },
    ],
  },
];

const PIPELINE_STAGES: { id: PipelineStage; label: string }[] = [
  { id: "orchestrator", label: "EXEC" },
  { id: "research", label: "RESEARCH" },
  { id: "hook", label: "HOOK" },
  { id: "script", label: "SCRIPT" },
  { id: "scene", label: "SCENE" },
  { id: "visual", label: "VISUAL" },
  { id: "edit", label: "EDIT" },
  { id: "qa", label: "QA" },
];

// ===== COMPONENT =====
export default function RIOSLivePage() {
  const [selectedCampaign, setSelectedCampaign] = useState<CampaignType | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [currentStageIndex, setCurrentStageIndex] = useState(-1);
  const [events, setEvents] = useState<IntelligenceEvent[]>([]);
  const [mode, setMode] = useState<"simulation" | "live">("simulation");
  const [liveError, setLiveError] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [lastEventTimestamp, setLastEventTimestamp] = useState<number>(0);
  const [isDemoRunning, setIsDemoRunning] = useState(false);
  const feedEndRef = useRef<HTMLDivElement>(null);
  const previousEventIdsRef = useRef<Set<string>>(new Set());

  // Auto-scroll feed to bottom
  useEffect(() => {
    feedEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [events]);

  // LIVE MODE: Polling with 1.5s interval (smooth real-time feel)
  useEffect(() => {
    if (mode !== "live") {
      setIsConnected(false);
      previousEventIdsRef.current.clear();
      return;
    }

    const fetchLiveEvents = async () => {
      try {
        const response = await fetch("/api/rios-live/events?limit=20");
        if (!response.ok) {
          const error = await response.json();
          setLiveError(error.error || "API error");
          setIsConnected(false);
          return;
        }

        const data = await response.json();
        
        // Transform API events to UI format
        const transformedEvents: IntelligenceEvent[] = data.events.map((e: any) => ({
          id: e.event_id,
          timestamp: new Date(e.timestamp).toLocaleTimeString("en-US", {
            hour12: false,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          }),
          agent: e.agent,
          message: e.public_message,
          status: e.status as EventStatus,
        }));

        // DIFF RENDER: Only prepend NEW events (avoid full re-render)
        const currentIds = new Set(transformedEvents.map(e => e.id));
        const newEvents = transformedEvents.filter(e => !previousEventIdsRef.current.has(e.id));

        if (newEvents.length > 0) {
          setEvents(prev => {
            // Merge: new events first (DESC order), then existing
            const merged = [...newEvents, ...prev];
            // Dedupe + limit to 20
            const seen = new Set<string>();
            return merged.filter(e => {
              if (seen.has(e.id)) return false;
              seen.add(e.id);
              return true;
            }).slice(0, 20);
          });
          setLastEventTimestamp(Date.now());
        }

        previousEventIdsRef.current = currentIds;
        setLiveError(null);
        setIsConnected(true);
      } catch (err) {
        setLiveError("Failed to connect to event bus");
        setIsConnected(false);
        console.error("[RIOS Live] API error:", err);
      }
    };

    // Initial fetch
    fetchLiveEvents();
    
    // Polling every 1.5 seconds (halus, real-time feel)
    const interval = setInterval(fetchLiveEvents, 1500);

    return () => clearInterval(interval);
  }, [mode]);

  // Check if no events in last 60s (idle state)
  const isIdle = mode === "live" && isConnected && events.length === 0 && Date.now() - lastEventTimestamp > 60000;

  const handleRunSimulation = () => {
    if (!selectedCampaign) return;

    setIsRunning(true);
    setCurrentStageIndex(-1);
    setEvents([]);

    const campaign = CAMPAIGNS.find((c) => c.id === selectedCampaign)!;
    let stageIdx = 0;

    const interval = setInterval(() => {
      if (stageIdx >= campaign.events.length) {
        clearInterval(interval);
        setIsRunning(false);
        setCurrentStageIndex(campaign.events.length - 1);
        return;
      }

      const event = campaign.events[stageIdx];
      const now = new Date();
      const timestamp = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`;

      setEvents((prev) => [
        ...prev,
        {
          id: `${selectedCampaign}-${stageIdx}`,
          timestamp,
          ...event,
        },
      ]);
      setCurrentStageIndex(stageIdx);
      stageIdx++;
    }, 1200); // 1.2s per stage

    return () => clearInterval(interval);
  };

  const handleReset = () => {
    setSelectedCampaign(null);
    setIsRunning(false);
    setCurrentStageIndex(-1);
    setEvents([]);
  };

  const handleRunDemo = async () => {
    setIsDemoRunning(true);
    try {
      const response = await fetch("/api/rios-live/demo", {
        method: "POST",
      });

      if (!response.ok) {
        const error = await response.json();
        alert(`Demo failed: ${error.error}`);
        return;
      }

      const data = await response.json();
      console.log("[RIOS Demo] Campaign created:", data);
      
      // Switch to LIVE mode to see events appear
      if (mode !== "live") {
        setMode("live");
      }
    } catch (err) {
      console.error("[RIOS Demo] Error:", err);
      alert("Failed to run demo campaign");
    } finally {
      setIsDemoRunning(false);
    }
  };

  const currentCampaign = CAMPAIGNS.find((c) => c.id === selectedCampaign);

  return (
    <div className="min-h-screen bg-base text-muted">
      {/* Header Bar (Mission Control style) */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-base/95 backdrop-blur-xl border-b border-line">
        <div className="max-w-[2000px] mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="text-xl font-bold bg-gradient-to-r from-accent to-violet bg-clip-text text-transparent">
              RIOS
            </div>
            {mode === "live" && (
              <div className={`hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border ${
                isConnected 
                  ? "bg-emerald-500/10 border-emerald-400/30" 
                  : "bg-red-500/10 border-red-400/30"
              }`}>
                <div className={`w-2 h-2 rounded-full ${
                  isConnected 
                    ? "bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.6)]" 
                    : "bg-red-400"
                }`} />
                <span className={`text-xs font-mono uppercase tracking-wider ${
                  isConnected ? "text-emerald-400" : "text-red-400"
                }`}>
                  {isConnected ? "● LIVE" : "DISCONNECTED"}
                </span>
              </div>
            )}
            {mode !== "live" && (
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/30">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-glow-sm" />
                <span className="text-xs font-mono uppercase tracking-wider text-accent">
                  SYSTEM LIVE
                </span>
              </div>
            )}
          </div>
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-muted/70 hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back to RIOS</span>
          </Link>
        </div>
      </nav>

      {/* Main Dashboard */}
      <main className="pt-16 pb-8 px-4 sm:px-6">
        <div className="max-w-[2000px] mx-auto">
          {/* Small Header (not hero) */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold mb-2">
                  Watch RIOS Build a Campaign
                </h1>
                <p className="text-sm text-muted/60">
                  Powered by 8 specialized AI agents + Executive Orchestrator
                </p>
              </div>

              {/* Mode Toggle */}
              <div className="flex items-center gap-2 p-1 rounded-lg bg-surface border border-line">
                <button
                  onClick={() => {
                    setMode("simulation");
                    setEvents([]);
                    setLiveError(null);
                    previousEventIdsRef.current.clear();
                  }}
                  className={`px-4 py-2 text-sm font-mono rounded-md transition-all ${
                    mode === "simulation"
                      ? "bg-accent/20 text-accent border border-accent/40"
                      : "text-muted/50 hover:text-muted"
                  }`}
                >
                  SIMULATION
                </button>
                <button
                  onClick={() => {
                    setMode("live");
                    setEvents([]);
                    setLiveError(null);
                    previousEventIdsRef.current.clear();
                  }}
                  className={`px-4 py-2 text-sm font-mono rounded-md transition-all flex items-center gap-2 ${
                    mode === "live"
                      ? "bg-emerald-500/20 text-emerald-400 border border-emerald-400/40"
                      : "text-muted/50 hover:text-muted"
                  }`}
                >
                  {mode === "live" && isConnected && (
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
                  )}
                  LIVE
                </button>
              </div>
            </div>

            {/* Connection Status (LIVE mode only) */}
            {mode === "live" && (
              <div className="flex items-center gap-2 text-xs text-muted/50">
                {isConnected ? (
                  <>
                    <Wifi className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Connected · updating every 1.5s</span>
                  </>
                ) : (
                  <>
                    <WifiOff className="w-3.5 h-3.5 text-red-400" />
                    <span>Connection lost</span>
                  </>
                )}
              </div>
            )}
          </div>

          {/* KPI Cards Grid (4 columns) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
            {/* KPI 1: System Health */}
            <div className="p-4 rounded-xl bg-surface/50 border border-line backdrop-blur-xl hover:border-accent/30 transition-all group">
              <div className="flex items-center justify-between mb-2">
                <div className="text-xs uppercase tracking-wider text-muted/50 font-mono">
                  System Health
                </div>
                <TrendingUp className="w-4 h-4 text-accent/50 group-hover:text-accent transition-colors" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-accent mb-1">98.7%</div>
              <div className="text-xs text-muted/40">+2.3% from last week</div>
            </div>

            {/* KPI 2: Active Agents */}
            <div className="p-4 rounded-xl bg-surface/50 border border-line backdrop-blur-xl hover:border-violet/30 transition-all group">
              <div className="flex items-center justify-between mb-2">
                <div className="text-xs uppercase tracking-wider text-muted/50 font-mono">
                  Active Agents
                </div>
                <Users className="w-4 h-4 text-violet/50 group-hover:text-violet transition-colors" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-violet mb-1">8/8</div>
              <div className="text-xs text-muted/40">All systems operational</div>
            </div>

            {/* KPI 3: Jobs Today */}
            <div className="p-4 rounded-xl bg-surface/50 border border-line backdrop-blur-xl hover:border-accent/30 transition-all group">
              <div className="flex items-center justify-between mb-2">
                <div className="text-xs uppercase tracking-wider text-muted/50 font-mono">
                  Jobs Today
                </div>
                <Briefcase className="w-4 h-4 text-accent/50 group-hover:text-accent transition-colors" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold mb-1">24</div>
              <div className="text-xs text-muted/40">12 completed, 12 queued</div>
            </div>

            {/* KPI 4: Quality Score */}
            <div className="p-4 rounded-xl bg-surface/50 border border-line backdrop-blur-xl hover:border-violet/30 transition-all group">
              <div className="flex items-center justify-between mb-2">
                <div className="text-xs uppercase tracking-wider text-muted/50 font-mono">
                  Quality Score
                </div>
                <Award className="w-4 h-4 text-violet/50 group-hover:text-violet transition-colors" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-violet mb-1">94/100</div>
              <div className="text-xs text-muted/40">Above target (90)</div>
            </div>
          </div>

          {/* Dashboard Grid Layout (responsive) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* LEFT-CENTER: Campaign Selector + Activity Feed (2 columns on lg+) */}
            <div className="lg:col-span-2 space-y-4 sm:space-y-6">
              {/* Campaign Selector (Panel, not hero) — ONLY for SIMULATION mode */}
              {mode === "simulation" && (
                <div className="p-4 sm:p-6 rounded-xl bg-surface/50 border border-line backdrop-blur-xl">
                  <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Play className="w-5 h-5 text-accent" />
                    Mode A — Select Campaign Type
                  </h2>
                  <div className="grid grid-cols-2 gap-3">
                    {CAMPAIGNS.map((campaign) => (
                      <button
                        key={campaign.id}
                        onClick={() => setSelectedCampaign(campaign.id)}
                        disabled={isRunning}
                        className={`p-3 sm:p-4 rounded-lg border text-left transition-all ${
                          selectedCampaign === campaign.id
                            ? "bg-accent/10 border-accent text-accent"
                            : "bg-surface-light border-line hover:border-accent/50"
                        } ${isRunning ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                      >
                        <div className="text-2xl mb-2">{campaign.icon}</div>
                        <div className="text-sm font-semibold mb-1">{campaign.label}</div>
                        <div className="text-xs text-muted/50 line-clamp-2">{campaign.objective}</div>
                      </button>
                    ))}
                  </div>
                  {selectedCampaign && (
                    <div className="mt-4 flex gap-3">
                      {!isRunning && events.length === 0 && (
                        <button
                          onClick={handleRunSimulation}
                          className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-accent to-violet text-white font-semibold rounded-lg hover:scale-105 transition-transform shadow-glow-sm"
                        >
                          <Play className="w-4 h-4" />
                          Run RIOS
                        </button>
                      )}
                      {(isRunning || events.length > 0) && (
                        <button
                          onClick={handleReset}
                          className="flex-1 px-6 py-3 bg-surface border border-line text-muted font-semibold rounded-lg hover:bg-surface-light hover:border-accent/50 transition-all"
                        >
                          Reset
                        </button>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* Demo Trigger — LIVE mode only */}
              {mode === "live" && (
                <div className="p-4 rounded-xl bg-surface/50 border border-line backdrop-blur-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-semibold mb-1">Demo Mode</h3>
                      <p className="text-xs text-muted/50">
                        Run a synthetic campaign to see RIOS in action
                      </p>
                    </div>
                    <button
                      onClick={handleRunDemo}
                      disabled={isDemoRunning}
                      className={`px-4 py-2 text-sm font-mono rounded-lg transition-all ${
                        isDemoRunning
                          ? "bg-surface border border-line text-muted/30 cursor-not-allowed"
                          : "bg-gradient-to-r from-accent to-violet text-white hover:scale-105 shadow-glow-sm"
                      }`}
                    >
                      {isDemoRunning ? "Running..." : "Run Demo Campaign"}
                    </button>
                  </div>
                </div>
              )}

              {/* Activity Feed (real-time events) */}
              <div className="p-4 sm:p-6 rounded-xl bg-surface/50 border border-line backdrop-blur-xl">
                <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-violet" />
                  {mode === "live" ? "Live Event Stream" : "Current System Activity"}
                  {mode === "live" && isConnected && (
                    <span className="ml-auto text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
                      REAL-TIME
                    </span>
                  )}
                </h2>

                {/* LIVE MODE ERROR */}
                {mode === "live" && liveError && (
                  <div className="mb-4 p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/30">
                    <p className="text-sm text-yellow-400">
                      ⚠️ {liveError} — Showing last known state
                    </p>
                  </div>
                )}

                {/* IDLE STATE (no events in 60s) */}
                {isIdle && (
                  <div className="mb-4 p-4 rounded-lg bg-accent/5 border border-accent/20">
                    <p className="text-sm text-muted/60">
                      💤 No active campaign — run a demo to see RIOS live
                    </p>
                  </div>
                )}

                <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                  {events.length === 0 && mode === "simulation" && (
                    <div className="text-center py-12 text-sm text-muted/40">
                      {selectedCampaign
                        ? 'Click "Run RIOS" to start simulation'
                        : "Select a campaign type to begin"}
                    </div>
                  )}
                  {events.length === 0 && mode === "live" && !liveError && !isIdle && (
                    <div className="text-center py-12 text-sm text-muted/40">
                      <div className="animate-pulse mb-2">Connecting to event bus...</div>
                      <div className="text-xs text-muted/30">
                        Listening for real-time operations
                      </div>
                    </div>
                  )}
                  {events.length === 0 && mode === "live" && liveError && (
                    <div className="text-center py-12 text-sm text-muted/40">
                      <div className="text-red-400 mb-2">Failed to connect</div>
                      <div className="text-xs text-muted/30">
                        Check API configuration
                      </div>
                    </div>
                  )}
                  {events.map((event, idx) => {
                    const isLast = idx === events.length - 1 && isRunning;
                    return (
                      <div
                        key={event.id}
                        className={`p-3 rounded-lg border transition-all ${
                          event.status === "completed"
                            ? "bg-surface-light/50 border-accent/20"
                            : "bg-violet/5 border-violet/30 animate-pulse"
                        }`}
                      >
                        <div className="flex items-start gap-2 sm:gap-3">
                          <div className="mt-1">
                            {event.status === "completed" && (
                              <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                            )}
                            {event.status === "active" && (
                              <div className="w-3.5 h-3.5 rounded-full bg-violet animate-pulse" />
                            )}
                            {event.status === "queued" && (
                              <Circle className="w-3.5 h-3.5 text-muted/30" />
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-1">
                              <span className="text-xs font-mono text-muted/50">
                                {event.timestamp}
                              </span>
                              <span className="text-xs font-semibold text-accent uppercase tracking-wider truncate">
                                {event.agent}
                              </span>
                            </div>
                            <p className="text-sm text-muted/80 leading-relaxed">
                              {isLast ? (
                                <span className="inline-flex items-center gap-2">
                                  <span className="animate-pulse">PROCESSING</span>
                                  <span className="inline-block w-1 h-1 rounded-full bg-violet animate-ping" />
                                </span>
                              ) : (
                                event.message
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  <div ref={feedEndRef} />
                </div>
              </div>
            </div>

            {/* RIGHT: Pipeline + Output (1 column on lg+) */}
            <div className="space-y-4 sm:space-y-6">
              {/* Live Pipeline */}
              <div className="p-4 sm:p-6 rounded-xl bg-surface/50 border border-line backdrop-blur-xl">
                <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-accent" />
                  Live Pipeline
                </h2>
                {currentCampaign && (
                  <div className="mb-4 text-xs uppercase tracking-wider text-muted/50 font-mono">
                    CURRENT JOB: CAMPAIGN #{Math.floor(Math.random() * 1000).toString().padStart(4, "0")}
                  </div>
                )}
                <div className="space-y-2">
                  {PIPELINE_STAGES.map((stage, idx) => {
                    const status =
                      idx < currentStageIndex
                        ? "completed"
                        : idx === currentStageIndex
                          ? "active"
                          : "queued";
                    return (
                      <div
                        key={stage.id}
                        className={`flex items-center gap-2 p-2 rounded-lg border transition-all ${
                          status === "completed"
                            ? "bg-accent/5 border-accent/30 text-accent"
                            : status === "active"
                              ? "bg-violet/10 border-violet/50 text-violet animate-pulse"
                              : "bg-surface-light/30 border-line/50 text-muted/40"
                        }`}
                      >
                        <div>
                          {status === "completed" && (
                            <CheckCircle2 className="w-4 h-4" />
                          )}
                          {status === "active" && (
                            <div className="w-4 h-4 rounded-full border-2 border-violet border-t-transparent animate-spin" />
                          )}
                          {status === "queued" && (
                            <Circle className="w-4 h-4" />
                          )}
                        </div>
                        <span className="text-xs font-mono uppercase tracking-wider flex-1">
                          {stage.label}
                        </span>
                        {status === "active" && (
                          <span className="text-xs text-violet/70 animate-pulse">→</span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Live Output */}
              {!isRunning && events.length > 0 && currentCampaign?.output && (
                <div className="p-4 sm:p-6 rounded-xl bg-gradient-to-br from-accent/10 to-violet/10 border border-accent/30 backdrop-blur-xl">
                  <h2 className="text-lg font-bold mb-3 flex items-center gap-2 text-accent">
                    <CheckCircle2 className="w-5 h-5" />
                    Live Output
                  </h2>
                  <div className="p-4 rounded-lg bg-base/50 border border-line/50">
                    <p className="text-sm text-muted/80 leading-relaxed">
                      {currentCampaign.output}
                    </p>
                  </div>
                  <div className="mt-4 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/40 text-accent text-xs font-mono uppercase tracking-wider">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      CAMPAIGN READY
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-8 text-center text-xs text-muted/40">
            Mission Control Dashboard — RIOS Intelligence Layer v1.0
          </div>
        </div>
      </main>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(14, 165, 233, 0.3);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(14, 165, 233, 0.5);
        }
      `}</style>
    </div>
  );
}
