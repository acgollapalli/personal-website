import { Title } from "./title"
import { BlogPost } from "./mdx"
import { Subtitle } from "./subtitle"
import { Section } from "./section"


export const metadata = {
  title: "Hello, World!",
  author: "Akshay Caleb Gollapalli",
  summary: "Entering the World of Software, or Well... Re-entering it.",
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

  return (
    <div className="max-w-prose">
      <Title title={title} subtitle={subtitle}/>
      <BlogPost mdxFile={"hello-world2"}/>
      <Section prev={true}>
        <Title title={["Hello, World!"]}/>
      </Section>
    </div>
  )

}
