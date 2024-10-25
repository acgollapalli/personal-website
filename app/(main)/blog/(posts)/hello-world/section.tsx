'use client'
import React, { useRef, PropsWithChildren, type RefObject } from "react"
import { useInViewport } from 'react-in-viewport';

type SectionProps = PropsWithChildren<{ prev: boolean }>

export const Section: React.FC<SectionProps> = ({ prev, children }) => {
  const myRef = useRef<HTMLElement>(null);
  const {
    inViewport,
    enterCount,
  } = useInViewport(myRef as RefObject<HTMLElement>);

  return (
        <div ref={myRef as RefObject<HTMLDivElement>}>
            {(inViewport || enterCount > 0) && prev && children }
            { ((enterCount == 0) || !prev) && (
                <div className="opacity-0">
                {children}
                </div>
            ) }
        </div>
    )
}
