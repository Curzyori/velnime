import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Donasi',
  description: 'Dukung pengembangan Velnime. Donasi mulai Rp 5.000 via QRIS, bebas iklan untuk semua.',
  alternates: { canonical: '/donate' },
  // SEO-3: noindex — halaman transaksi (QRIS) gak boleh masuk index Google.
  robots: { index: false, follow: false },
  openGraph: {
    title: 'Donasi — Dukung Velnime',
    description: 'Dukung pengembangan Velnime. Donasi mulai Rp 5.000 via QRIS, bebas iklan untuk semua.',
    url: 'https://www.velnime.com/donate',
    siteName: 'Velnime',
    type: 'website',
    locale: 'id_ID',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Velnime' }],
  },
};

export default function DonateLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
