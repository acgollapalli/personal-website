'use client'

import { useTypewriter } from "@/components/effects/typewriter"

export const Subtitle = ({subtitle}: { subtitle: string | string[]}) => {
  const subtitleStrings = Array.isArray(subtitle) ? subtitle : [subtitle]
  const { text: subtitleText, showCursor: showSubtitleCursor, isDone: subtitleDone } = useTypewriter(subtitleStrings, {
    typingSpeed: 80,
    deletingSpeed: 100,
    pauseDuration: 1000,
    loop: false,
    keepLastPhrase: true,
  });

  // FIXME: We may want to add some transition-opacity maybe in a subtitle theme
  // Let's see how it looks first though
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 font-mono">
      <span className="relative">
        {subtitleText}
        { showSubtitleCursor && (
            <span className="animate-blink ml-1 opacity-90">|</span>
        ) }
      </span>
    </h2>
  )
}