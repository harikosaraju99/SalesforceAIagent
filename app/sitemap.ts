import { MetadataRoute } from 'next'
import { BLOG_POSTS } from '@/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://69684d38d8414c3c04ed4318--thriving-sopapillas-7632be.netlify.app'
  
  const routes = [
    '',
    '/services',
    '/pricing',
    '/about',
    '/blog',
    '/faq',
    '/contact',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.id}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...routes, ...blogRoutes]
}

