import ProgressBar from "@/components/protocolo/ProgressBar"
import Hero from "@/components/protocolo/Hero"
import SocialProof from "@/components/protocolo/SocialProof"
import Method from "@/components/protocolo/Method"
import Offer from "@/components/protocolo/Offer"
import Guarantee from "@/components/protocolo/Guarantee"
import About from "@/components/protocolo/About"
import FAQ from "@/components/protocolo/FAQ"
import FinalCTA from "@/components/protocolo/FinalCTA"
import Footer from "@/components/protocolo/Footer"
import Particles from "@/components/protocolo/Particles"

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <ProgressBar />
      <Particles />
      <Hero />
      <SocialProof />
      <Method />
      <Offer />
      <Guarantee />
      <About />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
