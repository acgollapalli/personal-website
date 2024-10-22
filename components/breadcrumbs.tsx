'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from "react"
import { SlashIcon } from "@radix-ui/react-icons"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbLink
} from "@/components/ui/breadcrumb"
import { randomUUID } from 'crypto'

function crumbwiper(accumulator, crumb) {
    if (accumulator.length == 0) {
        accumulator.push({
            name: crumb,
            link: "/" + crumb
})
    }
    else {
        accumulator.push({
            name: crumb,
            link: accumulator[accumulator.length - 1].path + "/" + crumb
        })
    }
    return accumulator
}

function hackNSlash(acc, val) {
    acc.push({name: val.link + "separator"})
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

    }
    return (
                          <BreadcrumbItem key={link}>
                    <BreadcrumbLink href={link}>
                        {name}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
    )
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
