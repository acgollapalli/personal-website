import { BlogPosts } from '@/components/blog/posts'

export const metadata = {
  title: 'Wizard Log',
  description: "Just one wannabe wizard's blog. Hacker's welcom",
}

export default function Page() {
  return (
    <section className="p-16 sm:min-w-[576px] min-w-full">
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Wizard Log</h1>
      <BlogPosts />
    </section>
  )
}
