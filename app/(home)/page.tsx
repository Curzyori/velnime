import Link from 'next/link';
import StatsBar from '@/components/StatsBar';

export default function HomePage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <div className="mx-auto w-full max-w-6xl flex-1 px-4 sm:px-6">

        {/* Hero Section */}
        <section className="flex flex-col items-center py-20 text-center sm:py-28">
          <span className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accentFaded px-4 py-1.5 text-xs font-semibold text-accent">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
            Gratis · Bebas Iklan · Didukung Komunitas
          </span>
          <h1 className="font-display max-w-3xl text-4xl font-bold leading-[1.05] tracking-tighter text-ink sm:text-6xl">
            Streaming anime &amp; donghua,
            <span className="text-accent"> tanpa gangguan.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-inkDim sm:text-lg">
            Velnime adalah aplikasi Android untuk menonton anime Jepang dan donghua China 3D secara gratis.
            Koleksi 2.400+ judul lengkap, multi-resolusi hingga 1080p, dan pengalaman 100% bebas iklan.
          </p>

          {/* Action Buttons: Dukung + Segera Hadir APK & Play Store */}
          <div className="mt-10 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <Link
              href="/donate"
              className="inline-flex min-h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-accent px-7 py-3.5 font-display text-sm font-bold text-canvas transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <span>Dukung Velnime</span>
            </Link>

            {/* APK Android — Segera Hadir */}
            <span
              className="inline-flex min-h-12 w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl border border-white/10 bg-surface px-6 py-3.5 font-display text-sm font-semibold text-inkDim cursor-not-allowed"
              title="Paket APK Android segera dirilis resmi"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              <span>APK Android (Segera Hadir)</span>
            </span>

            {/* Google Play Store — Segera Hadir */}
            <span
              className="inline-flex min-h-12 w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl border border-white/10 bg-surface px-6 py-3.5 font-display text-sm font-semibold text-inkDim cursor-not-allowed"
              title="Google Play Store sedang dalam proses peninjauan"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M3.609 1.814L13.792 12 3.61 22.186c-.37-.367-.61-.958-.61-1.686V3.5c0-.728.24-1.319.609-1.686zM15.207 13.414l2.76 2.76-12.91 7.234 10.15-9.994zm0-2.828L5.057.592l12.91 7.234-2.76 2.76zm1.414 1.414l3.771-2.112c.983-.55 1.608-.184 1.608.928v2.368c0 1.112-.625 1.478-1.608.928l-3.771-2.112z"/>
              </svg>
              <span>Play Store (Segera Hadir)</span>
            </span>
          </div>

          <StatsBar />
        </section>

        {/* Fitur Grid Section */}
        <section id="fitur" className="scroll-mt-24 py-16 sm:py-24 border-t border-white/5">
          <h2 className="font-display text-center text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Kenapa Memilih <span className="text-accent">Velnime</span>?
          </h2>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              }
              title="Velnime Stream Engine"
              desc="Multi-server waterfall otomatis (beberapa sumber streaming). Bebas buffering dengan opsi kualitas dari 360p hingga full 1080p."
            />
            <FeatureCard
              icon={
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h10"/><path d="M7 12h10"/><path d="M7 17h10"/></svg>
              }
              title="Donghua China 3D Terpisah"
              desc="Tab terdedikasi khusus untuk donghua China (Soul Land, Perfect World, dsb) dengan streaming HLS multi-resolusi dan jadwal update harian."
            />
            <FeatureCard
              icon={
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>
              }
              title="100% Bebas Iklan"
              desc="Tanpa banner mengganggu, pop-up judi, atau redirect iklan. Seluruh biaya server didukung murni oleh donasi sukarela komunitas."
            />
            <FeatureCard
              icon={
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              }
              title="Download Offline"
              desc="Unduh episode favorit langsung ke penyimpanan HP melalui Download Engine terintegrasi untuk ditonton tanpa kuota internet."
            />
            <FeatureCard
              icon={
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              }
              title="Komunitas & Pangkat Sosial"
              desc="Komentar per episode, balasan, rating bintang 1-5, lencana badge donatur, dan tingkat pangkat akun berdasarkan durasi keanggotaan."
            />
            <FeatureCard
              icon={
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              }
              title="Privasi & Zero-Leak"
              desc="Arsitektur Opaque Token melindungi privasi Anda. Login Google aman tanpa password dan sinkronisasi data cloud otomatis."
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24">
          <div className="rounded-2xl border border-accent/20 bg-surface p-10 text-center sm:p-16">
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-4xl">
              Dukung Velnime Tetap Aktif
            </h2>
            <p className="mx-auto mt-4 max-w-md text-inkDim">
              Server, dedicated media plane, dan operasional butuh biaya. Donasi mulai Rp 5.000 via QRIS otomatis.
            </p>
            <Link
              href="/donate"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-3.5 font-display text-sm font-bold text-canvas transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Donasi Sekarang</span>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="rounded-xl border border-white/5 bg-surface p-6 transition-colors duration-200 hover:border-accent/30 hover:bg-surfaceSoft">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-surfaceSoft text-accent" aria-hidden="true">
        {icon}
      </div>
      <h3 className="font-display text-lg font-bold text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-inkDim">{desc}</p>
    </div>
  );
}
