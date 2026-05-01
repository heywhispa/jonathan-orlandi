"use client"

import RevealDiv from "@/components/protocolo-v03b/RevealDiv"
import { spawnParticles } from "@/lib/particles"

export default function FinalCTA() {
  return (
    <section className="text-center" style={{ padding: "clamp(72px,10vw,100px) 0 clamp(72px,10vw,100px)", background: "#f7f4ef" }}>
      <div className="mx-auto w-full max-w-[720px] px-5 sm:px-6">
        <div style={{ width: 40, height: 2, background: "#d4820a", margin: "0 auto 32px" }} />
        <RevealDiv direction="rv">
          <h2 className="font-serif font-extrabold mb-3 mx-auto text-balance" style={{ fontSize: "clamp(22px,4vw,40px)", color: "#1a1612", maxWidth: 520, letterSpacing: "-0.02em", lineHeight: 1.2 }}>
            30 dias. Uma aula por dia.<br />Garantia total se não funcionar.
          </h2>
        </RevealDiv>
        <RevealDiv direction="rv">
          <p className="font-light mb-9" style={{ fontSize: 16, color: "#5a5248" }}>Acesso imediato após a confirmação.</p>
        </RevealDiv>
        <RevealDiv direction="rv">
          <a href="#btn-checkout-v03b" className="cta-btn ignore-click-event block mx-auto font-serif font-bold text-center transition-all duration-200" style={{ background: "#d4820a", color: "#fff", fontSize: 16, padding: "20px 32px", borderRadius: 12, textDecoration: "none", maxWidth: 420 }} onClick={spawnParticles}>
            Quero começar o Protocolo Filtro Dopamina
          </a>
          <p className="font-light mt-3" style={{ fontSize: 13, color: "#9a9088" }}>Pagamento 100% seguro · Parcelamento disponível</p>
        </RevealDiv>
        <RevealDiv direction="rv">
          <div className="text-left mt-12" style={{ background: "#fff", border: "1px solid #e2ddd6", borderLeft: "3px solid #d4820a", borderRadius: 12, padding: "clamp(20px,4vw,32px) clamp(18px,4vw,36px)" }}>
            <div className="font-serif font-bold uppercase tracking-widest mb-3" style={{ fontSize: 12, color: "#d4820a", letterSpacing: ".1em" }}>P.S.</div>
            <p className="font-light mb-5" style={{ fontSize: 15, color: "#5a5248", lineHeight: 1.75 }}>
              Há quanto tempo você acorda com a intenção de fazer e termina o dia sem ter começado? Cada dia que passa o padrão fica mais forte — não por fraqueza, mas por como o cérebro funciona. O protocolo existe para mudar exatamente isso. Se a página ainda estiver disponível, você ainda pode entrar hoje.
            </p>
            <a href="#btn-checkout-v03b" className="ignore-click-event inline-block font-serif font-bold transition-all duration-200" style={{ background: "transparent", color: "#d4820a", fontSize: 14, padding: "12px 24px", border: "1px solid rgba(212,130,10,.35)", borderRadius: 12, textDecoration: "none" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(212,130,10,.1)"; (e.currentTarget as HTMLElement).style.borderColor = "#d4820a" }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,130,10,.35)" }}
              onClick={spawnParticles}
            >
              Começar agora →
            </a>
          </div>
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
