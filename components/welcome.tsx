'use client'

import { useState, useEffect, useMemo, useCallback } from "react"

export function WelcomeHeader() {
    const [heading, setHeading] = useState<string>("|")
    const [stringState, setStringState] = useState<number>(0)
    const [numBlinks, setNumBlinks] = useState<number>(0)
    const [showCursor, setShowCursor] = useState<boolean>(true)

    // FIXME: we should just have a single array with multiple statements
    const firstLineTarget = "Hello"
    const transitionBlinks = 3
    const secondLineTarget = "You've reached my home page"

    const buildUpHeading = useMemo(()=> (target: number) => {
        console.log("building up")
        let targetStatement
        let slice
        if (target == 0) targetStatement = firstLineTarget
        else targetStatement = secondLineTarget

        if (heading.length == 1) slice = targetStatement.slice(0,1)
        else slice = targetStatement.slice(0, heading.length -1)
        console.log("building up heading, slice:", slice, heading.length -1)
        setHeading(slice + " |")
    }, [heading])

    const breakDownHeading = useMemo(() => (target: number) => {
        console.log("breaking down")
        let targetStatement
        let slice
        if (target == 0) targetStatement = firstLineTarget
        else targetStatement = secondLineTarget

        if (heading.length == 3) setHeading("|")
        else setHeading(targetStatement.slice(0, heading.length -3) + " |")
    }, [heading])

    const blink = useMemo(() => () => {
        console.log("blinking")
        if (heading.slice(heading.length-1) == "|") setHeading(heading.slice(0, heading.length -1) + "‎ ")
        else setHeading(heading.slice(0, heading.length -1) + "|")
        setNumBlinks(numBlinks + 1)
    }, [heading])

    const stateMachine = useMemo(() => () => {
        console.log("statemeachine", heading, stringState)
        switch (stringState) {
            case 0: // build the string up
                console.log("eq check", heading == firstLineTarget + " |")
                if (heading == firstLineTarget + " |") setStringState(1)
                else buildUpHeading(0)
                break
            case 1: // blink for a bit
                console.log("eq check", numBlinks > transitionBlinks * 2)
                if (numBlinks > transitionBlinks * 2) setStringState(2)
                else blink()
                break
            case 2: // break the string down
                if (heading.length == 1) setStringState(3)
                else breakDownHeading(0)
                break
            case 3:
                if (heading == secondLineTarget + " |") setStringState(4)
                else buildUpHeading(1)
                break
            case 4: // blink for a bit
                if (numBlinks > transitionBlinks * 2) setStringState(-1)
                else setStringState(5)
                break
            case -1: // we're done just blink
                blink()
                break

        }
    }, [heading, stringState])



    useEffect(() => {
        console.log("callingStatemachine")
        setTimeout(stateMachine, 240)
    }
    ,[heading, stringState, numBlinks])


  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl font-mono justify-self-start">
      {heading}
    </h1>
  )
}
