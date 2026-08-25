import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'API Developer — Feed Notifikasi & Katalog Velnime',
  description:
    'Dokumentasi API publik Velnime: Transparansi Stats API, Real-time Feed Updates, dan Akses B2B Katalog Anime & Donghua via Craftvel.',
  alternates: { canonical: '/api' },
  openGraph: {
    title: 'API Developer — Feed Notifikasi & Katalog Velnime',
    description: 'Feed rilis episode realtime & akses katalog anime/donghua multi-resolusi.',
    url: 'https://www.velnime.com/api',
    siteName: 'Velnime',
    type: 'website',
    locale: 'id_ID',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Velnime' }],
  },
};

export default function ApiPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <div className="mx-auto w-full max-w-4xl flex-1 px-4 py-16 sm:px-6 sm:py-20">
        
        {/* Header Hero */}
        <section className="text-center">
          <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accentFaded px-4 py-1.5 text-xs font-semibold text-accent">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
            Developer API &amp; Feed Ecosystem
          </span>
          <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tighter sm:text-5xl">
            Integrasi data anime &amp; donghua,
            <span className="text-accent"> untuk aplikasi &amp; bot kamu.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-inkDim sm:text-lg">
            Gunakan API publik gratis untuk kebutuhan bot Discord &amp; Telegram, atau akses katalog komersial berkecepatan tinggi melalui Craftvel API Gateway.
          </p>
        </section>

        {/* 3 API Cards Section */}
        <div className="mt-14 space-y-12">
          
          {/* API 1: Real-time Feed Updates */}
          <section className="rounded-2xl border border-white/10 bg-surface p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accentFaded text-accent">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 11a9 9 0 0 1 9 9"/><path d="M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1"/></svg>
                </div>
                <div>
                  <h2 className="font-display text-xl font-bold text-ink">1. Real-time Feed Updates API</h2>
                  <p className="text-xs text-inkDim">Publik · Gratis · Polling Otomatis</p>
                </div>
              </div>
              <span className="rounded-md bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-400">
                GRATIS
              </span>
            </div>

            <p className="mt-4 text-sm text-inkDim">
              Menyajikan episode anime dan donghua yang baru saja rilis. Sangat cocok untuk bot notifikasi Discord, Telegram channel, atau RSS reader komunitas.
            </p>

            <div className="mt-4 overflow-x-auto rounded-xl border border-white/10 bg-surfaceSoft p-4">
              <code className="text-sm text-accent">GET https://api.velnime.com/v1/feed/updates?type=all&amp;limit=20</code>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-3 text-xs">
              <div className="rounded-lg border border-white/5 bg-canvas/60 p-3">
                <span className="font-bold text-ink">type</span>: all · anime · donghua
              </div>
              <div className="rounded-lg border border-white/5 bg-canvas/60 p-3">
                <span className="font-bold text-ink">limit</span>: default 20, max 50
              </div>
              <div className="rounded-lg border border-white/5 bg-canvas/60 p-3">
                <span className="font-bold text-ink">Cache</span>: CDN Edge 3 Menit
              </div>
            </div>
          </section>

          {/* API 2: Transparan Stats API */}
          <section className="rounded-2xl border border-white/10 bg-surface p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accentFaded text-accent">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
                </div>
                <div>
                  <h2 className="font-display text-xl font-bold text-ink">2. Transparan Stats API</h2>
                  <p className="text-xs text-inkDim">Publik · Gratis · Real-time Platform Metric</p>
                </div>
              </div>
              <span className="rounded-md bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-400">
                GRATIS
              </span>
            </div>

            <p className="mt-4 text-sm text-inkDim">
              Menyediakan data statistik transparansi platform secara realtime: total pengguna aktif, total jam tontonan, total episode, dan total donasi komunitas.
            </p>

            <div className="mt-4 overflow-x-auto rounded-xl border border-white/10 bg-surfaceSoft p-4">
              <code className="text-sm text-accent">GET https://api.velnime.com/v1/stats</code>
            </div>
          </section>

          {/* API 3: Commercial B2B Catalog & Stream (Craftvel Gateway) */}
          <section className="relative overflow-hidden rounded-2xl border border-accent/40 bg-gradient-to-b from-surface via-surface to-accentFaded/30 p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-canvas">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                </div>
                <div>
                  <h2 className="font-display text-xl font-bold text-ink">3. Commercial Catalog &amp; Stream API (Craftvel)</h2>
                  <p className="text-xs text-inkDim">B2B Gateway · SLA 99.9% · Dedicated Token</p>
                </div>
              </div>
              <span className="rounded-md bg-accent px-3 py-1 text-xs font-bold text-canvas">
                Mulai Rp 49.000 / bln
              </span>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-inkDim">
              Dapatkan akses penuh ke basis data 2.434+ judul anime &amp; donghua, multi-resolusi 360p–1080p stream resolver, metadata episode lengkap, dan dedicated unmetered media proxy untuk website atau aplikasi streaming komersial Anda.
            </p>

            <div className="mt-6 rounded-xl border border-white/10 bg-[#0B0B14] p-4 text-xs font-mono text-inkDim">
              <p className="text-accent font-bold mb-2">Endpoint Komersial yang Tersedia:</p>
              <ul className="space-y-1.5 list-disc pl-4">
                <li><code>GET /v1/anime/home</code> &amp; <code>GET /v1/donghua/home</code> — Full Aggregated Payload</li>
                <li><code>GET /v1/poster/anime/:slug</code> &amp; <code>GET /v1/poster/donghua/:slug</code> — Opaque Signed CDN</li>
                <li><code>GET /v1/stream/:episodeSlug</code> — Multi-server Resolver Bucket</li>
                <li><code>GET /v1/download/:episodeSlug</code> — Direct Attachment Stream</li>
              </ul>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-inkDim">
                Dikelola oleh <strong className="text-ink">Craftvel API Gateway</strong> · Jakarta &amp; SG Datacenter.
              </div>
              <a
                href="https://api.craftvel.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 font-display text-sm font-bold text-canvas transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Akses Craftvel API Gateway</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
