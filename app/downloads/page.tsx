import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Download APK Velnime — Pusat Unduhan Resmi',
  description:
    'Download APK Velnime for Android. Bebas iklan, streaming anime & donghua multi-resolusi, dan sistem cloud sync terpadu.',
  alternates: { canonical: '/downloads' },
  openGraph: {
    title: 'Download APK Velnime — Pusat Unduhan Resmi',
    description: 'Download APK Velnime for Android. Bebas iklan dan streaming lancar.',
    url: 'https://www.velnime.com/downloads',
    siteName: 'Velnime',
    type: 'website',
    locale: 'id_ID',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Velnime' }],
  },
};

export default function DownloadsPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <div className="mx-auto w-full max-w-4xl flex-1 px-4 py-12 sm:px-6 sm:py-16">

        {/* Header Hero */}
        <section className="text-center">
          <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accentFaded px-4 py-1.5 text-xs font-semibold text-accent">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Pusat Unduhan Resmi
          </span>
          <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tighter text-ink sm:text-5xl">
            Unduh <span className="text-accent">Velnime for Android</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-inkDim sm:text-lg">
            Nonton anime &amp; donghua gratis, tanpa iklan. Nikmati pengalaman streaming lancar dan download offline langsung di HP kamu.
          </p>

          {/* Primary Download Button (Pre-Release) */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <span
              className="inline-flex min-h-12 items-center gap-2.5 rounded-xl border border-white/10 bg-surface px-8 py-3.5 font-display text-base font-bold text-inkDim cursor-not-allowed"
              title="Aplikasi sedang dalam tahap persiapan rilis publik"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <span>Aplikasi Segera Rilis</span>
            </span>
          </div>
          <p className="mt-3 text-xs text-inkDim">Tahap audit &amp; finalisasi sistem sedang berlangsung · Pantau untuk jadwal rilis publik</p>
        </section>

        {/* Pre-Release Information Box */}
        <section className="mt-14">
          <div className="rounded-2xl border border-white/5 bg-surface/60 p-6 sm:p-8 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="font-display text-lg font-bold text-ink">Informasi Rilis Resmi</h2>
                <p className="mt-1 text-sm text-inkDim">
                  Paket APK resmi dan catatan pembaruan versi (changelog) akan dipublikasikan di halaman ini saat peluncuran resmi Velnime Android dibuka untuk umum.
                </p>
              </div>
              <Link
                href="/docs"
                className="shrink-0 rounded-xl bg-surfaceSoft border border-white/10 px-4 py-2.5 text-xs font-semibold text-ink transition-colors hover:bg-surface hover:text-accent"
              >
                Pelajari Fitur di Docs
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
