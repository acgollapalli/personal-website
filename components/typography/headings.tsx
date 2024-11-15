import type { FC } from 'react'

interface TypeographyProps {
  children: React.ReactNode;
}

export const H1 : FC<TypeographyProps> = ({children}) =>  {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {children}
    </h1>
  )
}

export const H2 : FC<TypeographyProps> = ({children}) =>  {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
	{children}
    </h2>
  )
}

export const H3 : FC<TypeographyProps> = ({children}) => {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight font-mono mt-8 first:mt-0">
      {children}
    </h3>
  )
}

export const H4 : FC<TypeographyProps> = ({children}) => {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight font-mono mt-8 first:mt-0 text-gray-400">
      {children}
    </h4>
  )
}

export const Title : FC<TypeographyProps> = ({children}) =>  {
  return (
	<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl font-mono">
	  {children}
	</h1>
  )
}

export const Subtitle : FC<TypeographyProps> = ({children}) =>  {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 font-mono text-gray-500 transition-opacity duration-500 ease-in-out">
	  {children}
    </h2>
  )
}
