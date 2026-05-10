import { Link } from 'react-router-dom'
import FadeIn from '../ui/FadeIn'

export default function StartJourney() {
  return (
    <section style={{ background: "#0a1628", padding: "96px 0", position: "relative", overflow: "hidden" }}>

      {/* subtle bg glow */}
      <div style={{
        position: "absolute", top: "-80px", left: "50%", transform: "translateX(-50%)",
        width: "600px", height: "400px",
        background: "radial-gradient(ellipse, rgba(37,99,235,0.25) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div className="r-wrap" style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 48px", position: "relative", zIndex: 1, textAlign: "center" }}>
        <FadeIn>
        {/* eyebrow */}
        <p style={{ color: "#2563EB", fontSize: "14px", fontWeight: 600, marginBottom: "16px", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
          <span>//</span> Get Started Today
        </p>

        {/* headline */}
        <h2 className="journey-heading" style={{ color: "#ffffff", fontSize: "44px", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.5px", maxWidth: "580px", margin: "0 auto 20px" }}>
          Ready to Start Your{" "}
          <span style={{ color: "#2563EB" }}>Digital Journey?</span>
        </h2>

        {/* subtext */}
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "16px", lineHeight: 1.75, maxWidth: "460px", margin: "0 auto 44px" }}>
          Whether you have a clear vision or just an idea — we're here to help
          you build something great. Let's talk.
        </p>

        {/* Buttons */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
          <Link
            to="/services"
            style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "#2563EB", color: "#fff",
              fontSize: "15px", fontWeight: 600,
              padding: "14px 32px", borderRadius: "8px", textDecoration: "none",
            }}
          >
            Explore Services
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>

          <a
            href="#contact"
            style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "transparent", color: "#fff",
              fontSize: "15px", fontWeight: 600,
              padding: "14px 32px", borderRadius: "8px", textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            Contact Us
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
        </FadeIn>

      </div>
    </section>
  )
}
