'use client'

import { useTypewriter } from "@/components/effects/typewriter"

export const BlockQuote = ({ blockQuote }: { blockQuote: string[] }) => {
  const blockQuotestrings = Array.isArray(blockQuote) ? blockQuote : [blockQuote]

  const options =  {
    typingSpeed: 50,
    deletingSpeed: 30,
    pauseDuration: 2000,
    loop: true,
    keepLastPhrase: false
  }

  if (blockQuotestrings.length == 1) {
    options.keepLastPhrase = true
    options.loop = false
  }

  const { text: blockQuotetext, showCursor: showblockQuotecursor, isDone: blockQuotedone } = useTypewriter(blockQuotestrings, options);

  return (
    <div>
    <blockquote className="my-3 border-l-2 pl-6 font-mono">
      <span className="relative">
        {blockQuotetext}
        { showblockQuotecursor && (
            <span className="animate-blink ml-1 opacity-90">|</span>
        ) }
      </span>
    </blockquote>
    </div>
  )
}
