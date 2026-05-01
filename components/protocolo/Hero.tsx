"use client"

import VturbPlayer from "@/components/VturbPlayer"

export default function Hero() {

  return (
    <section
      className="relative overflow-hidden border-b"
      style={{
        padding: "clamp(64px, 10vw, 100px) 0 clamp(56px, 8vw, 80px)",
        borderColor: "#e2ddd6",
        background: "#f7f4ef",
      }}
    >
      {/* ambient glow */}
      <div
        className="pointer-events-none absolute"
        style={{
          top: -200,
          left: "50%",
          transform: "translateX(-50%)",
          width: "min(700px, 100vw)",
          height: "min(700px, 100vw)",
          background: "radial-gradient(circle, rgba(212,130,10,.07) 0%, transparent 65%)",
          animation: "glow 6s ease-in-out infinite alternate",
        }}
      />

      <div className="mx-auto w-full max-w-[720px] px-5 sm:px-6">
        {/* eyebrow - visible immediately, animation enhances */}
        <div
          className="inline-block text-[11px] font-medium uppercase tracking-[.15em] mb-7"
          style={{
            color: "#d4820a",
            padding: "6px 14px",
            border: "1px solid rgba(212,130,10,.3)",
            borderRadius: 100,
          }}
        >
          Protocolo Filtro Dopamina
        </div>

        {/* headline — LCP element: must be visible immediately, no opacity:0 */}
        <h1
          className="font-serif font-extrabold mb-6"
          style={{
            fontSize: "clamp(28px, 5vw, 52px)",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            color: "#1a1612",
          }}
        >
          Seu cérebro busca dopamina
          <br />
          o tempo todo.
          <br />
          <span style={{ color: "#d4820a", position: "relative" }} className="hero-underline">
            A questão é de onde ele
            <br />
            está buscando.
          </span>
        </h1>

        {/* subheading - visible immediately */}
        <p
          className="font-sans font-light mb-4"
          style={{
            fontSize: "clamp(15px, 2.5vw, 18px)",
            color: "#5a5248",
            maxWidth: 520,
            lineHeight: 1.6,
          }}
        >
          Assista ao vídeo. Eu mostro o que muda em 30 dias quando você para de brigar com seu cérebro e começa a trabalhar com ele.
        </p>

        {/* scroll hint - visible immediately */}
        <div
          className="flex items-center gap-2 mb-12"
          style={{
            fontSize: 12,
            color: "#9a9088",
          }}
        >
          <span
            className="inline-block rounded-full"
            style={{
              width: 6,
              height: 6,
              background: "#d4820a",
              animation: "pulse 2s infinite",
            }}
          />
          Continue lendo depois do vídeo
        </div>

        {/* video embed - visible immediately for LCP */}
        <VturbPlayer />
      </div>


    </section>
  )
}
