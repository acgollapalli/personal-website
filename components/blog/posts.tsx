import Link from 'next/link'
import { formatDate, getBlogPosts } from '@/lib/blog'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div>
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

            <div className="w-full flex flex-column md:flex-row justify-between">
                <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                >
                    <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                        {post.metadata.title}
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
