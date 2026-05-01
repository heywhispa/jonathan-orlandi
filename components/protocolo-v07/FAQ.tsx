"use client"

import { useState } from "react"
import RevealDiv from "@/components/protocolo-v07/RevealDiv"
import SectionLabel from "@/components/protocolo-v07/SectionLabel"

const faqs = [
  {
    q: "Já tentei muita coisa e sempre voltei ao mesmo padrão. Por que isso seria diferente?",
    a: "Porque tudo que você tentou antes pedia corte, restrição ou mais força de vontade. Este protocolo não pede nenhuma das três. Ele funciona com o seu cérebro em vez de brigar com ele. A lógica é diferente desde o começo — e é por isso que o resultado é diferente.",
  },
  {
    q: "Preciso ter TDAH diagnosticado?",
    a: "Não. O protocolo foi desenvolvido para qualquer pessoa que vive o ciclo de querer começar, travar, se sentir mal por isso — e prometer que amanhã vai ser diferente. Com ou sem diagnóstico.",
  },
  {
    q: "E se eu travar no meio do protocolo?",
    a: "É exatamente para isso que a Fase 4 existe. O protocolo foi construído prevendo os momentos em que tudo parece pesado demais — cansaço, tédio, sobrecarga. Você vai ter um plano específico para cada um deles. E se mesmo assim não perceber diferença real, a garantia cobre.",
  },
  {
    q: "Quanto tempo por dia preciso dedicar?",
    a: "Uma aula por dia. Ela te diz exatamente o que fazer. Você não decide nada — só segue.",
  },
  {
    q: "Quando recebo o acesso?",
    a: "Na hora. Assim que o pagamento for confirmado.",
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="border-b" style={{ padding: "clamp(56px,8vw,80px) 0", borderColor: "#e2ddd6", background: "#f7f4ef" }}>
      <div className="mx-auto w-full max-w-[720px] px-5 sm:px-6">
        <SectionLabel text="Perguntas frequentes" />
        <RevealDiv direction="rv">
          <div style={{ border: "1px solid #e2ddd6", borderRadius: 12, overflow: "hidden" }}>
            {faqs.map((f, i) => (
              <div key={i} style={{ borderBottom: i < faqs.length - 1 ? "1px solid #e2ddd6" : "none" }}>
                <button
                  className="w-full flex items-center justify-between gap-4 text-left transition-colors duration-200"
                  style={{ background: "none", border: "none", padding: "clamp(16px,3vw,22px) clamp(16px,4vw,28px)", cursor: "pointer" }}
                  onClick={() => setOpen(open === i ? null : i)}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(212,130,10,.03)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "none")}
                >
                  <span className="font-serif font-semibold" style={{ fontSize: "clamp(13px,2.5vw,15px)", color: "#1a1612", lineHeight: 1.4 }}>
                    {f.q}
                  </span>
                  <span
                    className="flex-shrink-0 flex items-center justify-center rounded-full"
                    style={{
                      width: 26, height: 26,
                      border: `1px solid ${open === i ? "#d4820a" : "#e2ddd6"}`,
                      color: open === i ? "#d4820a" : "#9a9088",
                      fontSize: 16,
                      transform: open === i ? "rotate(45deg)" : "none",
                      transition: "transform .35s, border-color .2s, color .2s",
                    }}
                  >
                    +
                  </span>
                </button>
                <div style={{ maxHeight: open === i ? 400 : 0, overflow: "hidden", transition: "max-height .4s ease" }}>
                  <div className="font-light" style={{ padding: "clamp(14px,3vw,20px) clamp(16px,4vw,28px) clamp(16px,3vw,24px)", fontSize: 15, color: "#5a5248", lineHeight: 1.75, borderTop: "1px solid #e2ddd6" }}>
                    {f.a}
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
