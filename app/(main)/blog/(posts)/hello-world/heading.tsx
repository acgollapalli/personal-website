'use client'

import { useTypewriter } from "@/components/effects/typewriter"
import { Section } from "./section"

export const Heading = ({heading, children}) => {
  const headingstrings = Array.isArray(heading) ? heading : [heading]

  const { text: headingtext, showCursor: showheadingcursor, isDone: headingdone } = useTypewriter(headingstrings, {
    typingSpeed: 50,
    deletingSpeed: 70,
    pauseDuration: 1000,
    loop: false,
    keepLastPhrase: true,
  });

  return (
    <div>
      <br/>
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight font-mono">
      <span className="relative">
        {headingtext}
        { showheadingcursor && (
            <span className="animate-blink ml-1 opacity-90">|</span>
        ) }
      </span>
    </h3>
    {children.map((child, idx) => (
      <div key={heading[0] + idx} >
        <Section prev={headingdone}>
          {child}
        </Section>
      </div>
    ))}
    </div>
  )
}
