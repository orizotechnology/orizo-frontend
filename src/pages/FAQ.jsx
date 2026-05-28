import { useState } from 'react'
import { motion } from 'framer-motion'

const C = {
  wrap: { maxWidth: "1100px", margin: "0 auto", padding: "0 48px" },
  navy: "#0a1628",
  blue: "#2563EB",
}

const ease = [0.22, 1, 0.36, 1]

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.55, delay, ease },
})

const faqs = [
  {
    q: "What services does Orizo offer?",
    a: "We offer end-to-end software development including web applications, mobile apps (iOS & Android), UI/UX design, cloud infrastructure, SaaS product development, e-commerce solutions, and cybersecurity & DevOps.",
  },
  {
    q: "How do I get started with a project?",
    a: "Simply reach out via our Contact page or email us directly. We'll schedule a discovery call to understand your requirements, then provide a proposal with timeline and pricing.",
  },
  {
    q: "Do you work with startups or only established businesses?",
    a: "Both. We work with early-stage startups, growing businesses, and established enterprises. Our process scales to fit your stage and budget.",
  },
  {
    q: "What is your typical project timeline?",
    a: "It depends on scope. A simple web app can take 4–8 weeks, while a full-featured SaaS product may take 3–6 months. We'll give you a clear timeline during the proposal phase.",
  },
  {
    q: "Do you provide post-launch support?",
    a: "Yes. We offer ongoing maintenance, bug fixes, performance monitoring, and feature development after launch. Support plans are available on a monthly retainer basis.",
  },
  {
    q: "What technologies do you use?",
    a: "Our primary stack includes React, Next.js, Node.js, React Native, Spring Boot, PostgreSQL, AWS, GCP, Docker, and Tailwind CSS — but we adapt to your existing stack when needed.",
  },
  {
    q: "How is pricing structured?",
    a: "We offer both fixed-price project contracts and time-and-materials engagements. For ongoing work, monthly retainers are available. Pricing is always discussed upfront with no hidden fees.",
  },
  {
    q: "Is my data and IP protected?",
    a: "Absolutely. All client work is covered by an NDA and IP assignment agreement. You own everything we build for you — code, designs, and assets.",
  },
  {
    q: "Do you build your own products?",
    a: "Yes. Alongside client work, we build our own software products. DQR — our dynamic UPI QR generator — is one example. You can find them on our Products page.",
  },
  {
    q: "How can I apply for a job at Orizo?",
    a: "Visit our Careers page to see open roles and submit an application. We're always interested in talented engineers, designers, and product thinkers.",
  },
]

function FAQItem({ item, index }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      {...fade(index * 0.04)}
      style={{
        borderBottom: "1px solid #e2e8f0",
      }}
    >
      <button
        onClick={() => setOpen(v => !v)}
        style={{
          width: "100%", display: "flex", alignItems: "center",
          justifyContent: "space-between", gap: "16px",
          background: "none", border: "none", cursor: "pointer",
          padding: "20px 0", textAlign: "left",
        }}
      >
        <span style={{ fontSize: "15px", fontWeight: 600, color: C.navy, lineHeight: 1.5 }}>
          {item.q}
        </span>
        <span style={{
          flexShrink: 0, width: "28px", height: "28px", borderRadius: "50%",
          background: open ? C.blue : "#f1f5f9",
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "background 0.2s ease",
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none"
            viewBox="0 0 24 24" stroke={open ? "#fff" : "#64748b"} strokeWidth={2.5}
            style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform 0.25s ease" }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      {open && (
        <div style={{ paddingBottom: "20px" }}>
          <p style={{ fontSize: "14px", color: "#64748b", lineHeight: 1.8, margin: 0 }}>
            {item.a}
          </p>
        </div>
      )}
    </motion.div>
  )
}

export default function FAQ() {
  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>

      {/* ── HERO BANNER ── */}
      <div style={{ background: C.navy, paddingTop: "68px" }}>
        <div className="page-banner" style={{ ...C.wrap, padding: "72px 48px 80px" }}>
          <motion.p {...fade(0)} style={{
            color: C.blue, fontSize: "14px", fontWeight: 600,
            marginBottom: "14px", display: "flex", alignItems: "center", gap: "8px",
          }}>
            <span>//</span> Support
          </motion.p>
          <motion.h1 {...fade(0.1)} style={{
            color: "#fff", fontSize: "48px", fontWeight: 800,
            lineHeight: 1.12, letterSpacing: "-1px",
            maxWidth: "520px", marginBottom: "16px",
          }}>
            Frequently Asked{" "}
            <span style={{ color: C.blue }}>Questions</span>
          </motion.h1>
          <motion.p {...fade(0.2)} style={{
            color: "rgba(255,255,255,0.5)", fontSize: "16px",
            lineHeight: 1.75, maxWidth: "440px",
          }}>
            Everything you need to know about working with Orizo.
            Can't find an answer? Reach out via our contact page.
          </motion.p>
        </div>
      </div>

      {/* ── FAQ LIST ── */}
      <section style={{ padding: "80px 0 104px" }}>
        <div className="r-wrap" style={{ ...C.wrap, maxWidth: "760px" }}>
          {faqs.map((item, i) => (
            <FAQItem key={item.q} item={item} index={i} />
          ))}
        </div>
      </section>

    </div>
  )
}
