import { NextRequest, NextResponse } from "next/server";
import { SETUP_FEES } from "@/app/data";
import { query } from "@/lib/db";

// Mayar API endpoint
const MAYAR_API_URL = "https://api.mayar.id/hl/v2/products/payment-link/create";

// Package base rates (in thousand IDR)
const BASE_RATES = {
  FOUNDATION: 500,
  GROWTH: 1200,
  REVENUE: 2500,
};

type PackageId = "FOUNDATION" | "GROWTH" | "REVENUE";

function calculatePrice(baseRate: number, months: number, discount: number): number {
  const monthlyRate = baseRate * months;
  const discountAmount = (monthlyRate * discount) / 100;
  return monthlyRate - discountAmount;
}

function getDiscount(months: number): number {
  if (months === 3) return 5;
  if (months === 6 || months === 12) return 15;
  return 0;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { packageId, months, existingClient, mouNumber } = body as {
      packageId: PackageId;
      months: 1 | 3 | 6 | 12;
      existingClient: boolean;
      mouNumber?: string;
    };

    // Validasi
    if (!packageId || !months) {
      return NextResponse.json(
        { error: "packageId dan months wajib diisi" },
        { status: 400 }
      );
    }

    if (!["FOUNDATION", "GROWTH", "REVENUE"].includes(packageId)) {
      return NextResponse.json({ error: "packageId tidak valid" }, { status: 400 });
    }

    if (![1, 3, 6, 12].includes(months)) {
      return NextResponse.json({ error: "months tidak valid" }, { status: 400 });
    }

    // Normalisasi MOU number (optional)
    const normalizedMouNumber = mouNumber ? mouNumber.trim().toUpperCase() : undefined;

    // KEAMANAN GANDA: Jika existingClient=true, mouNumber WAJIB diverifikasi ulang
    let verifiedClient = null;
    if (existingClient) {
      if (!mouNumber) {
        return NextResponse.json(
          { error: "Nomor MOU wajib diisi untuk perpanjangan. Silakan verifikasi terlebih dahulu." },
          { status: 400 }
        );
      }
      try {
        const rows = await query(
          `SELECT mou_number, client_name, package, status FROM "RiosMou" WHERE mou_number = $1 AND status = 'active'`,
          [mouNumber.trim().toUpperCase()]
        );
        const mou = rows[0];

        if (!mou || mou.status !== "active") {
          return NextResponse.json(
            { error: "Nomor MOU tidak valid atau sudah tidak aktif. Silakan verifikasi ulang." },
            { status: 403 }
          );
        }
        verifiedClient = mou;
      } catch (dbError) {
        console.error("MOU verification error during checkout:", dbError);
        return NextResponse.json(
          { error: "Gagal memverifikasi MOU. Silakan coba lagi." },
          { status: 500 }
        );
      }
    }

    // Hitung harga
    const discount = getDiscount(months);
    const subscriptionTotal = calculatePrice(BASE_RATES[packageId], months, discount);
    const setupFee = existingClient ? 0 : (SETUP_FEES[packageId] || 0);
    const total = subscriptionTotal + setupFee;

    if (total <= 0) {
      return NextResponse.json({ error: "Total tidak valid" }, { status: 400 });
    }

    // Buat payment link Mayar
    const amountRupiah = total * 1000; // base rates in thousand IDR -> Rupiah
    const packageName = `RIOS-${packageId}`;
    const linkName = existingClient
      ? `${packageName}-${months}-Bulan-(Perpanjangan)`
      : `${packageName}-${months}-Bulan-+-Setup`;

    const redirectUrl = `${process.env.NEXT_PUBLIC_APP_URL || "https://rioskreasindo.site"}/?payment=success`;

    const mayarRes = await fetch(MAYAR_API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.MAYAR_API_KEY || ""}`,
          },
      body: JSON.stringify({
        name: linkName,
        amount: amountRupiah,
        redirectUrl,
        notes: linkName.slice(0, 24),
      }),
    });

    const mayarData = await mayarRes.json().catch(() => ({}));

    if (!mayarRes.ok) {
      console.error("Mayar API error:", mayarRes.status, JSON.stringify(mayarData).slice(0, 300));
      return NextResponse.json(
        { error: `Mayar API error: ${mayarRes.status}` },
        { status: 500 }
      );
    }

    const link = mayarData?.data?.link;
    const paymentId = mayarData?.data?.id;

    if (!link) {
      return NextResponse.json({ error: "Mayar tidak mengembalikan payment link" }, { status: 500 });
    }

    return NextResponse.json({
      url: link,
      paymentId,
      amount: total,
      breakdown: {
        subscription: subscriptionTotal,
        setup: setupFee,
        total,
      },
    });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
