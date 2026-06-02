import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)

const C = {
  wrap: { maxWidth: "1100px", margin: "0 auto", padding: "0 48px" },
  navy: "#0a1628",
  blue: "#2563EB",
}
const ease = [0.22, 1, 0.36, 1]
const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, delay, ease },
})

const helpItems = [
  {
    d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    title: "Web Development",
    desc: "Need a website, web app, or SaaS platform? We design and build it from scratch.",
  },
  {
    d: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
    title: "Mobile Applications",
    desc: "iOS or Android app — we build cross-platform mobile experiences that users love.",
  },
  {
    d: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
    title: "UI / UX Design",
    desc: "From wireframes to polished prototypes — we create interfaces that convert.",
  },
  {
    d: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
    title: "Cloud & SaaS",
    desc: "Scalable cloud infrastructure and end-to-end SaaS product development.",
  },
  {
    d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
    title: "Graphic Design",
    desc: "Brand identity, marketing assets, and visual content that make you stand out.",
  },
  {
    d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    title: "DevOps & Security",
    desc: "CI/CD pipelines, infrastructure hardening, and 24/7 monitoring.",
  },
]

function HelpCard({ item, i }) {
  const [hov, setHov] = useState(false)
  return (
    <motion.div {...fade(i * 0.07)}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: "#fff", border: "1px solid #e2e8f0",
        borderRadius: "14px", padding: "28px 24px",
        display: "flex", flexDirection: "column", gap: "12px",
        boxShadow: hov ? "0 6px 20px rgba(37,99,235,0.10)" : "0 1px 4px rgba(0,0,0,0.04)",
        transition: "box-shadow 0.22s ease", cursor: "default",
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
          <path strokeLinecap="round" strokeLinejoin="round" d={item.d} />
        </svg>
      </div>
      <h3 style={{ fontSize: "15px", fontWeight: 700, color: C.navy, margin: 0 }}>{item.title}</h3>
      <p style={{ fontSize: "13px", color: "#64748b", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
    </motion.div>
  )
}

function FounderCard({ f, i }) {
  const [hov, setHov] = useState(false)
  return (
    <motion.div
      {...fade(i * 0.1)}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: "#f8fafc",
        border: "1px solid #e2e8f0",
        borderRadius: "16px", padding: "32px 28px",
        display: "flex", flexDirection: "column", gap: "16px",
        opacity: hov ? 1 : 0.85,
        boxShadow: hov ? `0 8px 28px rgba(37,99,235,0.13)` : "none",
        transition: "opacity 0.3s ease, box-shadow 0.3s ease",
        cursor: "default",
      }}
    >
      <div style={{
        width: "80px", height: "80px", borderRadius: "50%",
        overflow: "hidden", flexShrink: 0,
        border: `3px solid ${f.color}`,
        boxShadow: `0 4px 16px rgba(0,0,0,0.10)`,
      }}>
        <img src={f.img} alt={f.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>

      <div>
        <h3 style={{ fontSize: "18px", fontWeight: 700, color: C.navy, margin: "0 0 4px" }}>{f.name}</h3>
        <p style={{ fontSize: "13px", fontWeight: 600, color: f.color, margin: 0 }}>{f.role}</p>
      </div>

      <p style={{ fontSize: "14px", color: "#64748b", lineHeight: 1.75, margin: 0 }}>{f.bio}</p>

      <div style={{ display: "flex", gap: "10px", marginTop: "4px" }}>
        <a href={f.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{
          width: "32px", height: "32px", borderRadius: "8px",
          background: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center",
          color: C.blue, textDecoration: "none",
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
      </div>
    </motion.div>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [sendError, setSendError] = useState("")

  const handle = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: "" })
  }

  const validate = () => {
    const e = {}
    if (!form.name.trim())    e.name    = "Full name is required"
    if (!form.email.trim())   e.email   = "Email is required"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email"
    if (!form.phone.trim())   e.phone   = "Mobile number is required"
    else if (!/^[0-9+\s\-()]{7,15}$/.test(form.phone.trim())) e.phone = "Enter a valid mobile number"
    if (!form.subject.trim()) e.subject = "Subject is required"
    if (!form.message.trim()) e.message = "Message is required"
    return e
  }

  const submit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setSending(true)
    setSendError("")
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE,
        {
          from_name:  form.name,
          from_email: form.email,
          phone:      form.phone,
          subject:    form.subject,
          message:    form.message,
          to_email:   'orizotechnology@gmail.com',
        }
      )
      setSent(true)
    } catch (err) {
      console.error('EmailJS error:', err)
      setSendError("Something went wrong. Please try again or email us directly at orizotechnology@gmail.com")
    } finally {
      setSending(false)
    }
  }

  const input = (extra = {}) => ({
    width: "100%", padding: "12px 16px",
    border: "1px solid #e2e8f0", borderRadius: "8px",
    fontSize: "14px", color: C.navy,
    outline: "none", background: "#fff",
    fontFamily: "inherit", boxSizing: "border-box",
    ...extra,
  })

  return (
    <div style={{ background: "#f8fafc", minHeight: "100vh" }}>

      {/* ── Banner ── */}
      <div style={{ background: "#0a1628", paddingTop: "68px" }}>
        <div className="page-banner" style={{ ...C.wrap, padding: "72px 48px 80px" }}>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease }}
            style={{ color: C.blue, fontSize: "14px", fontWeight: 600, marginBottom: "14px", display: "flex", alignItems: "center", gap: "8px" }}>
            <span>//</span> Get In Touch
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1, ease }}
            style={{ color: "#fff", fontSize: "48px", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-1px", maxWidth: "560px", marginBottom: "16px" }}>
            Let's Build Something{" "}
            <span style={{ color: C.blue }}>Great Together</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2, ease }}
            style={{ color: "rgba(255,255,255,0.5)", fontSize: "16px", lineHeight: 1.75, maxWidth: "460px" }}>
            Have a project in mind or just want to say hello? Fill in the form below
            and we'll get back to you within 24 hours.
          </motion.p>
        </div>
      </div>

      {/* ── What we can help with ── */}
      <section style={{ background: "#fff", padding: "80px 0" }}>
        <div className="r-wrap" style={C.wrap}>
          <motion.div {...fade(0)} style={{ marginBottom: "48px" }}>
            <p style={{ color: C.blue, fontSize: "14px", fontWeight: 600, marginBottom: "10px", display: "flex", alignItems: "center", gap: "8px" }}>
              <span>//</span> What We Can Help With
            </p>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
              <h2 style={{ fontSize: "34px", fontWeight: 800, color: C.navy, lineHeight: 1.15, letterSpacing: "-0.5px", maxWidth: "400px" }}>
                From Idea to Launch —{" "}
                <span style={{ color: C.blue }}>We Handle It All</span>
              </h2>
              <p style={{ fontSize: "15px", color: "#64748b", lineHeight: 1.75, maxWidth: "340px" }}>
                
              </p>
            </div>
          </motion.div>

          <div className="help-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
            {helpItems.map((item, i) => <HelpCard key={item.title} item={item} i={i} />)}
          </div>
        </div>
      </section>

      {/* ── Contact form + info ── */}
      <section style={{ background: "#f8fafc", padding: "80px 0 96px" }}>
        <div className="r-wrap" style={C.wrap}>
          <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "64px", alignItems: "start" }}>

            {/* Left — contact info */}
            <motion.div {...fade(0)}>
              <p style={{ color: C.blue, fontSize: "14px", fontWeight: 600, marginBottom: "10px", display: "flex", alignItems: "center", gap: "8px" }}>
                <span>//</span> Contact Info
              </p>
              <h2 style={{ fontSize: "30px", fontWeight: 800, color: C.navy, lineHeight: 1.2, marginBottom: "20px" }}>
                Reach Out Directly
              </h2>
              <p style={{ fontSize: "15px", color: "#64748b", lineHeight: 1.75, marginBottom: "36px" }}>
                Prefer to reach out directly? Use any of the channels below and
                we'll respond as soon as possible.
              </p>

              {[
                {
                  icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                  label: "Email",
                  value: "orizotechnology@gmail.com",
                },
                {
                  icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
                  label: "Phone",
                  value: "8925246499,9345786628"
                },
                {
                  icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  label: "Location",
                  value: "Bangalore",
                },
              ].map((c) => (
                <div key={c.label} style={{ display: "flex", gap: "16px", alignItems: "flex-start", marginBottom: "24px" }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#2563EB" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={c.icon} />
                    </svg>
                  </div>
                  <div>
                    <p style={{ fontSize: "12px", fontWeight: 600, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: "4px" }}>{c.label}</p>
                    {c.value.includes(",")
                      ? c.value.split(",").map((v) => (
                          <p key={v} style={{ fontSize: "15px", fontWeight: 600, color: C.navy, margin: "0 0 2px" }}>{v.trim()}</p>
                        ))
                      : <p style={{ fontSize: "15px", fontWeight: 600, color: C.navy, margin: 0 }}>{c.value}</p>
                    }
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Right — form */}
            <motion.div {...fade(0.1)}>
              {sent ? (
                <div style={{ background: "#fff", borderRadius: "16px", border: "1px solid #e2e8f0", padding: "56px 40px", textAlign: "center" }}>
                  <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="#2563EB" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 style={{ fontSize: "22px", fontWeight: 700, color: C.navy, marginBottom: "10px" }}>Message Sent!</h3>
                  <p style={{ fontSize: "15px", color: "#64748b", lineHeight: 1.75 }}>Thanks for reaching out. We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={submit} style={{ background: "#fff", borderRadius: "16px", border: "1px solid #e2e8f0", padding: "40px" }} className="contact-form-box">
                  <div className="form-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
                    <div>
                      <label style={{ fontSize: "13px", fontWeight: 600, color: C.navy, display: "block", marginBottom: "6px" }}>Full Name <span style={{ color: "red" }}>*</span></label>
                      <input name="name" value={form.name} onChange={handle} placeholder="John Smith" style={input({ borderColor: errors.name ? "#ef4444" : "#e2e8f0" })} />
                      {errors.name && <p style={{ fontSize: "12px", color: "#ef4444", marginTop: "4px" }}>{errors.name}</p>}
                    </div>
                    <div>
                      <label style={{ fontSize: "13px", fontWeight: 600, color: C.navy, display: "block", marginBottom: "6px" }}>Email Address <span style={{ color: "red" }}>*</span></label>
                      <input name="email" type="email" value={form.email} onChange={handle} placeholder="john@company.com" style={input({ borderColor: errors.email ? "#ef4444" : "#e2e8f0" })} />
                      {errors.email && <p style={{ fontSize: "12px", color: "#ef4444", marginTop: "4px" }}>{errors.email}</p>}
                    </div>
                  </div>
                  <div style={{ marginBottom: "16px" }}>
                    <label style={{ fontSize: "13px", fontWeight: 600, color: C.navy, display: "block", marginBottom: "6px" }}>Mobile Number <span style={{ color: "red" }}>*</span></label>
                    <input name="phone" value={form.phone} onChange={handle} placeholder="+91 98765 43210" style={input({ borderColor: errors.phone ? "#ef4444" : "#e2e8f0" })} />
                    {errors.phone && <p style={{ fontSize: "12px", color: "#ef4444", marginTop: "4px" }}>{errors.phone}</p>}
                  </div>
                  <div style={{ marginBottom: "16px" }}>
                    <label style={{ fontSize: "13px", fontWeight: 600, color: C.navy, display: "block", marginBottom: "6px" }}>Subject <span style={{ color: "red" }}>*</span></label>
                    <input name="subject" value={form.subject} onChange={handle} placeholder="What's this about?" style={input({ borderColor: errors.subject ? "#ef4444" : "#e2e8f0" })} />
                    {errors.subject && <p style={{ fontSize: "12px", color: "#ef4444", marginTop: "4px" }}>{errors.subject}</p>}
                  </div>
                  <div style={{ marginBottom: "24px" }}>
                    <label style={{ fontSize: "13px", fontWeight: 600, color: C.navy, display: "block", marginBottom: "6px" }}>Message <span style={{ color: "red" }}>*</span></label>
                    <textarea name="message" value={form.message} onChange={handle} rows={5}
                      placeholder="Tell us about your project, timeline, and budget..."
                      style={input({ resize: "vertical", minHeight: "130px", borderColor: errors.message ? "#ef4444" : "#e2e8f0" })} />
                    {errors.message && <p style={{ fontSize: "12px", color: "#ef4444", marginTop: "4px" }}>{errors.message}</p>}
                  </div>
                  <button type="submit" disabled={sending} style={{
                    width: "100%", background: sending ? "#93c5fd" : C.blue, color: "#fff",
                    fontSize: "15px", fontWeight: 600,
                    padding: "13px", borderRadius: "8px",
                    border: "none", cursor: sending ? "not-allowed" : "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                    transition: "background 0.2s ease",
                  }}>
                    {sending ? "Sending..." : "Send Message"}
                    {!sending && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    )}
                  </button>
                  {sendError && (
                    <p style={{ fontSize: "13px", color: "#ef4444", marginTop: "12px", textAlign: "center" }}>
                      {sendError}
                    </p>
                  )}
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Meet Our Founders ── */}
      <section style={{ background: "#fff", padding: "80px 0" }}>
        <div className="r-wrap" style={C.wrap}>
          <motion.div {...fade(0)} style={{ textAlign: "center", marginBottom: "52px" }}>
            <p style={{ color: C.blue, fontSize: "14px", fontWeight: 600, marginBottom: "10px", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
              <span>//</span> The People Behind Orizo
            </p>
            <h2 style={{ fontSize: "34px", fontWeight: 800, color: C.navy, lineHeight: 1.15, letterSpacing: "-0.5px" }}>
              Meet Our <span style={{ color: C.blue }}>Founders</span>
            </h2>
            <p style={{ fontSize: "15px", color: "#64748b", lineHeight: 1.75, maxWidth: "440px", margin: "12px auto 0" }}>
              A small team with a big vision — passionate about building software that makes a real difference.
            </p>
          </motion.div>

          <div className="founders-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "28px", maxWidth: "760px", margin: "0 auto" }}>
            {[
              {
                name: "Pavan Kumar",
                role: "Founder",
                bio: "Pavan oversees all technical architecture and engineering. He brings deep expertise in cloud infrastructure, full-stack development, and building scalable systems from the ground up.",
                img: "/pavan.jpeg",
                color: "#2563EB",
                linkedin: "https://www.linkedin.com/in/pavanr140723",
              },
              {
                name: "Sandeep Kumar",
                role: "Founder",
                bio: "Sandeep leads product strategy and business development. With a background in software engineering and entrepreneurship, he drives Orizo's vision of making great software accessible to every business.",
                img: "/sandeep.jpeg",
                color: "#7c3aed",
                linkedin: "https://www.linkedin.com/in/mrsandeepkumar",
              },
            ].map((f, i) => (
              <FounderCard key={f.name} f={f} i={i} />
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

