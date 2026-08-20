// RIOS Business System — Central Content Config
// POSITIONING: Intelligent Business System (TRANSFORMATION, bukan automation)
// Semua konten landing page dikontrol dari sini.

export const SITE = {
  name: "RIOS",
  tagline: "Your Personal Brand. Our Intelligent System.",
  subtagline: "FROM ATTENTION TO REVENUE.",
  motto: "BUILD • AUTOMATE • SCALE",
  url: "https://rioskreasindo.site",
  waNumber: "62818151227",
  waDisplay: "0818-151-227",
  waLink: "https://wa.me/62818151227?text=Halo%20RIOS%2C%20saya%20tertarik%20tahu%20lebih%20lanjut%20tentang%20sistem%20RIOS.",
};

export const NAV_LINKS = [
  { href: "#what-is-rios", label: "What is RIOS" },
  { href: "#problem", label: "The Problem" },
  { href: "#system", label: "RIOS System" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#intelligence", label: "Intelligence Layer" },
  { href: "#case-study", label: "Case Study" },
  { href: "#packages", label: "Packages" },
  { href: "#faq", label: "FAQ" },
];

// ===== HERO — Business Engine (bukan jual fitur) =====
export const HERO = {
  label: "INTELLIGENT BUSINESS SYSTEM",
  headline: "Your Personal Brand.\nOur Intelligent System.",
  subhead: "FROM ATTENTION TO REVENUE.",
  motto: "BUILD • AUTOMATE • SCALE",
  ctaPrimary: "See How RIOS Works",
  ctaPrimaryHref: "#system",
  ctaSecondary: "Talk to RIOS",
  ctaSecondaryHref: "#",
  trust: [
    "Content → Traffic → Leads → Revenue",
    "24/7 Automation",
    "WhatsApp Official API",
  ],
};

// ===== PIPELINE VISUAL — Business Flow =====
// 8 tahap resmi RIOS (dari Chief 2026-08-19)
export const PIPELINE_NODES = [
  {
    id: "attention",
    label: "ATTENTION",
    icon: "Eye",
    title: "Attention",
    description: "Konten yang menarik perhatian audience di berbagai platform.",
  },
  {
    id: "content",
    label: "CONTENT",
    icon: "Play",
    title: "Content",
    description: "Carousel + video avatar AI yang dipost konsisten tiap bulan.",
  },
  {
    id: "traffic",
    label: "TRAFFIC",
    icon: "Share2",
    title: "Traffic",
    description: "Auto-post ke platform yang tepat di waktu yang tepat.",
  },
  {
    id: "lead",
    label: "LEAD",
    icon: "Users",
    title: "Lead",
    description: "Landing page yang dirancang untuk mengubah visitor jadi leads.",
  },
  {
    id: "qualify",
    label: "QUALIFY",
    icon: "CheckSquare",
    title: "Qualify",
    description: "Chatbot WA otomatis greeting, FAQ, form, dan qualify leads 24/7.",
  },
  {
    id: "nurture",
    label: "NURTURE",
    icon: "MessageCircle",
    title: "Nurture",
    description: "System nurture leads dengan materi edukatif, reminder, dan follow-up.",
  },
  {
    id: "conversion",
    label: "CONVERSION",
    icon: "TrendingUp",
    title: "Conversion",
    description: "QRIS payment + verifikasi otomatis + kirim materi pasca-bayar.",
  },
  {
    id: "revenue",
    label: "REVENUE",
    icon: "DollarSign",
    title: "Revenue",
    description: "Data masuk Notion otomatis. Report bulanan. Nggak ada yang terlewat.",
  },
];

// ===== WHAT IS RIOS — 20-30 detik paham =====
export const WHAT_IS_RIOS = {
  label: "WHAT IS RIOS",
  headline: "One System. One Pipeline. From Attention to Revenue.",
  description:
    "RIOS adalah sistem yang mengubah personal brand menjadi mesin akuisisi, nurturing, dan revenue. Kamu fokus jadi ahli di bidangmu — sistem yang bekerja.",
  stats: [
    { value: "24/7", label: "Automated Lead Handling" },
    { value: "1", label: "Unified Pipeline" },
    { value: "100%", label: "Custom to Your Brand" },
  ],
};

// ===== VISI & MISI RESMI (dari Chief 2026-08-19) =====
export const VISION_MISSION = {
  label: "VISI & MISI",
  headline: "Kami Percaya pada Pertumbuhan Berkelanjutan",
  vision:
    "Menjadi sistem bisnis cerdas terdepan yang memberdayakan individu dan bisnis untuk tumbuh secara berkelanjutan melalui teknologi, kreativitas, dan otomasi.",
  missions: [
    "Membangun infrastruktur bisnis digital yang terintegrasi; dari konten hingga revenue.",
    "Mengembangkan AI & otomasi yang mempermudah proses akuisisi, nurturing, dan konversi pelanggan.",
    "Memberikan solusi yang scalable, efisien, dan measurable untuk pertumbuhan bisnis personal brand dan perusahaan.",
    "Menyatukan ekosistem pembelajaran dan kolaborasi; untuk mengakselerasi kesuksesan klien dan mitra.",
    "Terus berinovasi dan mengintegrasikan dalam setiap layanan dan teknologi yang kami kembangkan.",
  ],
};

// ===== THE PROBLEM — framing tajam =====
export const PROBLEM = {
  label: "THE PROBLEM",
  headline: "Your audience is growing.\nYour business system isn't.",
  intro:
    "Kamu sudah punya followers. Engagement kamu bagus. Tapi ketika kamu lihat conversion rate dan revenue — masih manual. Masih berantakan. Masih bocor kemana-mana.",
  issues: [
    {
      icon: "Eye",
      label: "Attention tanpa capture = audience.",
      text: "Followers tumbuh, tapi berapa yang jadi leads? Attention nggak ditangkap jadi opportunities.",
    },
    {
      icon: "UserX",
      label: "Lead tanpa follow-up = opportunity lost.",
      text: "DM masuk, form terisi, tapi kamu terlambat respon. Mereka lanjut ke kompetitor.",
    },
    {
      icon: "GitBranch",
      label: "Follow-up tanpa CRM = chaos.",
      text: "Siapa yang sudah difollow-up? Siapa yang belum? Data tersebar di chat, notes, spreadsheet — nggak ada yang tahu big picture.",
    },
    {
      icon: "TrendingDown",
      label: "Content tanpa conversion system = vanity metrics.",
      text: "Likes, views, followers naik — tapi closing nggak naik. Kamu kerja keras bikin konten tapi revenue stuck.",
    },
  ],
};

// ===== RIOS SYSTEM — One System. One Pipeline. (PALING PENTING) =====
export const RIOS_SYSTEM = {
  label: "RIOS SYSTEM",
  headline: "One System. One Pipeline.",
  subhead:
    "RIOS bukan kumpulan tools. RIOS adalah satu sistem terintegrasi — setiap tahap nyambung ke tahap berikutnya. Leads nggak bocor. Data nggak hilang. Kamu bisa lihat seluruh pipeline dari konten sampai revenue.",
  ctaText: "See the Full Pipeline",
  ctaHref: "#how-it-works",
};

// ===== HOW IT WORKS — alur kerja sistem =====
export const HOW_IT_WORKS = {
  label: "HOW IT WORKS",
  headline: "From Content to Revenue. Automatically.",
  steps: [
    {
      step: "01",
      label: "CONTENT PRODUCTION",
      title: "Content Engine Creates Consistent Assets",
      description:
        "Carousel + video avatar AI diproduksi tiap bulan. Konten on-brand, relevan, engaging — tanpa kamu harus bikin sendiri.",
      tech: "Design + HeyGen AI Avatar",
    },
    {
      step: "02",
      label: "DISTRIBUTION",
      title: "Content Goes Live on Every Platform",
      description:
        "Auto-post ke TikTok, Instagram, LinkedIn via Buffer. Konten sampai ke audience yang tepat di waktu yang tepat.",
      tech: "Buffer + Meta API + LinkedIn API",
    },
    {
      step: "03",
      label: "TRAFFIC → LANDING",
      title: "Visitors Land on Conversion-Optimized Page",
      description:
        "Landing page yang dirancang untuk satu tujuan: mengubah visitor jadi leads. Copy persuasif, CTA jelas, mobile-first.",
      tech: "Next.js + Vercel + Custom Domain",
    },
    {
      step: "04",
      label: "LEAD CAPTURE",
      title: "WhatsApp Chatbot Qualifies Every Lead",
      description:
        "Leads masuk langsung disambut chatbot — greeting, FAQ, form registrasi. System qualify leads otomatis 24/7.",
      tech: "WhatsApp Official API (Kirimdev)",
    },
    {
      step: "05",
      label: "PAYMENT & VERIFICATION",
      title: "System Handles Payment & Delivery",
      description:
        "QRIS payment link otomatis → verifikasi pembayaran → kirim materi ke customer. Semua tanpa manual intervention.",
      tech: "QRIS + Automation Webhook",
    },
    {
      step: "06",
      label: "CRM & NURTURE",
      title: "Every Lead Goes into CRM",
      description:
        "Data leads masuk Notion otomatis. Follow-up reminder, segmentasi, report bulanan — sistem yang merawat leads jadi pelanggan.",
      tech: "Notion CRM + Automation",
    },
  ],
};

// ===== INTELLIGENCE LAYER (moat — kenapa RIOS berbeda) =====
export const INTELLIGENCE_LAYER = {
  label: "INTELLIGENCE LAYER",
  headline: "What Makes RIOS Different: Intelligence.",
  intro:
    "RIOS bukan sekadar automation. RIOS punya Intelligence Layer — sistem yang belajar dari data kamu, menyesuaikan strategi, dan mengoptimasi conversion.",
  layers: [
    {
      icon: "Lightbulb",
      step: "BUSINESS STRATEGY",
      description: "Kamu punya goal. RIOS translate jadi pipeline yang measurable.",
    },
    {
      icon: "Brain",
      step: "CONTENT INTELLIGENCE",
      description: "Konten apa yang engage audience kamu? Sistem belajar dari performance data.",
    },
    {
      icon: "Clapperboard",
      step: "PRODUCTION",
      description: "Content engine produksi aset yang udah proven engage.",
    },
    {
      icon: "Send",
      step: "DISTRIBUTION",
      description: "Platform mana yang paling efektif? Sistem alokasi resource ke sana.",
    },
    {
      icon: "Users",
      step: "LEAD INTELLIGENCE",
      description: "Lead mana yang qualified? Chatbot qualify, CRM segmentasi otomatis.",
    },
    {
      icon: "TrendingUp",
      step: "CONVERSION OPTIMIZATION",
      description: "A/B test CTA, headline, flow — sistem cari kombinasi terbaik.",
    },
    {
      icon: "DollarSign",
      step: "REVENUE DATA",
      description: "Revenue attribution: konten mana yang closing. Data masuk report bulanan.",
    },
    {
      icon: "BarChart3",
      step: "CONTINUOUS OPTIMIZATION",
      description: "System learn, iterate, improve — setiap bulan lebih baik dari bulan sebelumnya.",
    },
  ],
};

// ===== CASE STUDY — Proof of System =====
export const CASE_STUDY = {
  label: "REAL CLIENT · REAL SYSTEM",
  headline: "CiciProfit: Full RIOS System in Action",
  intro:
    "Ini bukan mock-up. Ini bukan case study hipotesis. Ini sistem RIOS yang berjalan live — dari TikTok sampai closing, 24/7.",
  client: {
    name: "CiciProfit",
    platform: "TikTok @ciciprofit88",
    niche: "Crypto Auto-Trade Education",
  },
  stats: [
    { value: "29.9K", label: "TikTok Followers" },
    { value: "24/7", label: "Automated Lead Handling" },
    { value: "100%", label: "Payment Verification Automated" },
  ],
  pipeline: [
    "TikTok content → drives traffic",
    "Landing page → converts visitor to leads",
    "WhatsApp chatbot → greets, qualifies, registers",
    "QRIS payment → automated verification",
    "Materi delivery → automated post-payment",
    "Notion CRM → tracks everything",
  ],
  outcomes: [
    "Lead capture rate naik signifikan (sebelumnya manual, banyak yang bocor)",
    "Response time 24/7 — nggak ada leads yang nunggu lama",
    "Payment verification otomatis — nggak ada lagi manual checking",
    "CRM bersih — semua data leads tercatat, nggak ada yang hilang",
  ],
};

// ===== SYSTEM CAPABILITIES — supporting evidence (fitur di sini, BUKAN headline) =====
export const CAPABILITIES = {
  label: "SYSTEM CAPABILITIES",
  headline: "Powered by Best-in-Class Tools",
  intro:
    "RIOS mengintegrasikan teknologi terbaik — kamu nggak perlu beli sendiri, setup sendiri, atau integrate sendiri.",
  items: [
    {
      icon: "MessageSquare",
      name: "WhatsApp Business API",
      description: "Official Meta API via Kirimdev. Chatbot, form, QRIS, verifikasi — 24/7 otomatis.",
    },
    {
      icon: "Database",
      name: "Notion CRM",
      description: "Data leads, follow-up status, report bulanan — satu dashboard, semua terorganisir.",
    },
    {
      icon: "Globe",
      name: "Landing Page (Next.js + Vercel)",
      description: "Mobile-first, conversion-optimized, fast loading, custom domain.",
    },
    {
      icon: "Image",
      name: "Content Engine",
      description: "Carousel design profesional untuk TikTok, Instagram, LinkedIn. On-brand, konsisten.",
    },
    {
      icon: "Video",
      name: "Video Avatar AI (HeyGen)",
      description: "Kamu nggak harus tampil di kamera setiap saat. Avatar AI produksi video dalam skala.",
    },
    {
      icon: "Send",
      name: "Multi-Platform Auto-Post (Buffer)",
      description: "Konten terjadwal otomatis ke semua platform. Konsisten tanpa posting manual.",
    },
  ],
};

// ===== PACKAGES — SYSTEM LEVEL (outcome-first, bukan fitur list) =====
export const PRICING_DURATIONS = [
  { months: 1, label: "1 Bulan", discount: 0 },
  { months: 3, label: "3 Bulan", discount: 5 },
  { months: 6, label: "6 Bulan", discount: 15 },
  { months: 12, label: "12 Bulan", discount: 15 },
];

const BASE_RATES = {
  FOUNDATION: 500,
  GROWTH: 1200,
  REVENUE: 2500,
};

export const SETUP_FEES = {
  FOUNDATION: 1500,
  GROWTH: 3000,
  REVENUE: 5000,
};

export function calculatePrice(baseRate: number, months: number, discount: number): number {
  const monthlyRate = baseRate * months;
  const discountAmount = (monthlyRate * discount) / 100;
  return monthlyRate - discountAmount;
}

export const PACKAGES = {
  label: "PACKAGES",
  headline: "Choose Your System Level",
  intro:
    "Paket dirancang berdasarkan outcome yang kamu butuhkan — bukan sekadar bundle fitur. Pilih durasi untuk hemat lebih banyak.",
  tiers: [
    {
      id: "foundation",
      name: "FOUNDATION",
      tagline: "Build your business infrastructure.",
      outcome: "Dari scattered tools → satu operating foundation.",
      baseMonthly: BASE_RATES.FOUNDATION,
      setup: "Rp 1.5jt",
      setupNote: "sekali per phase",
      durations: PRICING_DURATIONS,
      support: [
        "Landing page + lead capture",
        "WhatsApp chatbot dasar (greeting, FAQ, form)",
        "Notion CRM setup",
        "Report leads bulanan",
      ],
      cta: "Mulai dari Foundation",
      highlight: false,
    },
    {
      id: "growth",
      name: "GROWTH",
      tagline: "Turn your audience into a predictable lead pipeline.",
      outcome: "Dari audience → qualified conversations.",
      baseMonthly: BASE_RATES.GROWTH,
      setup: "Rp 3jt",
      setupNote: "sekali per phase",
      durations: PRICING_DURATIONS,
      support: [
        "Semua fitur FOUNDATION",
        "Content engine 12-16 konten/bulan (carousel + video avatar AI)",
        "Multi-platform auto-post (TikTok, IG, LinkedIn)",
        "WhatsApp automation flow (QRIS, verifikasi, materi)",
        "CRM + reporting lengkap",
      ],
      cta: "Pilih Growth System",
      highlight: true,
      popular: true,
    },
    {
      id: "revenue",
      name: "REVENUE",
      tagline: "Connect the entire business system from attention to conversion.",
      outcome: "Dari content → lead → qualification → nurture → conversion.",
      baseMonthly: BASE_RATES.REVENUE,
      setup: "Rp 5jt",
      setupNote: "sekali per phase",
      durations: PRICING_DURATIONS,
      support: [
        "Semua fitur GROWTH",
        "Content engine plus 24+ konten/bulan",
        "Multi-channel 2-3 nomor WA / persona",
        "Custom integration (payment & pihak ke-3)",
        "Strategi bulanan + optimization",
        "SLA response < 1 jam",
      ],
      cta: "Konsultasi Revenue System",
      highlight: false,
    },
  ],
  disclaimer:
    "Setup fee dikenakan SEKALI per phase setelah sistem disetujui — tidak ada biaya setup lagi setelah itu. Harga belum termasuk PPN.",
  commercial:
    "Diskon berlaku untuk komitmen 3 bulan ke atas: 3 bulan (5%), 6 bulan (15%), 12 bulan (15%).",
};

// ===== FAQ =====
export const FAQS = [
  {
    q: "RIOS itu apa sih? Chatbot? CRM? Landing page?",
    a: "RIOS bukan salah satu dari itu — RIOS adalah satu sistem terintegrasi. Dari produksi konten, distribusi multi-platform, lead capture, WhatsApp automation, sampai CRM — semua nyambung dalam satu pipeline. Kamu nggak beli tools terpisah; kamu beli sistem yang bekerja.",
  },
  {
    q: "Saya bukan orang teknis, bisa pakai RIOS?",
    a: "Justru RIOS hadir supaya kamu nggak perlu jadi orang teknis. Tim kami yang setup semuanya — kamu tinggal terima report dan fokus jadi ahli di bidangmu.",
  },
  {
    q: "Bedanya RIOS sama beli tools sendiri apa?",
    a: "Kalau kamu beli tools sendiri (Canva, Buffer, chatbot, CRM) — kamu yang integrate, maintain, dan debug kalau ada masalah. RIOS sudah terintegrasi, tested, dan berjalan 24/7. Kamu beli sistem, bukan kumpulan tools.",
  },
  {
    q: "Video avatar AI itu gimana? Natural nggak?",
    a: "Kami pakai HeyGen — salah satu platform avatar AI terbaik. Hasilnya natural, profesional, dan bisa diproduksi dalam jumlah banyak tanpa kamu harus shooting tiap kali. Lihat contoh di case study CiciProfit.",
  },
  {
    q: "Chatbot WA-nya pakai API resmi?",
    a: "Ya. WhatsApp Business API resmi via Kirimdev (partner Meta). Bukan WA modifikasi atau tool ilegal. Nomor kamu aman, terverifikasi centang hijau.",
  },
  {
    q: "Berapa lama setup-nya?",
    a: "FOUNDATION: 7-14 hari. GROWTH: 14-21 hari. REVENUE: 21-30 hari. Tergantung kompleksitas dan kesiapan materi dari kamu.",
  },
  {
    q: "Bisa lihat contoh sistem yang sudah jalan?",
    a: "Bisa! Lihat case study CiciProfit — full pipeline dari TikTok sampai payment verification sudah berjalan live. Atau chat kami untuk demo.",
  },
  {
    q: "Kalau mau berhenti langganan gimana?",
    a: "Bebas berhenti kapan saja, tanpa penalti. Sistem yang sudah disetup tetap milik kamu (landing page, CRM, chatbot flow). Langganan bulanan untuk maintenance, update konten, dan support.",
  },
  {
    q: "Apakah bisa custom sesuai bisnis saya?",
    a: "Tentu. Setiap klien punya kebutuhan berbeda. Paket REVENUE bahkan mencakup custom integration (payment, third-party tools) dan strategi bulanan bersama tim RIOS.",
  },
  {
    q: "Saya sudah punya tools sendiri, masih perlu RIOS?",
    a: "Kalau tools kamu sudah terintegrasi dan berjalan otomatis 24/7 — mungkin nggak perlu. Tapi kalau kamu masih manual copy-paste data antar tools, lupa follow-up, atau leads bocor — RIOS solve itu.",
  },
];

// ===== FOOTER =====
export const FOOTER = {
  tagline: SITE.tagline,
  motto: SITE.motto,
  copyright: `© ${new Date().getFullYear()} RIOS Kreasindo. All rights reserved.`,
  links: NAV_LINKS,
};
