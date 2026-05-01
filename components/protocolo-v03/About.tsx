"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import RevealDiv from "@/components/protocolo-v03/RevealDiv"
import SectionLabel from "@/components/protocolo-v03/SectionLabel"

function useCounter(ref: React.RefObject<HTMLElement | null>, target: number, suffix: string) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const dur = 1200
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
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [ref, target, suffix])
}

function Stat({ target, suffix, label }: { target: number | null; suffix: string; label: string; staticVal?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  if (target !== null) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useCounter(ref as React.RefObject<HTMLElement>, target, suffix)
  }
  return (
    <div
      className="flex-1 transition-colors duration-300"
      style={{ padding: "clamp(14px,3vw,20px) clamp(14px,3vw,24px)" }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(212,130,10,.03)")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "none")}
    >
      <div ref={target !== null ? ref : undefined} className="font-serif font-extrabold" style={{ fontSize: "clamp(22px,4vw,28px)", color: "#d4820a", lineHeight: 1, marginBottom: 4 }}>
        {target === null ? suffix : "0"}
      </div>
      <div className="font-light" style={{ fontSize: 12, color: "#9a9088", lineHeight: 1.4 }}>{label}</div>
    </div>
  )
}

export default function About() {
  return (
    <section id="jonathan" className="border-b" style={{ padding: "clamp(56px,8vw,80px) 0", borderColor: "#e2ddd6", background: "#f7f4ef" }}>
      <div className="mx-auto w-full max-w-[720px] px-5 sm:px-6">
        <SectionLabel text="Quem criou este protocolo" />

        <RevealDiv direction="rv">
          <div className="flex items-start gap-5 sm:gap-6 mb-7">
            <div
              className="flex-shrink-0 relative rounded-full overflow-hidden"
              style={{ width: "clamp(56px,10vw,72px)", height: "clamp(56px,10vw,72px)", border: "2px solid #d4820a" }}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20Tela%202026-03-23%20a%CC%80s%2020.58.23-pB168oIFCOEWM5whlt4OyeUeODu3Ju.png"
                alt="Foto de Jonathan, psicólogo"
                fill
                className="object-cover object-top"
                sizes="72px"
              />
            </div>
            <div className="pt-1">
              <div className="font-serif font-bold mb-1" style={{ fontSize: "clamp(18px,3vw,22px)", color: "#1a1612" }}>Jonathan</div>
              <div className="font-light" style={{ fontSize: 13, color: "#9a9088", lineHeight: 1.5 }}>
                Psicólogo · Especialista em Neurociências &amp; Performance
                <br />
                TDAH diagnosticado · 383K seguidores
              </div>
            </div>
          </div>
        </RevealDiv>

        {/* stats */}
        <RevealDiv direction="rv">
          <div
            className="flex border overflow-hidden mb-7"
            style={{ border: "1px solid #e2ddd6", borderRadius: 12 }}
          >
            <div className="flex flex-1 flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x w-full" style={{ borderColor: "#e2ddd6" }}>
              <Stat target={383} suffix="K" label="seguidores" />
              <div style={{ borderLeft: "1px solid #e2ddd6" }} />
              <Stat target={500} suffix="+" label="pessoas no protocolo" />
              <div style={{ borderLeft: "1px solid #e2ddd6" }} />
              <Stat target={null} suffix="TDAH" label="diagnosticado · vivido na prática" />
            </div>
          </div>
        </RevealDiv>

        <RevealDiv direction="rv">
          <div className="font-light flex flex-col gap-4" style={{ fontSize: 15, color: "#5a5248", lineHeight: 1.8 }}>
            <p>Sou TDAH, psicólogo, especialista em neurociências, psicologia do esporte e performance.</p>
            <p>Mas o Protocolo Filtro Dopamina não nasceu no consultório. Nasceu porque eu precisava dele.</p>
            <p>Há 8 anos eu era psicólogo especialista em comportamento humano — e estava perdendo mais dinheiro no daytrade do que ganhava nos meus atendimentos. Meu cérebro travava exatamente do jeito que eu ensinava os outros a resolver. Eu sabia o que estava acontecendo. E mesmo assim não conseguia parar.</p>
            <p>Foi aí que eu parei de tentar ter força de vontade e comecei a entender o que estava acontecendo de verdade no meu próprio cérebro. O protocolo que criei para mim foi o mesmo que depois apliquei em mais de 500 pessoas que viviam travadas no mesmo ciclo.</p>
            <p>
              Hoje compartilho o que aprendo com{" "}
              <span className="inline font-medium" style={{ background: "rgba(212,130,10,.2)", borderRadius: 3, padding: "0 2px" }}>
                383 mil pessoas
              </span>{" "}
              que encontraram aqui o que não encontraram em mais lugar nenhum.
            </p>
          </div>
          <div className="font-serif font-semibold mt-6" style={{ fontSize: 14, color: "#d4820a", letterSpacing: ".05em" }}>
            Distraídos venceremos.
          </div>
        </RevealDiv>
      </div>
    </section>
  )
}
