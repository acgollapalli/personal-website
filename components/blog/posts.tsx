import Link from 'next/link'
import { formatDate, getBlogPosts } from '@/lib/blog'

export function BlogPosts() {
  const allBlogs = getBlogPosts()

  console.log(allBlogs.length)
  return (
    <div className="mt-6">
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (

            <div className="w-full flex flex-column md:flex-row justify-between" key={post.slug}>
                <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                >
                    <p className="font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight">
                        {post.metadata.title}
                    </p>
                </Link>
                <Link
                    key={`static\${post.slug}`}
                    href={`/blog/static/${post.slug}`}
                >
                    <p className="font-mono text-neutral-900 dark:text-neutral-100 tracking-tight">
                        Static Version
                    </p>
                </Link>
                <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                    {formatDate(post.metadata.publishedAt, false)}
                </p>
            </div>
        ))}
    </div>
  )
}


export function StaticBlogPosts() {
  const allBlogs = getBlogPosts()


  return (
    <div className="mt-6">
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <div className="w-full flex flex-column md:flex-row justify-between" key={`static/${post.slug}`}>
                <Link
                  key={`static/${post.slug}`}
                  href={`/blog/static/${post.slug}`}
                >
                    <p className="font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight">
                        {post.metadata.title}
                    </p>
                </Link>
                <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                >
                    <p className="font-mono text-neutral-900 dark:text-neutral-100 tracking-tight">
                        Animated Version
                    </p>
                </Link>
                <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                    {formatDate(post.metadata.publishedAt, false)}
                </p>
            </div>
        ))}
    </div>
  )
}
