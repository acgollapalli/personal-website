//import Link from 'next/link'
//import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
//import { highlight } from 'sugar-high'
import React from 'react'

// Whoever wrote this file in the blog starter
// has given me a TON of type issues

//function Table({ data }) {
//  const headers = data.headers.map((header, index) => (
//    <th key={index}>{header}</th>
//  ))
//  const rows = data.rows.map((row, index) => (
//    <tr key={index}>
//      {row.map((cell, cellIndex) => (
//        <td key={cellIndex}>{cell}</td>
//      ))}
//    </tr>
//  ))
//
//  return (
//    <table>
//      <thead>
//        <tr>{headers}</tr>
//      </thead>
//      <tbody>{rows}</tbody>
//    </table>
//  )
//}

//function CustomLink(props: {
//  href: string,
//  children: React.ReactNode,
//  className: string
//}) {
//  const href = props.href
//
//  if (href.startsWith('/')) {
//    return (
//      <Link {...props}>
//        {props.children}
//      </Link>
//    )
//  }
//
//  if (href.startsWith('#')) {
//    return <a {...props} />
//  }
//
//  return <a target="_blank" rel="noopener noreferrer" {...props} />
//}

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


// FIXME: the static version of the blog
// looks like garbage because this isn't
// using any of the typography
//function createHeading(level:  number) {
//  const Heading = ({ children }: { children: string }) => {
//    const slug = slugify(children)
//    return React.createElement(
//      `h${level}`,
//      { id: slug },
//      [
//        React.createElement('a', {
//          href: `#${slug}`,
//          key: `link-${slug}`,
//          className: 'anchor',
//        }),
//      ],
//      children
//    )
//  }
//
//  Heading.displayName = `Heading${level}`
//
//  return Heading
//}

//const components = {
//  h1: createHeading(1),
//  h2: createHeading(2),
//  h3: createHeading(3),
//  h4: createHeading(4),
//  h5: createHeading(5),
//  h6: createHeading(6),
////  Image: RoundedImage,
//  a: CustomLink,
////  code: Code,
////  Table,
//}

export function CustomMDX(props: {source: string}) {
  return (
    <MDXRemote
      {...props}
    />
  )
}
