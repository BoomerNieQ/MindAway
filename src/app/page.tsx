import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Marquee from '@/components/Marquee'
import Services from '@/components/Services'
import Pricing from '@/components/Pricing'
import VideoBreaker from '@/components/VideoBreaker'
import GiftCard from '@/components/GiftCard'
import ComingSoon from '@/components/ComingSoon'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import MusicPlayer from '@/components/MusicPlayer'
import WhatsApp from '@/components/WhatsApp'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Marquee />
      <Services />
      <Pricing />
      <GiftCard />
      <ComingSoon />
      <VideoBreaker />
      <Gallery />
      <Contact />
      <Footer />
      <MusicPlayer />
      <WhatsApp />
    </main>
  )
}
