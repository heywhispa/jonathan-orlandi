import RevealDiv from "@/components/protocolo/RevealDiv"

export default function SectionLabel({ text }: { text: string }) {
  return (
    <RevealDiv direction="rv">
      <div
        className="flex items-center gap-3 font-semibold uppercase tracking-widest mb-10"
        style={{ fontSize: 11, letterSpacing: ".15em", color: "#d4820a" }}
      >
        {text}
        <span className="flex-1 h-px" style={{ background: "#e2ddd6" }} />
      </div>
    </RevealDiv>
  )
}
