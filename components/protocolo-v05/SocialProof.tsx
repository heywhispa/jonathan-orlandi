"use client"

import Image from "next/image"
import RevealDiv from "@/components/protocolo-v05/RevealDiv"
import SectionLabel from "@/components/protocolo-v05/SectionLabel"
import { spawnParticles } from "@/lib/particles"

const screenshots = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20Tela%202026-04-21%20a%CC%80s%2007.53.05-cvKnxCYxcwONaHWRL8lSKC6xvd3y6d.png",
    alt: "Depoimento: Atendeu as minhas expectativas, foi além do que esperava",
    dir: "rv-l",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20Tela%202026-04-21%20a%CC%80s%2007.53.15-pZxkZutL03RjUFtqUo8FYvntGHfBt9.png",
    alt: "Depoimento: Posso dizer que o PFD mudou a minha vida",
    dir: "rv",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20Tela%202026-04-21%20a%CC%80s%2007.53.27-ZQs52jbuX2rZi59JCUvCEsYvL2gPFt.png",
    alt: "Depoimento: O PFD é excelente e indico com certeza",
    dir: "rv-r",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20Tela%202026-04-21%20a%CC%80s%2007.53.50-ygQ9lFRxvlsd7xZCMrNW6kDvLkbObP.png",
    alt: "Depoimento: Saí profundamente impressionado com a excelência do protocolo",
    dir: "rv",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20Tela%202026-04-21%20a%CC%80s%2007.54.05-X4vAl4HrDGUYpPscC8TWblWpkDZfBn.png",
    alt: "Depoimento: Começar o PFD foi uma experiência ímpar",
    dir: "rv-l",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20Tela%202026-04-21%20a%CC%80s%2007.54.15-jrz9y2gQrW4LuK6iecf0phcppUh5B9.png",
    alt: "Depoimento: O PFD se mostrou um protocolo muito acolhedor",
    dir: "rv",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20Tela%202026-04-21%20a%CC%80s%2007.54.28-aY4v0NV8EyR9wBfeY273GWOkk3RfWF.png",
    alt: "Depoimento: Me surpreendeu de verdade",
    dir: "rv-r",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20Tela%202026-04-21%20a%CC%80s%2007.54.38-32F09wk4KPxHynnDkykV0n3Cug7P4q.png",
    alt: "Depoimento: Não tenho palavras para descrever o quanto o PFD transformou minha vida",
    dir: "rv",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20Tela%202026-04-21%20a%CC%80s%2007.52.58-CSWn0ti7uZyOR71uzAgD8mptdRGLbW.png",
    alt: "Depoimento: Excelente protocolo, objetivo, assertivo e extremamente bem fundamentado",
    dir: "rv-l",
  },
]

export default function SocialProof() {
  return (
    <section id="prova" className="border-b" style={{ padding: "clamp(56px,8vw,80px) 0", borderColor: "#e2ddd6", background: "#f7f4ef", contentVisibility: "auto", containIntrinsicSize: "0 2400px" }}>
      <div className="mx-auto w-full max-w-[720px] px-5 sm:px-6">
        <SectionLabel text="O que dizem quem já passou por aqui" />
        <div className="flex flex-col gap-5">
          {screenshots.map((item, i) => (
            <RevealDiv key={i} direction={item.dir as "rv" | "rv-l" | "rv-r"}>
              <div
                style={{
                  borderRadius: 14,
                  overflow: "hidden",
                  border: "1px solid #e2ddd6",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={720}
                  height={240}
                  className="w-full h-auto block"
                  sizes="(max-width: 768px) 100vw, 720px"
                  loading={i === 0 ? "eager" : "lazy"}
                  quality={75}
                />
              </div>
            </RevealDiv>
          ))}
        </div>

        <RevealDiv direction="rv">
          <div className="mt-10">
            <a
              href="#btn-checkout-v05"
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
              Quero ter resultados como esses
            </a>
            <p className="text-center mt-3 font-sans" style={{ fontSize: 12, color: "#9a9088" }}>
              Acesso imediato · Pagamento 100% seguro
            </p>
          </div>
        </RevealDiv>
      </div>
    </section>
  )
}
