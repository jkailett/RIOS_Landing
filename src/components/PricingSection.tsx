"use client";

import { useState } from "react";
import { PACKAGES, calculatePrice, SITE } from "@/app/data";
import { Reveal } from "./Reveal";
import { Check, ArrowRight, Loader2, CheckCircle2, XCircle } from "lucide-react";

export function PricingSection() {
  const [selectedDurations, setSelectedDurations] = useState<Record<string, number>>({
    foundation: 1,
    growth: 3,
    revenue: 6,
  });

  // MOU Verification State
  const [mouNumber, setMouNumber] = useState("");
  const [mouVerifying, setMouVerifying] = useState(false);
  const [mouVerified, setMouVerified] = useState(false);
  const [mouError, setMouError] = useState<string | null>(null);
  const [verifiedClientName, setVerifiedClientName] = useState<string | null>(null);
  const [verifiedMouNumber, setVerifiedMouNumber] = useState<string | null>(null);

  const [loadingCheckout, setLoadingCheckout] = useState<string | null>(null);

  const handleDurationChange = (tierId: string, months: number) => {
    setSelectedDurations((prev) => ({ ...prev, [tierId]: months }));
  };

  const handleMouVerify = async () => {
    if (!mouNumber.trim()) {
      setMouError("Nomor MOU tidak boleh kosong");
      return;
    }

    setMouVerifying(true);
    setMouError(null);

    try {
      const response = await fetch("/api/mou/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mouNumber: mouNumber.trim() }),
      });

      const data = await response.json();

      if (data.valid) {
        setMouVerified(true);
        setVerifiedClientName(data.clientName);
        setVerifiedMouNumber(data.mouNumber);
        setMouError(null);
      } else {
        setMouVerified(false);
        setMouError(data.message || "Nomor MOU tidak valid");
      }
    } catch (error) {
      console.error("MOU verification error:", error);
      setMouError("Terjadi kesalahan saat verifikasi. Silakan coba lagi.");
    } finally {
      setMouVerifying(false);
    }
  };

  const handleResetMou = () => {
    setMouNumber("");
    setMouVerified(false);
    setMouError(null);
    setVerifiedClientName(null);
    setVerifiedMouNumber(null);
  };

  const handleCheckout = async (packageId: string, months: number) => {
    setLoadingCheckout(packageId);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          packageId: packageId.toUpperCase(),
          months,
          existingClient: mouVerified,
          mouNumber: mouVerified ? verifiedMouNumber : undefined,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        alert(`Gagal membuat payment link: ${error.error || "Unknown error"}`);
        setLoadingCheckout(null);
        return;
      }

      const data = await response.json();
      // Redirect ke payment link Mayar
      window.location.href = data.url;
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Terjadi kesalahan. Silakan coba lagi.");
      setLoadingCheckout(null);
    }
  };

  const formatRupiah = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount * 1000);
  };

  return (
    <section id="packages" className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-cyan-600 uppercase tracking-widest mb-4">
              {PACKAGES.label}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              {PACKAGES.headline}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {PACKAGES.intro}
            </p>
          </div>
        </Reveal>

        {/* MOU Verification Card */}
        <Reveal delay={0.2}>
          <div className="max-w-2xl mx-auto mb-12">
            <div className="bg-white rounded-2xl border-2 border-slate-200 shadow-sm p-8">
              <div className="text-center mb-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Perpanjangan / Klien Existing
                </h3>
                <p className="text-sm text-slate-600">
                  Masukkan nomor MOU Anda untuk mendapatkan harga perpanjangan (tanpa biaya setup)
                </p>
              </div>

              {!mouVerified ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Nomor MOU
                    </label>
                    <input
                      type="text"
                      value={mouNumber}
                      onChange={(e) => {
                        setMouNumber(e.target.value);
                        setMouError(null);
                      }}
                      placeholder="RIOS-SJ-2026-001"
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-cyan-500 focus:outline-none text-slate-900 font-mono text-sm uppercase"
                      disabled={mouVerifying}
                    />
                    <p className="text-xs text-slate-500 mt-2">
                      Format: RIOS-{"{KODE}"}-{"{TAHUN}"}-{"{NO}"} (contoh: RIOS-SJ-2026-001)
                    </p>
                  </div>

                  {mouError && (
                    <div className="flex items-start gap-3 p-4 bg-red-50 border-2 border-red-200 rounded-xl">
                      <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-sm text-red-800 font-medium">{mouError}</p>
                        <a
                          href="https://wa.me/62818151227"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-red-600 underline hover:text-red-700 mt-1 inline-block"
                        >
                          Hubungi Admin via WhatsApp →
                        </a>
                      </div>
                    </div>
                  )}

                  <button
                    onClick={handleMouVerify}
                    disabled={mouVerifying || !mouNumber.trim()}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-semibold bg-gradient-to-r from-cyan-500 to-violet-500 text-white hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {mouVerifying ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Memverifikasi...
                      </>
                    ) : (
                      <>
                        Verifikasi MOU
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-green-50 border-2 border-green-200 rounded-xl">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm text-green-800 font-semibold">
                        ✅ Terverifikasi: {verifiedClientName}
                      </p>
                      <p className="text-xs text-green-700 mt-1 font-mono">
                        {verifiedMouNumber}
                      </p>
                      <p className="text-sm text-green-700 mt-2">
                        Harga perpanjangan sudah aktif (tanpa biaya setup). Pilih paket di bawah!
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={handleResetMou}
                    className="text-sm text-slate-600 hover:text-slate-900 underline"
                  >
                    Gunakan nomor MOU lain
                  </button>
                </div>
              )}
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {PACKAGES.tiers.map((tier, i) => {
            const selectedMonths = selectedDurations[tier.id];
            const duration = tier.durations.find((d) => d.months === selectedMonths)!;
            const totalPrice = calculatePrice(tier.baseMonthly, duration.months, duration.discount);

            return (
              <Reveal key={tier.id} delay={0.1 * i}>
                <div
                  className={`
                    relative rounded-3xl p-8 border-2 transition-all
                    ${
                      tier.highlight
                        ? "bg-gradient-to-br from-slate-900 to-slate-800 text-white border-cyan-500 scale-105 shadow-2xl shadow-cyan-500/20"
                        : "bg-white text-slate-900 border-slate-200 hover:border-cyan-300 hover:shadow-lg"
                    }
                  `}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-cyan-500 to-violet-500 text-white text-sm font-bold rounded-full uppercase tracking-wide">
                      MOST POPULAR
                    </div>
                  )}

                  <div className="mb-6">
                    <h3
                      className={`text-3xl font-bold mb-2 ${tier.highlight ? "text-white" : "text-slate-900"}`}
                    >
                      {tier.name}
                    </h3>
                    <p className={`text-lg font-semibold mb-3 ${tier.highlight ? "text-cyan-400" : "text-cyan-600"}`}>
                      {tier.tagline}
                    </p>
                    <p
                      className={`text-base leading-relaxed ${tier.highlight ? "text-slate-300" : "text-slate-600"}`}
                    >
                      {tier.outcome}
                    </p>
                  </div>

                  {/* Duration Tabs */}
                  <div className="mb-6">
                    <div className="flex gap-2 flex-wrap">
                      {tier.durations.map((dur) => (
                        <button
                          key={dur.months}
                          onClick={() => handleDurationChange(tier.id, dur.months)}
                          className={`
                            px-4 py-2 rounded-full text-sm font-semibold transition-all
                            ${
                              selectedMonths === dur.months
                                ? tier.highlight
                                  ? "bg-cyan-500 text-white"
                                  : "bg-gradient-to-r from-cyan-500 to-violet-500 text-white"
                                : tier.highlight
                                  ? "bg-slate-700 text-slate-300 hover:bg-slate-600"
                                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                            }
                          `}
                        >
                          {dur.label}
                          {dur.discount > 0 && (
                            <span className="ml-1 text-xs">-{dur.discount}%</span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Price Display */}
                  <div className="mb-6">
                    <div className={`text-4xl font-bold ${tier.highlight ? "text-white" : "text-slate-900"}`}>
                      {formatRupiah(totalPrice)}
                    </div>
                    <div className={`text-sm mt-1 ${tier.highlight ? "text-slate-400" : "text-slate-500"}`}>
                      untuk {duration.label.toLowerCase()}
                    </div>
                    <div className={`text-sm mt-2 ${tier.highlight ? "text-slate-400" : "text-slate-500"}`}>
                      {mouVerified ? (
                        <span className={tier.highlight ? "text-cyan-400 font-semibold" : "text-cyan-600 font-semibold"}>
                          ✓ Sudah setup — tidak ada biaya setup lagi
                        </span>
                      ) : (
                        <>
                          Setup: {tier.setup} <span className="text-xs">({tier.setupNote})</span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Support Items */}
                  <div className="mb-8 space-y-3">
                    {tier.support.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check
                          className={`w-5 h-5 flex-shrink-0 mt-0.5 ${tier.highlight ? "text-cyan-400" : "text-cyan-600"}`}
                        />
                        <span className={`text-sm ${tier.highlight ? "text-slate-300" : "text-slate-600"}`}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => handleCheckout(tier.id, selectedMonths)}
                    disabled={loadingCheckout === tier.id}
                    className={`
                      w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-semibold transition-all
                      ${
                        tier.highlight
                          ? "bg-white text-slate-900 hover:scale-105"
                          : "bg-gradient-to-r from-cyan-500 to-violet-500 text-white hover:scale-105"
                      }
                      ${loadingCheckout === tier.id ? "opacity-50 cursor-wait" : ""}
                    `}
                  >
                    {loadingCheckout === tier.id
                      ? "Membuat link pembayaran..."
                      : mouVerified
                        ? "Perpanjang Langganan"
                        : tier.cta}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.4}>
          <div className="mt-12 text-center space-y-3">
            <p className="text-sm text-slate-500">{PACKAGES.disclaimer}</p>
            <p className="text-sm text-slate-500">{PACKAGES.commercial}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
