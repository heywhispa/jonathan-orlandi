"use client"

import { useState } from "react"
import RevealDiv from "@/components/protocolo/RevealDiv"
import SectionLabel from "@/components/protocolo/SectionLabel"

const phases = [
  {
    num: "Semana 1",
    title: "Mapeamento",
    body: "Primeiro a gente para de agir no escuro. A maioria das pessoas trava sem entender por quê. Sabe que precisa começar, quer começar, e simplesmente não consegue. Aqui você enxerga o que está acontecendo de verdade — os gatilhos, os padrões, os momentos em que o cérebro trava antes mesmo de você perceber.",
    quote: "Você não consegue mudar o que não consegue ver.",
    bullets: ["Identificação dos seus padrões dopaminérgicos", "Mapeamento dos momentos em que você mais trava", "Diagnóstico do seu ciclo específico de procrastinação"],
  },
  {
    num: "Semana 2",
    title: "Substituição",
    body: "O cérebro não opera no vazio. Nunca vai operar. A gente trava porque o cérebro está buscando dopamina — e quando corta sem substituir, ele busca no lugar errado de novo. Aqui a gente para de cortar e começa a trocar. Fonte que drena por fonte que constrói. Sem restrição. Sem peso.",
    quote: null,
    bullets: ["Técnicas de redirecionamento dopaminérgico", "Instalação das primeiras novas fontes de recompensa", "Práticas diárias que o cérebro aceita sem resistência"],
  },
  {
    num: "Semana 3",
    title: "Instalação",
    body: "Aqui algo muda. Você vai perceber que passou um período focado sem ter lutado contra si mesmo para isso. A rotina para de depender de motivação e começa a depender de estrutura. É diferente. Dá para sentir.",
    quote: null,
    bullets: ["Criação dos rituais que sustentam o novo padrão", "Exercícios de consolidação de hábito", "Primeiros resultados visíveis e mensuráveis"],
  },
  {
    num: "Semana 4",
    title: "Blindagem",
    body: "O problema nunca foi a intensidade do esforço. Foi a ausência de um sistema. Aqui você identifica os momentos em que mais cai — cansaço, tédio, sobrecarga, aqueles dias em que tudo parece pesado demais para começar — e cria um plano específico para cada um. O novo padrão deixa de ser esforço e vira o seu normal.",
    quote: null,
    bullets: ["Mapeamento dos gatilhos de recaída", "Plano de contingência personalizado", "Estrutura para sustentar as mudanças depois dos 30 dias"],
  },
]

const labels = ["Mapear", "Substituir", "Instalar", "Blindar"]

export default function Method() {
  const [open, setOpen] = useState(0)

  const toggle = (i: number) => setOpen(open === i ? -1 : i)

  return (
    <section id="metodo" className="border-b" style={{ padding: "clamp(56px,8vw,80px) 0", borderColor: "#e2ddd6", background: "#f7f4ef" }}>
      <div className="mx-auto w-full max-w-[720px] px-5 sm:px-6">
        <SectionLabel text="Como serão seus próximos 30 dias" />

        <RevealDiv direction="rv">
          <p className="font-light mb-8" style={{ fontSize: "clamp(15px,2.5vw,17px)", color: "#5a5248", lineHeight: 1.7 }}>
            A gente não muda de uma vez. <em style={{ fontStyle: "italic", color: "#1a1612" }}>Muda em fases.</em>
            <br />
            E cada fase prepara o cérebro para a próxima.
          </p>
        </RevealDiv>

        {/* phase stepper */}
        <RevealDiv direction="rv">
          <div className="flex gap-1 mb-2">
            {labels.map((l, i) => (
              <div key={i} className="flex-1 text-center font-semibold uppercase tracking-wide" style={{ fontSize: 10, letterSpacing: ".08em", color: open === i ? "#d4820a" : "#9a9088", transition: "color .3s" }}>
                {l}
              </div>
            ))}
          </div>
          <div className="flex gap-1 mb-7">
            {labels.map((_, i) => (
              <div key={i} className="flex-1 rounded-sm" style={{ height: 4, background: i < open ? "rgba(212,130,10,.35)" : i === open ? "#d4820a" : "#e2ddd6", transition: "background .3s" }} />
            ))}
          </div>
        </RevealDiv>

        {/* accordion */}
        <RevealDiv direction="rv">
          <div style={{ border: "1px solid #e2ddd6", borderRadius: 12, overflow: "hidden" }}>
            {phases.map((ph, i) => (
              <div key={i} style={{ borderBottom: i < phases.length - 1 ? "1px solid #e2ddd6" : "none" }}>
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center gap-3 text-left transition-colors duration-200"
                  style={{
                    background: "none",
                    border: "none",
                    padding: "clamp(18px,3vw,26px) clamp(16px,4vw,28px)",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(212,130,10,.03)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "none")}
                >
                  <span
                    className="font-serif font-bold flex-shrink-0"
                    style={{ fontSize: 10, letterSpacing: ".1em", color: "#d4820a", background: "rgba(212,130,10,.05)", border: "1px solid rgba(212,130,10,.2)", padding: "4px 10px", borderRadius: 100, whiteSpace: "nowrap" }}
                  >
                    {ph.num}
                  </span>
                  <span className="font-serif font-bold flex-1" style={{ fontSize: "clamp(15px,3vw,18px)", color: "#1a1612" }}>
                    {ph.title}
                  </span>
                  <span
                    className="flex-shrink-0 flex items-center justify-center rounded-full"
                    style={{
                      width: 28, height: 28,
                      border: `1px solid ${open === i ? "#d4820a" : "#e2ddd6"}`,
                      color: open === i ? "#d4820a" : "#9a9088",
                      fontSize: 18,
                      transform: open === i ? "rotate(45deg)" : "none",
                      transition: "transform .35s, border-color .2s, color .2s",
                    }}
                  >
                    +
                  </span>
                </button>

                <div style={{ maxHeight: open === i ? 600 : 0, overflow: "hidden", transition: "max-height .5s cubic-bezier(.4,0,.2,1)" }}>
                  <div style={{ padding: "0 clamp(16px,4vw,28px) 24px", borderTop: "1px solid #e2ddd6" }}>
                    <p className="font-light" style={{ fontSize: 15, color: "#5a5248", lineHeight: 1.75, marginBottom: 16, paddingTop: 20 }}>
                      {ph.body}
                    </p>
                    {ph.quote && (
                      <p style={{ fontStyle: "italic", color: "#1a1612", fontSize: 15, borderLeft: "2px solid #d4820a", paddingLeft: 16, marginBottom: 16 }}>
                        {ph.quote}
                      </p>
                    )}
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                      {ph.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-2 font-light" style={{ fontSize: 14, color: "#9a9088" }}>
                          <span style={{ color: "#d4820a", flexShrink: 0 }}>→</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </RevealDiv>
      </div>
    </section>
  )
}
