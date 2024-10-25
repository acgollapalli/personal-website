"use client"

import * as React from "react"
import {
//  ArrowDown,
//  ArrowUp,
//  Bell,
//  Copy,
//  CornerUpLeft,
//  CornerUpRight,
//  FileText,
//  GalleryVerticalEnd,
//  LineChart,
////  MoreHorizontal,
//  Settings2,
//  Trash,
//  Trash2,
  Rss,
} from "lucide-react"
import {
  MoonIcon,
  SunIcon,
//  Link2Icon,
  GitHubLogoIcon
} from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
//import {
//  Popover,
//  PopoverContent,
//  PopoverTrigger,
//} from "@/components/ui/popover"
//import {
//  Sidebar,
//  SidebarContent,
//  SidebarGroup,
//  SidebarGroupContent,
//  SidebarMenu,
//  SidebarMenuButton,
//  SidebarMenuItem,
//} from "@/components/ui/sidebar"
import Link from "next/link"

//const data = [
//  [
//  {
//    label: "Customize Page",
//    icon: Settings2,
//  },
//  {
//    label: "Turn into wiki",
//    icon: FileText,
//  },
//  ],
//  [
//  {
//    label: "Copy Link",
//    icon: Link2Icon,
//  },
//  {
//    label: "Duplicate",
//    icon: Copy,
//  },
//  {
//    label: "Move to",
//    icon: CornerUpRight,
//  },
//  {
//    label: "Move to Trash",
//    icon: Trash2,
//  },
//  ],
//  [
//  {
//    label: "Undo",
//    icon: CornerUpLeft,
//  },
//  {
//    label: "View analytics",
//    icon: LineChart,
//  },
//  {
//    label: "Version History",
//    icon: GalleryVerticalEnd,
//  },
//  {
//    label: "Show delete pages",
//    icon: Trash,
//  },
//  {
//    label: "Notifications",
//    icon: Bell,
//  },
//  ],
//  [
//  {
//    label: "Import",
//    icon: ArrowUp,
//  },
//  {
//    label: "Export",
//    icon: ArrowDown,
//  },
//  ],
//]

export function NavActions(){
  //const [isOpen, setIsOpen] = React.useState(false)

  const { setTheme, theme } = useTheme()
  const toggleTheme = () => {
  const t = theme == "dark" ? "light" : "dark"
  setTheme(t)
  }

  return (
  <div className="flex items-center gap-2 text-sm">
    {/*
      FIXME: dynamically add page updated date from GitHub
      <div className="hidden font-medium text-muted-foreground md:inline-block">
      Edit Oct 08
      </div>
    */}
    <Button variant="ghost" size="icon" className="h-7 w-7" onClick={toggleTheme} title={
    theme == "dark" ?
    "Why is it so dark in here?" :
    "My eyes! It burns!"
    }>
    <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
    <span className="sr-only">Toggle theme</span>
    </Button>
    <Link href="/blog/rss">
    <Button variant="ghost" size="icon" className="h-7 w-7" title="I should probably just start a substack!">
      <Rss />
    </Button>
    </Link>
    <Link href="https://github.com/acgollapalli/personal-website">
    <Button variant="ghost" size="icon" className="h-7 w-7" title="Please don't, it's horrid">
      <GitHubLogoIcon/>
    </Button>
    </Link>
{/**
    <Popover open={isOpen} onOpenChange={setIsOpen}>
    <PopoverTrigger asChild>
      <Button
      variant="ghost"
      size="icon"
      className="h-7 w-7 data-[state=open]:bg-accent"
      >
      <MoreHorizontal />
      </Button>
    </PopoverTrigger>
    <PopoverContent
      className="w-56 overflow-hidden rounded-lg p-0"
      align="end"
    >
      <Sidebar collapsible="none" className="bg-transparent">
      <SidebarContent>
        {data.map((group, index) => (
        <SidebarGroup key={index} className="border-b last:border-none">
          <SidebarGroupContent className="gap-0">
          <SidebarMenu>
            {group.map((item, index) => (
            <SidebarMenuItem key={index}>
              <SidebarMenuButton>
              <item.icon /> <span>{item.label}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            ))}
          </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        ))}
      </SidebarContent>
      </Sidebar>
    </PopoverContent>
    </Popover>

    */}
  </div>
  )
}
