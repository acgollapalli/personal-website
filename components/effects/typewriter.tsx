'use client'

import React, { useState, useEffect, useCallback } from 'react';

type TypewriterOptions = {
  typingSpeed?: number
  deletingSpeed?: number,
  pauseDuration?: number,
  loop?: boolean,
  keepLastPhrase?: boolean,
  startDelay?: number,
  pauseOnLastPhrase: boolean,
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
    pauseOnLastPhrase = false,
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
      if (keepLastPhrase && !pauseOnLastPhrase && currentPhraseIndex === phrases.length - 1) {
          setTimeout(() => {
            setShowCursor(false);
            setIsDone(true);
          }, pauseDuration);
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
