'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from "react"
import { SlashIcon } from "@radix-ui/react-icons"
import Link from "next/link"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbLink
} from "@/components/ui/breadcrumb"

type Crumb = {
  name: string,
  link?: string }

function crumbwiper(accumulator: Crumb[], crumb: string){
  if (accumulator.length == 0) {
    accumulator.push({
      name: crumb,
      link: "/" + crumb
    })
  }
  else {
    accumulator.push({
      name: crumb,
      link: accumulator[accumulator.length - 1].link + "/" + crumb
    })
  }
  return accumulator
}

function hackNSlash(acc: Crumb[], val: Crumb) {
  if (acc.length == 0) acc.push({name: "root", link: "/"})
  else acc.push({name: val.link + "separator"})
  acc.push(val)
  return acc
}

function crumblingMyLife({link, name}: Crumb) {
  if (!link) {
    return (
      <BreadcrumbSeparator key={name}>
        <SlashIcon/>
      </BreadcrumbSeparator>
    )

  } else if (name == "root") {
    return (
      <BreadcrumbSeparator key={name}>
        <Link href={link} className="transition-colors hover:text-foreground">
          <SlashIcon/>
        </Link>
      </BreadcrumbSeparator>
    )
  }
  else {
    return (
      <BreadcrumbItem key={link}>
        <BreadcrumbLink asChild>
          <Link href={link} passHref> {name} </Link>
        </BreadcrumbLink>
      </BreadcrumbItem>
    )
  }
}

export function BreadCrumbsFromPath() {
  const pathname = usePathname()
  const [breadcrumbs, setCrumbs] = useState<Crumb[]>([])
  useEffect( () => {
    const c = pathname
      .split('/')
      .filter(a => a)
      .reduce(crumbwiper, [])
      .reduce(hackNSlash, [])
    setCrumbs(c)
  }, [pathname])

  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          {
            breadcrumbs.map(crumblingMyLife)


          }
        </BreadcrumbList>
    </Breadcrumb>
    </>
  )
}
