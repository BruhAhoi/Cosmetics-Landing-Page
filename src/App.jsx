import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Inspired from './components/Inspired.jsx'
import FeaturedProducts from './components/FeaturedProducts.jsx'
import About from './components/About.jsx'
import PressLogos from './components/PressLogos.jsx'
import ProcessingCTA from './components/ProcessingCTA.jsx'
import Routine from './components/Routine.jsx'
import Diagnosis from './components/Diagnosis.jsx'
import Testimonials from './components/Testimonials.jsx'
import PromoColumns from './components/PromoColumns.jsx'
import Newsletter from './components/Newsletter.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Navbar />
      <main>
        <Hero />
        <Inspired />
        <FeaturedProducts />
        <About />
        <PressLogos />
        <ProcessingCTA />
        <Routine />
        <Diagnosis />
        <Testimonials />
        <PromoColumns />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
