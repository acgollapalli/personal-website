'use client'
import { useRef } from "react"
import { useInViewport } from 'react-in-viewport';

export const Section = ({ prev, children }) => {
  const myRef = useRef();
  const {
    inViewport,
    enterCount,
    leaveCount,
  } = useInViewport(myRef);

  return (
        <div ref={myRef}>
            {(inViewport || enterCount > 0) && prev && children }
            { ((enterCount == 0) || !prev) && (
                <div className="opacity-0">
                {children}
                </div>
            ) }
        </div>
    )
}
