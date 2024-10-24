'use client'

import { useTypewriter } from "@/components/effects/typewriter"
import { Section } from "./section"

export const SubHeading = ({subheading, children }) => {
  const subheadingstrings = Array.isArray(subheading) ? subheading : [subheading]

  const { text: subheadingtext, showCursor: showsubheadingcursor, isDone: subheadingdone } = useTypewriter(subheadingstrings, {
    typingSpeed: 70,
    deletingSpeed: 90,
    pauseDuration: 1000,
    loop: false,
    keepLastPhrase: true,
  });

  return (
    <div>
    <br/>
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight font-mono">
      <span className="relative">
        {subheadingtext}
        { showsubheadingcursor && (
            <span className="animate-blink ml-1 opacity-90">|</span>
        ) }
      </span>
    </h4>
    {children.map((child, idx) => (
      <div key={subheadingstrings[0] + idx} >
        <Section prev={subheadingdone}>
          {child}
        </Section>
      </div>
    ))}
    </div>
  )
}
