"use client"

import ProgressBar from "@/components/protocolo-v02b/ProgressBar"
import Particles from "@/components/protocolo-v02b/Particles"
import Hero from "@/components/protocolo-v02b/Hero"
import SocialProof from "@/components/protocolo-v02b/SocialProof"
import Method from "@/components/protocolo-v02b/Method"
import Offer from "@/components/protocolo-v02b/Offer"
import Guarantee from "@/components/protocolo-v02b/Guarantee"
import About from "@/components/protocolo-v02b/About"
import FAQ from "@/components/protocolo-v02b/FAQ"
import FinalCTA from "@/components/protocolo-v02b/FinalCTA"
import Footer from "@/components/protocolo-v02b/Footer"
import DelayedContent from "@/components/DelayedContent"

export default function PageV02b() {
  return (
    <>
      <ProgressBar />
      <Particles />
      <Hero />
      <DelayedContent>
        <SocialProof />
        <Method />
        <Offer />
        <Guarantee />
        <About />
        <FAQ />
        <FinalCTA />
        <Footer />
      </DelayedContent>
    </>
  )
}
