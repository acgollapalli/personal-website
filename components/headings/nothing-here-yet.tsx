'use client'
import { useTypewriter } from "@/components/effects/typewriter"
import { redirect } from "next/navigation";
import { useEffect } from "react"

export function NothingHereYetHeader() {
    const titleStrings= [
    "Well, this is awkward...",
    "I'm afraid there's nothing here yet.",
    "These are not the droids you're looking for.",
    "...",
    "Well?",
    "What are you still doing here?",
    "Begone from whence ye came!",
    "The back button works.",
    "I think...",
    "You never know with single-page apps.",
    "But give it a shot anyway?",
    "Or just check out my github.",
    "Yeah, let's do that.",
    "See you later space cowboy.",
    "Redirect in 3... 2... 1..."
  ]

  const { text: titleText, isDone: titleDone, showCursor: showTitleCursor } = useTypewriter(titleStrings, {
    typingSpeed: 50,
    deletingSpeed: 70,
    pauseDuration: 2000,
    loop: false,
    keepLastPhrase: true,
  });

    useEffect(() => {
        if (titleDone) {
            redirect("https://github.com/acgollapalli")
        }
    }, [titleDone])


  return (
    <div className="relative w-full max-w-4xl mx-auto p-4">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-mono tracking-tight">
          <span className="relative">
            {titleText}
            {showTitleCursor && (
              <span className="animate-blink ml-1 opacity-90">|</span>
            )}
          </span>
        </h1>
      </div>
    </div>

  )
}
