import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const SITE_URL = 'https://www.velnime.com';

// SEO-6: lastmod dipakai, tapi STATIS (tanggal update konten) — bukan tanggal build
// tiap deploy (yang memicu re-crawl gak perlu). Update manual saat konten berubah.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, lastModified: '2026-08-10', changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/docs`, lastModified: '2026-08-10', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE_URL}/info`, lastModified: '2026-08-16', changeFrequency: 'weekly', priority: 0.5 },
    { url: `${SITE_URL}/privacy`, lastModified: '2026-01-01', changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/tos`, lastModified: '2026-01-01', changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/dmca`, lastModified: '2026-01-01', changeFrequency: 'yearly', priority: 0.3 },
  ];
}
