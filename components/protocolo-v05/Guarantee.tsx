"use client"

import RevealDiv from "@/components/protocolo-v05/RevealDiv"
import SectionLabel from "@/components/protocolo-v05/SectionLabel"

export default function Guarantee() {
  return (
    <section id="garantia" className="border-b" style={{ padding: "clamp(56px,8vw,80px) 0", borderColor: "#e2ddd6", background: "#f7f4ef" }}>
      <div className="mx-auto w-full max-w-[720px] px-5 sm:px-6">
        <SectionLabel text="Garantia" />
        <RevealDiv direction="rv">
          <div
            style={{
              border: "1px solid rgba(212,130,10,.25)",
              borderRadius: 12,
              padding: "clamp(24px,5vw,40px)",
              background: "rgba(212,130,10,.03)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <span className="block mb-5" style={{ lineHeight: 1 }}>
              <svg width="40" height="44" viewBox="0 0 40 44" fill="none">
                <path d="M20 2L4 8V20C4 29.5 11.2 38.3 20 41C28.8 38.3 36 29.5 36 20V8L20 2Z" fill="rgba(212,130,10,0.10)" stroke="#d4820a" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M13 22L17.5 27L27 17" stroke="#d4820a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <h3 className="font-serif font-bold mb-4" style={{ fontSize: "clamp(20px,4vw,24px)", color: "#1a1612" }}>
              30 dias. Risco zero.
            </h3>
            <div className="font-light flex flex-col gap-3" style={{ fontSize: 15, color: "#5a5248", lineHeight: 1.75 }}>
              <p>Se você seguir o protocolo e não perceber diferença real, eu devolvo cada centavo. Sem burocracia. Sem precisar justificar nada.</p>
              <p>Posso fazer isso porque sei o que acontece quando a pessoa realmente para de lutar contra si mesma e segue o processo. Já vi em mais de 500 pessoas. Quando o protocolo é aplicado, ele funciona.</p>
              <p>O risco é meu. A mudança é sua.</p>
            </div>
            <div className="font-serif font-bold mt-6" style={{ fontSize: 16, color: "#d4820a" }}>— Jonathan</div>
          </div>
        </RevealDiv>
      </div>
    </section>
  )
}
