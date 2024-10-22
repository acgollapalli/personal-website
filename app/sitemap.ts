import { getBlogPosts } from '@/lib/blog'
import { baseUrl } from '@/lib/contsants'


// FIXME: this needs to be possibly dynamic?
// but only if the blogs become dynamic. If they
// remain static in repo, then it's no issue
export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  let routes = ['', '/blog'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
}
