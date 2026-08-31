import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dokumentasi & Panduan Fitur Velnime',
  description:
    'Panduan lengkap fitur Velnime: sistem akun & mode tamu, perbandingan Free vs Supporter tier, video player & gesture, download offline, jadwal rilis, serta sistem pangkat akun.',
  alternates: { canonical: '/docs' },
  openGraph: {
    title: 'Dokumentasi & Panduan Fitur Velnime',
    description: 'Panduan lengkap fitur aplikasi Velnime Android: player, cloud sync, download offline, tier supporter, dan sistem pangkat.',
    url: 'https://www.velnime.com/docs',
    siteName: 'Velnime',
    type: 'website',
    locale: 'id_ID',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Velnime' }],
  },
};

const TOC_LINKS = [
  { id: 'akses-akun', title: '1. Akses Akun & Mode Tamu' },
  { id: 'tier-perbandingan', title: '2. Free vs Supporter Tier' },
  { id: 'sistem-pangkat', title: '3. Sistem Pangkat & Nomor Akun' },
  { id: 'video-player', title: '4. Video Player & Streaming' },
  { id: 'download-offline', title: '5. Download & Mode Offline' },
  { id: 'katalog-sync', title: '6. Katalog, Jadwal & Cloud Sync' },
];

export default function DocsPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <div className="mx-auto w-full max-w-4xl flex-1 px-4 py-12 sm:px-6 sm:py-16">

        {/* Header Title */}
        <div className="border-b border-white/10 pb-8">
          <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accentFaded px-3.5 py-1 text-xs font-semibold text-accent">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
            Pusat Panduan &amp; Dokumentasi
          </span>
          <h1 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Panduan Fitur &amp; Ekosistem Velnime
          </h1>
          <p className="mt-3 text-base leading-relaxed text-inkDim">
            Pelajari seluruh alur penggunaan aplikasi Velnime: sistem akun &amp; mode tamu, perbedaan tier resolusi, sistem pangkat keanggotaan, video player, serta sinkronisasi cloud.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/downloads"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              <span>Download APK Android</span>
            </Link>
            <Link
              href="/donate"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-surfaceSoft px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-surface"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <span>Upgrade Supporter</span>
            </Link>
          </div>
        </div>

        {/* Quick Jump Navigation (TOC) */}
        <div className="my-8 rounded-2xl border border-white/5 bg-surface/60 p-4 sm:p-5">
          <p className="mb-3 text-xs font-bold uppercase tracking-wider text-inkDim">Navigasi Cepat</p>
          <div className="grid gap-2 sm:grid-cols-2 sm:gap-3">
            {TOC_LINKS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="flex items-center gap-2 rounded-lg bg-surface px-3.5 py-2 text-xs font-medium text-inkDim transition-colors hover:bg-surfaceSoft hover:text-accent sm:text-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent/60" />
                <span>{item.title}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">

          {/* Section 1: Akses Akun & Mode Tamu */}
          <section className="scroll-mt-24" id="akses-akun">
            <h2 className="flex items-center gap-2.5 font-display text-xl font-bold text-ink">
              <svg width="20" height="20" className="text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              1. Akses Akun &amp; Mode Tamu (Guest Mode)
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-inkDim">
              Velnime dirancang praktis tanpa form pendaftaran manual. Pengguna dapat memilih mode tamu untuk melihat katalog atau login untuk akses streaming:
            </p>
            <div className="mt-4 grid gap-3.5 sm:grid-cols-2">
              <div className="rounded-xl border border-white/5 bg-surface p-4">
                <div className="flex items-center gap-2">
                  <span className="rounded bg-white/10 px-2 py-0.5 text-xs font-bold text-ink">Mode Tamu (Guest)</span>
                  <span className="text-xs text-amber-400">Browsing Only</span>
                </div>
                <p className="mt-2.5 text-xs leading-relaxed text-inkDim">
                  Bebas melihat cover, sinopsis anime/donghua, daftar episode, genre, dan jadwal rilis mingguan. Saat menekan tombol Play / Episode, muncul prompt <strong>Login Gate</strong>. Mode tamu tidak dapat streaming video, download, atau memberi komentar.
                </p>
              </div>

              <div className="rounded-xl border border-accent/20 bg-surface p-4">
                <div className="flex items-center gap-2">
                  <span className="rounded bg-accent/20 px-2 py-0.5 text-xs font-bold text-accent">1-Klik Google Login</span>
                  <span className="text-xs text-emerald-400">Akses Penuh</span>
                </div>
                <p className="mt-2.5 text-xs leading-relaxed text-inkDim">
                  Cukup 1x klik akun Google tanpa input password. Membuka akses streaming gratis, download offline, sinkronisasi bookmark &amp; riwayat tonton antar perangkat, serta nomor urut akun permanen.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Free vs Supporter Tier */}
          <section className="scroll-mt-24" id="tier-perbandingan">
            <h2 className="flex items-center gap-2.5 font-display text-xl font-bold text-ink">
              <svg width="20" height="20" className="text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              2. Perbandingan Free Member vs Supporter Tier
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-inkDim">
              Seluruh katalog anime &amp; donghua dapat ditonton secara gratis. Donasi sukarela mendukung biaya operasional server dan membuka benefit resolusi penuh:
            </p>

            <div className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-surface">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="border-b border-white/10 bg-surfaceSoft/60 text-ink">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Fitur / Layanan</th>
                      <th className="px-4 py-3 font-semibold text-inkDim">Free Member (Gratis)</th>
                      <th className="px-4 py-3 font-semibold text-amber-400">Supporter Tier</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-inkDim">
                    <tr>
                      <td className="px-4 py-3 font-medium text-ink">Akses Nonton Seluruh Judul</td>
                      <td className="px-4 py-3 text-emerald-400">Tersedia (Bebas)</td>
                      <td className="px-4 py-3 text-emerald-400">Tersedia (Bebas)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-ink">Maksimal Resolusi Streaming</td>
                      <td className="px-4 py-3">Hingga <strong>720p HD</strong></td>
                      <td className="px-4 py-3 font-semibold text-amber-300">Full 1080p Full HD</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-ink">Kualitas Download Offline</td>
                      <td className="px-4 py-3">Maksimal 720p</td>
                      <td className="px-4 py-3 font-semibold text-amber-300">Maksimal 1080p</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-ink">Batas Diskusi Komentar</td>
                      <td className="px-4 py-3">Kuota wajar + rate limit</td>
                      <td className="px-4 py-3 text-ink">Bebas tanpa jeda ketat</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-ink">Lencana &amp; Identitas</td>
                      <td className="px-4 py-3">Badge pangkat penonton</td>
                      <td className="px-4 py-3 font-semibold text-amber-400">Badge SUPPORTER Emas</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-ink">Sorotan Leaderboard</td>
                      <td className="px-4 py-3">Papan Top Watcher</td>
                      <td className="px-4 py-3 font-semibold text-amber-300">Podium Top Donatur</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-ink">Biaya &amp; Aktivasi</td>
                      <td className="px-4 py-3">Rp 0 (Login Google)</td>
                      <td className="px-4 py-3 text-ink">Mulai Rp 5.000 via QRIS (Aktif 30 Hari)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Section 3: Sistem Pangkat & Nomor Akun */}
          <section className="scroll-mt-24" id="sistem-pangkat">
            <h2 className="flex items-center gap-2.5 font-display text-xl font-bold text-ink">
              <svg width="20" height="20" className="text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
              3. Sistem Pangkat Akun &amp; Nomor Identitas
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-inkDim">
              Saat pertama kali login, setiap pengguna mendapatkan <strong>Nomor Urut Akun Permanen</strong> (misal: <code>#1</code>, <code>#42</code>, <code>#500</code>) yang tersimpan di database Supabase. Pangkat pengguna dihitung otomatis berdasarkan durasi keanggotaan akun:
            </p>

            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl border border-white/5 bg-surface p-4">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-ink">Level 1 · Pemula</span>
                  <span className="rounded bg-white/10 px-2 py-0.5 text-[10px] font-semibold text-inkDim">&lt; 1 Bulan</span>
                </div>
                <p className="mt-2 text-xs text-inkDim">Tahap awal bergabung. Mulai jelajahi katalog anime/donghua dan buat bookmark.</p>
              </div>

              <div className="rounded-xl border border-sky-500/20 bg-surface p-4">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sky-400">Level 2 · Warga Velnime</span>
                  <span className="rounded bg-sky-500/10 px-2 py-0.5 text-[10px] font-semibold text-sky-300">1 – 3 Bulan</span>
                </div>
                <p className="mt-2 text-xs text-inkDim">Anggota aktif komunitas. Progress bar pangkat di profil mencapai tahap kedua.</p>
              </div>

              <div className="rounded-xl border border-indigo-500/20 bg-surface p-4">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-indigo-400">Level 3 · Penjelajah Anime</span>
                  <span className="rounded bg-indigo-500/10 px-2 py-0.5 text-[10px] font-semibold text-indigo-300">3 – 6 Bulan</span>
                </div>
                <p className="mt-2 text-xs text-inkDim">Penonton setia dengan koleksi riwayat tontonan lintas genre dan kategori.</p>
              </div>

              <div className="rounded-xl border border-purple-500/20 bg-surface p-4">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-purple-400">Level 4 · Veteran</span>
                  <span className="rounded bg-purple-500/10 px-2 py-0.5 text-[10px] font-semibold text-purple-300">6 – 12 Bulan</span>
                </div>
                <p className="mt-2 text-xs text-inkDim">Anggota senior yang telah aktif mengikuti perkembangan rilisan serial selama lebih dari setengah tahun.</p>
              </div>

              <div className="rounded-xl border border-amber-500/30 bg-surface p-4 sm:col-span-2 lg:col-span-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-amber-400">Level 5 · Legend</span>
                  <span className="rounded bg-amber-500/20 px-2 py-0.5 text-[10px] font-semibold text-amber-300">&gt; 12 Bulan (1 Tahun+)</span>
                </div>
                <p className="mt-2 text-xs text-inkDim">Tingkat pangkat tertinggi (Progress Bar 100%). Menandakan dedikasi jangka panjang bersama ekosistem Velnime.</p>
              </div>
            </div>
          </section>

          {/* Section 4: Video Player & Streaming */}
          <section className="scroll-mt-24" id="video-player">
            <h2 className="flex items-center gap-2.5 font-display text-xl font-bold text-ink">
              <svg width="20" height="20" className="text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              4. Fitur Pemutar Video &amp; Streaming Player
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-inkDim">
              Engine pemutar video Velnime berbasis Android Media3 / ExoPlayer dengan performa stabil dan minim lag:
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 text-sm text-inkDim">
              <div className="rounded-xl border border-white/5 bg-surface p-4">
                <strong className="block mb-1 text-ink">Multi-Server &amp; Auto-Fallback</strong>
                Pilihan beberapa server streaming. Jika satu server mengalami gangguan, sistem otomatis beralih ke server cadangan.
              </div>
              <div className="rounded-xl border border-white/5 bg-surface p-4">
                <strong className="block mb-1 text-ink">Kontrol Gesture Cepat</strong>
                Double tap sisi kanan/kiri untuk maju/mundur 10 detik. Swipe vertikal sisi kanan untuk volume dan sisi kiri untuk kecerahan layar.
              </div>
              <div className="rounded-xl border border-white/5 bg-surface p-4">
                <strong className="block mb-1 text-ink">Rasio Layar &amp; Kecepatan</strong>
                Pilihan rasio tampilan (Fit, Fill / Zoom, Stretch) dan pengatur kecepatan putar (0.5x s/d 2.0x).
              </div>
              <div className="rounded-xl border border-white/5 bg-surface p-4">
                <strong className="block mb-1 text-ink">MiniPlayer &amp; Picture-in-Picture (PiP)</strong>
                Tontonan melayang di bawah layar saat mencari judul lain, atau tonton di luar aplikasi dengan native Android PiP.
              </div>
              <div className="rounded-xl border border-white/5 bg-surface p-4 sm:col-span-2">
                <strong className="block mb-1 text-ink">Lanjut Nonton Otomatis (Resume Playback)</strong>
                Menyimpan posisi detik terakhir secara presisi sehingga kamu bisa langsung melanjutkan episode tanpa mencari timeline manual.
              </div>
            </div>
          </section>

          {/* Section 5: Download & Mode Offline */}
          <section className="scroll-mt-24" id="download-offline">
            <h2 className="flex items-center gap-2.5 font-display text-xl font-bold text-ink">
              <svg width="20" height="20" className="text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              5. Download Offline &amp; Penghematan Kuota
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-inkDim">
              <div className="rounded-xl border border-white/5 bg-surface p-4">
                <strong className="text-ink">Download di Latar Belakang:</strong> Unduh episode favorit ke memori HP melalui menu Detail Episode. Status progress unduhan terpantau jelas di bar notifikasi HP.
              </div>
              <div className="rounded-xl border border-white/5 bg-surface p-4">
                <strong className="text-ink">Koleksi di Tab Library:</strong> Episode yang telah selesai diunduh dapat langsung diputar dari Tab Library &gt; Offline tanpa membutuhkan kuota internet.
              </div>
              <div className="rounded-xl border border-white/5 bg-surface p-4">
                <strong className="text-ink">Proteksi Download Hanya Wi-Fi:</strong> Aktifkan opsi <em>&quot;Download Hanya Lewat Wi-Fi&quot;</em> di menu Pengaturan untuk mencegah kuota data seluler terpakai tanpa sengaja.
              </div>
            </div>
          </section>

          {/* Section 6: Katalog, Jadwal & Cloud Sync */}
          <section className="scroll-mt-24" id="katalog-sync">
            <h2 className="flex items-center gap-2.5 font-display text-xl font-bold text-ink">
              <svg width="20" height="20" className="text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              6. Manajemen Katalog, Jadwal Rilis &amp; Cloud Sync
            </h2>
            <div className="mt-4 grid gap-3.5 sm:grid-cols-2 text-sm text-inkDim">
              <div className="rounded-xl border border-white/5 bg-surface p-4">
                <strong className="block mb-1 text-ink">Katalog Anime &amp; Donghua</strong>
                Pemisahan navigasi Anime Jepang (2D) dan Donghua China (3D). Mode katalog dapat dikunci di Pengaturan (<em>Semua / Anime Saja / Donghua Saja</em>).
              </div>
              <div className="rounded-xl border border-white/5 bg-surface p-4">
                <strong className="block mb-1 text-ink">Jadwal Rilis Mingguan</strong>
                Kalender rilis episode baru terstruktur dari hari Senin hingga Minggu agar kamu tidak ketinggalan jadwal tayang judul favorit.
              </div>
              <div className="rounded-xl border border-white/5 bg-surface p-4">
                <strong className="block mb-1 text-ink">Sinkronisasi Cloud Otomatis</strong>
                Daftar Bookmark (Tersimpan), Riwayat Tontonan, dan Pengaturan tersinkronisasi aman ke cloud Supabase saat login Google.
              </div>
              <div className="rounded-xl border border-white/5 bg-surface p-4">
                <strong className="block mb-1 text-ink">Pencarian &amp; Filter Genre</strong>
                Cari judul anime dengan pencarian instan, riwayat pencarian cloud, serta direktori puluhan kategori genre lengkap.
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
