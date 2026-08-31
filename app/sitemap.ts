import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const SITE_URL = 'https://www.velnime.com';

// SEO-6: lastmod statis terupdate sesuai siklus rilis dan konten terakhir.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, lastModified: '2026-08-31', changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE_URL}/downloads`, lastModified: '2026-08-31', changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/docs`, lastModified: '2026-08-31', changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/api`, lastModified: '2026-08-31', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/privacy`, lastModified: '2026-08-31', changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/tos`, lastModified: '2026-08-31', changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/dmca`, lastModified: '2026-08-31', changeFrequency: 'yearly', priority: 0.3 },
  ];
}
