import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Verifikasi webhook signature (Mayar biasanya kirim di header atau body)
    // Format signature tergantung dari dokumentasi Mayar
    const signature = req.headers.get("X-MAYAR-WEBHOOK-SIGNATURE");
    const webhookToken = process.env.MAYAR_WEBHOOK_TOKEN;

    // BASIC verification (kalau Mayar pakai token di header)
    // Kalau Mayar pakai HMAC signature, ganti dengan crypto.createHmac
    if (webhookToken && signature !== webhookToken) {
      console.warn("Invalid webhook signature:", signature);
      // Fallback: GET verification via transaction API (opsional)
      // Untuk production, bisa tambahkan GET https://api.mayar.id/hl/v2/transactions/{id}
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
    if (body.event === "payment.received" || body.data?.status === "paid") {
      const { id, amount, name, notes } = body.data || {};

      console.log("[PAYMENT SUCCESS]", {
        transactionId: id,
        amount,
        productName: name,
        notes,
      });

      // TODO: Fulfillment logic
      // 1. Simpan ke database (payment record)
      // 2. Kirim notif ke admin via WA (untuk manual fulfillment)
      // 3. Trigger akses otomatis (future: add customer to CRM, send onboarding WA)
      
      // Untuk sekarang: cukup log (fulfillment manual via WA)
      console.log("[FULFILLMENT] Manual fulfillment required for:", name);
    }

    // Response cepat ke Mayar
    return NextResponse.json({ received: true }, { status: 200 });
  } catch (error) {
    console.error("[MAYAR WEBHOOK ERROR]", error);
    // Tetap return 200 supaya Mayar tidak retry terus-menerus
    return NextResponse.json({ received: false, error: (error as Error).message }, { status: 200 });
  }
}
