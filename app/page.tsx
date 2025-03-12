import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Services from "@/components/sections/services"
import Features from "@/components/sections/features"
import Portfolio from "@/components/sections/portfolio"
import Faq from "@/components/sections/faq"
import Team from "@/components/sections/team"
import CallToAction from "@/components/sections/call-to-action"
import Testimonials from "@/components/sections/testimonials"
import Contact from "@/components/sections/contact"

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Features />
      <Portfolio />
      <Faq />
      <Team />
      <CallToAction />
      <Testimonials />
      <Contact />
    </>
  )
}

