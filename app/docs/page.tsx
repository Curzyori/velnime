import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dokumentasi & Fitur Lengkap Aplikasi Velnime',
  description:
    'Panduan lengkap fitur Velnime: sistem pangkat & rank, badge donatur, fitur sosial komentar, download offline, filter anime/donghua, dan Velnime Stream.',
  alternates: { canonical: '/docs' },
  openGraph: {
    title: 'Dokumentasi & Fitur Lengkap Aplikasi Velnime',
    description: 'Panduan lengkap fitur Velnime: rank sosial, badge donatur, download offline, dan stream engine.',
    url: 'https://www.velnime.com/docs',
    siteName: 'Velnime',
    type: 'website',
    locale: 'id_ID',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Velnime' }],
  },
};

export default function DocsPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <div className="mx-auto w-full max-w-4xl flex-1 px-4 py-12 sm:px-6 sm:py-16">
        
        {/* Header Title */}
        <div className="border-b border-white/10 pb-8 text-center sm:text-left">
          <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accentFaded px-3.5 py-1 text-xs font-semibold text-accent">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
            Panduan &amp; Spesifikasi Fitur
          </span>
          <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl text-ink">
            Fitur &amp; Ekosistem Aplikasi Velnime
          </h1>
          <p className="mt-3 text-base text-inkDim">
            Pelajari seluruh fitur bawaan, sistem sosial komunitas, tingkat pangkat, dan arsitektur pemutar video di aplikasi Velnime Android.
          </p>
          
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="https://github.com/Curzyori/velnime/releases/latest"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 font-display text-sm font-bold text-canvas transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              <span>Unduh APK Terbaru (v2.0.1)</span>
            </a>
            <Link
              href="/downloads"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-surface px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-surfaceSoft"
            >
              <span>Lihat Riwayat Versi</span>
            </Link>
          </div>
        </div>

        {/* Content Sections */}
        <div className="mt-10 space-y-12">
          
          {/* Section 1: Sistem Pangkat & Level Akun */}
          <section className="scroll-mt-24" id="pangkat">
            <h2 className="flex items-center gap-2.5 font-display text-xl font-bold text-ink">
              <svg width="20" height="20" className="text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
              1. Sistem Pangkat &amp; Level Pengguna
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-inkDim">
              Setiap pengguna yang masuk menggunakan Google otomatis mendapatkan nomor urut akun permanen (misal: <code>#1</code>, <code>#42</code>) dan pangkat kehormatan yang meningkat seiring durasi keanggotaan:
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-white/5 bg-surface p-4">
                <p className="font-bold text-ink">Member Baru</p>
                <p className="mt-1 text-xs text-inkDim">Hari ke 1 s/d 30 sejak akun dibuat. Mulai eksplorasi dan beri komentar.</p>
              </div>
              <div className="rounded-xl border border-white/5 bg-surface p-4">
                <p className="font-bold text-sky-400">Member Senior</p>
                <p className="mt-1 text-xs text-inkDim">Bulan ke-2 s/d ke-6. Progress bar pangkat di profil mencapai 100%.</p>
              </div>
              <div className="rounded-xl border border-white/5 bg-surface p-4">
                <p className="font-bold text-purple-400">Tetua Wibu</p>
                <p className="mt-1 text-xs text-inkDim">Lebih dari 6 bulan bersama Velnime. Pangkat tertinggi dengan apresiasi komunitas.</p>
              </div>
            </div>
          </section>

          {/* Section 2: Hierarki Badge Donatur */}
          <section className="scroll-mt-24" id="badges">
            <h2 className="flex items-center gap-2.5 font-display text-xl font-bold text-ink">
              <svg width="20" height="20" className="text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              2. Hierarki Badge &amp; Status Supporter
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-inkDim">
              Donasi pengguna mendukung keberlangsungan server dan pengembangan. Pengguna yang berdonasi mendapatkan badge khusus yang tampil di avatar, leaderboard, dan kolom komentar:
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-amber-500/20 bg-surface p-4">
                <div className="flex items-center gap-2">
                  <span className="rounded bg-amber-400 px-2 py-0.5 text-xs font-black text-black">FOUNDER</span>
                  <span className="text-xs text-inkDim">Akses Abadi</span>
                </div>
                <p className="mt-2 text-xs text-inkDim">Diberikan khusus untuk penyokong awal berdirinya Velnime dengan border avatar emas berkilau.</p>
              </div>
              <div className="rounded-xl border border-amber-400/20 bg-surface p-4">
                <div className="flex items-center gap-2">
                  <span className="rounded bg-amber-500 px-2 py-0.5 text-xs font-bold text-black">SUPPORTER</span>
                  <span className="text-xs text-inkDim">Aktif 30 Hari</span>
                </div>
                <p className="mt-2 text-xs text-inkDim">Cukup donasi mulai Rp 5.000 via QRIS. Membuka streaming resolusi penuh 1080p dan kuota komentar bebas.</p>
              </div>
              <div className="rounded-xl border border-white/5 bg-surface p-4">
                <div className="flex items-center gap-2">
                  <span className="rounded bg-yellow-400 px-2 py-0.5 text-xs font-bold text-black">TOP 1 / TOP 2 / TOP 3</span>
                </div>
                <p className="mt-2 text-xs text-inkDim">Tampil otomatis di podium Leaderboard dan disorot sebagai donatur teratas minggu/bulan ini.</p>
              </div>
              <div className="rounded-xl border border-white/5 bg-surface p-4">
                <div className="flex items-center gap-2">
                  <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-xs font-bold text-emerald-400">VERIFIED</span>
                </div>
                <p className="mt-2 text-xs text-inkDim">Tanda centang terverifikasi otomatis untuk akun yang terhubung aman dengan Google Auth.</p>
              </div>
            </div>
          </section>

          {/* Section 3: Fitur Sosial & Komunitas */}
          <section className="scroll-mt-24" id="social">
            <h2 className="flex items-center gap-2.5 font-display text-xl font-bold text-ink">
              <svg width="20" height="20" className="text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              3. Fitur Komentar, Rating, &amp; Profil Publik
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-inkDim">
              <div className="rounded-xl border border-white/5 bg-surface p-4">
                <strong className="text-ink">Komentar &amp; Balasan:</strong> Diskusikan alur cerita episode secara real-time. Mendukung balasan 1-level, sort Komentar Top/Terbaru/Saya, serta avatar ber-GIF.
              </div>
              <div className="rounded-xl border border-white/5 bg-surface p-4">
                <strong className="text-ink">Beri Rating Bintang 1 s/d 5:</strong> Rating kamu langsung diagregasi ke database untuk menyusun urutan Anime Terpopuler.
              </div>
              <div className="rounded-xl border border-white/5 bg-surface p-4">
                <strong className="text-ink">Profil Publik Aman:</strong> Tap avatar pengguna lain di kolom komentar untuk melihat kartu identitas, tanggal bergabung, dan lencana rank mereka tanpa membocorkan data pribadi.
              </div>
            </div>
          </section>

          {/* Section 4: Fitur Pemutar & Katalog */}
          <section className="scroll-mt-24" id="features">
            <h2 className="flex items-center gap-2.5 font-display text-xl font-bold text-ink">
              <svg width="20" height="20" className="text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              4. Fitur Pemutar Video &amp; Manajemen Katalog
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 text-sm text-inkDim">
              <div className="rounded-xl border border-white/5 bg-surface p-4">
                <strong className="text-ink block mb-1">Filter Anime vs Donghua</strong>
                Navigasi terpisah di beranda untuk Anime Jepang (2D) dan Donghua China (3D). Mode katalog dapat dikunci di Pengaturan.
              </div>
              <div className="rounded-xl border border-white/5 bg-surface p-4">
                <strong className="text-ink block mb-1">Velnime Stream Engine</strong>
                Multi-server waterfall otomatis (beberapa sumber streaming). Jika 1 server lag, otomatis beralih ke server cadangan dalam 8 detik.
              </div>
              <div className="rounded-xl border border-white/5 bg-surface p-4">
                <strong className="text-ink block mb-1">Download Offline Mode</strong>
                Simpan episode ke penyimpanan HP untuk ditonton saat bepergian tanpa koneksi internet.
              </div>
              <div className="rounded-xl border border-white/5 bg-surface p-4">
                <strong className="text-ink block mb-1">Gesture YouTube &amp; Miniplayer</strong>
                Double tap sisi kanan (+10s) dan sisi kiri (-10s). Swipe ke bawah untuk menonton dalam miniplayer melayang.
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
