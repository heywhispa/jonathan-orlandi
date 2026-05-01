export function spawnParticles(e: React.MouseEvent) {
  const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
  window.dispatchEvent(new CustomEvent("spawn-particles", { detail: rect }))
}
