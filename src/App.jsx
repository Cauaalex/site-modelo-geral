import Header from './components/Header'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Testimonial from './components/Testimonial'
import Services from './components/Services'
import Stats from './components/Stats'
import VideoSection from './components/VideoSection'
import Pricing from './components/Pricing'
import Awards from './components/Awards'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-paper text-ink font-body">
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <Testimonial />
        <Services />
        <Stats />
        <VideoSection />
        <Pricing />
        <Awards />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
