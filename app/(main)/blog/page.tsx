import { BlogPosts } from '@/components/blog/posts'
import { BlogHeader } from "./heading"

export const metadata = {
  title: 'Wizard Log',
  description: "Just one wannabe wizard's blog. Hackers welcome",
}

export default function Page() {
  return (
    <div>
      <section className="p-8 lg:min-w-[672px] sm:min-w-[576px] min-w-full">
        <BlogHeader/>
        <BlogPosts />
      </section>
    </div>
  )
}
