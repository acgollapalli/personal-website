'use client'

import { useState, useEffect } from "react"
import { Section } from "./section"

export function RenderTree({ children, delay }) {
  const renderTree = children.map(ch => useState(false))

  renderTree.push([false, () => {}])

  useEffect(() => {
    const nextSection = renderTree.findFirstIndex(t => !t[0])
    setTimeout(() => renderTree[nextSection][1](true))
  }, [renderTree.map(t => t[0])])

  useEffect(() => {
    setTimeout(() => renderTree[0][1]())
  })
}
