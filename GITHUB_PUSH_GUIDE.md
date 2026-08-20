# GitHub Push Instructions (Yoga's Codespace)

## ⚠️ Masalah

Yoga di Codespace (GitHub Web IDE), Jaden di server AWS — dua machine berbeda.
Error: `bash: cd: /home/codespace/RIOS_Landing: No such file or directory`

---

## ✅ Solusi

### **Opsi 1: Upload via GitHub Web (Paling Mudah — Recommended)**

1. **Buka GitHub Web:** https://github.com/jkailett/RIOS_Landing
2. **Klik:** "Add file" → "Upload files"
3. **Source folder:** `/home/ubuntu/rios-landing` (dari server Jaden)
4. **Files yang perlu di-upload:**
   - Seluruh folder `src/`
   - `tailwind.config.ts`
   - `package.json`
   - `PRODUCTION_READY.txt`
   - `DEPLOYMENT_GUIDE.md`
   - `REDESIGN_REPORT.md`
   - Dan file-file lainnya kecuali `.next/`, `node_modules/`

5. **Commit message:** `✨ redesign: Cinema dark premium theme`
6. **Push** → Vercel auto-deploys otomatis

✅ **Done! Live dalam 5 menit**

---

### **Opsi 2: Setup GitHub CLI di Codespace (Jika mau push dari Codespace)**

```bash
# Di Codespace terminal, navigate ke project folder:
cd /workspaces/RIOS_Landing

# Atau kalo belum ada, clone dari GitHub:
git clone https://github.com/jkailett/RIOS_Landing.git
cd RIOS_Landing

# Login ke GitHub CLI:
gh auth login
# Choose: GitHub.com
# Choose: HTTPS
# When asked for token: Paste personal access token dari https://github.com/settings/tokens

# Verifikasi login:
gh auth status

# Pull latest changes dari server Jaden:
git pull origin master

# Push ke GitHub:
git push origin master
```

✅ **Done! Live dalam 5 menit**

---

### **Opsi 3: Copy Files dari Server Jaden ke Codespace**

```bash
# Di Codespace, clone project from scratch:
rm -rf RIOS_Landing
git clone https://github.com/jkailett/RIOS_Landing.git
cd RIOS_Landing

# Atau jika sudah ada:
cd /workspaces/RIOS_Landing
git pull origin master
```

---

## 🔑 GitHub Personal Access Token

Kalau butuh token untuk login, buat di:
https://github.com/settings/tokens

**Steps:**
1. Click "Generate new token" → "Generate new token (classic)"
2. Name: `codespace-rios-deploy`
3. Select:
   - ✅ `repo` (full control)
   - ✅ `workflow`
4. Click "Generate token"
5. **Copy immediately** (won't show again)
6. Paste di `gh auth login` prompt

---

## 📊 Status di Server Jaden

```
✅ Code ready        /home/ubuntu/rios-landing
✅ Commits created   3 commits (redesign + docs)
✅ Git configured    remote = https://github.com/jkailett/RIOS_Landing.git
✅ Build tested      0 errors, 11 static pages
✅ Ready to push
```

---

## 🚀 Yang Akan Terjadi Setelah Push

1. **GitHub:** Commits muncul di history (instant)
2. **Vercel:** Auto-detects push (< 1 min)
3. **Build:** Vercel builds production (2–3 min)
4. **Deploy:** Live ke rioskreasindo.site (1–2 min)
5. **Monitor:** https://vercel.com/jkailetts-projects/rios-landing/deployments

---

## 💡 Rekomendasi

**Gunakan Opsi 1 (GitHub Web Upload)** — paling simpel, tidak perlu CLI, tidak perlu token.

Kalo stuck, jangan ragu untuk chat Jaden! 🙂
