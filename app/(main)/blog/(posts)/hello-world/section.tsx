'use client'

import { useEffect, useState,  useRef } from "react"


export const Section = ({ prev, children, succ }) => {
  const sectionRef = useRef(null)
  const [inViewport, setInViewport] = useState<boolean>(false)

  // observe when our section is in view
  useEffect(() => {
    let observer

    const observerFn = (entries) => {
        if (!inViewport) setInViewport(entries[0]) // only setInViewport once
        if (succ != null) succ(true)
    }

    const observerOptions = {
      root: null,
      rootMargin: '100px',
      rootThreshold: 1
    }

    observer = new IntersectionObserver(observerFn, observerOptions)

    if (sectionRef.current != null) {
        observer.observe(sectionRef.current)
    }
     // let's keep things tidy
     return () => { if (sectionRef.current) observer.unobserve(sectionRef.current) }
  }, [sectionRef])

  return (
        <section ref={sectionRef}>
            {inViewport && prev && children }
            { !prev && (
                <div className="opacity-0">
                {children}
                </div>
            ) }
        </section>
    )
}
