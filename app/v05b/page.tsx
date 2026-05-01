"use client"

import ProgressBar from "@/components/protocolo-v05b/ProgressBar"
import Particles from "@/components/protocolo-v05b/Particles"
import Hero from "@/components/protocolo-v05b/Hero"
import Offer from "@/components/protocolo-v05b/Offer"
import SocialProof from "@/components/protocolo-v05b/SocialProof"
import Guarantee from "@/components/protocolo-v05b/Guarantee"
import About from "@/components/protocolo-v05b/About"
import FAQ from "@/components/protocolo-v05b/FAQ"
import FinalCTA from "@/components/protocolo-v05b/FinalCTA"
import Footer from "@/components/protocolo-v05b/Footer"
import DelayedContent from "@/components/DelayedContent"

export default function PageV05b() {
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
