import { HomeIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"

export function NavHome () {
   return (
       <Button className="w-span px-1.5" variant="ghost" >
              <div className="flex aspect-square size-5 items-center justify-center rounded-md">
                <HomeIcon className="size-3" />
              </div>
              <span className="truncate font-semibold">Akshay Caleb Gollapalli</span>
       </Button>
   )
}
