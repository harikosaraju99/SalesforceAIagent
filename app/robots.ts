import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: 'https://69684d38d8414c3c04ed4318--thriving-sopapillas-7632be.netlify.app/sitemap.xml',
  }
}


