# 🚀 RIOS Landing — Production Deployment Instructions

**Status:** Code is ready for production. All changes committed and tested.

---

## 📦 What's Ready

✅ **Redesign Complete**
- Cinema dark premium theme with animated blobs
- Indigo accent color (#5E6AD2)
- Glassmorphic cards, smooth animations
- WCAG AA accessibility, focus rings
- Build tested: 0 errors, 11 static pages

✅ **Git Committed**
- All changes in commit: `9a22fbbb ✨ redesign: Cinema dark premium theme with indigo accents`
- Ready to push to GitHub

✅ **Vercel Connected**
- Project already linked: `rios-landing` (prj_bcdTNpLxDE1KOaJzVMPd7hEgkpa2)
- Auto-deploys when GitHub repo updates

---

## 🎯 Deployment Method (3 Options)

### **Option 1: GitHub Web Upload (Easiest)**

1. Go to: https://github.com/jkailett/RIOS_Landing
2. Click **"Add file"** → **"Upload files"**
3. Drag files from `/home/ubuntu/rios-landing` OR
4. Click **"switching to manual merge"** and paste full repo contents
5. Commit with message: `✨ redesign: Cinema dark premium theme`
6. **Vercel auto-deploys in 2–5 minutes**

✅ **Result:** https://rioskreasindo.site updates live

---

### **Option 2: GitHub CLI (If installed locally)**

```bash
# Navigate to project
cd ~/rios-landing

# Set remote (if not already set)
git remote remove origin  # (if error on add)
git remote add origin https://github.com/jkailett/RIOS_Landing.git

# Authenticate with GitHub CLI
gh auth login
# Choose: GitHub.com
# Choose: HTTPS
# Paste personal access token (from https://github.com/settings/tokens)

# Push
git push -u origin master

# Vercel auto-deploys in 2–5 minutes
```

✅ **Result:** https://rioskreasindo.site updates live

---

### **Option 3: Direct Vercel Deploy (If Vercel CLI Login Works)**

```bash
cd ~/rios-landing

# Login to Vercel
vercel login
# Follow browser prompt to authenticate

# Deploy to production
vercel deploy --prod --yes

# Vercel outputs live URL
```

✅ **Result:** https://rioskreasindo.site updates live

---

## 🔑 GitHub Personal Access Token (For CLI)

If using **Option 2** and need a token:

1. Go to: https://github.com/settings/tokens
2. Click **"Generate new token"** → **"Generate new token (classic)"**
3. Name: `RIOS Landing Deploy`
4. Select scopes:
   - ✅ `repo` (full control of private repositories)
   - ✅ `workflow` (update GitHub Actions)
5. Click **"Generate token"**
6. **Copy immediately** (can't view again)
7. Use as password in `gh auth login` prompt

---

## 📊 Pre-Deployment Checklist

- [x] Build passes: `npm run build` (0 errors)
- [x] All changes committed
- [x] Design system applied (ui-ux-pro-max v2.0)
- [x] Hero redesigned with animated blobs
- [x] Buttons styled with indigo accent
- [x] Accessibility: WCAG AA contrast, focus rings
- [x] Tested locally: dev server runs, full page loads
- [x] Git remote configured (GitHub)
- [x] Vercel project linked (.vercel/project.json exists)

---

## 📋 What Gets Deployed

**Files Changed:**
- `tailwind.config.ts` — New color palette, design tokens
- `src/app/globals.css` — Glassmorphic components, animations
- `src/components/Hero.tsx` — Animated blobs, new button styles

**Files Created (Documentation):**
- `REDESIGN_BRIEF.md` — Design brief
- `REDESIGN_REPORT.md` — Full redesign report
- `DEPLOY.sh` — This deployment guide

**No Breaking Changes:**
- All existing pages work
- All API routes unchanged
- Database/backend untouched
- Content (data.ts) unchanged

---

## ⏱️ Deployment Timeline

| Step | Time | Status |
|------|------|--------|
| Push to GitHub | 1 min | ⏳ Waiting for you |
| Vercel detects | <1 min | Auto-trigger |
| Build & test | 2–3 min | Automatic |
| Deploy to CDN | 1–2 min | Automatic |
| DNS propagate | <30s | Automatic |
| **LIVE** | **5 min total** | ✅ rioskreasindo.site |

---

## 🔍 Monitor Deployment

1. **Vercel Dashboard:** https://vercel.com/jkailetts-projects/rios-landing
   - Click **"Deployments"** tab
   - Watch for new deployment build

2. **Live Site:** https://rioskreasindo.site
   - Hard refresh browser (Cmd+Shift+R / Ctrl+Shift+R)
   - Check hero for animated blobs + indigo buttons

3. **GitHub:** https://github.com/jkailett/RIOS_Landing
   - Confirm commit appears in history

---

## 🐛 If Deployment Fails

**Common Issues & Fixes:**

| Issue | Fix |
|-------|-----|
| **"No credentials found"** | Use Option 1 (GitHub Web) or Option 2 (GitHub CLI login) |
| **Network timeout** | Retry push (`git push -u origin master`) |
| **Build error on Vercel** | Check Vercel logs: Dashboard → Deployments → Click failed build |
| **DNS not updating** | Wait 5 minutes, hard refresh browser (Cmd+Shift+R) |
| **Old design still showing** | Clear browser cache (Cmd+Shift+Delete) |

---

## 📞 Support

Questions? Check:
- `REDESIGN_REPORT.md` — Full technical details
- `REDESIGN_BRIEF.md` — Design decisions & scope
- Vercel docs: https://vercel.com/docs

---

## ✅ After Deployment

Once live, verify:

1. **Hero Section**
   - [ ] Dark background (#020203) visible
   - [ ] Animated blobs floating smoothly
   - [ ] Indigo CTA button glows on hover
   - [ ] Text is readable (contrast OK)

2. **Navigation**
   - [ ] All links work
   - [ ] NavBar doesn't break

3. **Mobile**
   - [ ] Responsive at 375px, 768px, 1024px
   - [ ] Buttons clickable
   - [ ] No layout shift

4. **Performance**
   - [ ] Lighthouse score >90
   - [ ] LCP <2.5s
   - [ ] CLS <0.1

5. **Analytics**
   - [ ] Vercel reporting pageviews
   - [ ] No errors in console

---

**Ready to deploy? Choose your method above and start! 🚀**

*Questions? Yoga can reach out — I'm here to debug any issues.*
