import { useState } from 'react'
import { motion } from 'framer-motion'

const services = [
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />,
    title: "Web Development",
    desc: "We build fast, scalable, and modern web applications using React, Next.js, and other cutting-edge frameworks tailored to your business needs.",
    tags: ["React", "Next.js", "Node.js"],
  },
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />,
    title: "Mobile Applications",
    desc: "Cross-platform iOS and Android apps built with React Native — delivering native-quality experiences from a single codebase.",
    tags: ["React Native", "iOS", "Android"],
  },
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />,
    title: "Cloud & SaaS",
    desc: "End-to-end SaaS product development and cloud-native infrastructure setup on AWS, GCP, or Azure.",
    tags: ["AWS", "GCP", "Docker"],
  },
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />,
    title: "UI / UX Design",
    desc: "Clean, conversion-focused interfaces designed in Figma — from wireframes to pixel-perfect handoff ready for development.",
    tags: ["Figma", "Prototyping", "Design Systems"],
  },
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />,
    title: "E-Commerce Solutions",
    desc: "Custom online stores and headless commerce platforms built for performance, SEO, and seamless checkout experiences.",
    tags: ["Shopify", "WooCommerce", "Headless"],
  },
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
    title: "Cybersecurity & DevOps",
    desc: "Secure CI/CD pipelines, infrastructure hardening, and ongoing monitoring to keep your systems safe and always online.",
    tags: ["CI/CD", "Security", "Monitoring"],
  },
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />,
    title: "Graphic Design",
    desc: "Brand identities, marketing assets, and visual content that make your business stand out and leave a lasting impression.",
    tags: ["Branding", "Illustration", "Print & Digital"],
  },
]

const C = {
  wrap: { maxWidth: "1100px", margin: "0 auto", padding: "0 48px" },
  navy: "#0a1628",
  blue: "#2563EB",
}

const ease = [0.22, 1, 0.36, 1]

function ServiceCard({ s, i }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: i * 0.07, ease }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        border: "1px solid #e2e8f0",
        borderRadius: "16px",
        padding: "32px 28px",
        display: "flex",
        flexDirection: "column",
        gap: "14px",
        boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
        cursor: "default",
      }}
    >
      {/* icon — turns blue on card hover */}
      <div style={{
        width: "50px", height: "50px", borderRadius: "12px",
        background: hovered ? "#2563EB" : "#eff6ff",
        display: "flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0, transition: "background 0.22s ease",
      }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"
          stroke={hovered ? "#fff" : "#2563EB"} strokeWidth={1.8}>
          {s.icon}
        </svg>
      </div>

      <h3 style={{ fontSize: "17px", fontWeight: 700, color: C.navy, margin: 0 }}>
        {s.title}
      </h3>

      <p style={{ fontSize: "14px", color: "#64748b", lineHeight: 1.75, margin: 0 }}>
        {s.desc}
      </p>

      {/* tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "4px" }}>
        {s.tags.map((tag) => (
          <span key={tag} style={{
            fontSize: "11px", fontWeight: 600,
            color: "#2563EB", background: "#eff6ff",
            padding: "4px 10px", borderRadius: "4px",
          }}>
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Services() {
  return (
    <div style={{ background: "#f8fafc", minHeight: "100vh" }}>

      {/* ── Header banner ── */}
      <div style={{ background: "#0a1628", paddingTop: "68px" }}>
        <div className="page-banner" style={{ ...C.wrap, padding: "72px 48px 80px" }}>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            style={{ color: C.blue, fontSize: "14px", fontWeight: 600, marginBottom: "14px", display: "flex", alignItems: "center", gap: "8px" }}
          >
            <span>//</span> Our Services
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            style={{ color: "#fff", fontSize: "48px", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-1px", maxWidth: "560px", marginBottom: "16px" }}
          >
            Services We Provide to{" "}
            <span style={{ color: C.blue }}>Elevate Your Business</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            style={{ color: "rgba(255,255,255,0.5)", fontSize: "16px", lineHeight: 1.75, maxWidth: "460px" }}
          >
            From web and mobile to cloud infrastructure and design — we cover every
            layer of your digital product.
          </motion.p>
        </div>
      </div>

      {/* ── Cards ── */}
      <div className="r-wrap" style={{ ...C.wrap, padding: "72px 48px 96px" }}>
        <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
          {services.map((s, i) => (
            <ServiceCard key={s.title} s={s} i={i} />
          ))}
        </div>
      </div>

    </div>
  )
}
