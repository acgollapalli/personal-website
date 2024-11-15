import type { FC } from 'react'
import Link from 'next/link'

export function P ({children}) : FC {
  return (
    <p className="leading-7 mt-4">
      {children}
    </p>
  )
}

export function BlockQuote ({children}) : FC {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic font-mono">
      {children}
    </blockquote>
  )
}

export function Table ({data}) : FC {
  const headers = data.headers.map((header, index) => (
    <th className="border px-4 py-2 text-left font-bold [&>[align=center]]:text-center [&>[align=right]]:text-right" key={index}>
      {header}
    </th>))
  
  const rows = data.rows.map((row, index) => (
	<tr className="m-0 border-t p-0 even:bg-muted" key={index}>
	  {row.map((cell, cellIndex) => (
		<td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right" key={cellIndex}>
		  {cell}
		</td>))}
	</tr>))
  
  return (
    <div className="my-6 w-full overflow-y-auto">
      <table className="w-full">
        <thead>
          <tr className="m-0 border-t p-0 even:bg-muted">
			{headers}
		  </tr>
        </thead>
        <tbody>
		  {rows}
		</tbody>
      </table>
    </div>
  )
}


export function List ({children}) : FC {
  return (
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
      {children}
    </ul>
  )
}

export function A(props: {
  href: string,
  children: React.ReactNode,
  className: string
}): React.FC {
  const href = props.href

  if (href.startsWith('/')) {
    return (
      <Link className="font-medium text-primary underline underline-offset-4" {...props}>
        {props.children}
      </Link>
    )
  }

  if (href.startsWith('#')) {
    return <a {...props} />
  }

  return <a target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline underline-offset-4" {...props} />
}
