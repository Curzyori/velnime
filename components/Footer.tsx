import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-canvas/60 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 sm:gap-8">
          {/* Kolom Kiri: Brand, Lokasi, Kontak & Social Media */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-2 font-display text-lg font-bold tracking-tight">
              {/* eslint-disable-next-line @next/next/no-img-element -- static export */}
              <img src="/favicon.svg" alt="Velnime" width={26} height={26} className="rounded-lg" />
              <span className="bg-gradient-to-r from-white via-white/90 to-accent bg-clip-text text-transparent">velnime.com</span>
            </Link>

            <p className="text-xs leading-relaxed text-inkDim max-w-sm">
              Platform streaming anime &amp; donghua gratis, 100% bebas iklan. Didukung penuh oleh donasi komunitas pecinta anime Indonesia.
            </p>

            <div className="space-y-1 text-xs text-inkDim">
              <div className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent shrink-0"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>Kubu Raya, Kalimantan Barat, Indonesia</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent shrink-0"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                <a href="mailto:admin@velnime.com" className="transition-colors hover:text-ink">admin@velnime.com</a>
              </div>
            </div>

            {/* 4 Official Social Media Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-2">
              {/* Discord */}
              <a
                href="https://discord.gg/VzdCY7HK7f"
                target="_blank"
                rel="noopener noreferrer"
                title="Discord Community"
                className="inline-flex items-center gap-1.5 rounded-xl border border-white/5 bg-surface/60 px-3 py-1.5 text-xs font-semibold text-inkDim transition-all hover:border-accent/40 hover:bg-surface hover:text-accent"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6h0a14.5 14.5 0 0 0-4-1.5 10 10 0 0 0-4 1.5M6 6s-2 4-2 9 3 4 5 4a11 11 0 0 0 2-3M18 6s2 4 2 9-3 4-5 4a11 11 0 0 1-2-3"/><circle cx="9" cy="12" r="1"/><circle cx="15" cy="12" r="1"/></svg>
                <span>Discord</span>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/velnimeapp"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram @velnimeapp"
                className="inline-flex items-center gap-1.5 rounded-xl border border-white/5 bg-surface/60 px-3 py-1.5 text-xs font-semibold text-inkDim transition-all hover:border-accent/40 hover:bg-surface hover:text-accent"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x1-alt="x1" y1="6.5" x2="17.51" y2="6.5"/></svg>
                <span>Instagram</span>
              </a>

              {/* Threads */}
              <a
                href="https://threads.net/@velnimeapp"
                target="_blank"
                rel="noopener noreferrer"
                title="Threads @velnimeapp"
                className="inline-flex items-center gap-1.5 rounded-xl border border-white/5 bg-surface/60 px-3 py-1.5 text-xs font-semibold text-inkDim transition-all hover:border-accent/40 hover:bg-surface hover:text-accent"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16 12a4 4 0 1 0-8 0c0 3 2 4 4 4 1.5 0 2.5-.5 3-1.5"/><path d="M12 8c2.2 0 4 1.8 4 4v1c0 1.5-.5 3-2.5 3"/></svg>
                <span>Threads</span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Curzyori/velnime"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Repository"
                className="inline-flex items-center gap-1.5 rounded-xl border border-white/5 bg-surface/60 px-3 py-1.5 text-xs font-semibold text-inkDim transition-all hover:border-accent/40 hover:bg-surface hover:text-ink"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Kolom Kanan: Navigasi Cepat, Legalitas & Copyright */}
          <div className="flex flex-col justify-between sm:items-end space-y-6">
            {/* Legal & Policy Links */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-inkDim">
              <Link href="/privacy" className="transition-colors hover:text-ink">
                Privacy Policy
              </Link>
              <Link href="/tos" className="transition-colors hover:text-ink">
                Terms of Service
              </Link>
              <Link href="/dmca" className="transition-colors hover:text-ink">
                DMCA Notice
              </Link>
            </div>

            {/* Copyright Note */}
            <div className="space-y-1 text-xs text-inkDim sm:text-right">
              <p>
                © {new Date().getFullYear()} Velnime. Dikembangkan secara mandiri oleh{' '}
                <a href="https://github.com/Curzyori" target="_blank" rel="noopener noreferrer" className="font-semibold text-accent hover:underline">
                  Curzyori
                </a>.
              </p>
              <p className="text-[11px] text-inkDim/70">
                Semua merek dagang anime &amp; donghua adalah milik pemegang lisensi masing-masing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
