import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Syarat & Ketentuan',
  description: 'Syarat dan ketentuan penggunaan aplikasi Velnime: streaming anime Jepang dan donghua China.',
  alternates: { canonical: '/tos' },
  openGraph: {
    title: 'Syarat & Ketentuan — Velnime',
    description: 'Syarat dan ketentuan penggunaan aplikasi Velnime.',
    url: 'https://www.velnime.com/tos',
    siteName: 'Velnime',
    type: 'website',
    locale: 'id_ID',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Velnime' }],
  },
};

export default function TosPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <div className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 sm:px-6">
        <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Syarat & Ketentuan</h1>
        <p className="mt-2 text-sm text-inkDim">Terakhir diperbarui: 20 Agustus 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-inkDim">
          <Section title="Penggunaan Layanan">
            <p>
              Dengan menggunakan Velnime, kamu menyetujui syarat berikut. Velnime menyediakan layanan
              streaming anime Jepang dan donghua China untuk penggunaan pribadi dan non-komersial.
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Dilarang menggunakan layanan untuk tujuan ilegal atau melanggar hukum yang berlaku.</li>
              <li>Dilarang menyalahgunakan API, termasuk scraping berlebihan yang mengganggu layanan.</li>
              <li>Konten yang ditonton adalah tanggung jawab pengguna sesuai hukum setempat.</li>
            </ul>
          </Section>

          <Section title="Akun">
            <p>
              Login opsional digunakan untuk personalisasi (riwayat, favorit) dan verifikasi donatur.
              Kamu bertanggung jawab menjaga kerahasiaan akun yang digunakan.
            </p>
          </Section>

          <Section title="Donasi">
            <p>
              Donasi bersifat sukarela dan digunakan untuk mendukung biaya operasional Velnime.
              Donasi yang sudah diproses tidak dapat dikembalikan kecuali diwajibkan oleh hukum.
              Status supporter diberikan otomatis setelah donasi terverifikasi, berlaku 30 hari.
            </p>
          </Section>

          <Section title="Hak Kekayaan Intelektual">
            <p>
              Seluruh konten (anime, donghua, poster) adalah milik pemegang hak masing-masing.
              Velnime hanya menyediakan tautan streaming dari sumber yang tersedia publik dan
              menghormati permintaan penghapusan melalui halaman DMCA.
            </p>
          </Section>

          <Section title="Ketersediaan Layanan">
            <p>
              Velnime tidak menjamin layanan bebas gangguan. Kami dapat mengubah, menangguhkan,
              atau menghentikan sebagian/seluruh layanan sewaktu-waktu tanpa pemberitahuan.
            </p>
          </Section>

          <Section title="Kontak">
            <p>
              Pertanyaan tentang syarat & ketentuan:{' '}
              <a href="mailto:admin@velnime.com" className="text-accent hover:underline">
                admin@velnime.com
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
