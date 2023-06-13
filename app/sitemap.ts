import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://michaelstojanovic.dev',
      lastModified: new Date(),
    },
    {
      url: 'https://michaelstojanovic.dev/projects',
      lastModified: new Date(),
    },
    {
      url: 'https://michaelstojanovic.dev/about',
      lastModified: new Date(),
    },
    {
        url: 'https://michaelstojanovic.dev/contact',
        lastModified: new Date(),
      },
  ]
}