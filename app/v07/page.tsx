"use client"

import ProgressBar from "@/components/protocolo-v07/ProgressBar"
import Particles from "@/components/protocolo-v07/Particles"
import Hero from "@/components/protocolo-v07/Hero"
import Offer from "@/components/protocolo-v07/Offer"
import SocialProof from "@/components/protocolo-v07/SocialProof"
import Guarantee from "@/components/protocolo-v07/Guarantee"
import About from "@/components/protocolo-v07/About"
import FAQ from "@/components/protocolo-v07/FAQ"
import FinalCTA from "@/components/protocolo-v07/FinalCTA"
import Footer from "@/components/protocolo-v07/Footer"
import DelayedContent from "@/components/DelayedContent"

export default function PageV07() {
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
