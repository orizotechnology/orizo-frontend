import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ui/ScrollToTop'
import Footer from './components/Footer'
import Hero from './components/sections/Hero'
import ServicesSection from './components/sections/ServicesSection'
import WhyUs from './components/sections/WhyUs'
import StartJourney from './components/sections/StartJourney'
import Services from './pages/Services'
import About from './pages/About'
import CareerPage from './pages/Career'
import Contact from './pages/Contact'
import Apply from './pages/Apply'
import Products from './pages/Products'
import FAQ from './pages/FAQ'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'
import './App.css'
import './responsive.css'

function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <WhyUs />
      <StartJourney />
    </>
  )
}

function App() {
  const location = useLocation()
  const isApply = location.pathname === '/apply'

  return (
    <>
      <ScrollToTop />
      {!isApply && <Navbar />}
      <main style={{ margin: 0, padding: 0, display: "block" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/apply" element={<Apply />} />
        </Routes>
      </main>
      {!isApply && <Footer />}
    </>
  )
}

export default App
