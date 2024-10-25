import { Title } from "./title"
import { BlogPost } from "./mdx"
import { Section } from "./section"


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
    <div className="max-w-prose">
      <Title title={title} subtitle={subtitle}/>
      <BlogPost mdxFile={"hello-world"}/>
      <Section prev={true}>
        <Title title={["Hello, World!"]}/>
      </Section>
    </div>
  )
}
