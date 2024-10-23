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
import { Button } from './ui/button'

function crumbwiper(accumulator, crumb){
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

function hackNSlash(acc, val) {
    if (acc.length == 0) acc.push({name: "root", link: "/"})
    else acc.push({name: val.link + "separator"})
    acc.push(val)
    return acc
}

function crumblingMyLife({link, name}) {
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
        console.log("breadcrumb", link, name)
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
    const [breadcrumbs, setCrumbs] = useState([])
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
