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

export default function InfoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
