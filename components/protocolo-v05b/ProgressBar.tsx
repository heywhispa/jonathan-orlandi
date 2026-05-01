"use client"

import { useEffect } from "react"

export default function ProgressBar() {
  useEffect(() => {
    const pb = document.getElementById("pb-v05b")
    const handleScroll = () => {
      if (!pb) return
      const t = document.body.scrollHeight - window.innerHeight
      pb.style.width = (window.scrollY / t) * 100 + "%"
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      id="pb-v05b"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "3px",
        background: "linear-gradient(90deg, #d4820a, #f5a623)",
        width: "0%",
        zIndex: 1000,
        boxShadow: "0 0 8px rgba(212,130,10,.4)",
        transition: "width .1s linear",
      }}
    />
  )
}
