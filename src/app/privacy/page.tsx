import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/app/data";

export const metadata: Metadata = {
  title: "Privacy Policy — RIOS",
  description: "Kebijakan privasi RIOS — bagaimana kami mengumpulkan, menggunakan, dan melindungi data pribadi Anda.",
};

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-lg text-muted">
            Kebijakan privasi RIOS KREASINDO
          </p>
        </div>

        <div className="prose prose-invert prose-cyan max-w-none">
          {/* Section 1 */}
          <section id="intro" className="mb-12">
            <h2 className="mb-4 border-b border-white/10 pb-3 font-display text-2xl font-bold">
              1. Pendahuluan
            </h2>
            <p className="leading-relaxed text-muted">
              RIOS KREASINDO (&quot;RIOS&quot;, &quot;kami&quot;) menghormati privasi Anda. Kebijakan ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi data pribadi Anda saat menggunakan layanan kami.
            </p>
          </section>

          {/* Section 2 */}
          <section id="data-collected" className="mb-12">
            <h2 className="mb-4 border-b border-white/10 pb-3 font-display text-2xl font-bold">
              2. Data yang Kami Kumpulkan
            </h2>
            <div className="space-y-4 text-muted">
              <ul className="ml-6 list-disc space-y-2">
                <li><strong className="text-white">Informasi kontak:</strong> nama, nomor WhatsApp, email</li>
                <li><strong className="text-white">Data interaksi:</strong> percakapan chatbot, form leads, riwayat pembelian</li>
                <li><strong className="text-white">Data teknis:</strong> analytics anonim (Vercel Analytics — pageviews, lokasi umum, referrer)</li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section id="usage" className="mb-12">
            <h2 className="mb-4 border-b border-white/10 pb-3 font-display text-2xl font-bold">
              3. Tujuan Penggunaan
            </h2>
            <div className="space-y-4 text-muted">
              <ul className="ml-6 list-disc space-y-2">
                <li>Memberikan layanan langganan dan fulfillment (kirim akses, materi, follow-up)</li>
                <li>Komunikasi layanan & support</li>
                <li>Meningkatkan kualitas sistem (data agregat, bukan data pribadi)</li>
                <li>Keperluan pembayaran & verifikasi transaksi</li>
              </ul>
            </div>
          </section>

          {/* Section 4 */}
          <section id="storage" className="mb-12">
            <h2 className="mb-4 border-b border-white/10 pb-3 font-display text-2xl font-bold">
              4. Penyimpanan & Keamanan
            </h2>
            <div className="space-y-4 text-muted">
              <ul className="ml-6 list-disc space-y-2">
                <li>Data disimpan di infrastruktur aman (Postgres/Notion internal RIOS)</li>
                <li>Akses terbatas hanya untuk tim operasional RIOS</li>
                <li>Dilindungi dengan enkripsi dan autentikasi</li>
              </ul>
            </div>
          </section>

          {/* Section 5 */}
          <section id="sharing" className="mb-12">
            <h2 className="mb-4 border-b border-white/10 pb-3 font-display text-2xl font-bold">
              5. Berbagi Data
            </h2>
            <div className="space-y-4 text-muted">
              <ul className="ml-6 list-disc space-y-2">
                <li><strong className="text-white">Kami TIDAK menjual data Anda ke pihak ketiga</strong></li>
                <li>Data hanya dibagikan ke penyedia layanan yang diperlukan (payment gateway, platform WA) untuk menjalankan layanan</li>
                <li>Data dapat diungkapkan jika diwajibkan hukum</li>
              </ul>
            </div>
          </section>

          {/* Section 6 */}
          <section id="rights" className="mb-12">
            <h2 className="mb-4 border-b border-white/10 pb-3 font-display text-2xl font-bold">
              6. Hak Anda
            </h2>
            <div className="space-y-4 text-muted">
              <p>Sebagai pengguna layanan RIOS, Anda memiliki hak untuk:</p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Mengakses data Anda</li>
                <li>Meminta koreksi data yang tidak akurat</li>
                <li>Menghapus data Anda (dalam batas kewajiban hukum/pembukuan)</li>
                <li>Menarik persetujuan komunikasi marketing</li>
              </ul>
              <p className="mt-4">
                Untuk menggunakan hak Anda, silakan hubungi kami melalui{" "}
                <a href={SITE.waLink} className="text-accent underline hover:text-accent/80" target="_blank" rel="noopener noreferrer">
                  WhatsApp {SITE.waDisplay}
                </a>.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section id="cookies" className="mb-12">
            <h2 className="mb-4 border-b border-white/10 pb-3 font-display text-2xl font-bold">
              7. Cookies & Analytics
            </h2>
            <div className="space-y-4 text-muted">
              <ul className="ml-6 list-disc space-y-2">
                <li>Kami menggunakan <strong className="text-white">Vercel Analytics</strong> (data anonim) untuk memahami traffic dan performa website</li>
                <li>Tidak menggunakan cookies iklan pihak ketiga atau tracking agresif</li>
                <li>Analytics digunakan semata-mata untuk meningkatkan pengalaman pengguna</li>
              </ul>
            </div>
          </section>

          {/* Section 8 */}
          <section id="compliance" className="mb-12">
            <h2 className="mb-4 border-b border-white/10 pb-3 font-display text-2xl font-bold">
              8. Kepatuhan Hukum
            </h2>
            <div className="space-y-4 text-muted">
              <p>
                RIOS mematuhi peraturan perlindungan data Indonesia, termasuk{" "}
                <strong className="text-white">UU No. 27 Tahun 2022 tentang Perlindungan Data Pribadi (UU PDP)</strong>.
              </p>
              <p>
                Kami berkomitmen untuk melindungi data pribadi Anda sesuai dengan standar hukum yang berlaku.
              </p>
            </div>
          </section>

          {/* Section 9 */}
          <section id="updates" className="mb-12">
            <h2 className="mb-4 border-b border-white/10 pb-3 font-display text-2xl font-bold">
              9. Perubahan Kebijakan
            </h2>
            <div className="space-y-4 text-muted">
              <p>
                Kebijakan privasi ini dapat diperbarui sewaktu-waktu untuk mencerminkan perubahan praktik kami atau persyaratan hukum. Versi terbaru selalu tersedia di halaman ini.
              </p>
              <p>
                Perubahan material akan dikomunikasikan kepada klien aktif melalui email atau WhatsApp.
              </p>
            </div>
          </section>

          {/* Section 10 */}
          <section id="contact" className="mb-12">
            <h2 className="mb-4 border-b border-white/10 pb-3 font-display text-2xl font-bold">
              10. Kontak
            </h2>
            <div className="space-y-4 text-muted">
              <p>
                Untuk pertanyaan privasi, permintaan akses data, atau koreksi data pribadi Anda, hubungi kami:
              </p>
              <div className="mt-4 rounded-lg border border-accent/20 bg-accent/5 p-4">
                <p className="font-semibold text-white">RIOS KREASINDO</p>
                <p className="mt-2">
                  <a href={SITE.waLink} className="text-accent underline hover:text-accent/80" target="_blank" rel="noopener noreferrer">
                    WhatsApp: {SITE.waDisplay}
                  </a>
                </p>
                <p className="mt-1">
                  Website:{" "}
                  <a href={SITE.url} className="text-accent underline hover:text-accent/80">
                    {SITE.url}
                  </a>
                </p>
              </div>
              <p className="mt-4 text-sm">
                Tim RIOS siap membantu Anda dengan respons cepat sesuai SLA paket yang Anda gunakan.
              </p>
            </div>
          </section>

          {/* Footer note */}
          <div className="mt-16 rounded-lg border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-muted">
              <strong className="text-white">Terakhir diperbarui:</strong> {new Date().toLocaleDateString("id-ID", { year: "numeric", month: "long", day: "numeric" })}
            </p>
            <p className="mt-2 text-sm text-muted">
              Dengan menggunakan layanan RIOS, Anda menyetujui kebijakan privasi ini. Silakan baca{" "}
              <Link href="/toc" className="text-accent underline hover:text-accent/80">
                Terms & Conditions
              </Link>
              {" "}untuk informasi lengkap tentang layanan kami.
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}
