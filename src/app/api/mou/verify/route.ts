import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";

/**
 * API route untuk verifikasi nomor MOU RIOS
 * POST /api/mou/verify
 * Body: { mouNumber: string }
 * 
 * Response sukses:
 * { valid: true, clientName: string, package: string, mouNumber: string }
 * 
 * Response gagal:
 * { valid: false, message: string }
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    let { mouNumber } = body as { mouNumber: string };

    // Validasi input
    if (!mouNumber || typeof mouNumber !== "string") {
      return NextResponse.json(
        { valid: false, message: "Nomor MOU wajib diisi." },
        { status: 400 }
      );
    }

    // Normalize: trim, uppercase, hapus spasi ekstra
    mouNumber = mouNumber.trim().toUpperCase().replace(/\s+/g, "");

    // Regex format MOU: RIOS-{KODE}-{TAHUN}-{NO}
    // Contoh: RIOS-SJ-2026-001, RIOS-CIM-2026-001
    const mouRegex = /^RIOS-[A-Z]{2,10}-\d{4}-\d{3,5}$/;
    if (!mouRegex.test(mouNumber)) {
      return NextResponse.json(
        {
          valid: false,
          message: "Format nomor MOU tidak valid. Format yang benar: RIOS-{KODE}-{TAHUN}-{NO} (contoh: RIOS-SJ-2026-001)",
        },
        { status: 400 }
      );
    }

    // Query database (SQL langsung)
    const rows = await query(
      'SELECT mou_number, client_name, package, status FROM "RiosMou" WHERE mou_number = $1',
      [mouNumber]
    );
    const mou = rows[0];

    // Tidak ditemukan atau tidak aktif
    if (!mou || mou.status !== "active") {
      return NextResponse.json(
        {
          valid: false,
          message: "Nomor MOU tidak ditemukan atau sudah tidak aktif. Silakan hubungi admin untuk verifikasi.",
        },
        { status: 404 }
      );
    }

    // Cek expiry (kalau ada)
    if (mou.expires_at && new Date(mou.expires_at) < new Date()) {
      return NextResponse.json(
        {
          valid: false,
          message: "Nomor MOU sudah expired. Silakan hubungi admin untuk perpanjangan.",
        },
        { status: 403 }
      );
    }

    // Valid ✅
    return NextResponse.json({
      valid: true,
      clientName: mou.client_name,
      package: mou.package,
      mouNumber: mou.mou_number,
    });

  } catch (error) {
    console.error("Error verifying MOU:", error);
    
    // Prisma error handling
    if (error && typeof error === "object" && "code" in error) {
      const prismaError = error as { code: string; message: string };
      
      // Connection errors
      if (prismaError.code === "P1001" || prismaError.code === "P1002") {
        return NextResponse.json(
          { valid: false, message: "Database tidak dapat diakses. Silakan coba lagi nanti." },
          { status: 503 }
        );
      }
    }

    return NextResponse.json(
      { valid: false, message: "Terjadi kesalahan server. Silakan coba lagi." },
      { status: 500 }
    );
  }
}
