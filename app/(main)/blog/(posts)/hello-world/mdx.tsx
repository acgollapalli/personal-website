import Link from "next/link"

import {type ReactNode } from "react"

import { Paragraph } from "./paragraph"
import { Heading } from "./heading"
import { SubHeading } from "./subheading"
import { BlockQuote } from "./blockquote"
import { Section } from "./section"
import { getOnePost } from "@/lib/blog"

// FIXME: This entire FILE is terrible.
// It will all have to be rewritten for the next post

type Content = { prefix: string, content: (string | ReactNode)[], href?: string }

// FIXME: refactor this monstrosity
export function interpretMarkdown({ content }: { content: string }): Content[] {
  let stack: string[] = [] // honestly it's a LOT easier to just clear it sometimes
  const out: Content[] = [] // we don't want to just clear this.

  const handlePrefix = (prefix, content) => {
    if (prefix == "") return

      if (out.length > 0 && out[out.length - 1].prefix == prefix ) {
      out[out.length - 1].content.push(content)
    }
    else out.push({prefix, content: [content]})
    stack = [] // clear stack
  }

  const handleHeading = () => {
    let headingCount = 0
    for (let i = 0; i < 3; i ++) {
      if (stack[i] == '#') headingCount++
      else {
        const prefix = stack.slice(0, headingCount).join('')
        const content = stack.slice(headingCount).join('').trim()
        handlePrefix(prefix, content)
      }
    }
  }

  const handleBlockQuote = () => {
    const prefix = '>'
    const content = stack.slice(1).join('').trim()
    handlePrefix(prefix, content)
  }

  const handleParagraph = () => {
    const prefix = 'p'
    const content = stack.join('')
    handlePrefix( prefix, content )
  }

  // FIXME: this is atrocious
  const handleEmphasis = () => {
    let nonEm
    let right = 0
    let left = 0
    for (let i = stack.length -1; !nonEm && i > -1; i--) {
      if (stack[i] != '*') nonEm = i
      right = stack.length - i -1
    }

    if (nonEm) {
      for (let i = nonEm; i > -1; i--) {
        if (stack[i] == '*') left++
      }
    }

    if (left > right + 1 || left == 0) {
      stack.push('*')
      return
    }
    else {
      let firstNonEm = stack.slice(0, nonEm).findLastIndex(ch => ch == '*') + 1
      let content = stack.slice(firstNonEm, nonEm + 1).join('')
      console.log("em", left, right, stack.slice(firstNonEm))
      stack = stack.slice(0, firstNonEm - left)
      if (left > 1) content = '<strong>' + content + '</strong>'
      if (left % 2 == 1) content = '<em>' + content + '</em>'
      stack.push(content)
    }
  }

  for (let c of content) {
    switch (c) {
      case '\n':
        if (stack[0] == '#') handleHeading()
        else if (stack[0] == '>') handleBlockQuote()
        else if (stack[stack.length - 1] == '\n') {
          handleParagraph()
          handlePrefix("br", "")
        }
        else stack.push(c)
        break
      case ')':
        // handle links
        const hrefOpener = stack.findLastIndex(ch => ch == '(')
        const descriptionCloser = hrefOpener >= 0 &&  stack[hrefOpener -1] == ']'
        const descriptionOpener = descriptionCloser ?
                                  stack.slice(0, hrefOpener - 1)
                                       .findLastIndex(ch => ch == '[') : -1
        if (descriptionOpener >= 0) {
          const linkContent = stack.slice(descriptionOpener + 1, hrefOpener -1).join('')
          const linkHref = stack.slice(hrefOpener + 1).join('')
          stack = stack.slice(0, descriptionOpener)
          if (stack.length > 0) handleParagraph()
          out.push({prefix: 'a', content: [linkContent], href: linkHref})
        }
        else stack.push(c)
        break
      case '*':
        handleEmphasis()
        break
      default :
        if (stack[stack.length -1] == '\n') {
          stack[stack.length - 1] = ' '
        }
        stack.push(c)
        break
    }
  }

  return out
}

function findPrecedence(topLevel: string, prefix: string) {
  const elemPrecedences: {[key: string]: number} = {
    'br': 0,
    'a': 1,
    'p': 2,
    '>': 2,
    '##': 4,
    '#': 5
  }
  return  elemPrecedences[prefix] - elemPrecedences[topLevel]
}


function fixStrong(pStr: string | ReactNode) {
  if (typeof pStr !== 'string') return pStr
  let s = pStr
  const out = []
  for (let i = s.indexOf("<strong>"); i >= 0; i = s.indexOf("<strong>")) {
    const j = s.indexOf("</strong>")
    console.log("strong", s.slice(i+8,j))
    out.push(s.slice(0, i))
    out.push(<strong>{s.slice(i+8, j)}</strong>)
    s = s.slice(j+9)
  }
  if (s != pStr) {
    out.push(s)
    return out
  }
  else return s
}

function fixItalic(pStr: string) {
  console.log("em init", pStr)
    let s = pStr
  const out = []
  for (let i = s.indexOf("<em>"); i >= 0; i = s.indexOf("<em>")) {
    const j = s.indexOf("</em>")
    console.log("em", s.slice(i+4,j))
    out.push(s.slice(0, i))
    const si = fixStrong(s.slice(i+4, j))
    console.log("em si", si)
    if (si.length == 1) out.push(<em>{si[0]}</em>)
    else out.push(s.slice(i+4, j))
    s = s.slice(j+5)
  }
  if (s != pStr) {
    out.push(s)
    return out
  }
  else return s
}


function fixEm(pStrings: string[]): (string | ReactNode)[] {
  return pStrings
    .map(fixItalic).flat()
    .map(fixStrong).flat()
}


function BlogElement({content}) {
  if (content.length == 0) return (<></>)

  let elemStack: Content[][] = [[]]


  for (let elem of content) {
    const workingSet = elemStack[elemStack.length -1]
    if (workingSet.length == 0 && elem.prefix != 'br') workingSet.push(elem) // base case
    else if (workingSet[0].prefix == 'p') {
      if (elem.prefix == 'br') elemStack.push([])
      else workingSet.push(elem)
    }
    else {
      const precedence = findPrecedence(workingSet[0].prefix, elem.prefix)
      if (precedence >= 0) elemStack.push([elem])
      else workingSet.push(elem)
    }
  }

  if (elemStack.length > 1) {
    return (
      <>
        {elemStack.map(elem => <BlogElement content={elem}/>).flat()}
      </>
    )
  }
  else {
    const elements = elemStack[0]
    const topLevel = elements[0]
    switch (topLevel.prefix) {
      case "#":
        return (
          <Section prev={true}>
          <Heading heading={topLevel.content}>
            <BlogElement content={elements.slice(1)}/>
          </Heading>
          </Section>
        )
      case "##":
        return (
          <Section prev={true}>
          <SubHeading subheading={topLevel.content}>
            <BlogElement content={elements.slice(1)}/>
          </SubHeading>
          </Section>
        )
      case ">":
        return (
          <BlockQuote blockQuote={topLevel.content}/>
        )
      case "a":
        return (
          <Link
            className="font-medium text-primary underline underline-offset-4"
            target="_blank"
            href={topLevel.href || "#"}
          >
            <>
            {fixEm(topLevel.content)}
          </>
          </Link>
        )
      case "p":
        return (
          <Paragraph>
            { elements.map(lm => {
                if (lm.prefix == "p") {
                  return fixEm(lm.content)
                }
                else return (<BlogElement content={[lm]}/>)
            }).flat() }
          </Paragraph>
        )
    }
  }
}



// So now that we actually have our markdown in a *slightly*
// more manageable form we need to actuall take the input of
// out and then handle it
// So let's go over some ground rules
// Subheadings always render after headings
// paragraphs after headings/subheadings
// blockquotes can render with paragraphs
export function BlogPost({mdxFile}) {
  const content = getOnePost(mdxFile)
  const elements = interpretMarkdown(content)

  return (
       <BlogElement content={elements} />
  )
}
