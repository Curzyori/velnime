# Velnime Landing Page

Landing page resmi untuk **Velnime** — aplikasi nonton anime Android.

- **URL Production:** `https://www.velnime.com/`
- **Hosting / Deploy:** Vercel (Static Export / Next.js SSG)
- **Domain DNS:** Cloudflare (Zone `velnime.com`, CNAME/A record ke Vercel)
- **Stack:** Next.js (App Router) + Tailwind CSS + Lucide Icons

---

## Fitur & Komponen Landing Page

1. **Hero Section:** Headline utama, tombol Download APK (release GitHub/direct), preview tangkapan layar HP Velnime Android app.
2. **Feature Showcase:** Bebas iklan (zero ads), stream cepat (direct MP4/HLS), update harian anime ongoing, catalog 1000+ judul.
3. **Download Modal / Link:** Direct link APK download terbaru via GitHub Releases / Tencent Object Storage CDN.
4. **DMCA & Privacy Policy Footer:** Link resmi DMCA (`admin@velnime.com`), Syarat & Ketentuan (TOS), dan Kebijakan Privasi.

---

## Verifikasi Static Export & Shipping

Sebelum deploy/push ke production, jalankan verifikasi lokal:

```bash
# 1. Install dependencies (jika baru clone)
npm ci

# 2. Test build SSG (static export check)
npm run build

# 3. Lint & format check
npm run lint
```

---

## Referensi Operasional Topologi

- **Landing Page (`www.velnime.com`):** Serves di Vercel — ZERO touch ke server backend/VPS.
- **Donate API (`api.velnime.com`):** Backend non-anime (donate/webhook/stats) — domain-based.
- **Buyer API (`api.craftvel.com`):** API Gateway buyer (thin proxy) — domain-based.
- **Stream/Catalog Worker:** Stream worker resolve + pipe video (unlimited bandwidth) — internal, tidak exposed publik.
