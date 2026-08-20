import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // RIOS Cinema Dark Premium Palette (v2.0 — from ui-ux-pro-max Modern Dark Cinema)
        // Primary dark backgrounds
        "dark-deep": "#020203",      // Base deep black
        "dark-base": "#050506",      // Elevated surfaces
        "dark-elevated": "#0a0a0c",  // Cards & components
        
        // Text colors
        "fg-primary": "#EDEDEF",     // Primary text
        "fg-muted": "#8A8F98",       // Secondary/muted text
        
        // Accent (Indigo)
        "accent-primary": "#5E6AD2", // Indigo primary
        "accent-glow": "rgba(94, 106, 210, 0.2)", // Glow effect
        
        // UI elements
        "surface": "rgba(255, 255, 255, 0.05)",  // Glassmorphic overlay
        "border-subtle": "rgba(255, 255, 255, 0.08)",  // Hairline borders
        "destructive": "#DC2626",    // Error/danger
        
        // Legacy support (kept for compatibility)
        base: "#020203",
        accent: "#5E6AD2",
        violet: "#5E6AD2",
        muted: "#8A8F98",
        line: "rgba(255, 255, 255, 0.08)",
      },
      fontFamily: {
        display: ["var(--font-inter)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        // Cinema dark shadows
        "glow": "0 0 20px rgba(94, 106, 210, 0.3), 0 0 60px rgba(94, 106, 210, 0.15)",
        "glow-sm": "0 0 10px rgba(94, 106, 210, 0.2)",
        "glow-lg": "0 0 40px rgba(94, 106, 210, 0.25)",
        
        // Card shadows (soft, elevated)
        "card": "0 4px 24px rgba(0, 0, 0, 0.4)",
        "card-hover": "0 12px 48px rgba(94, 106, 210, 0.12)",
        "lift": "0 8px 40px rgba(0, 0, 0, 0.5)",
      },
      backdropFilter: {
        "blur-sm": "blur(4px)",
        "blur": "blur(8px)",
        "blur-md": "blur(12px)",
        "blur-lg": "blur(16px)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-dark": "linear-gradient(135deg, #020203 0%, #0a0a0c 100%)",
        "gradient-accent": "linear-gradient(135deg, #5E6AD2, #3B82F6)",
        "gradient-accent-h": "linear-gradient(90deg, #5E6AD2, #3B82F6)",
      },
      animation: {
        "slide-in-right": "slideInRight 0.4s ease-out",
        "fade-in": "fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        "scale-in": "scaleIn 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        "blob-float": "blobFloat 8s ease-in-out infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
      },
      keyframes: {
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.92)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        blobFloat: {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-20px) scale(1.05)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 5px rgba(94, 106, 210, 0.3)" },
          "50%": { boxShadow: "0 0 15px rgba(94, 106, 210, 0.5)" },
        },
      },
      transitionTimingFunction: {
        "expo-out": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
