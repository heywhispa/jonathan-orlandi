"use client"

import ProgressBar from "@/components/protocolo-v08/ProgressBar"
import Particles from "@/components/protocolo-v08/Particles"
import Hero from "@/components/protocolo-v08/Hero"
import Offer from "@/components/protocolo-v08/Offer"
import SocialProof from "@/components/protocolo-v08/SocialProof"
import Guarantee from "@/components/protocolo-v08/Guarantee"
import About from "@/components/protocolo-v08/About"
import FAQ from "@/components/protocolo-v08/FAQ"
import FinalCTA from "@/components/protocolo-v08/FinalCTA"
import Footer from "@/components/protocolo-v08/Footer"
import DelayedContent from "@/components/DelayedContent"

export default function PageV08() {
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
