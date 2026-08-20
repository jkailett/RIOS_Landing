import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/app/data";

export const metadata: Metadata = {
  title: "Terms & Conditions — RIOS",
  description: "Syarat dan ketentuan penggunaan layanan RIOS — intelligent business system untuk personal brand.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-midnight text-white">
      {/* Simple Header */}
      <header className="border-b border-white/10 bg-surface">
        <div className="container-page flex items-center justify-between py-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
          <span className="font-display text-xl font-bold tracking-tight">
            <span className="gradient-text-animated">R</span>
            <span className="text-white">IOS</span>
          </span>
        </div>
      </header>

      {/* Content */}
      <article className="container-page max-w-4xl py-16">
        <div className="mb-12">
          <h1 className="mb-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
            Terms & Conditions
          </h1>
          <p className="text-lg text-muted">
            Syarat dan ketentuan penggunaan layanan RIOS KREASINDO
          </p>
        </div>

        <div className="prose prose-invert prose-cyan max-w-none">
          {/* Section 1 */}
          <section id="scope" className="mb-12">
            <h2 className="mb-4 border-b border-white/10 pb-3 font-display text-2xl font-bold">
              1. Scope Layanan
            </h2>
            <p className="leading-relaxed text-muted">
              RIOS KREASINDO (&quot;RIOS&quot;, &quot;kami&quot;) menyediakan layanan intelligent business system untuk personal brand: content engine, distribusi multi-channel, landing page, WhatsApp automation, CRM, dan revenue pipeline. Layanan diberikan sesuai paket yang dipilih klien.
            </p>
          </section>

          {/* Section 2 */}
          <section id="payment" className="mb-12">
            <h2 className="mb-4 border-b border-white/10 pb-3 font-display text-2xl font-bold">
              2. Durasi & Pembayaran
            </h2>
            <div className="space-y-4 text-muted">
              <div>
                <p className="mb-2 font-semibold text-white">2.1. Layanan berlangganan tersedia dalam durasi 1, 3, 6, atau 12 bulan dengan harga dasar per paket:</p>
                <ul className="ml-6 list-disc space-y-1">
                  <li><strong className="text-accent">FOUNDATION</strong> — Build your business infrastructure — <span className="text-white">Rp 500.000/bulan</span></li>
                  <li><strong className="text-accent">GROWTH</strong> — Turn your audience into a predictable lead pipeline — <span className="text-white">Rp 1.200.000/bulan</span></li>
                  <li><strong className="text-accent">REVENUE</strong> — Connect the entire business system from attention to conversion — <span className="text-white">Rp 2.500.000/bulan</span></li>
                </ul>
              </div>
              <p><strong>2.2.</strong> Potongan harga: 3 bulan = 5%, 6 bulan = 15%, 12 bulan = 15%.</p>
              <p><strong>2.3.</strong> Pembayaran dilakukan di muka sesuai durasi yang dipilih. Pembayaran diproses melalui payment gateway resmi (Mayar ID / QRIS / transfer).</p>
              <p><strong>2.4.</strong> Klien existing yang telah menyelesaikan biaya setup hanya membayar biaya langganan (lihat Section 3).</p>
            </div>
          </section>

          {/* Section 3 */}
          <section id="setup" className="mb-12">
            <h2 className="mb-4 border-b border-white/10 pb-3 font-display text-2xl font-bold">
              3. Setup Fee & Phase Implementasi
            </h2>
            <div className="space-y-4 text-muted">
              <p><strong>3.1.</strong> Biaya setup dibayarkan satu kali per phase (discovery, build, launch).</p>
              <p><strong>3.2.</strong> Setelah system berjalan dan disetujui oleh user DAN RIOS sesuai system yang dikehendaki user (mutual approval, tercatat di dokumen approval per phase), tidak ada biaya setup tambahan. Klien hanya membayar biaya langganan (credit AI, platform, maintenance).</p>
            </div>
          </section>

          {/* Section 4 */}
          <section id="implementation" className="mb-12">
            <h2 className="mb-4 border-b border-white/10 pb-3 font-display text-2xl font-bold">
              4. Implementasi & Approval
            </h2>
            <div className="space-y-4 text-muted">
              <p><strong>4.1.</strong> Proses implementasi dilakukan bertahap dengan approval di setiap phase.</p>
              <p><strong>4.2.</strong> Perubahan scope di luar paket dapat dikenakan biaya tambahan yang disepakati terlebih dahulu.</p>
              <p><strong>4.3.</strong> Waktu implementasi estimasi dicantumkan dalam proposal; keterlambatan dari pihak ketiga (platform/provider) tidak menjadi tanggung jawab RIOS.</p>
            </div>
          </section>

          {/* Section 5 */}
          <section id="sla" className="mb-12">
            <h2 className="mb-4 border-b border-white/10 pb-3 font-display text-2xl font-bold">
              5. SLA & Maintenance
            </h2>
            <div className="space-y-4 text-muted">
              <p><strong>5.1.</strong> Waktu respons: FOUNDATION ≤ 24 jam kerja; GROWTH ≤ 8 jam kerja; REVENUE ≤ 1 jam kerja.</p>
              <p><strong>5.2.</strong> Uptime target 99% untuk chatbot & landing, kecuali downtime dari pihak ketiga.</p>
              <p><strong>5.3.</strong> Maintenance mencakup: monitoring, update minor, perbaikan bug.</p>
              <div>
                <p className="mb-2 font-semibold text-white">5.4. Batas volume per bulan (di atas batas dapat dikenakan biaya tambahan):</p>
                <ul className="ml-6 list-disc space-y-1">
                  <li><strong className="text-accent">FOUNDATION:</strong> 1.000 pesan chatbot, 4 konten, 100 leads, 1x revisi</li>
                  <li><strong className="text-accent">GROWTH:</strong> 3.000 pesan chatbot, 16 konten, 300 leads, 2x revisi</li>
                  <li><strong className="text-accent">REVENUE:</strong> 8.000 pesan chatbot, 24 konten, 1.000 leads, 4x revisi</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section id="ip" className="mb-12">
            <h2 className="mb-4 border-b border-white/10 pb-3 font-display text-2xl font-bold">
              6. Hak Kekayaan Intelektual
            </h2>
            <div className="space-y-4 text-muted">
              <p><strong>6.1.</strong> Konten, desain, dan aset yang dibuat khusus untuk klien menjadi milik klien setelah pembayaran lunas.</p>
              <p><strong>6.2.</strong> Framework, sistem, kode platform, dan metodologi RIOS tetap menjadi milik RIOS (lisensi penggunaan untuk klien selama berlangganan).</p>
              <p><strong>6.3.</strong> Klien tidak boleh menyalin, memodifikasi, atau mendistribusikan sistem RIOS tanpa izin tertulis.</p>
            </div>
          </section>

          {/* Section 7 */}
          <section id="privacy" className="mb-12">
            <h2 className="mb-4 border-b border-white/10 pb-3 font-display text-2xl font-bold">
              7. Data & Privasi
            </h2>
            <div className="space-y-4 text-muted">
              <p><strong>7.1.</strong> Data klien dan leads dilindungi sesuai <Link href="/privacy" className="text-accent underline hover:text-accent/80">Privacy Policy RIOS</Link>.</p>
              <p><strong>7.2.</strong> RIOS mematuhi peraturan perlindungan data Indonesia (UU PDP).</p>
              <p><strong>7.3.</strong> Data tidak dijual atau dibagikan ke pihak ketiga tanpa persetujuan.</p>
            </div>
          </section>

          {/* Section 8 */}
          <section id="liability" className="mb-12">
            <h2 className="mb-4 border-b border-white/10 pb-3 font-display text-2xl font-bold">
              8. Batasan Tanggung Jawab
            </h2>
            <div className="space-y-4 text-muted">
              <p><strong>8.1.</strong> RIOS tidak bertanggung jawab atas kerugian tidak langsung (kehilangan profit, opportunity) yang timbul dari penggunaan layanan.</p>
              <p><strong>8.2.</strong> Tanggung jawab RIOS dibatasi sebesar nilai pembayaran layanan dalam 3 bulan terakhir.</p>
              <p><strong>8.3.</strong> Klien bertanggung jawab atas akurasi informasi yang diberikan untuk campaign.</p>
            </div>
          </section>

          {/* Section 9 */}
          <section id="termination" className="mb-12">
            <h2 className="mb-4 border-b border-white/10 pb-3 font-display text-2xl font-bold">
              9. Terminasi
            </h2>
            <div className="space-y-4 text-muted">
              <p><strong>9.1.</strong> Salah satu pihak dapat mengakhiri layanan dengan pemberitahuan tertulis 30 hari sebelumnya.</p>
              <p><strong>9.2.</strong> Pembatalan di tengah periode tidak memberikan refund proporsional, kecuali kesepakatan khusus.</p>
              <p><strong>9.3.</strong> RIOS dapat mengakhiri layanan jika klien melanggar ketentuan ini atau menggunakan layanan untuk aktivitas ilegal.</p>
            </div>
          </section>

          {/* Section 10 */}
          <section id="portability" className="mb-12">
            <h2 className="mb-4 border-b border-white/10 pb-3 font-display text-2xl font-bold">
              10. Portability
            </h2>
            <div className="space-y-4 text-muted">
              <p><strong>10.1.</strong> Setelah terminasi, klien dapat meminta ekspor data konten miliknya (konten & aset yang dibuat khusus untuk klien) dalam waktu 14 hari.</p>
              <p><strong>10.2.</strong> Akses ke platform/system RIOS dicabut setelah terminasi.</p>
            </div>
          </section>

          {/* Section 11 */}
          <section id="general" className="mb-12">
            <h2 className="mb-4 border-b border-white/10 pb-3 font-display text-2xl font-bold">
              11. Ketentuan Umum
            </h2>
            <div className="space-y-4 text-muted">
              <p><strong>11.1.</strong> Ketentuan ini diatur oleh hukum Indonesia.</p>
              <p><strong>11.2.</strong> Penyelesaian sengketa diupayakan secara musyawarah terlebih dahulu; jika tidak tercapai, diselesaikan di pengadilan yang berwenang.</p>
              <p><strong>11.3.</strong> RIOS dapat memperbarui ketentuan ini; pembaruan akan diinformasikan kepada klien.</p>
              <p>
                <strong>11.4.</strong> Hubungi kami:{" "}
                <a href={SITE.waLink} className="text-accent underline hover:text-accent/80" target="_blank" rel="noopener noreferrer">
                  WhatsApp {SITE.waDisplay}
                </a>
                {" "}untuk pertanyaan seputar ToC.
              </p>
            </div>
          </section>

          {/* Footer note */}
          <div className="mt-16 rounded-lg border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-muted">
              <strong className="text-white">Terakhir diperbarui:</strong> {new Date().toLocaleDateString("id-ID", { year: "numeric", month: "long", day: "numeric" })}
            </p>
            <p className="mt-2 text-sm text-muted">
              Dengan menggunakan layanan RIOS, Anda menyetujui syarat dan ketentuan ini. Silakan hubungi kami jika ada pertanyaan.
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}
