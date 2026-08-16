import Link from 'next/link';
import StatsBar from '@/components/StatsBar';

export default function HomePage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <div className="mx-auto w-full max-w-6xl flex-1 px-4 sm:px-6">
        {/* Hero */}
        <section className="flex flex-col items-center py-24 text-center sm:py-32">
          <span className="mb-6 rounded-full border border-accent/30 bg-accentFaded px-4 py-1.5 text-xs font-semibold text-accent">
            Gratis · Tanpa Iklan · Open Source
          </span>
          <h1 className="font-display max-w-3xl text-4xl font-bold leading-[1.05] tracking-tighter sm:text-6xl">
            Streaming anime & baca komik,
            <span className="text-accent"> tanpa gangguan.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-inkDim sm:text-lg">
            Velnime adalah aplikasi Android untuk nonton anime dan baca komik secara gratis.
            Koleksi lengkap, update cepat, dan pengalaman bebas iklan.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Link
              href="/donate"
              className="rounded-xl bg-accent px-8 py-3.5 font-display text-sm font-bold text-canvas transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              Dukung Velnime
            </Link>
            <span
              className="rounded-xl border border-white/10 bg-surface px-8 py-3.5 font-display text-sm font-bold text-inkDim"
              title="APK belum rilis — pantau GitHub"
            >
              Segera Rilis
            </span>
          </div>
          <StatsBar />
        </section>

        {/* Fitur */}
        <section id="fitur" className="scroll-mt-24 py-16 sm:py-24">
          <h2 className="font-display text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Kenapa <span className="text-accent">Velnime</span>?
          </h2>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon="▶"
              title="Streaming Lancar"
              desc="Player bawaan dengan kualitas pilihan, dari 360p sampai full HD. Free sampai 720p, supporter sampai 1080p. Lanjutkan nonton di episode terakhir."
            />
            <FeatureCard
              icon="📚"
              title="Komik Lengkap"
              desc="Baca manga dan manhwa favoritmu dengan pembaca nyaman, mode gelap, dan riwayat otomatis."
            />
            <FeatureCard
              icon="🚫"
              title="Bebas Iklan"
              desc="Tanpa iklan mengganggu. Pengalaman bersih didukung donasi dari pengguna."
            />
            <FeatureCard
              icon="⚡"
              title="Update Cepat"
              desc="Episode baru muncul segera setelah rilis. Jadwal update harian yang konsisten."
            />
            <FeatureCard
              icon="🔒"
              title="Privasi Terjaga"
              desc="Data kamu aman. Login opsional — anonim sepenuhnya didukung, guest bisa browse tanpa akun."
            />
            <FeatureCard
              icon="💖"
              title="Didukung Komunitas"
              desc="Dibangun oleh developer independen. Setiap donasi membantu server dan pengembangan."
            />
          </div>
        </section>

        {/* Preview */}
        <section id="preview" className="scroll-mt-24 py-16 sm:py-24">
          <h2 className="font-display text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Lihat <span className="text-accent">Tampilannya</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-center text-inkDim">
            Desain bersih, mode gelap, dan navigasi simpel — langsung dari aplikasinya.
          </p>
          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            <PreviewCard title="Home" desc="Anime & komik terbaru di satu layar." img="/preview/home.svg" />
            <PreviewCard title="Detail" desc="Info lengkap, episode, dan rekomendasi." img="/preview/detail.svg" />
            <PreviewCard title="Player" desc="Streaming mulus dengan kontrol lengkap." img="/preview/player.svg" />
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-24">
          <div className="rounded-2xl border border-accent/20 bg-surface p-10 text-center sm:p-16">
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-4xl">
              Bantu Velnime tetap hidup
            </h2>
            <p className="mx-auto mt-4 max-w-md text-inkDim">
              Server, domain, dan pengembangan butuh biaya. Donasi mulai Rp 5.000 via QRIS.
            </p>
            <Link
              href="/donate"
              className="mt-8 inline-block rounded-xl bg-accent px-8 py-3.5 font-display text-sm font-bold text-canvas transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              Donasi Sekarang
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="rounded-xl border border-white/5 bg-surface p-6 transition-colors duration-200 hover:border-accent/30 hover:bg-surfaceSoft">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-surfaceSoft text-xl" aria-hidden="true">
        {icon}
      </div>
      <h3 className="font-display text-lg font-bold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-inkDim">{desc}</p>
    </div>
  );
}

function PreviewCard({ title, desc, img }: { title: string; desc: string; img: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/5 bg-surface">
      {/* SEO-2: preview asli — mirror UI app (dark + accent), bukan placeholder kosong */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={img}
        alt={`Preview layar ${title} aplikasi Velnime`}
        loading="lazy"
        className="aspect-[9/16] w-full bg-surfaceSoft object-cover"
      />
      <div className="p-4">
        <h3 className="font-display text-sm font-bold">{title}</h3>
        <p className="mt-1 text-xs text-inkDim">{desc}</p>
      </div>
    </div>
  );
}
