import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const slides = ['/1.png', '/2.png', '/3.png', '/4.png']

const C = {
  wrap:  { maxWidth: "1100px", margin: "0 auto", padding: "0 48px" },
  navy:  "#0a1628",
  blue:  "#2563EB",
  white: "#ffffff",
  muted: "rgba(255,255,255,0.55)",
}
const ease = [0.22, 1, 0.36, 1]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev]       = useState(null)
  const [fading, setFading]   = useState(false)

  useEffect(() => {
    const id = setInterval(() => {
      setPrev(current)
      setFading(true)
      setCurrent((c) => (c + 1) % slides.length)
      setTimeout(() => { setPrev(null); setFading(false) }, 900)
    }, 4500)
    return () => clearInterval(id)
  }, [current])

  return (
    <>
      {/* ── HERO ── */}
      <section className="r-section" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", background: "#050d1a", overflow: "hidden", marginTop: 0, paddingTop: 0 }}>

        {/* ── Slideshow BG ── */}
        {prev !== null && (
          <div key={`prev-${prev}`} style={{
            position: "absolute", inset: 0, zIndex: 0,
            backgroundImage: `url(${slides[prev]})`,
            backgroundSize: "cover", backgroundPosition: "center",
            opacity: 0.45,
            transition: "opacity 0.9s ease",
          }} />
        )}
        <div key={`curr-${current}`} style={{
          position: "absolute", inset: 0, zIndex: 1,
          backgroundImage: `url(${slides[current]})`,
          backgroundSize: "cover", backgroundPosition: "center",
          opacity: fading ? 0 : 0.45,
          transition: "opacity 0.9s ease",
        }} />

        {/* dark overlay */}
        <div style={{ position: "absolute", inset: 0, zIndex: 2, background: "linear-gradient(to right, rgba(5,13,26,0.92) 38%, rgba(5,13,26,0.55) 70%, rgba(5,13,26,0.75) 100%)" }} />

        {/* ── Text content ── */}
        <div style={{ position: "relative", zIndex: 3, width: "100%" }}>
          <div className="r-wrap hero-content-wrap" style={{ ...C.wrap, padding: "120px 48px 80px" }}>
            <div style={{ maxWidth: "780px" }}>

              <motion.p
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease }}
                style={{ color: C.blue, fontSize: "16px", fontWeight: 600, marginBottom: "24px", display: "flex", alignItems: "center", gap: "8px" }}
              >
                <span>//</span> Experience The Best IT Solutions
              </motion.p>

              <motion.h1
                className="hero-h1"
                initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease }}
                style={{ color: C.white, fontSize: "72px", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-2px", marginBottom: "28px" }}
              >
                Where Creativity Meets{" "}
                <span style={{ color: C.blue }}>Cutting-Edge Technology</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease }}
                style={{ color: C.muted, fontSize: "20px", lineHeight: 1.8, marginBottom: "48px", maxWidth: "620px" }}
              >
                Orizo is a software company delivering high-quality web apps,
                mobile applications, and SaaS platforms — turning bold ideas into
                reliable, scalable digital products.
              </motion.p>

              <motion.div
                className="cta-row"
                initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease }}
                style={{ display: "flex", alignItems: "center", gap: "20px" }}
              >
                <a href="#services" style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  background: C.blue, color: C.white,
                  fontSize: "16px", fontWeight: 600,
                  padding: "14px 32px", borderRadius: "8px", textDecoration: "none",
                }}>
                  Explore More
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
               
              </motion.div>

            </div>
          </div>
        </div>

        {/* slide dots */}
        <div className="slide-dots" style={{ position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)", zIndex: 4, display: "flex", gap: "8px" }}>
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} style={{
              width: i === current ? "24px" : "8px", height: "8px",
              borderRadius: "4px", border: "none", cursor: "pointer",
              background: i === current ? "#2563EB" : "rgba(255,255,255,0.3)",
              transition: "all 0.3s ease", padding: 0,
            }} />
          ))}
        </div>
      </section>

      {/* ── STATS removed ── */}
    </>
  )
}

