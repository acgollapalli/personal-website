'use client'

import { useState, useEffect, useMemo, useCallback } from "react"

export const useTypewriter = (targetStrings: string[], transitionBlinks: number, stopWhenDone=false, start=true) => {
    const [outstring, setOutstring] = useState<string>("|")
    const [stringState, setStringState] = useState<number>(1)
    const [numBlinks, setNumBlinks] = useState<number>(0)
    const [showCursor, setShowCursor] = useState<boolean>(true)
    const [done, setDone] = useState<boolean>(false)

    const buildUpOutstring = useMemo(()=> () => {
        const targetStatement = targetStrings[Math.abs(stringState) -1]
        let slice

        if (outstring.length == 1) slice = targetStatement.slice(0,1)
        else slice = targetStatement.slice(0, outstring.length )

        if (numBlinks < transitionBlinks * 2) setOutstring(slice + "|")
    }, [outstring, stringState])

    const breakDownOutstring = useMemo(() => () => {
        const targetStatement = targetStrings[Math.abs(stringState) -1]
        let slice

        if (outstring.length == 3) setOutstring("|")
        else setOutstring(targetStatement.slice(0, outstring.length -2) + "|")
    }, [outstring, stringState])

    const blink = useMemo(() => () => {
        if (outstring.slice(outstring.length-1) == "|") setOutstring(outstring.slice(0, outstring.length -1) + "‎ ")
        else setOutstring(outstring.slice(0, outstring.length -1) + "|")

        if (numBlinks <= transitionBlinks * 2 && !done) setNumBlinks(numBlinks + 1)

    }, [outstring, numBlinks])

    const stateMachine = useMemo(() => () => {
        console.log("Statemachine called", numBlinks, stringState,targetStrings[stringState -1],outstring, outstring == targetStrings[stringState -1] + "|")
        if (stringState > 0){// build the string up
            if (outstring.length >= targetStrings[stringState -1].length + 1) {
                console.log("def got here right?")
                if (stringState == targetStrings.length) {
                    console.log("got here")
                    setStringState(0)
                    blink()
                }
                else if (numBlinks > transitionBlinks*2 ) {
                    console.log("got here instead")
                    setNumBlinks(0)
                    setOutstring("|")
                    setStringState(stringState + 1)
                }
                else {
                    console.log("NOPE we got here", numBlinks, numBlinks > transitionBlinks*2)
                    blink()
                }
            }
            else buildUpOutstring()
        } else {
            console.log("stoping", stopWhenDone, numBlinks)
            if (stopWhenDone && numBlinks > transitionBlinks*2 ) {
                setOutstring(targetStrings[targetStrings.length -1])
                setDone(true)
            }
            else blink()
        }

    }, [outstring, stringState, numBlinks])

    useEffect(() => {
        if (start && !(stopWhenDone && done)) {
            setTimeout(stateMachine, 240)
        }
    }
    , [outstring, stringState, numBlinks, start])

    return { outstring, done }
}
