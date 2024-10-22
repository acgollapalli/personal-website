'use client'
import { useState, useEffect } from "react"
import { useTypewriter } from "@/components/gollapalli/typewriter"

export function AboutMeHeader() {
    const titleStrings = [
        "About me",
        "Akshay Caleb Gollapalli"
     ]

    const subtitleStrings = [
        "Call me Caleb",
        "... unless you're my mom"
    ]

  enum subtitleState {
      'notStarted',
      'started',
      'done'
  }

  const [showSubtitle, setShowSubtitle] = useState<subtitleState>(subtitleState.notStarted)
  const [showSubBool, setShowSubBool] = useState<boolean>(false)

  const title = useTypewriter(titleStrings, 3, true)

  const subtitle = useTypewriter(subtitleStrings, 3, true, showSubBool)

    useEffect(() => {
        console.log("Here we are", title.done, subtitle.done)
        if (title.done) {
            if (showSubtitle == subtitleState.notStarted) {
                setShowSubtitle(subtitleState.started)
                setShowSubBool(true)
            }
            else if (subtitle.done) {
                setShowSubBool(false)
                setShowSubtitle(subtitleState.done)
            }
        }
    }, [title.done, subtitle.done, title, subtitle])

  return (
      <div>
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl lg:min-w-full font-mono justify-self-left">
        {title.outstring}
    </h1>
    {
        showSubBool && (
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                {subtitle.outstring}
            </h2>)
    }
</div>
  )
}
