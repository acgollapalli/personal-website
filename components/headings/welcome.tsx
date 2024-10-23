'use client'
import { useTypewriter } from "@/components/effects/typewriter"
import { redirect } from "next/navigation"
import { useEffect, useState } from "react"

export function WelcomeHeader() {
  const titleStrings= [
    "Hello",
    "You've reached my home page",
    "Try using the sidebar to learn more",
    "Or click below...",
    "Whatever works"
  ]

  const stillHereTimeout = 30000
  const youreStillHere = [
    "You're still here?",
    "Here, I'll help you out",
    "Redirecting in 3... 2... 1... Have fun!"
  ]

  const { text: titleText, showCursor: showTitleCursor } = useTypewriter(titleStrings, {
    typingSpeed: 50,
    deletingSpeed: 60,
    pauseDuration: 2000,
    loop: false,
    keepLastPhrase: true,
    pauseOnLastPhrase: true
  });

  const { text: stillHereText, isDone: stillHereIndeed, showCursor: showStillHereCursor } = useTypewriter(youreStillHere, {
    typingSpeed: 50,
    deletingSpeed: 60,
    pauseDuration: 2000,
    loop: false,
    keepLastPhrase: true,
    startDelay: stillHereTimeout + 200
  })

  const [stillHere, setStillHere] = useState<boolean>(false)

  useEffect(() => {
    const timer = setTimeout(() => setStillHere(true), stillHereTimeout)
    return () => clearTimeout(timer)
  }, [stillHere])

  useEffect(() => {
    if (stillHereIndeed) redirect("/about/me")
  }, [stillHereIndeed])

  return (
    <div className="relative w-full max-w-4xl mx-auto p-4">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-mono tracking-tight">
          <span className="relative">
            {stillHere ? stillHereText : titleText}
            { (stillHere ? showStillHereCursor : showTitleCursor) && (
              <span className="animate-blink ml-1 opacity-90">|</span>
            )}
          </span>
        </h1>
      </div>
    </div>

  )
}
