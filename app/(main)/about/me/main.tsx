'use client'

import { useEffect, useState } from "react"
import { Separator } from "@/components/ui/separator";
import { Section } from "./section"

import { whoAmI } from "./who-am-i"
import { whereAmIFrom } from "./where-am-i-from"
import { whatAmIUpTo } from "./what-am-i-up-to";
import { wheresTheSidebar } from "./wheres-the-sidebar";
import { WouldYouLikeToKnowMore } from "./dialog";

export function MainBody() {
    const [sec1, setsec1] = useState(false)
    const [sec2, setsec2] = useState(false)
    const [sec3, setsec3] = useState(false)
    const [sec4, setsec4] = useState(false)
    const [knowMore, setKnowMore] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setsec1(true), 17000)
        return () => clearTimeout(timer)
    }, [])

    // FIXME: save a cookie for people who have seen all this before and
    // let them just skip to the static version
    return (
        <div className="px-8 container mx-auto space-y-8, max-w-screen-lg" >
            <Separator className="animate-fade animate-duration-1000 animate-delay-[19s]"/>
            <div className="flex justify-center py-8">
            <div className="grid md:grid-cols-2 gap-6">
                { sec1 && <Section content={whoAmI} callback={setsec2}/> }
                { sec2 && <Section content={whereAmIFrom} callback={setsec3} /> }
                { sec3 && <Section content={whatAmIUpTo} callback={setsec4} /> }
                { sec4 && <Section content={wheresTheSidebar} callback={setKnowMore} /> }
            </div>
            </div>
            { knowMore && <WouldYouLikeToKnowMore/> }
        </div>
    )
}
