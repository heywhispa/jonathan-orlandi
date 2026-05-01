"use client"

import { useEffect, useRef, useState } from "react"
import Script from "next/script"
import Image from "next/image"

export default function VturbPlayer() {
  const hasInitialized = useRef(false)
  const [playerLoaded, setPlayerLoaded] = useState(false)

  useEffect(() => {
    if (hasInitialized.current) return
    hasInitialized.current = true

    const rawPath = window.location.pathname.replace(/^\/|\/$/g, "") || "v01"
    const pageSlug = rawPath || "v01"
    const params = new URLSearchParams(window.location.search)
    let ssVal = ""
    try { ssVal = sessionStorage.getItem("variante_slug") || "" } catch (e) {}
    const varianteSlug = params.get("variante_slug") || ssVal || pageSlug

    const onPlayerReady = () => {
      if (typeof window !== "undefined" && (window as any).dataLayer) {
        ;(window as any).dataLayer.push({
          event: "vturb_player_ready",
          vturb_page: pageSlug,
          variante_slug: varianteSlug,
          vturb_video_id: "69d3901e8255d74f1dff8679",
        })
      }
    }

    document.addEventListener("player:ready", onPlayerReady)

    return () => {
      document.removeEventListener("player:ready", onPlayerReady)
    }
  }, [])

  return (
    <>
      <Script
        src="https://scripts.converteai.net/2bbe0094-7397-436c-ad6b-097074f23db9/players/69d3901e8255d74f1dff8679/v4/player.js"
        strategy="lazyOnload"
        onLoad={() => setPlayerLoaded(true)}
      />
      {/* Container with fixed aspect-ratio to prevent CLS */}
      <div
        className="overflow-hidden flex justify-center relative"
        style={{
          borderRadius: 12,
          background: "#000",
          aspectRatio: "9 / 16",
          maxWidth: 400,
          width: "100%",
          margin: "0 auto",
        }}
      >
        {/* Poster image for fast LCP */}
        {!playerLoaded && (
          <Image
            src="/video-poster.jpg"
            alt="Vídeo do Protocolo Filtro Dopamina"
            fill
            priority
            sizes="400px"
            style={{ objectFit: "cover" }}
          />
        )}
        {/* @ts-expect-error - vturb-smartplayer is a custom element */}
        <vturb-smartplayer
          id="vid-69d3901e8255d74f1dff8679"
          style={{
            display: "block",
            width: "100%",
            height: "100%",
            position: playerLoaded ? "relative" : "absolute",
            opacity: playerLoaded ? 1 : 0,
          }}
        />
      </div>
    </>
  )
}
