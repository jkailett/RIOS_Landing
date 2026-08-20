# 🚀 RIOS Mayar.id — Environment Setup untuk Vercel

**Status:** ✅ Kode sudah di-push ke GitHub + Vercel auto-build  
**Step terakhir:** Setup Environment Variables di Vercel Dashboard

---

## ✅ Langkah di Vercel Dashboard (1 menit)

1. **Buka:** https://vercel.com/jkailetts-projects/rios-landing/settings/environment-variables

2. **Tambahin 3 Variable ini:**

| Variable | Value |
|----------|-------|
| `MAYAR_API_KEY` | `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJkYWU2ZWNiZi1jYmU4LTRjNzMtOTk0ZC1hODkwNTcwNzAwMTQiLCJhY2NvdW50SWQiOiIxY2QwOTNmNi1lOGM3LTQzNjgtYTAwYi00YWZkYTBhNjFkYWEiLCJjcmVhdGVkQXQiOiIxNzg3MjE1NDM3MTc0Iiwicm9sZSI6ImRldmVsb3BlciIsInNjb3BlIjp7InJlYWQiOnRydWUsIndyaXRlIjp0cnVlfSwic3ViIjoieWluZHJhZGpheWFAZ21haWwuY29tIiwibmFtZSI6IlJJT1NfS1JFQVNJTkRPIiwibGluayI6InlvZ2EtaW5kcmFkamF5YSIsImlzU2VsZkRvbWFpbiI6bnVsbCwiaWF0IjoxNzg3MjE1NDM3fQ.EBJ4O_zaSuhyOPvYagEaSFxc-XwncRV5qItT5GS35iKAHeFrbBPjz1OvbPJne0_861od8lr0TE7Jx-9rjtJtNonmpJzK3TVdRz0OiodCklrV1LNy6lGyTH8X-v-yivSvQOsPDCh0D-yhAjnGhPtO9yAFyfHgH1AaOqBv3uMPPJ-FCzM40kmCEmMNFbysqWfBBV7d_GDvnXoD7mek8P_-FZnKVLlTz60eC7WDAOCyF0jMoLUG1t-Azgn20-Ut5oEGhFD3F26oJzwicXWOJEA0gjf0P0LIiGWnW82f4OCGHpeUx8flUm7fCJK_x80XcGiLDRgKERfMuMJOXIiKNmDi7g` |
| `MAYAR_WEBHOOK_TOKEN` | `4916633e4b9327cf33a36b895c574a3f03f757d602884d9851da9bab313f6ae3872496326edf3af966b354e508e3aee25a700379d004778bff815c431cafe7cf` |
| `NEXT_PUBLIC_APP_URL` | `https://rioskreasindo.site` |

3. **Pilih Environments:** ✅ Production (✅ Preview bila perlu)

4. **Klik:** "Save"

5. **Trigger Re-deploy:**
   - Buka https://vercel.com/jkailetts-projects/rios-landing/deployments
   - Klik "..." di deployment terbaru → "Redeploy"

---

## 🔐 Yang Sudah Selesai

| Item | Status |
|------|--------|
| ✅ **Kode checkout di-push** | GitHub: jkailett/RIOS_Landing |
| ✅ **Auth header fixed** | `Authorization: Bearer ***` |
| ✅ **Webhook handler** | HMAC SHA256 verification + payment events |
| ✅ **Error handling** | Fallback jika MAYAR_API_KEY belum di-set |
| ⏳ **Vercel env vars** | **TUNGGU Yoga setup di dashboard** |

---

## 📍 Verifikasi

Setelah setup & redeploy, checkout bisa dites:
```
POST https://rioskreasindo.site/api/checkout
Body: { "packageId": "FOUNDATION", "months": 1 }
Response: { "url": "https://app.mayar.id/..." }
```

Webhook endpoint:
```
POST https://rioskreasindo.site/api/webhooks/mayar
```

---

**Udah selesai!** Tinggal Yoga copy-paste 3 baris ke Vercel Dashboard 🚀
