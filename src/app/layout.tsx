import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RIOS — AI-Powered Business System untuk Personal Brand",
  description:
    "Konten konsisten, video avatar AI, chatbot WA otomatis, CRM Notion — semua dalam satu pipeline. RIOS Business System untuk founder, coach, mentor, kreator.",
  keywords: [
    "RIOS",
    "personal branding",
    "chatbot whatsapp",
    "video avatar AI",
    "CRM Notion",
    "content engine",
    "landing page",
    "lead generation",
    "bisnis otomatis",
    "AI business system",
  ],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" },
    ],
  },
  openGraph: {
    title: "RIOS — AI-Powered Business System untuk Personal Brand",
    description:
      "Konten konsisten, video avatar AI, chatbot WA otomatis, CRM Notion — semua dalam satu pipeline.",
    type: "website",
    url: "https://rioskreasindo.site",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B1020",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={inter.variable}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
