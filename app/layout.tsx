import type { Metadata, Viewport } from 'next';
import { Sora, Manrope } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const display = Sora({ subsets: ['latin'], variable: '--font-display', weight: ['600', '700', '800'] });
const body = Manrope({ subsets: ['latin'], variable: '--font-body', weight: ['400', '500', '600', '700'] });

const SITE_URL = 'https://www.velnime.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Velnime — Anime & Donghua Gratis',
    template: '%s — Velnime',
  },
  description: 'Streaming anime Jepang dan donghua China gratis, bebas iklan. Koleksi lengkap, update cepat. Dukung pengembangan Velnime.',
  openGraph: {
    title: 'Velnime — Anime & Donghua Gratis',
    description: 'Streaming anime Jepang dan donghua China gratis, bebas iklan.',
    url: SITE_URL,
    siteName: 'Velnime',
    type: 'website',
    locale: 'id_ID',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Velnime' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Velnime — Anime & Donghua Gratis',
    description: 'Streaming anime Jepang dan donghua China gratis, bebas iklan.',
    images: ['/og.png'],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#0F0F1A',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebSite', name: 'Velnime', url: SITE_URL, inLanguage: 'id-ID' },
      {
        '@type': 'Organization',
        name: 'Velnime',
        url: SITE_URL,
        logo: `${SITE_URL}/favicon.svg`,
        sameAs: [
          'https://github.com/Curzyori/velnime',
          'https://discord.gg/VzdCY7HK7f',
          'https://instagram.com/velnimeapp',
          'https://threads.net/@velnimeapp',
        ],
      },
      {
        '@type': 'SoftwareApplication',
        name: 'Velnime',
        applicationCategory: 'EntertainmentApplication',
        operatingSystem: 'Android 7.0 and up',
        url: SITE_URL,
        inLanguage: 'id-ID',
        description: 'Streaming anime Jepang dan donghua China gratis, bebas iklan.',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'IDR' },
        screenshot: [
          `${SITE_URL}/preview/home.svg`,
          `${SITE_URL}/preview/player.svg`,
          `${SITE_URL}/preview/detail.svg`,
        ],
      },
    ],
  };

  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://api.velnime.com" crossOrigin="anonymous" />
      </head>
      <body className={`${display.variable} ${body.variable} font-body bg-canvas text-ink antialiased`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:font-display focus:text-sm focus:font-bold focus:text-canvas"
        >
          Lewati ke konten
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
        />
      </body>
    </html>
  );
}
