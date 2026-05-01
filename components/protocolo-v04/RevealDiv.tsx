"use client"

import { useEffect, useRef, type ReactNode } from "react"

type Props = {
  children: ReactNode
  direction?: "rv" | "rv-l" | "rv-r"
  delay?: number
}

export default function RevealDiv({ children, direction = "rv", delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = "1"
            el.style.transform = "translate(0)"
          }, delay)
          observer.disconnect()
        }
      },
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
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
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  )
}
