'use client'
import { useTypewriter } from "@/components/effects/typewriter"

export const BlogHeader: React.FC = () => {
  const titles = ["Welcome to", "*ahem*", "*the Wizard Log*"];
  const subtitles = ["Every Blog Needs a Title"];

  const { text: titleText, isDone: titleDone, showCursor: showTitleCursor } = useTypewriter(titles, {
    typingSpeed: 50,
    deletingSpeed: 60,
    pauseDuration: 1000,
    loop: false,
    keepLastPhrase: true,
  });

  const { text: subtitleText, showCursor: showSubtitleCursor } = useTypewriter(subtitles, {
    typingSpeed: 50,
    deletingSpeed: 50,
    pauseDuration: 1800,
    loop: false,
    keepLastPhrase: true,
    startDelay: 7000, // Delay subtitle start until after title begins
  });

  return (
    <div className="relative mx-auto">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-mono tracking-tight">
          <span className="relative">
            {titleText}
            {showTitleCursor && (
              <span className="animate-blink ml-1 opacity-90">|</span>
            )}
          </span>
        </h1>

        {titleDone && (
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
