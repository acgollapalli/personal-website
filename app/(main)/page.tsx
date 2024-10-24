import Link from "next/link"
import {
    SquareUser,
    UserPen,
    FileUser
} from "lucide-react"

import { Button } from "@/components/ui/button";
import { WelcomeHeader } from "@/components/headings/welcome";


export default function Home() {
  return (
        <>
            <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
                    <WelcomeHeader/>
                <main className="flex flex-col gap-8 py-16">
                    <div className="flex gap-4 items-center flex-col sm:flex-row">
                      <Link href="/about/me">
                      <Button variant="outline">
                        <SquareUser/>
                        About Me
                    </Button>
                    </Link>
                    <Link href="/blog">
                        <Button variant="outline" >
                            <UserPen/>
                            Blog
                        </Button>
                    </Link>
                    <Link href="/about/me/resume">
                        <Button variant="outline" >
                            <FileUser/>
                            Resume
                        </Button>
                    </Link>
                    </div>
                </main>
            </div>
        </>
    );
}
