"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle, X } from "lucide-react";

export function PaymentSuccessToast() {
  const searchParams = useSearchParams();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (searchParams.get("payment") === "success") {
      setShow(true);
      // Auto-hide setelah 10 detik
      const timer = setTimeout(() => setShow(false), 10000);
      return () => clearTimeout(timer);
    }
  }, [searchParams]);

  if (!show) return null;

  return (
    <div className="fixed top-24 right-6 z-50 max-w-md animate-slide-in-right">
      <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-2xl shadow-2xl p-6 flex items-start gap-4">
        <CheckCircle className="w-8 h-8 flex-shrink-0 mt-1" />
        <div className="flex-1">
          <h3 className="text-lg font-bold mb-1">Pembayaran Berhasil! 🎉</h3>
          <p className="text-sm text-white/90">
            Terima kasih sudah berlangganan RIOS. Tim kami akan menghubungi Anda via WhatsApp segera untuk proses setup.
          </p>
        </div>
        <button
          onClick={() => setShow(false)}
          className="flex-shrink-0 hover:bg-white/10 rounded-full p-1 transition"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
