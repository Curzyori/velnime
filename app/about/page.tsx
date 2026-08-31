import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tentang Velnime — Cerita di Balik Aplikasi Nonton Anime Tanpa Iklan',
  description:
    'Kisah pembuatan Velnime oleh solo developer Curzyori: komitmen 100% bebas iklan, arsitektur 1.400+ commits monorepo, dan eksperimen 10,8 miliar token AI vibe coding (Hermes Agents & Claude Code).',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'Tentang Velnime — Cerita di Balik Aplikasi Nonton Anime Tanpa Iklan',
    description:
      'Kisah pembuatan Velnime oleh solo developer Curzyori: komitmen 100% bebas iklan, arsitektur 1.400+ commits monorepo, dan eksperimen 10,8 miliar token AI vibe coding.',
    url: 'https://www.velnime.com/about',
    siteName: 'Velnime',
    type: 'website',
    locale: 'id_ID',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Velnime' }],
  },
};

export default function AboutPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <div className="mx-auto w-full max-w-4xl flex-1 px-4 py-12 sm:px-6 sm:py-16">

        {/* Header Hero */}
        <section className="border-b border-white/10 pb-8 text-center sm:text-left">
          <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accentFaded px-3.5 py-1 text-xs font-semibold text-accent">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>
            Devlog &amp; Visi Komunitas
          </span>
          <h1 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Cerita di Balik Velnime: Nonton Bebas, Tanpa Iklan, Tanpa Biaya.
          </h1>
          <p className="mt-3 text-base leading-relaxed text-inkDim">
            Sebuah proyek solo indie builder yang lahir dari keresahan platform anime/donghua yang penuh iklan mengganggu dan sistem berbayar. Dibangun murni untuk menghadirkan kenyamanan streaming terbaik bagi sesama pecinta anime di Indonesia.
          </p>
        </section>

        {/* Content Sections */}
        <div className="mt-10 space-y-12">

          {/* Seksi 1: Latar Belakang & Misi */}
          <section className="rounded-2xl border border-white/5 bg-surface/70 p-6 sm:p-8">
            <h2 className="flex items-center gap-2.5 font-display text-xl font-bold text-ink">
              <svg width="22" height="22" className="text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
              1. Kenapa Velnime Dibuat?
            </h2>
            <div className="mt-4 space-y-3.5 text-sm leading-relaxed text-inkDim">
              <p>
                Pernah gak sih kalian mau santai nonton anime atau donghua, tapi baru buka aplikasi atau web langsung disambut pop-up judi online, redirect berbahaya, tombol download palsu, atau bahkan dipaksa bayar langganan premium cuma buat nonton dengan resolusi jernih dan lancar?
              </p>
              <p>
                Keresahan itu yang bikin gw memutuskan buat bangun <strong className="text-ink">Velnime</strong> dari nol.
              </p>
              <p>
                Visi utamanya sederhana: <strong className="text-accent">menghilangkan semua batasan itu</strong>. Nonton anime dan donghua harusnya jadi pengalaman yang menyenangkan dan santai. Siapa pun berhak menikmati tayangan favorit dengan UI/UX yang modern, bersih, ringan, dan 100% bebas dari segala jenis iklan mengganggu—tanpa perlu membayar sepeser pun.
              </p>
            </div>
          </section>

          {/* Seksi 2: Solo Builder & 1.400+ Commits */}
          <section className="rounded-2xl border border-white/5 bg-surface/70 p-6 sm:p-8">
            <h2 className="flex items-center gap-2.5 font-display text-xl font-bold text-ink">
              <svg width="22" height="22" className="text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
              2. 1 Bulan Penuh, Solo Developer &amp; 1.400+ Commits
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-inkDim">
              <p>
                Velnime dikerjakan secara solo oleh <a href="https://github.com/Curzyori" target="_blank" rel="noopener noreferrer" className="font-semibold text-accent hover:underline">@Curzyori</a> selama kurang lebih satu bulan pengerjaan intensif.
              </p>
              <p>
                Mulai dari mendesain arsitektur Android native modern (Jetpack Compose), membangun backend multi-provider scraper waterfall (Fastify), sistem proteksi stream zero-leak, hingga web landing page ini—seluruh repositori private monorepo mencatat lebih dari <strong className="text-ink">1.400+ commits</strong> hasil iterasi, audit performa, dan penyempurnaan tiada henti.
              </p>

              {/* Preview Gambar Commit */}
              <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0B0B14] p-2.5 shadow-xl sm:p-4">
                <div className="mb-2 flex items-center justify-between px-2 text-xs text-inkDim">
                  <span className="font-semibold text-ink">Bukti Riwayat Monorepo Commit</span>
                  <span className="text-accent font-mono">1.400+ Total Commits</span>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/preview/about_commit.png"
                  alt="Bukti 1400+ Commits Monorepo Velnime"
                  className="w-full rounded-lg border border-white/5 object-contain"
                />
              </div>
            </div>
          </section>

          {/* Seksi 3: AI Vibe Coding (Hermes Agents 90% + Claude Code 10%) */}
          <section className="rounded-2xl border border-accent/20 bg-surface/80 p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="flex items-center gap-2.5 font-display text-xl font-bold text-ink">
                <svg width="22" height="22" className="text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
                3. Paradigma Vibe Coding: 90% Hermes Agents + 10% Claude Code
              </h2>
              <span className="rounded-md bg-accent/20 px-2.5 py-1 text-xs font-bold text-accent">
                AI Engineering
              </span>
            </div>

            <div className="mt-4 space-y-4 text-sm leading-relaxed text-inkDim">
              <p>
                Membangun ekosistem sebesar ini sendirian dalam 1 bulan hanya mungkin berkat era baru <strong className="text-ink">AI Vibe Coding</strong>. Dalam proses riset, scaffolding awal, dan automasi data, <strong className="text-ink">Hermes Agents memegang 90% beban kerja eksplorasi</strong>.
              </p>
              <p>
                Namun, di tahap akhir yang paling krusial—arsitektur final, perbaikan error kompleks, optimasi pemutar video Media3 ExoPlayer, hardening keamanan Supabase, hingga penyelesaian tuntas seluruh proyek—<strong className="text-accent">Claude Code (10%) hadir sebagai eksekutor utama yang menuntaskan Velnime hingga production-ready</strong>.
              </p>

              {/* Grid Metrik Token */}
              <div className="grid gap-3 sm:grid-cols-3 pt-2">
                <div className="rounded-xl border border-white/5 bg-[#0B0B14] p-4 text-center">
                  <p className="font-display text-2xl font-bold text-accent">53.283</p>
                  <p className="mt-1 text-xs text-inkDim">Total Requests</p>
                </div>
                <div className="rounded-xl border border-white/5 bg-[#0B0B14] p-4 text-center">
                  <p className="font-display text-2xl font-bold text-sky-400">10,8 Miliar</p>
                  <p className="mt-1 text-xs text-inkDim">Total Input Tokens</p>
                </div>
                <div className="rounded-xl border border-white/5 bg-[#0B0B14] p-4 text-center">
                  <p className="font-display text-2xl font-bold text-emerald-400">~$8.061,91</p>
                  <p className="mt-1 text-xs text-inkDim">Est. Compute Cost</p>
                </div>
              </div>

              {/* Preview Gambar Token */}
              <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0B0B14] p-2.5 shadow-xl sm:p-4">
                <div className="mb-2 flex items-center justify-between px-2 text-xs text-inkDim">
                  <span className="font-semibold text-ink">Catatan Statistik Pemakaian Token AI</span>
                  <span className="text-emerald-400 font-mono">5.1 Miliar Cached Tokens</span>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/preview/about_token.png"
                  alt="Bukti Konsumsi Token AI Vibe Coding Velnime"
                  className="w-full rounded-lg border border-white/5 object-contain"
                />
              </div>
            </div>
          </section>

          {/* Seksi 4: Tech Stack Monorepo */}
          <section className="rounded-2xl border border-white/5 bg-surface/70 p-6 sm:p-8">
            <h2 className="flex items-center gap-2.5 font-display text-xl font-bold text-ink">
              <svg width="22" height="22" className="text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M7 7h10" /><path d="M7 12h10" /><path d="M7 17h10" /></svg>
              4. Arsitektur &amp; Tech Stack Velnime
            </h2>
            <div className="mt-4 grid gap-3.5 sm:grid-cols-2 text-xs sm:text-sm text-inkDim">
              <div className="rounded-xl border border-white/5 bg-[#0B0B14] p-4">
                <strong className="block mb-1 text-ink font-bold">Android Application</strong>
                Kotlin, Jetpack Compose, AndroidX Media3 / ExoPlayer, Coil Image Caching, SharedPreferences &amp; Room fallback, Coroutines Flow.
              </div>
              <div className="rounded-xl border border-white/5 bg-[#0B0B14] p-4">
                <strong className="block mb-1 text-ink font-bold">Backend &amp; Ingestion</strong>
                Node.js, Fastify microservice, Redis Caching, Multi-server stream resolver &amp; aggregator engine.
              </div>
              <div className="rounded-xl border border-white/5 bg-[#0B0B14] p-4">
                <strong className="block mb-1 text-ink font-bold">Cloud &amp; Database</strong>
                Supabase PostgreSQL, Supabase Auth (1-Click Google Sign-In), Row Level Security (RLS), Firebase Cloud Messaging (FCM).
              </div>
              <div className="rounded-xl border border-white/5 bg-[#0B0B14] p-4">
                <strong className="block mb-1 text-ink font-bold">Infrastruktur &amp; Web</strong>
                Next.js 15 (SSG), Tailwind CSS, Cloudflare Edge WAF, Dedicated Media Plane Shine NAT, Caddy Reverse Proxy.
              </div>
            </div>
          </section>

          {/* Seksi 5: Dukungan Komunitas */}
          <section className="rounded-2xl border border-accent/20 bg-surface p-6 sm:p-10 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="font-display text-2xl font-bold text-ink">
                  Dukung Velnime Tetap Bebas Iklan
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-inkDim max-w-xl">
                  Velnime berkomitmen tetap gratis tanpa monetisasi iklan kotor. Seluruh biaya server, database, domain, dan media plane ditopang oleh donasi sukarela komunitas pecinta anime di Indonesia.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Link
                  href="/donate"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 font-display text-sm font-bold text-canvas transition-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                  <span>Dukung via QRIS</span>
                </Link>
                <Link
                  href="/docs"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-surfaceSoft px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-surface"
                >
                  <span>Lihat Fitur di Docs</span>
                </Link>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
