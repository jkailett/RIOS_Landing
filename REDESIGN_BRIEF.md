# RIOS Landing Redesign Brief (v2.0)

**Goal:** Transform rioskreasindo.site dari generic AI/SaaS template ke **premium dark tech brand** yang mencerminkan RIOS sebagai intelligent business system (bukan automation tool).

**Positioning:** Enterprise-grade business intelligence platform, bukan consumer automation.

---

## Design System (from ui-ux-pro-max v2.0)

### Style: Modern Dark (Cinema Mobile)
- **Keywords:** Dark mode, cinematic, ambient light, glassmorphism, deep black, indigo, glow, blur, atmospheric, premium, layered, frosted glass
- **Best For:** Developer tools, pro productivity apps, fintech/trading dashboards, AI tool interfaces
- **Performance:** Good (blur effects require GPU)
- **Accessibility:** WCAG AA (careful accent contrast)

### Color Palette
```css
--bg-deep:              #020203  (Base dark)
--bg-base:              #050506  (Elevated)
--bg-elevated:          #0a0a0c  (Cards/surfaces)
--surface:              rgba(255 255 255 / 0.05)  (Glassmorphic overlay)
--foreground:           #EDEDEF  (Primary text)
--foreground-muted:     #8A8F98  (Secondary text)
--accent:               #5E6AD2  (Indigo - Primary CTA)
--accent-glow:          rgba(94 106 210 / 0.2)  (Glow behind buttons)
--border:               rgba(255 255 255 / 0.08)  (Hairline borders)
--radius:               16px  (Card corners)
--easing:               cubic-bezier(0.16 1 0.3 1)  (Expo.out)
```

### Typography
- **Font:** Inter (already in use ✓)
- **Weights:** 300 (light), 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
- **Scale:** 
  - Display: 48–56px (hero)
  - Headline: 32–40px
  - Title: 24–28px
  - Body: 16px base (min 14px)
  - Label: 12–13px

### Motion & Effects
- **Easing:** `cubic-bezier(0.16, 1, 0.3, 1)` (Expo.out) for all transitions
- **Duration:** 300–450ms for section reveals
- **Stagger:** 60ms per item for list/grid animations
- **Effects:**
  - Animated ambient light blobs (slow oscillation, 30–50px blur, 8–12% opacity)
  - Glassmorphism on headers/nav (BorderRadius 16, border: rgba(255,255,255,0.08), 1px)
  - Soft shadow expansion on hover (scale 1.02)
  - Glow accent behind primary buttons
  - Smooth content reveals with opacity + scale

### Pre-Delivery Checklist
- [ ] No pure #000000 (use #020203 or #050506)
- [ ] Animated blobs on hero background
- [ ] BlurView / backdrop-filter on nav/sticky elements
- [ ] cursor-pointer on all clickable elements
- [ ] Accent glow behind CTA buttons
- [ ] Contrast 4.5:1+ (text on dark background)
- [ ] Focus states visible (2–3px ring, #5E6AD2)
- [ ] prefers-reduced-motion: Remove animations, keep opacity
- [ ] Responsive: 375px, 768px, 1024px, 1440px

---

## Redesign Scope

### ✅ Keep (Content & Structure)
- 8-stage pipeline (ATTENTION → REVENUE) — structure is solid
- Navigation flow (What is RIOS → Problem → System → How It Works → etc.)
- WhatsApp integration for conversational lead capture
- QRIS payment integration
- Data.ts centralized content (good for CMS later)

### 🔄 Redesign (Visual & Interaction)
| Section | Current | New Aesthetic | Changes |
|---------|---------|----------------|---------|
| **Navbar** | Minimal | **Glassmorphic, sticky** | Backdrop blur, hairline border, dark bg |
| **Hero** | Gradient bg + text | **Cinematic dark + blobs** | Deep #020203, animated ambient blobs, glow CTAs |
| **Section Headers** | Simple labels | **Bold typography + accent line** | Larger headings, indigo underline, premium spacing |
| **Pipeline (8-stage)** | Linear flow | **Interactive timeline / grid** | Cards with glassmorphism, hover glow, stagger animation |
| **CTA Buttons** | Simple fill | **Indigo + glow effect** | #5E6AD2 with rgba(94 106 210 / 0.2) shadow, smooth scale on hover |
| **Cards (pricing, features)** | Flat | **Elevated glassmorphism** | borderRadius 16, border: hairline rgba, soft shadow, hover scale 1.02 |
| **Footer** | Basic | **Dark gradient + sitemap** | Better information architecture, dark theme |

### 🎯 Key Design Moves
1. **Hero:** Deep cinematic background with 2–3 animated blobs (slow float, glow)
2. **Motion:** All reveals use Expo.out easing, 300–450ms stagger
3. **Contrast:** Indigo accents pop on dark — electric, premium feel
4. **Hierarchy:** Typography sizes clearly signal importance (48px hero, 24px section titles)
5. **Micro-interactions:** Hover scale 1.02 on cards, glow on CTA, smooth transitions

---

## Implementation Plan

### Phase 1: Design Tokens & Colors
- [ ] Update `tailwind.config.ts` with cinema dark palette
- [ ] Define CSS variables for spacing, easing, shadows
- [ ] Test contrast on all text + interactive elements

### Phase 2: Layout & Components
- [ ] **Navbar:** Glassmorphic, sticky, backdrop-filter blur
- [ ] **Hero:** Animated blob backgrounds + new headline style
- [ ] **Section Headers:** Bold typography + accent lines
- [ ] **Cards:** Glassmorphism, hover states, stagger animations
- [ ] **CTA Buttons:** Indigo + glow, smooth press feedback

### Phase 3: Motion & Polish
- [ ] GSAP stagger animations for grids/lists
- [ ] Smooth section reveals (fade + scale)
- [ ] Hover states on all interactive elements
- [ ] Reduced-motion media query support

### Phase 4: Testing & QA
- [ ] Responsive design (375, 768, 1024, 1440px)
- [ ] Accessibility audit (contrast, focus states, keyboard nav)
- [ ] Performance check (LCP, CLS, animations on GPU)
- [ ] Browser testing (Chrome, Firefox, Safari)

### Phase 5: Deploy & Monitor
- [ ] Build & test locally
- [ ] Screenshot review at all breakpoints
- [ ] Deploy to Vercel (auto-updates rioskreasindo.site)
- [ ] Monitor Core Web Vitals

---

## Success Metrics
✅ **Visual:** Looks premium, modern, AI/tech-forward (not generic SaaS)
✅ **Performance:** LCP <2.5s, CLS <0.1, animations 60fps
✅ **Accessibility:** 4.5:1 contrast, focus rings, keyboard nav
✅ **Brand:** Feels like intelligent business system (transformation, not automation)
✅ **Conversion:** Clear CTA flow, trust signals, social proof

---

## Resources
- Design System: `ui-ux-pro-max` skill (192 rules, 79 styles, Modern Dark Cinema)
- 21st.dev: Generate UI components (2 free retrievals/day)
- Existing Code: `/home/ubuntu/rios-landing/src/` (Next.js, React, Tailwind)
- Content: `src/app/data.ts` (centralized, ready for redesign)
