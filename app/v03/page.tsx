"use client"

import ProgressBar from "@/components/protocolo-v03/ProgressBar"
import Particles from "@/components/protocolo-v03/Particles"
import Hero from "@/components/protocolo-v03/Hero"
import Offer from "@/components/protocolo-v03/Offer"
import SocialProof from "@/components/protocolo-v03/SocialProof"
import Guarantee from "@/components/protocolo-v03/Guarantee"
import About from "@/components/protocolo-v03/About"
import FAQ from "@/components/protocolo-v03/FAQ"
import FinalCTA from "@/components/protocolo-v03/FinalCTA"
import Footer from "@/components/protocolo-v03/Footer"
import DelayedContent from "@/components/DelayedContent"

export default function PageV03() {
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
