"use client"

import ProgressBar from "@/components/protocolo-v05/ProgressBar"
import Particles from "@/components/protocolo-v05/Particles"
import Hero from "@/components/protocolo-v05/Hero"
import Offer from "@/components/protocolo-v05/Offer"
import SocialProof from "@/components/protocolo-v05/SocialProof"
import Guarantee from "@/components/protocolo-v05/Guarantee"
import About from "@/components/protocolo-v05/About"
import FAQ from "@/components/protocolo-v05/FAQ"
import FinalCTA from "@/components/protocolo-v05/FinalCTA"
import Footer from "@/components/protocolo-v05/Footer"
import DelayedContent from "@/components/DelayedContent"

export default function PageV05() {
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
