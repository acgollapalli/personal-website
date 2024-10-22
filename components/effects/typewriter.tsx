'use client'

import React, { useState, useEffect, useCallback } from 'react';

type TypewriterOptions = {
  typingSpeed?: number
  deletingSpeed?: number,
  pauseDuration?: number,
  loop?: boolean,
  keepLastPhrase?: boolean,
  startDelay?: number
}

type TypewriterReturn = {
  text: string,
  isDone: boolean,
  showCursor: boolean
}

export const useTypewriter = (phrases: string[], options: TypewriterOptions = {}): TypewriterReturn => {
  const {
    typingSpeed = 150,
    deletingSpeed = 100,
    pauseDuration = 1500,
    loop = true,
    keepLastPhrase = false,
    startDelay = 0,
  } = options;

  const [displayText, setDisplayText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isDone, setIsDone] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [pauseStart, setPauseStart] = useState<number | null>(null);

  // Handle start delay
  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), startDelay);
    return () => clearTimeout(timer);
  }, [startDelay]);

  const typeText = useCallback(() => {
    const currentPhrase = phrases[currentPhraseIndex];

    // If we're paused, check if we should unpause
    if (isPaused && pauseStart) {
      if (performance.now() - pauseStart >= pauseDuration) {
        setIsPaused(false);
        setPauseStart(null);
        setIsTyping(false);
      }
      return;
    }

    if (isTyping) {
      if (displayText.length < currentPhrase.length) {
        const nextChar = currentPhrase[displayText.length];
        setDisplayText(prev => prev + nextChar);
        return;
      }

      // Handle completion of current phrase
      if (keepLastPhrase && currentPhraseIndex === phrases.length - 1) {
        setIsDone(true);
        setTimeout(() => setShowCursor(false), pauseDuration);
        return;
      }

      // Start pause
      setIsPaused(true);
      setPauseStart(performance.now());
      return;
    }

    if (displayText.length === 0) {
      const nextIndex = (currentPhraseIndex + 1) % phrases.length;
      if (!loop && nextIndex === 0) {
        setIsDone(true);
        return;
      }
      setCurrentPhraseIndex(nextIndex);
      setIsTyping(true);
      return;
    }

    setDisplayText(prev => prev.slice(0, -1));
  }, [
    displayText,
    currentPhraseIndex,
    isTyping,
    phrases,
    loop,
    keepLastPhrase,
    pauseDuration,
    isPaused,
    pauseStart
  ]);

  useEffect(() => {
    if (!isReady || (isDone && !showCursor)) return;

    const speed = isTyping ? typingSpeed : deletingSpeed;
    let rafId: number;
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      if (currentTime - lastTime >= speed) {
        typeText();
        lastTime = currentTime;
      }
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [displayText, isTyping, isDone, showCursor, typeText, typingSpeed, deletingSpeed, isReady]);

  return {
    text: displayText,
    isDone,
    showCursor,
  };
};

const TypewriterHeader: React.FC = () => {
  const titles = ["About me", "Akshay Caleb Gollapalli"];
  const subtitles = ["Call me Caleb", "... unless you're my mom"];

  const { text: titleText, isDone: titleDone, showCursor: showTitleCursor } = useTypewriter(titles, {
    typingSpeed: 80,
    deletingSpeed: 60,
    pauseDuration: 2000,
    loop: false,
    keepLastPhrase: true,
  });

  const { text: subtitleText, showCursor: showSubtitleCursor } = useTypewriter(subtitles, {
    typingSpeed: 70,
    deletingSpeed: 50,
    pauseDuration: 1800,
    loop: false,
    keepLastPhrase: true,
    startDelay: 1000, // Start subtitle after title begins
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
