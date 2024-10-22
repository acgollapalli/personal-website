'use client'
import { useTypewriter } from "@/components/gollapalli/typewriter"

export function WelcomeHeader() {
    const targetStrings = [
    "Hello",
    "You've reached my home page",
    "Try using the sidebar to learn more",
    "Or click below...",
    "Whatever works"
  ]
  const { outstring } = useTypewriter(targetStrings, 3)

  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl lg:min-w-full font-mono justify-self-left">
      { outstring }
    </h1>
  )
}
