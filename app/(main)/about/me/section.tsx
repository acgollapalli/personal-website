'use client'

import { useTypewriter } from "@/components/effects/typewriter";
import { useEffect, useState } from "react";

type SectionContent = {
    call: string[]
    response: string[]
    fill: string[]
}

export function ActiveSection({content, callback}:
                              { content: SectionContent, callback: () => void }) {
  const { call, response } = content
  const { text: titleText, isDone: titleDone, showCursor: showTitleCursor } = useTypewriter(call, {
    typingSpeed: 50,
    deletingSpeed: 60,
    pauseDuration: 800,
    startDelay: 0,
    loop: false,
    keepLastPhrase: true,
  });

  const { text: subtitleText, showCursor: showSubtitleCursor, isDone: subtitleDone } = useTypewriter(response, {
    typingSpeed: 50,
    deletingSpeed: 50,
    pauseDuration: 800,
    loop: false,
    keepLastPhrase: true,
    startDelay: 2000, // Delay subtitle start until after title begins
  });

    useEffect(() => {
        if (subtitleDone)  {
            callback()
        }
    }, [subtitleDone])

    return (
        <div className={"p-2"}>
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                <span className="relative">
                    {titleText}
                    {showTitleCursor && (
                        <span className="animate-blink ml-1 opacity-90">|</span>
                    )}
                </span>
            </h2>
            <h3 className="scroll-m-20 pb-2 text-2xl tracking-tight first:mt-0 font-mono text-gray-500 transition-opacity duration-500 ease-in-out">
                {titleDone && (
                    <span className="relative">
                        {subtitleText}
                        {showSubtitleCursor && (
                            <span className="animate-blink ml-1 opacity-90">|</span>
                        )}
                    </span>

                )}
            </h3>
        </div>
    )
}

export function StaticSection({content}: { content: SectionContent }) {
  const { call, response } = content
    return (
        <div className={"p-2"}>
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                <span className="relative">
                    {call[call.length -1]}
                </span>
            </h2>
            <h3 className="scroll-m-20 pb-2 text-2xl tracking-tight first:mt-0 font-mono text-gray-500 transition-opacity duration-500 ease-in-out">
                    <span className="relative">
                        {response[response.length -1]}
                    </span>
            </h3>
        </div>
    )
}

export function Section({content,callback}:
                        { content: SectionContent, callback: (b: boolean) => void }) {
    const { fill } = content

    const [isActive, setActive] = useState(true)
    useEffect(() => {
        const timer = setTimeout(() => callback(!isActive), 3000)
        return () => clearTimeout(timer)
    }, [isActive]) // pass the isActive back

    return (
        <div>
            {isActive ?
                (<ActiveSection content={content} callback={() => setActive(false)} />) :
               (<StaticSection content={content}  />)
            }
            {fill.map((f, idx) => {
                return (<p className="leading-7 [&:not(:first-child)]:mt-6 animate-fade animate-duration-1000 animate-delay-[3s]" key={idx}>
                    {f}
                </p>)
            })}
        </div>
    )
}
