import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Features from "@/components/Features"
import Gallery from "@/components/Gallery"
import Download from "@/components/Download"
import Changelog from "@/components/Changelog"
import About from "@/components/About"
import Developer from "@/components/Developer"
import OpenSource from "@/components/OpenSource"
import Discord from "@/components/Discord"
import FAQ from "@/components/FAQ"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Gallery />
      <Download />
      <Changelog />
      <About />
      <Developer />
      <OpenSource />
      <Discord />
      <FAQ />
      <Footer />
    </main>
  )
}
