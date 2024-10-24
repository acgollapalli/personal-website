'use client'

import { useTypewriter } from "@/components/effects/typewriter"
import { Subtitle } from "./subtitle"

export const Title = ({title, subtitle}: { title: string | string[], subtitle: string[] }): React.FC => {
  const titleStrings = Array.isArray(title) ? title : [title]
  const { text: titleText, showCursor: showTitleCursor, isDone: titleDone } = useTypewriter(titleStrings, {
    typingSpeed: 60,
    deletingSpeed: 80,
    pauseDuration: 800,
    loop: false,
    keepLastPhrase: true,
  });

  return (
    <div>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl font-mono">
        <span className="relative">
          {titleText}
          {showTitleCursor && (
            <span className="animate-blink ml-1 opacity-90">|</span>
          )}
        </span>
      </h1>
      {subtitle && titleDone && <Subtitle subtitle={subtitle}/>}
      {subtitle && !titleDone && ( <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 font-mono opacity-0">
      <span className="relative">
        {subtitle.sort((a, b) => b.length - a.length)[0]}
      </span>
    </h2>)}
    </div>
  )
}
