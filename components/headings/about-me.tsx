'use client'
//import { useState, useEffect } from "react"
import { useTypewriter } from "@/components/effects/typewriter"

export const AboutMeHeader: React.FC = () => {
  const titles = ["About me", "Akshay Caleb Gollapalli"];
  const subtitles = ["Call me Caleb", "... unless you're my mom"];

  const { text: titleText, isDone: titleDone, showCursor: showTitleCursor } = useTypewriter(titles, {
    typingSpeed: 50,
    deletingSpeed: 60,
    pauseDuration: 800,
    loop: false,
    keepLastPhrase: true,
  });

  const { text: subtitleText, showCursor: showSubtitleCursor, isDone: subtitleDone } = useTypewriter(subtitles, {
    typingSpeed: 50,
    deletingSpeed: 50,
    pauseDuration: 500,
    loop: false,
    keepLastPhrase: false,
    startDelay: 8000, // Delay subtitle start until after title begins
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
