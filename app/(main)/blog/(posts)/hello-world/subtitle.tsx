'use client'

import { useTypewriter } from "@/components/effects/typewriter"

export const Subtitle = ({subtitle}: { subtitle: string | string[]}) => {
  const subtitleStrings = Array.isArray(subtitle) ? subtitle : [subtitle]
  const { text: subtitleText, showCursor: showSubtitleCursor } = useTypewriter(subtitleStrings, {
    typingSpeed: 50,
    deletingSpeed: 30,
    pauseDuration: 500,
    loop: false,
    keepLastPhrase: true,
  });

  // FIXME: We may want to add some transition-opacity maybe in a subtitle theme
  // Let's see how it looks first though
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 font-mono text-gray-500 transition-opacity duration-500 ease-in-out">
      <span className="relative">
        {subtitleText}
        { showSubtitleCursor && (
            <span className="animate-blink ml-1 opacity-90">|</span>
        ) }
      </span>
    </h2>
  )
}
