import Image from "next/image";
import Link from "next/link"

import './me.css'

import { Separator } from "@/components/ui/separator"

import { AboutMeHeader } from "@/components/headings/about-me";

export default function AboutMe() {
  return (
        <>
            <div className="grid grid-rows-[auto_1fr_auto] min-h-screen p-8">
                <div className="w-full max-w-7xl mx-auto">
                    <AboutMeHeader/>
                </div>
                <main className="flex flex-col gap-8 py-16">
                    <Separator className="fade-in-17 opacity-0"/>
                        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                            Who am I?
                        </h3>
                        {/* add stuff here */}

                </main>

            </div>
        </>
    );
}
