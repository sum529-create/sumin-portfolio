import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sumin.it.kr/';

  return [
    {
      url: baseUrl,
      lastModified: new Date('2025-06-25'),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date('2025-06-25'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
