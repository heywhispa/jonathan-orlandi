"use client"

import ProgressBar from "@/components/protocolo-v04/ProgressBar"
import Particles from "@/components/protocolo-v04/Particles"
import Hero from "@/components/protocolo-v04/Hero"
import Offer from "@/components/protocolo-v04/Offer"
import SocialProof from "@/components/protocolo-v04/SocialProof"
import Guarantee from "@/components/protocolo-v04/Guarantee"
import About from "@/components/protocolo-v04/About"
import FAQ from "@/components/protocolo-v04/FAQ"
import FinalCTA from "@/components/protocolo-v04/FinalCTA"
import Footer from "@/components/protocolo-v04/Footer"
import DelayedContent from "@/components/DelayedContent"

export default function PageV04() {
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
