"use client"

import { useEffect, useRef, type ReactNode } from "react"

type Props = {
  children: ReactNode
  direction?: "rv" | "rv-l" | "rv-r"
  delay?: number
}

// Singleton IntersectionObserver - one observer for all RevealDiv instances
type RevealCallback = (isIntersecting: boolean) => void
const callbacks = new Map<Element, RevealCallback>()
let sharedObserver: IntersectionObserver | null = null

function getSharedObserver() {
  if (sharedObserver) return sharedObserver
  
  sharedObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const cb = callbacks.get(entry.target)
        if (cb) {
          cb(entry.isIntersecting)
          if (entry.isIntersecting) {
            // Unobserve after triggering - one-time reveal
            sharedObserver?.unobserve(entry.target)
            callbacks.delete(entry.target)
          }
        }
      })
    },
    { threshold: 0.12, rootMargin: "50px" }
  )
  
  return sharedObserver
}

export default function RevealDiv({ children, direction = "rv", delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = getSharedObserver()
    
    callbacks.set(el, (isIntersecting) => {
      if (isIntersecting) {
        setTimeout(() => {
          el.style.opacity = "1"
          el.style.transform = "translate(0)"
        }, delay)
      }
    })
    
    observer.observe(el)

    return () => {
      observer.unobserve(el)
      callbacks.delete(el)
    }
  }, [delay])

  const initial =
    direction === "rv-l"
      ? { opacity: "0", transform: "translateX(-28px)" }
      : direction === "rv-r"
      ? { opacity: "0", transform: "translateX(28px)" }
      : { opacity: "0", transform: "translateY(28px)" }

  return (
    <div
      ref={ref}
      style={{
        ...initial,
        transition: "opacity .65s ease, transform .65s ease",
      }}
    >
      {children}
    </div>
  )
}
