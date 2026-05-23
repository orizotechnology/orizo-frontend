import { motion } from 'framer-motion'
import { useState } from 'react'

const C = {
  wrap: { maxWidth: "1100px", margin: "0 auto", padding: "0 48px" },
  navy: "#0a1628",
  blue: "#2563EB",
}

const ease = [0.22, 1, 0.36, 1]

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, delay, ease },
})

const values = [
  {
    d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    title: "Integrity",
    desc: "We say what we mean and do what we say. Honest communication and transparent processes are at the core of every client relationship.",
  },
  {
    d: "M13 10V3L4 14h7v7l9-11h-7z",
    title: "Innovation",
    desc: "We stay ahead of the curve — constantly exploring new technologies and approaches to deliver smarter, faster, better solutions.",
  },
  {
    d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    title: "Collaboration",
    desc: "Great products are built together. We work as an extension of your team — sharing ideas, feedback, and ownership every step of the way.",
  },
  {
    d: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
    title: "Excellence",
    desc: "We hold ourselves to the highest standard in everything we build. Good enough is never good enough — we aim for exceptional.",
  },
  {
    d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    title: "Client First",
    desc: "Your success is our success. Every decision we make is guided by what's best for you — not what's easiest for us.",
  },
  {
    d: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064",
    title: "Impact",
    desc: "We build software that makes a real difference — for businesses, their customers, and the communities they serve.",
  },
]

function VisionCard({ fade: f }) {
  const [hov, setHov] = useState(false)
  return (
    <motion.div {...f} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ background: "#0a1628", borderRadius: "16px", padding: "48px 40px", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", cursor: "default" }}>
      <div style={{ position: "absolute", top: "-40px", right: "-40px", width: "180px", height: "180px", borderRadius: "50%", background: "rgba(37,99,235,0.12)", pointerEvents: "none" }} />
      <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: hov ? "#2563EB" : "rgba(37,99,235,0.25)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px", flexShrink: 0, transition: "background 0.22s ease" }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke={hov ? "#fff" : "#60a5fa"} strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      </div>
      <p style={{ color: "#60a5fa", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>Our Vision</p>
      <h3 style={{ color: "#fff", fontSize: "21px", fontWeight: 700, lineHeight: 1.35, marginBottom: "16px" }}>To be the most trusted software partner for businesses building the future.</h3>
      <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "15px", lineHeight: 1.8, margin: 0 }}>We envision a world where every business — regardless of size or budget — has access to world-class software that empowers them to grow, compete, and make a lasting impact.</p>
    </motion.div>
  )
}

function MissionCard({ fade: f }) {
  const [hov, setHov] = useState(false)
  return (
    <motion.div {...f} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "48px 40px", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", cursor: "default" }}>
      <div style={{ position: "absolute", top: "-40px", right: "-40px", width: "180px", height: "180px", borderRadius: "50%", background: "rgba(37,99,235,0.05)", pointerEvents: "none" }} />
      <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: hov ? "#2563EB" : "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px", flexShrink: 0, transition: "background 0.22s ease" }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke={hov ? "#fff" : "#2563EB"} strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
        </svg>
      </div>
      <p style={{ color: "#2563EB", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>Our Mission</p>
      <h3 style={{ color: "#0a1628", fontSize: "21px", fontWeight: 700, lineHeight: 1.35, marginBottom: "16px" }}>To deliver software that solves real problems and creates real value.</h3>
      <p style={{ color: "#64748b", fontSize: "15px", lineHeight: 1.8, margin: 0 }}>Our mission is to partner with businesses to design, build, and scale digital products that are reliable, performant, and genuinely useful — delivered with transparency, care, and craftsmanship at every step.</p>
    </motion.div>
  )
}
function ValueCard({ v, i }) {
  const [hov, setHov] = useState(false)
  return (
    <motion.div
      {...fade(i * 0.07)}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: "#f8fafc", border: "1px solid #e2e8f0",
        borderRadius: "16px", padding: "32px 28px",
        display: "flex", flexDirection: "column", gap: "14px",
        cursor: "default",
      }}
    >
      <div style={{
        width: "46px", height: "46px", borderRadius: "10px",
        background: hov ? "#2563EB" : "#eff6ff",
        display: "flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0, transition: "background 0.22s ease",
      }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24"
          stroke={hov ? "#fff" : "#2563EB"} strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d={v.d} />
        </svg>
      </div>
      <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#0a1628", margin: 0 }}>{v.title}</h3>
      <p style={{ fontSize: "13.5px", color: "#64748b", lineHeight: 1.7, margin: 0 }}>{v.desc}</p>
    </motion.div>
  )
}

export default function About() {
  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>

      {/* ── HERO BANNER ── */}
      <div style={{ background: "#0a1628", paddingTop: "68px" }}>
        <div className="page-banner" style={{ ...C.wrap, padding: "80px 48px 88px" }}>
          <motion.p {...fade(0)} style={{ color: C.blue, fontSize: "14px", fontWeight: 600, marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
            <span>//</span> About Us
          </motion.p>
          <motion.h1 {...fade(0.1)} style={{ color: "#fff", fontSize: "52px", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-1px", maxWidth: "600px", marginBottom: "20px" }}>
            We Are <span style={{ color: C.blue }}>Orizo</span>
          </motion.h1>
          <motion.p {...fade(0.2)} style={{ color: "rgba(255,255,255,0.55)", fontSize: "17px", lineHeight: 1.8, maxWidth: "520px" }}>
            A software company built on the belief that great technology should be
            accessible, reliable, and human-centred — for every business, at every stage.
          </motion.p>
        </div>
      </div>

      {/* ── OUR STORY ── */}
      <section style={{ padding: "96px 0", background: "#fff" }}>
        <div className="r-wrap" style={{ ...C.wrap }}>
          <div className="story-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>

            {/* Left text */}
            <motion.div {...fade(0)}>
              <p style={{ color: C.blue, fontSize: "14px", fontWeight: 600, marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
                <span>//</span> Our Story
              </p>
              <h2 style={{ fontSize: "38px", fontWeight: 800, color: C.navy, lineHeight: 1.15, letterSpacing: "-0.5px", marginBottom: "24px" }}>
                Built from Passion,<br />
                <span style={{ color: C.blue }}>Driven by Purpose</span>
              </h2>
              <p style={{ fontSize: "15px", color: "#64748b", lineHeight: 1.85, marginBottom: "20px" }}>
                Orizo was founded in 2020 by a small group of engineers and designers
                who were tired of seeing businesses struggle with outdated, overpriced, and
                underperforming software. We believed there was a better way — and we set
                out to prove it.
              </p>
              <p style={{ fontSize: "15px", color: "#64748b", lineHeight: 1.85, marginBottom: "20px" }}>
                What started as a two-person consultancy has grown into a full-service
                software company with a team of passionate professionals spanning web
                development, mobile engineering, cloud architecture, and design.
              </p>
              <p style={{ fontSize: "15px", color: "#64748b", lineHeight: 1.85 }}>
                Today, we partner with businesses across industries — from early-stage
                startups to established enterprises — helping them build digital products
                that are fast, scalable, and built to last.
              </p>
            </motion.div>

            {/* Right — stat cards */}
            <motion.div {...fade(0.15)} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="about-stat-grid">
              {[
                { value: "10+",  label: "Technologies Used" },
                { value: "50+",  label: "Projects Delivered" },
                { value: "30+",  label: "Happy Clients" },
                { value: "98%",  label: "Satisfaction Rate" },
              ].map((s) => (
                <div key={s.label} style={{
                  background: "#f8fafc", border: "1px solid #e2e8f0",
                  borderRadius: "14px", padding: "28px 24px", textAlign: "center",
                }}>
                  <p style={{ fontSize: "36px", fontWeight: 800, color: C.navy, lineHeight: 1, marginBottom: "8px" }}>{s.value}</p>
                  <p style={{ fontSize: "13px", color: "#94a3b8", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.07em" }}>{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── VISION & MISSION ── */}
      <section style={{ padding: "96px 0", background: "#f8fafc" }}>
        <div className="r-wrap" style={C.wrap}>
          <motion.div {...fade(0)} style={{ textAlign: "center", marginBottom: "56px" }}>
            <p style={{ color: C.blue, fontSize: "14px", fontWeight: 600, marginBottom: "12px", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
              <span>//</span> Vision & Mission
            </p>
            <h2 style={{ fontSize: "38px", fontWeight: 800, color: C.navy, lineHeight: 1.15, letterSpacing: "-0.5px" }}>
              Building Tomorrow's{" "}
              <span style={{ color: C.blue }}>Technology, Today</span>
            </h2>
          </motion.div>

          <div className="vm-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", alignItems: "stretch" }}>
            <VisionCard fade={fade(0.1)} />
            <MissionCard fade={fade(0.2)} />
          </div>
        </div>
      </section>

      {/* ── OUR VALUES ── */}
      <section style={{ padding: "96px 0", background: "#fff" }}>
        <div className="r-wrap" style={C.wrap}>
          <motion.div {...fade(0)} style={{ marginBottom: "56px" }}>
            <p style={{ color: C.blue, fontSize: "14px", fontWeight: 600, marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
              <span>//</span> Our Values
            </p>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
              <h2 style={{ fontSize: "38px", fontWeight: 800, color: C.navy, lineHeight: 1.15, letterSpacing: "-0.5px", maxWidth: "420px" }}>
                The Principles That{" "}
                <span style={{ color: C.blue }}>Guide Everything We Do</span>
              </h2>
          
            </div>
          </motion.div>

          <div className="values-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", alignItems: "stretch" }}>
            {values.map((v, i) => <ValueCard key={v.title} v={v} i={i} />)}
          </div>
        </div>
      </section>

      {/* ── JOIN CTA ── */}
      <section style={{ background: "#0a1628", padding: "96px 0", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-60px", left: "50%", transform: "translateX(-50%)", width: "500px", height: "300px", background: "radial-gradient(ellipse, rgba(37,99,235,0.22) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div className="r-wrap" style={{ ...C.wrap, position: "relative", zIndex: 1, textAlign: "center" }}>

          <motion.p {...fade(0)} style={{ color: C.blue, fontSize: "14px", fontWeight: 600, marginBottom: "16px", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
            <span>//</span> Ready to Join
          </motion.p>

          <motion.h2 {...fade(0.1)} style={{ color: "#fff", fontSize: "44px", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.5px", maxWidth: "560px", margin: "0 auto 16px" }}>
            Ready to Join the{" "}
            <span style={{ color: C.blue }}>Orizo Community?</span>
          </motion.h2>

          <motion.p {...fade(0.2)} style={{ color: "rgba(255,255,255,0.5)", fontSize: "16px", lineHeight: 1.75, maxWidth: "440px", margin: "0 auto 44px" }}>
            Whether you're a business looking to build something great or a talent
            wanting to work on meaningful products — there's a place for you here.
          </motion.p>

          <motion.div className="cta-row" {...fade(0.3)} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
            <a href="#services" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "#2563EB", color: "#fff",
              fontSize: "15px", fontWeight: 600,
              padding: "14px 32px", borderRadius: "8px", textDecoration: "none",
            }}>
              Explore Services
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#contact" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "transparent", color: "#fff",
              fontSize: "15px", fontWeight: 600,
              padding: "14px 32px", borderRadius: "8px", textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.2)",
            }}>
              Contact Us
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </motion.div>

        </div>
      </section>

    </div>
  )
}

