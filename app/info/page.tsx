import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Info',
  description: 'Informasi status layanan Velnime: maintenance, gangguan, dan pembaruan.',
  alternates: { canonical: '/info' },
  openGraph: {
    title: 'Info — Velnime',
    description: 'Status layanan, maintenance, dan pengumuman Velnime.',
    url: 'https://www.velnime.com/info',
    siteName: 'Velnime',
    type: 'website',
    locale: 'id_ID',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Velnime' }],
  },
};

export default function InfoPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <div className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 sm:px-6">
        <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Info & Status Layanan</h1>
        <p className="mt-3 text-inkDim">Pengumuman maintenance, gangguan, dan pembaruan Velnime.</p>

        <div className="mt-10 space-y-8">
          <Section title="Maintenance">
            <ul className="space-y-4">
              <StatusItem title="Maintenance rutin" status="done" date="16 Agu 2026">
                Optimasi server stream. Tidak ada downtime yang dilaporkan.
              </StatusItem>
            </ul>
          </Section>

          <Section title="Gangguan (Incident)">
            <p className="text-sm text-inkDim">
              Tidak ada gangguan berjalan saat ini. Kalau ada kendala, cek lagi nanti atau hubungi{' '}
              <a href="mailto:admin@velnime.com" className="text-accent hover:underline">
                admin@velnime.com
              </a>
              .
            </p>
          </Section>

          <Section title="Pembaruan">
            <ul className="list-disc space-y-2 pl-5">
              <li><strong>16 Agu 2026</strong> — Halaman info & status layanan baru.</li>
              <li><strong>15 Agu 2026</strong> — Perbaikan API stats & donasi.</li>
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

function StatusItem({ title, status, date, children }: { title: string; status: 'done' | 'ongoing' | 'planned'; date: string; children: React.ReactNode }) {
  const badge =
    status === 'done' ? 'bg-green-500/10 text-green-400' : status === 'ongoing' ? 'bg-yellow-500/10 text-yellow-400' : 'bg-blue-500/10 text-blue-400';
  const label = status === 'done' ? 'Selesai' : status === 'ongoing' ? 'Berlangsung' : 'Dijadwalkan';
  return (
    <li className="rounded-xl border border-white/5 bg-surface p-5">
      <div className="flex items-center justify-between gap-3">
        <p className="font-display font-bold">{title}</p>
        <span className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${badge}`}>{label}</span>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-inkDim">{children}</p>
      <p className="mt-2 text-xs text-inkDim/70">{date}</p>
    </li>
  );
}
