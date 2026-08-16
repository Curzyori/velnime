import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Docs',
  description: 'Panduan penggunaan aplikasi Velnime: cara install, cara pakai, FAQ, dan changelog.',
  alternates: { canonical: '/docs' },
  openGraph: {
    title: 'Docs — Velnime',
    description: 'Panduan penggunaan aplikasi Velnime: cara install, cara pakai, FAQ, dan changelog.',
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
      <div className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 sm:px-6">
        <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Dokumentasi</h1>
        <p className="mt-3 text-inkDim">Panduan singkat penggunaan aplikasi Velnime.</p>

        <div className="mt-10 space-y-8">
          <Section title="Cara Install" id="install">
            <ol className="list-decimal space-y-2 pl-5">
              <li>
                Download APK dari{' '}
                <a
                  href="https://github.com/Curzyori/velnime/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  halaman rilis GitHub
                </a>{' '}
                (APK belum rilis — pantau halaman tersebut).
              </li>
              <li>Buka file APK di perangkat Android.</li>
              <li>Izinkan instalasi dari sumber tidak dikenal jika diminta.</li>
              <li>Buka aplikasi dan mulai nonton.</li>
            </ol>
          </Section>

          <Section title="Cara Pakai">
            <ul className="list-disc space-y-2 pl-5">
              <li><strong>Anime</strong> — jelajahi daftar anime, filter berdasarkan status atau genre. Bisa tanpa login (guest).</li>
              <li><strong>Comic</strong> — baca manga dan manhwa dengan pembaca bawaan. <em>Coming soon</em> — belum tersedia di rilis awal.</li>
              <li><strong>Library</strong> — akses riwayat dan favorit kamu (butuh login untuk sync antar perangkat).</li>
              <li><strong>Support</strong> — donasi untuk mendukung pengembangan, dan buka status supporter.</li>
            </ul>
          </Section>

          <Section title="FAQ">
            <Faq q="Apakah Velnime gratis?">
              Ya, 100% gratis dan tanpa iklan. Didukung oleh donasi pengguna.
            </Faq>
            <Faq q="Apakah perlu akun?">
              Tidak. Login opsional. Kamu bisa pakai anonim sepenuhnya — browse dan nonton tanpa login. Login hanya dibutuhkan untuk streaming (JWT) dan fitur sosial (rating, komentar, sync riwayat).
            </Faq>
            <Faq q="Apa beda kualitas free vs supporter?">
              Free user bisa nonton sampai 720p. Supporter (donasi Rp 5.000+/30 hari) dapat kualitas penuh sampai 1080p dan kuota komentar tanpa batas.
            </Faq>
            <Faq q="Kenapa ada episode yang tidak bisa diputar?">
              Beberapa sumber mungkin sedang down. Laporkan lewat tombol Report di aplikasi.
            </Faq>
            <Faq q="Bagaimana cara donasi?">
              Buka halaman <Link href="/donate" className="text-accent hover:underline">Donasi</Link> atau tab Support di aplikasi. Scan QRIS dengan e-wallet/m-banking.
            </Faq>
          </Section>

          <Section title="Changelog">
            <ul className="list-disc space-y-2 pl-5">
              <li><strong>v1.0.0</strong> — Rilis awal: streaming anime, baca komik, donasi QRIS.</li>
              <li><strong>Beta</strong> — Player native, library, pencarian, genre.</li>
            </ul>
          </Section>
        </div>
      </div>
    </div>
  );
}

function Section({ title, id, children }: { title: string; id?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="font-display text-xl font-bold text-accent">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function Faq({ q, children }: { q: string; children: React.ReactNode }) {
  return (
    <div className="mb-4 rounded-xl border border-white/5 bg-surface p-5">
      <p className="font-display font-bold">{q}</p>
      <p className="mt-2 text-sm leading-relaxed text-inkDim">{children}</p>
    </div>
  );
}
