import { type ReactNode } from "react"

type TButtProps = {
    children: ReactNode
}

export function TerminalButton({children}: TButtProps) {
    return (<h3 className="scroll-m-20 text-2xl tracking-tight first:mt-0 font-mono transition-opacity duration-500 ease-in-out">
        <span className="relative group hover:opacity-90 opacity-50 " >
            <span className="group-hover:animate-blink ml-1 opacity-0 group-hover:opacity-90">{"> "}</span>
            {children}
        </span>
    </h3>)
}
