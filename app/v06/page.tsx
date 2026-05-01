"use client"

import ProgressBar from "@/components/protocolo-v06/ProgressBar"
import Particles from "@/components/protocolo-v06/Particles"
import Hero from "@/components/protocolo-v06/Hero"
import Offer from "@/components/protocolo-v06/Offer"
import SocialProof from "@/components/protocolo-v06/SocialProof"
import Guarantee from "@/components/protocolo-v06/Guarantee"
import About from "@/components/protocolo-v06/About"
import FAQ from "@/components/protocolo-v06/FAQ"
import FinalCTA from "@/components/protocolo-v06/FinalCTA"
import Footer from "@/components/protocolo-v06/Footer"
import DelayedContent from "@/components/DelayedContent"

export default function PageV06() {
  return (
    <>
      <ProgressBar />
      <Particles />
      <Hero />
      <DelayedContent>
        <Offer />
        <SocialProof />
        <Guarantee />
        <About />
        <FAQ />
        <FinalCTA />
        <Footer />
      </DelayedContent>
    </>
  )
}
