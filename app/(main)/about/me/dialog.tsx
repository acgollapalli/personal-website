'use client'

//import { useState, useEffect } from "react"
import { useTypewriter } from "@/components/effects/typewriter"
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
                    <Link href="/projects">I&apos;d Like to see your projects</Link>
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
