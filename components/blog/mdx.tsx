/* eslint-disable */

//import Link from 'next/link'
//import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
//import { highlight } from 'sugar-high'
import { H3, H4, P, A, BlockQuote, Table, List } from "@/components/typography"
import React from 'react'

// Whoever wrote this file in the blog starter
// has given me a TON of type issues

//function RoundedImage(props) {
//  return <Image alt={props.alt} className="rounded-lg" {...props} />
//}

//function Code({ children, ...props }) {
//  const codeHTML = highlight(children)
//  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
//}

//function slugify(str: string) {
//  return str
//    .toString()
//    .toLowerCase()
//    .trim() // Remove whitespace from both ends of a string
//    .replace(/\s+/g, '-') // Replace spaces with -
//    .replace(/&/g, '-and-') // Replace & with 'and'
//    .replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
//    .replace(/\-\-+/g, '-') // Replace multiple - with single -
//}

const components:any = {
  h1: H3,
  h2: H4,
  h3: H4,
  p: P,
  blockquote: BlockQuote,
  table: Table,
  a: A,
  ul: List,
}

/* eslint-disable */
export function CustomMDX(props: {source: string}) {
  return (
    <MDXRemote
	components={components}
      {...props}
    />
  )
}
