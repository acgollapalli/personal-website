//import { MDXRemote } from 'next-mdx-remote/rsc'
//import { Code, RoundedImage, CustomLink, Table, FormatDate } from "@/components/blog"
import { Title } from "./title"
import { BlogPost } from "./mdx"
import { Subtitle } from "./subtitle"
import { Section } from "./section"


export const metadata = {
  title: "Hello, World!",
 // datePublished: "2024-11-22",
  author: "Akshay Caleb Gollapalli",
  summary: "Entering the World of Software, or Well... Re-entering it."
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


  return (
    <div className="max-w-prose">
      <Title title={title} subtitle={subtitle}/>
      <BlogPost mdxFile={"hello-world2"}/>
      <Section prev={true}>
        <Subtitle subtitle={["Hello, World!"]}/>
      </Section>
    </div>
  )

}
