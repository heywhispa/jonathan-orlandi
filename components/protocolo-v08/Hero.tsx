"use client"

import { spawnParticles } from "@/lib/particles"
import VturbPlayer from "@/components/VturbPlayer"
import DelayedContent from "@/components/DelayedContent"

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
        {/* headline */}
        <h1
          className="font-serif font-extrabold mb-6 text-balance"
          style={{
            fontSize: "clamp(28px, 5vw, 52px)",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            color: "#1a1612",
          }}
        >
E se o problema nunca foi preguiça, falta de disciplina ou{" "}
          <span style={{ color: "#d4820a", position: "relative" }} className="hero-underline">
            &apos;ser assim mesmo&apos;?
          </span>
        </h1>

        {/* subheading */}
        <p
          className="font-sans font-light mb-4"
          style={{
            fontSize: "clamp(15px, 2.5vw, 18px)",
            color: "#5a5248",
            maxWidth: 560,
            lineHeight: 1.6,

          }}
        >
Neste vídeo, um psicólogo especialista em neurociências revela o erro invisível que mantém você preso no mesmo padrão há anos — e mostra o processo de 4 fases que já funcionou para mais de 500 pessoas. São 30 dias. Sem cortar nada. Sem força de vontade.
        </p>

        {/* video embed */}
        <div>
          <VturbPlayer />

          {/* CTA abaixo do vídeo */}
          <DelayedContent>
            <div className="mt-7">
              <a
                href="#btn-checkout-v08"
                className="cta-btn ignore-click-event block w-full text-center font-serif font-bold transition-all duration-200"
                style={{
                  background: "#d4820a",
                  color: "#fff",
                  fontSize: "clamp(15px,2.5vw,17px)",
                  padding: "20px 32px",
                  borderRadius: 12,
                  textDecoration: "none",
                }}
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
  )
}
