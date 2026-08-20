import { NextRequest, NextResponse } from "next/server";
export const dynamic = "force-dynamic";
import { Pool } from "pg";

// ===== DATABASE CONNECTION =====
// DATABASE_URL from Vercel env (Neon Postgres)
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL?.includes("neon.tech")
    ? { rejectUnauthorized: false }
    : undefined,
});

// ===== TYPES =====
interface RiosEvent {
  event_id: string;
  timestamp: string;
  campaign_id: string;
  client: string;
  agent: string;
  stage: string;
  status: string;
  score: number | null;
  public_message: string;
}

// ===== GET /api/rios-live/events =====
export async function GET(request: NextRequest) {
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

    // Parse query params
    const searchParams = request.nextUrl.searchParams;
    const limit = Math.min(
      parseInt(searchParams.get("limit") || "20", 10),
      100
    ); // max 100
    const campaignId = searchParams.get("campaign_id") || null;

    // Build SQL query (ONLY public_safe events)
    let query = `
      SELECT 
        event_id, 
        timestamp, 
        campaign_id, 
        client, 
        agent, 
        stage, 
        status, 
        score, 
        public_message
      FROM "RiosEvent"
      WHERE visibility = 'public_safe'
    `;

    const params: (string | number)[] = [];
    if (campaignId) {
      params.push(campaignId);
      query += ` AND campaign_id = $${params.length}`;
    }

    query += ` ORDER BY timestamp DESC LIMIT $${params.length + 1}`;
    params.push(limit);

    // Execute query
    const result = await pool.query(query, params);

    // Return public-safe events
    return NextResponse.json(
      {
        events: result.rows as RiosEvent[],
        total: result.rowCount || 0,
      },
      {
        status: 200,
        headers: {
          "Cache-Control": "public, s-maxage=10, stale-while-revalidate=30",
        },
      }
    );
  } catch (error) {
    console.error("[API /rios-live/events] Error:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch events",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
