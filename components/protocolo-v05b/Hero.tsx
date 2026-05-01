"use client"

import { useState } from "react"
import Script from "next/script"
import Image from "next/image"
import { spawnParticles } from "@/lib/particles"
import DelayedContent from "@/components/DelayedContent"

export default function Hero() {
  const [playerLoaded, setPlayerLoaded] = useState(false)

  return (
    <>
      <Script
        src="https://scripts.converteai.net/2bbe0094-7397-436c-ad6b-097074f23db9/players/69d38fa5d48f269729692106/v4/player.js"
        strategy="lazyOnload"
        onLoad={() => setPlayerLoaded(true)}
      />
    <section
      className="relative overflow-hidden border-b"
      style={{ padding: "clamp(64px, 10vw, 100px) 0 clamp(56px, 8vw, 80px)", borderColor: "#e2ddd6", background: "#f7f4ef" }}
    >
      <div
        className="pointer-events-none absolute"
        style={{
          top: -200, left: "50%", transform: "translateX(-50%)",
          width: "min(700px, 100vw)", height: "min(700px, 100vw)",
          background: "radial-gradient(circle, rgba(212,130,10,.07) 0%, transparent 65%)",
          animation: "glow 6s ease-in-out infinite alternate",
        }}
      />

      <div className="mx-auto w-full max-w-[720px] px-5 sm:px-6">
        <h1
          className="font-serif font-extrabold mb-6 text-balance"
          style={{ fontSize: "clamp(28px, 5vw, 52px)", lineHeight: 1.15, letterSpacing: "-0.02em", color: "#1a1612" }}
        >
          Você promete que amanhã vai ser diferente e{" "}
          <span style={{ color: "#d4820a", position: "relative" }} className="hero-underline">
            tudo continua igual?
          </span>
        </h1>

        <p
          className="font-sans font-light mb-4"
          style={{ fontSize: "clamp(15px, 2.5vw, 18px)", color: "#5a5248", maxWidth: 560, lineHeight: 1.6 }}
        >
          Assista ao vídeo e descubra por que força de vontade nunca vai funcionar para o seu cérebro, e o que um psicólogo que perdeu mais dinheiro com day trade do que ganhava atendendo fez para sair do ciclo.
        </p>

        <div>
          {/* novo player v05b - with aspect-ratio to prevent CLS */}
          <div style={{ aspectRatio: "9 / 16", maxWidth: 400, width: "100%", margin: "0 auto", background: "#000", borderRadius: 12, overflow: "hidden", position: "relative" }}>
            {!playerLoaded && (
              <Image src="/video-poster.jpg" alt="Vídeo do Protocolo Filtro Dopamina" fill priority sizes="400px" style={{ objectFit: "cover" }} />
            )}
            {/* @ts-expect-error - vturb-smartplayer is a custom element */}
            <vturb-smartplayer
              id="vid-69d38fa5d48f269729692106"
              style={{ display: "block", width: "100%", height: "100%", opacity: playerLoaded ? 1 : 0 }}
            />
          </div>

          <DelayedContent>
            <div className="mt-7">
              <a
                href="#btn-checkout-v05b"
                className="cta-btn ignore-click-event block w-full text-center font-serif font-bold transition-all duration-200"
                style={{ background: "#d4820a", color: "#fff", fontSize: "clamp(15px,2.5vw,17px)", padding: "20px 32px", borderRadius: 12, textDecoration: "none" }}
                onClick={(e) => spawnParticles(e)}
              >
                Quero mudar minha relação com o foco agora
              </a>
              <p className="text-center mt-3 font-sans" style={{ fontSize: 12, color: "#9a9088" }}>
                Acesso imediato · Pagamento 100% seguro
              </p>
            </div>
          </DelayedContent>
        </div>
      </div>

    </section>
    </>
  )
}
