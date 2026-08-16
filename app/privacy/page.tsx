import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Kebijakan privasi aplikasi Velnime: data yang dikumpulkan, pembayaran, dan keamanan.',
  alternates: { canonical: '/privacy' },
  openGraph: {
    title: 'Privacy Policy — Velnime',
    description: 'Kebijakan privasi aplikasi Velnime: data yang dikumpulkan, pembayaran, dan keamanan.',
    url: 'https://www.velnime.com/privacy',
    siteName: 'Velnime',
    type: 'website',
    locale: 'id_ID',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Velnime' }],
  },
};

export default function PrivacyPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <div className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 sm:px-6">
        <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Kebijakan Privasi</h1>
        <p className="mt-2 text-sm text-inkDim">Terakhir diperbarui: Agustus 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-inkDim">
          <Section title="Data yang Dikumpulkan">
            <p>
              Velnime mengumpulkan data minimal untuk fungsi inti aplikasi:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li><strong>Riwayat tontonan</strong> — disimpan di akun (cloud sync) jika login, agar riwayat dan progres nonton tersinkron antar perangkat. Guest/tanpa login: riwayat disimpan lokal di perangkat saja.</li>
              <li><strong>Data akun (opsional)</strong> — login dilakukan di aplikasi; kami menyimpan email dan nama untuk personalisasi.</li>
              <li><strong>Data donasi</strong> — nama donatur (jika dipilih) dan nominal, ditampilkan di papan Top Donatur.</li>
            </ul>
          </Section>

          <Section title="Data yang Tidak Dikumpulkan">
            <ul className="list-disc space-y-2 pl-5">
              <li>Kami tidak menjual data kamu ke pihak ketiga.</li>
              <li>Kami tidak menggunakan pelacak iklan atau analitik pihak ketiga.</li>
              <li>Kami tidak mengumpulkan data lokasi.</li>
            </ul>
          </Section>

          <Section title="Pembayaran">
            <p>
              Donasi diproses melalui Pakasir (QRIS). Velnime tidak menyimpan data kartu atau metode pembayaran.
              Detail transaksi dikelola oleh penyedia pembayaran sesuai kebijakan mereka.
            </p>
          </Section>

          <Section title="Keamanan">
            <p>
              Data sesi disimpan terenkripsi di perangkat. Komunikasi dengan server menggunakan koneksi terenkripsi (HTTPS).
            </p>
          </Section>

          <Section title="Kontak">
            <p>
              Pertanyaan tentang privasi:{' '}
              <a href="mailto:admin@velnime.com" className="text-accent hover:underline">
                admin@velnime.com
              </a>
              {' '}atau buka issue di{' '}
              <a href="https://github.com/Curzyori/velnime/issues" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                GitHub Issues
              </a>
              .
            </p>
          </Section>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-lg font-bold text-ink">{title}</h2>
      <div className="mt-2">{children}</div>
    </section>
  );
}
