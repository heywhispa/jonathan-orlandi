"use client"

import { useEffect, useRef } from "react"
import RevealDiv from "@/components/protocolo-v05/RevealDiv"
import SectionLabel from "@/components/protocolo-v05/SectionLabel"
import { spawnParticles } from "@/lib/particles"

function useCounter(ref: React.RefObject<HTMLElement | null>, target: number, suffix: string) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const dur = 1000
          const start = performance.now()
          const tick = (now: number) => {
            const p = Math.min((now - start) / dur, 1)
            const ease = 1 - Math.pow(1 - p, 3)
            el.textContent = Math.floor(ease * target) + suffix
            if (p < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [ref, target, suffix])
}

function PriceCounter() {
  const ref = useRef<HTMLSpanElement>(null)
  useCounter(ref as React.RefObject<HTMLElement>, 77, "")
  return <span ref={ref}>0</span>
}

export default function Offer() {
  return (
    <section id="oferta" className="border-b" style={{ padding: "clamp(56px,8vw,80px) 0", borderColor: "#e2ddd6", background: "#f7f4ef" }}>
      <div className="mx-auto w-full max-w-[720px] px-5 sm:px-6">
        <SectionLabel text="O que você está levando" />

        <div className="flex flex-col gap-5 mb-10">
          {/* main item */}
          <RevealDiv direction="rv">
            <div
              className="transition-all duration-300"
              style={{ background: "#fff", border: "1px solid #e2ddd6", borderRadius: 12, padding: "clamp(24px,5vw,36px) clamp(20px,5vw,40px)" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(212,130,10,.2)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(212,130,10,.06)" }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#e2ddd6"; e.currentTarget.style.boxShadow = "none" }}
            >
              <span className="inline-block font-bold uppercase tracking-wider mb-4" style={{ fontSize: 10, letterSpacing: ".12em", padding: "4px 10px", borderRadius: 100, background: "rgba(212,130,10,.1)", color: "#d4820a", border: "1px solid rgba(212,130,10,.25)" }}>
                Sistema
              </span>
              <h3 className="font-serif font-bold mb-4" style={{ fontSize: "clamp(18px,3vw,22px)", color: "#1a1612" }}>Protocolo Filtro Dopamina</h3>
              <div className="font-light flex flex-col gap-3" style={{ fontSize: 15, color: "#5a5248", lineHeight: 1.75 }}>
                <p>A gente passa anos tentando mudar. Lê livros, assiste vídeos, tenta ir na marra, promete que amanhã vai ser diferente. E amanhã é igual.</p>
                <p>Enquanto você não entender como funciona o seu cérebro, você nunca vai sustentar as mudanças que deseja para a sua vida.</p>
                <p>Foi exatamente por isso que eu desenvolvi esse Protocolo.</p>
                <p>Um sprint. 30 dias. Uma aula por dia. Cada aula te diz exatamente o que fazer naquele dia — sem você precisar decidir nada, planejar nada, depender de motivação para começar. Você só abre e segue.</p>
                <p>Dentro de cada fase tem exercícios e práticas desenvolvidos para quem já tentou de tudo e voltou ao mesmo lugar. Não é mais informação. É o sistema que o seu cérebro precisava desde o começo.</p>
                <p><em style={{ fontStyle: "italic", color: "#1a1612" }}>O que levaria anos tentando sozinho, a gente comprime em 30 dias. Porque complicado a gente já tentou.</em></p>
              </div>
            </div>
          </RevealDiv>

          {/* bonus item */}
          <RevealDiv direction="rv">
            <div
              className="transition-all duration-300"
              style={{ background: "rgba(212,130,10,.05)", border: "1px solid rgba(212,130,10,.2)", borderRadius: 12, padding: "clamp(24px,5vw,36px) clamp(20px,5vw,40px)" }}
            >
              <span className="inline-block font-bold uppercase tracking-wider mb-4" style={{ fontSize: 10, letterSpacing: ".12em", padding: "4px 10px", borderRadius: 100, background: "rgba(212,130,10,.06)", color: "#b86e08", border: "1px solid rgba(212,130,10,.15)" }}>
                + Bônus
              </span>
              <h3 className="font-serif font-bold mb-4" style={{ fontSize: "clamp(18px,3vw,22px)", color: "#1a1612" }}>Planner de Construção de Hábitos</h3>
              <div className="font-light flex flex-col gap-3" style={{ fontSize: 15, color: "#5a5248", lineHeight: 1.75 }}>
                <p>Não é um calendário para você preencher e abandonar na segunda semana.</p>
                <p>É o mapa de gestão da sua própria vida, desenvolvido no aplicativo Notion e personalizado para você. Ele acompanha cada fase do protocolo e torna visível o que está mudando dia a dia — porque quando a gente vê o padrão se formando, o cérebro registra progresso. E o progresso é o combustível que faz a mudança durar.</p>
                <p>E o mais importante: você tem acesso vitalício. Porque mudar é uma coisa. <em style={{ fontStyle: "italic", color: "#1a1612" }}>Sustentar é o que define se foi uma mudança real para a sua vida.</em></p>
              </div>
            </div>
          </RevealDiv>
        </div>

        {/* value list */}
        <RevealDiv direction="rv">
          <p className="font-serif font-bold uppercase tracking-wider mb-4" style={{ fontSize: 13, letterSpacing: ".12em", color: "#9a9088" }}>
            O que não tem preço mas vem junto
          </p>
        </RevealDiv>
        <ul className="flex flex-col gap-3 mb-10">
          {[
            "Terminar o dia sem aquela culpa de ter travado de novo",
            "Parar de prometer pra você mesmo e começar a cumprir",
            "Saber que dessa vez você tem um sistema — não só força de vontade",
          ].map((item, i) => (
            <RevealDiv key={i} direction="rv">
              <li
                className="flex items-center gap-4 font-normal transition-all duration-300"
                style={{
                  fontSize: "clamp(14px,2.5vw,16px)",
                  color: "#5a5248",
                  padding: "clamp(14px,3vw,20px) clamp(14px,3vw,24px)",
                  background: i === 0 ? "rgba(212,130,10,.05)" : "#fff",
                  border: `1px solid ${i === 0 ? "rgba(212,130,10,.18)" : "#e2ddd6"}`,
                  borderRadius: 12,
                  listStyle: "none",
                }}
              >
                <span style={{ color: "#d4820a", flexShrink: 0 }}>→</span>
                {item}
              </li>
            </RevealDiv>
          ))}
        </ul>

        {/* price block */}
        <RevealDiv direction="rv">
          <div
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4"
            style={{ padding: "clamp(20px,4vw,28px) clamp(20px,4vw,32px)", background: "#fff", border: "1px solid #e2ddd6", borderRadius: 12 }}
          >
            <div>
              <p className="font-light mb-4" style={{ fontSize: 15, color: "#5a5248", lineHeight: 1.6 }}>
                Você já investiu em tantas coisas que não agregaram na sua vida. Decida agora investir na sua melhor versão.
              </p>
              <div style={{ fontSize: 15, color: "#9a9088", textDecoration: "line-through", marginBottom: 4 }}>De R$ 327,00</div>
              <div className="font-serif font-extrabold" style={{ fontSize: "clamp(36px,8vw,44px)", color: "#1a1612", lineHeight: 1 }}>
                <span style={{ fontSize: "clamp(18px,4vw,22px)", fontWeight: 600, color: "#5a5248", marginRight: 4 }}>R$</span>
                <PriceCounter />
              </div>
              <div style={{ fontSize: 12, color: "#9a9088", marginTop: 4 }}>ou 12x de R$ 7,70</div>
            </div>
            <div className="text-center flex-shrink-0" style={{ background: "rgba(212,130,10,.1)", border: "1px solid rgba(212,130,10,.2)", borderRadius: 8, padding: "12px 16px", minWidth: 120 }}>
              <div className="uppercase tracking-widest" style={{ fontSize: 11, color: "#9a9088", letterSpacing: ".1em" }}>Você economiza</div>
              <div className="font-serif font-extrabold" style={{ fontSize: "clamp(20px,4vw,22px)", color: "#d4820a" }}>R$ 250</div>
            </div>
          </div>
        </RevealDiv>

        <RevealDiv direction="rv">
          <a
            id="btn-checkout-v05"
            href="https://checkout.pagtrust.com.br/ck36c14cc8?funnel=fn92d14bda"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn block w-full text-center font-serif font-bold transition-all duration-200"
            style={{ background: "#d4820a", color: "#fff", fontSize: 16, padding: "20px 32px", borderRadius: 12, textDecoration: "none", scrollMarginTop: "340px" }}
            onClick={spawnParticles}
          >
            Quero começar o Protocolo Filtro Dopamina
          </a>
          <p className="text-center font-light mt-3" style={{ fontSize: 13, color: "#9a9088" }}>
            Acesso imediato · Pagamento 100% seguro
          </p>
        </RevealDiv>
      </div>
      <style>{`
        .cta-btn { animation: ctapulse 2.5s ease-in-out infinite; }
        .cta-btn:hover { background: #b86e08 !important; transform: translateY(-2px); box-shadow: 0 16px 48px rgba(212,130,10,.3); }
        @keyframes ctapulse { 0%,100%{box-shadow:0 0 0 0 rgba(212,130,10,0)} 50%{box-shadow:0 0 0 8px rgba(212,130,10,.15)} }
      `}</style>
    </section>
  )
}
