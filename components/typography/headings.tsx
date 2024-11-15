import type { FC } from 'react'

export function H1({children}): FC {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {children}
    </h1>
  )
}

export function H2 ({children}) : FC {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
	{children}
    </h2>
  )
}

export function H3 ({children}) : FC {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight font-mono mt-8 first:mt-0">
      {children}
    </h3>
  )
}

export function H4 ({children}) : FC {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight font-mono mt-8 first:mt-0 text-gray-400">
      {children}
    </h4>
  )
}

export function Title({children}): FC {
  return (
	<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl font-mono">
	  {children}
	</h1>
  )
}

export function Subtitle({children}): FC {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 font-mono text-gray-500 transition-opacity duration-500 ease-in-out">
	  {children}
    </h2>
  )
}
