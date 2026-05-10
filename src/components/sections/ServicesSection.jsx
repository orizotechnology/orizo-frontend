import { Link } from 'react-router-dom'
import FadeIn from '../ui/FadeIn'
import { useState } from 'react'

const services = [
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />,
    title: "Web Development",
    desc: "Fast, scalable web apps built with modern frameworks like React and Next.js.",
    tag: "Most Popular",
  },
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />,
    title: "Mobile Applications",
    desc: "Cross-platform iOS & Android apps with native-quality experiences.",
    tag: null,
  },
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />,
    title: "Cloud & SaaS",
    desc: "End-to-end SaaS products and cloud-native infrastructure on AWS or GCP.",
    tag: null,
  },
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />,
    title: "Graphic Design",
    desc: "Brand identities, marketing assets, and visual content that make your business stand out.",
    tag: null,
  },
]

const C = {
  wrap: { maxWidth: "1100px", margin: "0 auto", padding: "0 48px" },
  navy: "#0a1628",
  blue: "#2563EB",
}

function ServiceCard({ s, i }) {
  const [hovered, setHovered] = useState(false)

  return (
    <FadeIn delay={i * 0.1} direction="up" style={{ height: "100%" }}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: "#fff",
          border: "1px solid #e2e8f0",
          borderRadius: "16px",
          padding: "32px 28px",
          height: "100%",
          minHeight: "220px",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
          position: "relative",
          cursor: "default",
          boxSizing: "border-box",
        }}
      >
        {s.tag && (
          <span style={{
            position: "absolute", top: "20px", right: "20px",
            background: "#eff6ff", color: "#2563EB",
            fontSize: "11px", fontWeight: 700,
            padding: "3px 10px", borderRadius: "20px",
          }}>
            {s.tag}
          </span>
        )}

        <div>
          {/* icon — turns blue when card is hovered */}
          <div
            style={{
              width: "50px", height: "50px", borderRadius: "12px",
              background: hovered ? "#2563EB" : "#eff6ff",
              display: "flex", alignItems: "center", justifyContent: "center",
              marginBottom: "20px", flexShrink: 0,
              transition: "background 0.22s ease",
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"
              stroke={hovered ? "#fff" : "#2563EB"} strokeWidth={1.8}>
              {s.icon}
            </svg>
          </div>

          <h3 style={{ fontSize: "18px", fontWeight: 700, color: C.navy, marginBottom: "10px" }}>{s.title}</h3>
          <p style={{ fontSize: "14px", color: "#64748b", lineHeight: 1.75 }}>{s.desc}</p>
        </div>
      </div>
    </FadeIn>
  )
}

export default function ServicesSection() {
  return (
    <section id="services" style={{ background: "#f8fafc", padding: "96px 0" }}>
      <div className="r-wrap" style={C.wrap}>

        <FadeIn>
          <div style={{ marginBottom: "56px" }}>
            <p style={{ color: C.blue, fontSize: "14px", fontWeight: 600, marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
              <span>//</span> Our Services
            </p>
            <h2 style={{ fontSize: "38px", fontWeight: 800, color: C.navy, lineHeight: 1.15, letterSpacing: "-0.5px", maxWidth: "460px" }}>
              Services We Provide to{" "}
              <span style={{ color: C.blue }}>Elevate Your Business</span>
            </h2>
          </div>
        </FadeIn>

        <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px" }}>
          {services.map((s, i) => <ServiceCard key={s.title} s={s} i={i} />)}
        </div>

        <FadeIn delay={0.35}>
          <div style={{ textAlign: "center", marginTop: "52px" }}>
            <Link to="/services" style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              background: C.blue, color: "#fff",
              fontSize: "15px", fontWeight: 600,
              padding: "14px 36px", borderRadius: "8px", textDecoration: "none",
            }}>
              Explore All Services
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
