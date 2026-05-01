"use client"

import { useEffect } from "react"

export default function Particles() {
  useEffect(() => {
    const handler = (e: CustomEvent) => {
      const container = document.getElementById("pts-v06")
      if (!container) return
      const cols = ["#d4820a", "#f5a623", "#b86e08", "#ffc85a"]
      const rect = (e.detail as DOMRect)
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      for (let i = 0; i < 18; i++) {
        const p = document.createElement("div")
        const ang = (i / 18) * 360
        const dist = 60 + Math.random() * 80
        const tx = Math.cos((ang * Math.PI) / 180) * dist + "px"
        const ty = Math.sin((ang * Math.PI) / 180) * dist - 40 + "px"
        const size = 4 + Math.random() * 6
        p.style.cssText = `position:absolute;border-radius:50%;pointer-events:none;animation:ptfly 1s ease forwards;left:${cx}px;top:${cy}px;background:${cols[i % 4]};--tx:${tx};--ty:${ty};width:${size}px;height:${size}px;`
        container.appendChild(p)
        setTimeout(() => p.remove(), 1000)
      }
    }
    window.addEventListener("spawn-particles", handler as EventListener)
    return () => window.removeEventListener("spawn-particles", handler as EventListener)
  }, [])

  return (
    <>
      <div id="pts-v06" style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 9999, overflow: "hidden" }} />
      <style>{`
        @keyframes ptfly {
          0% { transform: translate(0, 0) scale(1); opacity: 1; }
          100% { transform: translate(var(--tx), var(--ty)) scale(0); opacity: 0; }
        }
      `}</style>
    </>
  )
}
