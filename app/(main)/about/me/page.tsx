import Image from "next/image";
import Link from "next/link"
import { AboutMeHeader } from "@/components/headings/about-me";


export default function AboutMe() {
  return (
        <>
            <div className="grid grid-rows-[auto_1fr_auto] min-h-screen p-8">
                <div className="w-full max-w-7xl mx-auto">
                    <AboutMeHeader/>
                </div>
                <main className="flex flex-col gap-8 py-16">
                        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                            Who am I?
                        </h3>
                        {/* add stuff here */}

                </main>
                <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
                    <a
                        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            aria-hidden
                            src="https://nextjs.org/icons/file.svg"
                            alt="File icon"
                            width={16}
                            height={16}
                        />
                        Learn
                    </a>
                    <a
                        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                        href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            aria-hidden
                            src="https://nextjs.org/icons/window.svg"
                            alt="Window icon"
                            width={16}
                            height={16}
                        />
                        Examples
                    </a>
                    <a
                        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                        href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            aria-hidden
                            src="https://nextjs.org/icons/globe.svg"
                            alt="Globe icon"
                            width={16}
                            height={16}
                        />
                        Go to nextjs.org →
                    </a>
                </footer>
            </div>
        </>
    );
}