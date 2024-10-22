'use client'
import { useTypewriter } from "@/components/gollapalli/typewriter"

export function WelcomeHeader() {
    const titleStrings= [
    "Hello",
    "You've reached my home page",
    "Try using the sidebar to learn more",
    "Or click below...",
    "Whatever works"
  ]

  const { text: titleText, showCursor: showTitleCursor } = useTypewriter(titleStrings, {
    typingSpeed: 50,
    deletingSpeed: 60,
    pauseDuration: 2000,
    loop: false,
    keepLastPhrase: true,
  });


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
