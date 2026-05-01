"use client"

import { useState, useEffect, type ReactNode } from "react"

interface DelayedContentProps {
  children: ReactNode
  delayMs?: number
}

export default function DelayedContent({ children, delayMs = 549000 }: DelayedContentProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delayMs)

    return () => clearTimeout(timer)
  }, [delayMs])

  if (!isVisible) {
    return null
  }

  return <>{children}</>
}
