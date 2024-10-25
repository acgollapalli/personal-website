import { notFound } from 'next/navigation'
import { CustomMDX } from '@/components/blog/mdx'
import { formatDate, getBlogPosts } from '@/lib/blog'
import { baseUrl } from '@/lib/constants'


// This is some nonsense
import { getServerSideProps } from 'next/dist/build/templates/pages'
type PageProps = Awaited<ReturnType<typeof getServerSideProps>>['props']

export async function generateStaticParams() {
  const posts = getBlogPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: PageProps ) {
  const { slug } = await params
  const post = getBlogPosts().find((post) => post.slug === slug)
  if (!post) {
    return
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata
  const ogimage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogimage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogimage],
    },
  }
}

export default async function blog({ params }: PageProps) {
  const {slug} = await params
  const post = getBlogPosts().find((post) => post.slug === slug)

  if (!post) {
    notFound()
  }

  console.log("post", post)

  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'blogposting',
            headline: post.metadata.title,
            datepublished: post.metadata.publishedAt,
            datemodified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              '@type': 'person',
              name: 'my portfolio',
            },
          }),
        }}
      />
    <div className="max-w-prose p-8">
      <main >
      <h1 className="title font-semibold text-2xl tracking-tighter">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(post.metadata.publishedAt)}
        </p>
      </div>
      <article className="prose">
        <CustomMDX source={post.content} />
      </article>
      </main>
      </div>
    </section>
  )
}
