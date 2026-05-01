"use client"

import ProgressBar from "@/components/protocolo-v02/ProgressBar"
import Particles from "@/components/protocolo-v02/Particles"
import Hero from "@/components/protocolo-v02/Hero"
import SocialProof from "@/components/protocolo-v02/SocialProof"
import Method from "@/components/protocolo-v02/Method"
import Offer from "@/components/protocolo-v02/Offer"
import Guarantee from "@/components/protocolo-v02/Guarantee"
import About from "@/components/protocolo-v02/About"
import FAQ from "@/components/protocolo-v02/FAQ"
import FinalCTA from "@/components/protocolo-v02/FinalCTA"
import Footer from "@/components/protocolo-v02/Footer"
import DelayedContent from "@/components/DelayedContent"

export default function PageV02() {
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
