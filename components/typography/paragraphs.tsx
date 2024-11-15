import type { FC } from 'react'
import Link from 'next/link'

interface TypeographyProps {
  children: React.ReactNode;
}

export const P: FC<TypeographyProps> = ({children}) =>  {
  return (
    <p className="leading-7 mt-4">
      {children}
    </p>
  )
}

export const BlockQuote: FC<TypeographyProps> = ({children}) =>  {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic font-mono">
      {children}
    </blockquote>
  )
}

export const Table: FC<any> = ({data}) => {
  const headers = data.headers.map((header: any, index:number) => (
    <th className="border px-4 py-2 text-left font-bold [&>[align=center]]:text-center [&>[align=right]]:text-right" key={index}>
      {header}
    </th>))
  
  const rows = data.rows.map((row:any, index:number) => (
	<tr className="m-0 border-t p-0 even:bg-muted" key={index}>
	  {row.map((cell:any, cellIndex:number) => (
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


export const List: FC<TypeographyProps> = ({children}) =>{
  return (
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
      {children}
    </ul>
  )
}

interface AProps {
  href: string,
  children: React.ReactNode,
}

export const A: React.FC<AProps> = (props ) => {
  const href = props.href

  if (href.startsWith('/')) {
    return (
      <Link className="font-medium text-primary underline underline-offset-4" {...props}>
        {props.children}
      </Link>
    )
  }

  else if (href.startsWith('#')) {
    return ( <a {...props} />)
  } else {

	return (<a target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline underline-offset-4" {...props} />)
  }
}
