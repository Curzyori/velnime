import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DMCA',
  description: 'Kebijakan DMCA Velnime: prosedur pengajuan penghapusan konten yang melanggar hak cipta.',
  alternates: { canonical: '/dmca' },
  openGraph: {
    title: 'DMCA — Velnime',
    description: 'Kebijakan DMCA Velnime: prosedur pengajuan penghapusan konten.',
    url: 'https://www.velnime.com/dmca',
    siteName: 'Velnime',
    type: 'website',
    locale: 'id_ID',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Velnime' }],
  },
};

export default function DmcaPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <div className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 sm:px-6">
        <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Kebijakan DMCA</h1>
        <p className="mt-2 text-sm text-inkDim">Terakhir diperbarui: 20 Agustus 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-inkDim">
          <Section title="Kebijakan Penghapusan Konten">
            <p>
              Velnime menghormati hak kekayaan intelektual pihak lain. Kami tidak meng-hosting konten
              apa pun di server kami; aplikasi hanya menampilkan tautan streaming dari sumber yang
              tersedia publik. Jika kamu yakin konten di Velnime melanggar hak cipta milikmu,
              kamu dapat mengajukan permintaan penghapusan melalui prosedur di bawah.
            </p>
          </Section>

          <Section title="Cara Mengajukan Klaim">
            <p>Kirim pemberitahuan tertulis ke <strong>admin@velnime.com</strong> dengan menyertakan:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Identifikasi konten yang dilanggar (judul, URL Velnime, atau bukti lain yang cukup).</li>
              <li>Bukti kepemilikan hak cipta atas konten tersebut.</li>
              <li>Pernyataan bahwa kamu memiliki hak eksklusif atas konten yang dilaporkan.</li>
              <li>Kontak yang bisa dihubungi (email/nomor).</li>
              <li>Tanda tangan fisik atau elektronik.</li>
            </ul>
          </Section>

          <Section title="Proses Penanganan">
            <p>
              Klaim yang valid akan ditindaklanjuti dalam waktu 1×24 jam: konten yang dilaporkan
              dihapus dari katalog dan sumber tautan diblokir. Permintaan yang tidak lengkap atau
              tidak disertai bukti kepemilikan tidak dapat diproses.
            </p>
          </Section>

          <Section title="Counter-Notification">
            <p>
              Jika kamu merasa kontenmu dihapus secara keliru, kirim bantahan ke
              {' '}
              <a href="mailto:admin@velnime.com" className="text-accent hover:underline">admin@velnime.com</a>
              {' '}dengan identifikasi konten dan alasan penghapusan yang keliru. Kami akan meninjau
              dan mengembalikan konten bila bantahan terbukti valid.
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
