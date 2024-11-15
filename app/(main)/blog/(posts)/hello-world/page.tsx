import { Title } from "./title"
import { BlogPost } from "./mdx"
import { Section } from "./section"
import Link from 'next/link'
import { formatDate } from '@/lib/blog'


export const metadata = {
  title: "Hello, World!",
  author: "Akshay Caleb Gollapalli",
  summary: "A Brief Introduction to Me, This Website, and Everything",
  datePublished: "10-24-2024"
}


export default function Page () {
  const title=[
    "Welcome to my blog",
    "AKA: Hello, World!"]
  const subtitle=[
    "Why I built this site",
    "Or... a bit about burnout",
    "IDK just read the article",
    "Welcome to the Wizard Log"
  ]

  // TODO: Link to the static version here
  // for people who hate fun
  return (
    <div className="max-w-prose pb-6">
      <Title title={title} subtitle={subtitle}/>
		<span className="flex justify-between items-center w-full">
		  <p className="text-sm text-neutral-600 dark:text-neutral-400">
			{formatDate("10-24-2024")}
		  </p>
		  <Link
			className="text-sm text-neutral-600 dark:text-neutral-400 underline underline-offset-4"
			href={`/blog/static/hello-world`}
		  >
			 Static Version (for people who hate fun)
		  </Link>
		</span>
      <BlogPost mdxFile={"hello-world"}/>
      <Section prev={true}>
        <Title title={["Hello, World!"]}/>
      </Section>
    </div>
  )
}
