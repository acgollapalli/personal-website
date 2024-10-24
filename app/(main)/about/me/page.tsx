import Image from "next/image";
import Link from "next/link"

import { Separator } from "@/components/ui/separator"

import { AboutMeHeader } from "@/components/headings/about-me";

// TODO: start an x account under my actual name
// and then post on it exclusively through commit messages to this repo
export default function AboutMe() {
  return (
    <>
      <div className="grid grid-rows-[auto_1fr_auto] min-h-screen p-8">
        <div className="w-full max-w-7xl mx-auto">
          <AboutMeHeader/>
        </div>
      <main className="flex flex-col gap-8 py-16">

    </main>

    </div>
    </>
  );
}
