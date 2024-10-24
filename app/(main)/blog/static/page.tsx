import { StaticBlogPosts } from '@/components/blog/posts'

export const metadata = {
  title: 'Wizard Log',
  description: "Just one wannabe wizard's blog. Hacker's welcom",
}

export default function Page() {
  return (
    <section className="p-16 sm:min-w-[576px] min-w-full">
       <div className="relative max-w-prose mx-auto p-4">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-mono tracking-tight">
          *the Wizard Log*
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-700 transition-opacity duration-500 ease-in-out">
          Static Edition
        </h2>
      </div>
       </div>
      <StaticBlogPosts />
    </section>
  )
}
