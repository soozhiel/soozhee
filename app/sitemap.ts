import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://soozhee.com/', changeFrequency: 'monthly', priority: 1 },
    { url: 'https://soozhee.com/thoughts/700m-decision', changeFrequency: 'yearly', priority: 0.7 },
  ];
}
