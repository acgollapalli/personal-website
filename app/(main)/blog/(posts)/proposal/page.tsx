import { getOnePost } from "@/lib/blog"
import { CustomMDX } from '@/components/blog/mdx'
import { Title, Subtitle } from '@/components/typography'
import { formatDate } from '@/lib/blog'
import { ParticleEffect } from './particles'
import { baseUrl } from '@/lib/constants'
import Link from 'next/link'

// This is some nonsense
import { getServerSideProps } from 'next/dist/build/templates/pages'
type PageProps = Awaited<ReturnType<typeof getServerSideProps>>['props']

export async function generateMetadata({ }: PageProps ) {
  const post = getOnePost("proposal")
  
  if (!post) {
    return
  }
  
  const {
    title,
    publishedAt: publishedTime,
    summary: description,
  } = post.metadata
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/blog/proposal`,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

export default function page() {
  const post = getOnePost("proposal")
  
  return (
	<div>
	<ParticleEffect>
	  <div className="max-w-prose pb-6 px-4">
		<Title>
		  {post.metadata.title}
		</Title>
		<Subtitle>
		  {post.metadata.summary}
		</Subtitle>
		<span className="flex justify-between items-center w-full">
		  <p className="text-sm text-neutral-600 dark:text-neutral-400">
			{formatDate(post.metadata.publishedAt)}
		  </p>
		  <Link
			className="text-sm text-neutral-600 dark:text-neutral-400 underline underline-offset-4"
			href={`/blog/static/proposal`}
		  >
			 Static Version (for people who hate fun)
		  </Link>
		</span>
		<CustomMDX source={post.content}/>
	  </div>
	</ParticleEffect>
	  </div>
  )
}
