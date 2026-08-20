import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const webhookToken = process.env.MAYAR_WEBHOOK_TOKEN;

    // Verifikasi webhook signature (HMAC SHA256)
    if (webhookToken) {
      const signature = req.headers.get("x-mayar-webhook-signature") || 
                        req.headers.get("X-MAYAR-WEBHOOK-SIGNATURE") || "";
      const payload = JSON.stringify(body);
      const expectedSignature = crypto
        .createHmac("sha256", webhookToken)
        .update(payload)
        .digest("hex");
      
      if (signature !== expectedSignature) {
        console.warn("[MAYAR WEBHOOK] Invalid signature — possible spoof attempt");
        // Still process but log warning (production: return 403)
      }
    }

    // Log webhook event
    console.log("[MAYAR WEBHOOK]", {
      event: body.event,
      transactionId: body.data?.id,
      status: body.data?.status,
      amount: body.data?.amount,
      timestamp: new Date().toISOString(),
    });

    // Handle payment.received event
    const event = body.event || "";
    const data = body.data || {};

    if (event === "payment.received" || data?.status === "paid" || data?.status === "settlement") {
      const { id, amount, name, notes } = data;

      console.log("[PAYMENT SUCCESS]", {
        transactionId: id,
        amount,
        productName: name,
        notes,
        time: new Date().toISOString(),
      });

      // TODO (Fase 2): Fulfillment otomatis
      // 1. Update database: mark payment
      // 2. Kirim notif ke admin WA
      // 3. Trigger onboarding flow
      console.log("[FULFILLMENT] Manual fulfillment required for:", name);
    }

    // Always return 200 to prevent Mayar retry
    return NextResponse.json({ received: true }, { status: 200 });
  } catch (error) {
    console.error("[MAYAR WEBHOOK ERROR]", error);
    // Tetap 200 supaya Mayar gak retry terus
    return NextResponse.json(
      { received: false, error: (error as Error).message },
      { status: 200 }
    );
  }
}
