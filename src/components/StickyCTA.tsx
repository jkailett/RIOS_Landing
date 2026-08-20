"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { SITE } from "@/app/data";

export function StickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-white/5 bg-base/90 p-4 backdrop-blur-xl md:hidden"
      style={{ animation: "slide-up 0.35s cubic-bezier(0.22,1,0.36,1)" }}
    >
      <a
        href={SITE.waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary w-full"
      >
        <MessageCircle size={18} />
        Chat RIOS via WhatsApp
      </a>
    </div>
  );
}
