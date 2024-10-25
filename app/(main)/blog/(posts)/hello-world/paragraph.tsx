import { PropsWithChildren } from "react"

export const Paragraph = ({children}: PropsWithChildren) => {
    return (
      <>
        <p className="py-2 leading-7 [&:not(:first-child)]:mt-6 fade-in animate-fade animate-duration-1000">
          {children}
        </p>
      </>
    )
}
