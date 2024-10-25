'use client'

//import { useState, useEffect } from "react"
import { useTypewriter } from "@/components/effects/typewriter"
import { useState, useEffect } from "react"

export const ActiveHeader: React.FC = ({ callback }) => {
  const titles = ["About me", "Akshay Caleb Gollapalli"];
  const subtitles = ["Call me Caleb", "... unless you're my mom"];

  const { text: titleText, isDone: titleDone, showCursor: showTitleCursor } = useTypewriter(titles, {
    typingSpeed: 50,
    deletingSpeed: 60,
    pauseDuration: 2000,
    loop: false,
    keepLastPhrase: true,
  });

  const { text: subtitleText, showCursor: showSubtitleCursor, isDone: subtitleDone } = useTypewriter(subtitles, {
    typingSpeed: 50,
    deletingSpeed: 50,
    pauseDuration: 1800,
    loop: false,
    keepLastPhrase: false,
    startDelay: 8000, // Delay subtitle start until after title begins
  });

    useEffect(() => {
        if (subtitleDone) callback()
    }, [subtitleDone])

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

        {titleDone && !subtitleDone && (
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-700 transition-opacity duration-500 ease-in-out">
            <span className="relative">
              {subtitleText}
              {showSubtitleCursor && (
                <span className="animate-blink ml-1 opacity-90">|</span>
              )}
            </span>
          </h2>
        )}
      </div>
    </div>
  );
};


export const StaticHeader: React.FC = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto p-4">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-mono tracking-tight">
          <span className="relative">
            "Akshay Caleb Gollapalli"
          </span>
        </h1>
      </div>
    </div>
  );
};

export function  AboutMeHeader() {
     const [isActive, setActive] = useState(true)

    return (
        <div>
            {isActive ?
                (<ActiveHeader callback={() => setActive(false)} />) :
               (<StaticHeader  />)
            }
        </div>
    )
}


import { TerminalButton } from "@/components/ui/terminal-button"
import Link from  "next/link"

export function WouldYouLikeToKnowMore() {
    const subtitles= ["Would you like to know more?"]
  const { text: subtitleText, showCursor: showSubtitleCursor, isDone: subtitleDone } = useTypewriter(subtitles, {
    typingSpeed: 50,
    deletingSpeed: 50,
    pauseDuration: 1800,
    loop: false,
    keepLastPhrase: true,
    startDelay: 800, // Delay subtitle start until after title begins
  });


    return (
        <div>
            <h2 className="scroll-m-20 py-8 text-4xl font-semibold tracking-tight first:mt-0 font-mono text-gray-400 transition-opacity duration-500 ease-in-out">
                <span className="relative">
                    {subtitleText}
                    {showSubtitleCursor && (
                        <span className="animate-blink ml-1 opacity-90">|</span>
                    )}
                </span>
            </h2>
            { subtitleDone &&
                          <div className="animate-fade animate-duration-1000 justify-right">
                <TerminalButton>
                    <Link href="/projects">I'd Like to see your projects</Link>
                </TerminalButton>
                <TerminalButton>
                    <Link href="/blog">I want to read your blog</Link>
                </TerminalButton>
                <TerminalButton>
                    <Link href="/about/me/resume">Do you have a resume?</Link>
                </TerminalButton>
            </div>


            }
        </div>
    )
}
