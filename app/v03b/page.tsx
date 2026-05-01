"use client"

import ProgressBar from "@/components/protocolo-v03b/ProgressBar"
import Particles from "@/components/protocolo-v03b/Particles"
import Hero from "@/components/protocolo-v03b/Hero"
import Offer from "@/components/protocolo-v03b/Offer"
import SocialProof from "@/components/protocolo-v03b/SocialProof"
import Guarantee from "@/components/protocolo-v03b/Guarantee"
import About from "@/components/protocolo-v03b/About"
import FAQ from "@/components/protocolo-v03b/FAQ"
import FinalCTA from "@/components/protocolo-v03b/FinalCTA"
import Footer from "@/components/protocolo-v03b/Footer"
import DelayedContent from "@/components/DelayedContent"

export default function PageV03b() {
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
