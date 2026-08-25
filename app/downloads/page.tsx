import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Download APK Velnime — Versi Terbaru & Riwayat Rilis',
  description:
    'Download APK Velnime for Android versi terbaru gratis. Bebas iklan, streaming anime & donghua multi-resolusi, dan riwayat changelog resmi.',
  alternates: { canonical: '/downloads' },
  openGraph: {
    title: 'Download APK Velnime — Versi Terbaru',
    description: 'Download APK Velnime for Android versi terbaru gratis.',
    url: 'https://www.velnime.com/downloads',
    siteName: 'Velnime',
    type: 'website',
    locale: 'id_ID',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Velnime' }],
  },
};

const RELEASES = [
  {
    version: 'v2.0.1',
    code: '4',
    date: '25 Agustus 2026',
    tag: 'Latest Stable',
    isLatest: true,
    apkUrl: 'https://github.com/Curzyori/velnime/releases/latest',
    highlights: [
      'Arsitektur Zero-Leak Media Routing (Anti-Scraping Token & Proteksi Origin Scraper).',
      'Download Engine Offline (Unduh stream direct ke penyimpanan lokal HP).',
      '2-Phase Stream Split: Rendering UI metadata & episode instan saat video buffer.',
      'Swipe-to-delete riwayat tontonan di Library.',
      'Optimalisasi Supabase query & caching Redis.',
    ],
  },
  {
    version: 'v2.0.0',
    code: '3',
    date: '24 Agustus 2026',
    tag: 'Major Release',
    isLatest: false,
    apkUrl: 'https://github.com/Curzyori/velnime/releases/tag/v2.0.0',
    highlights: [
      'Rilis perdana katalog terpadu ODv3 (2.434 Judul & 39.196 Episode).',
      'Integrasi Dedicated Media Plane Shine NAT.',
      'Sistem Pangkat & Level Pengguna (Member Baru, Member Senior, Tetua Wibu).',
      'Komentar per episode dengan dukungan balasan & report.',
      'Dukungan Donghua China 3D terdedikasi.',
    ],
  },
];

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
          <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tighter sm:text-5xl">
            Unduh <span className="text-accent">Velnime for Android</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-inkDim sm:text-lg">
            Nonton anime &amp; donghua gratis, tanpa iklan. Selalu perbarui aplikasi ke versi terbaru untuk performa terbaik.
          </p>

          {/* Primary Download Button */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://github.com/Curzyori/velnime/releases/latest"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center gap-2.5 rounded-xl bg-accent px-8 py-3.5 font-display text-base font-bold text-canvas transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              <span>Download APK v2.0.1 (Latest)</span>
            </a>
          </div>
          <p className="mt-3 text-xs text-inkDim">Kompatibel dengan Android 8.0 (Oreo) ke atas · Ukuran ~25 MB</p>
        </section>

        {/* Release History & Changelog */}
        <section className="mt-16">
          <h2 className="flex items-center gap-2.5 font-display text-2xl font-bold text-ink">
            <svg width="22" height="22" className="text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
            Riwayat Versi &amp; Changelog
          </h2>

          <div className="mt-6 space-y-6">
            {RELEASES.map((rel) => (
              <div
                key={rel.version}
                className={`rounded-2xl border p-6 sm:p-8 transition-colors ${rel.isLatest ? 'border-accent/40 bg-surface' : 'border-white/5 bg-surface/50'}`}
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="font-display text-2xl font-bold text-ink">{rel.version}</span>
                    <span className={`rounded-md px-2.5 py-0.5 text-xs font-bold ${rel.isLatest ? 'bg-accent text-canvas' : 'bg-surfaceSoft text-inkDim'}`}>
                      {rel.tag}
                    </span>
                  </div>
                  <span className="text-xs text-inkDim">{rel.date}</span>
                </div>

                <ul className="mt-5 space-y-2 text-sm text-inkDim list-disc pl-5">
                  {rel.highlights.map((h, i) => (
                    <li key={i} className="leading-relaxed">
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-inkDim">Build #{rel.code}</span>
                  <a
                    href={rel.apkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-accent hover:underline"
                  >
                    <span>Unduh APK ({rel.version})</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
