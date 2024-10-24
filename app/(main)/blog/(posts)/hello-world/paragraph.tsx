export const Paragraph = ({children}) => {
    return (
        <p className="leading-7 [&:not(:first-child)]:mt-6 fade-in animate-in duration-1000">
          {children}
        </p>
    )
}
