import { useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

emailjs.init('PaqpB2lkbVSTH-bIZ')

const C = {
  wrap: { maxWidth: "680px", margin: "0 auto", padding: "0 24px" },
  navy: "#0a1628",
  blue: "#2563EB",
}

const ease = [0.22, 1, 0.36, 1]

const input = (extra = {}) => ({
  width: "100%", padding: "11px 14px",
  border: "1px solid #e2e8f0", borderRadius: "8px",
  fontSize: "14px", color: "#0a1628",
  outline: "none", background: "#fff",
  fontFamily: "inherit", boxSizing: "border-box",
  ...extra,
})

export default function Apply() {
  const [params] = useSearchParams()
  const role = params.get("role") || "Open Position"

  const [form, setForm] = useState({ name: "", email: "", phone: "", linkedin: "", message: "" })
  const [resume, setResume] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})
  const [sending, setSending] = useState(false)
  const [sendError, setSendError] = useState("")

  const handle = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: "" })
  }

  const validate = () => {
    const e = {}
    if (!form.name.trim())  e.name  = "Full name is required"
    if (!form.email.trim()) e.email = "Email is required"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email"
    if (!form.phone.trim()) e.phone = "Mobile number is required"
    else if (!/^[0-9+\s\-()]{7,15}$/.test(form.phone.trim())) e.phone = "Enter a valid mobile number"
    if (!resume)            e.resume = "Resume is required"
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
        'service_x1q5s9l',
        'template_h8mjq5s',
        {
          from_name:   form.name,
          from_email:  form.email,
          phone:       form.phone,
          linkedin:    form.linkedin || 'Not provided',
          role:        role,
          message:     form.message || 'No cover note provided',
          resume_name: resume ? resume.name : 'Not attached',
          to_email:    'orizotechnology@gmail.com',
        },
        'PaqpB2lkbVSTH-bIZ'
      )
      setSubmitted(true)
    } catch (err) {
      console.error('EmailJS error status:', err?.status)
      console.error('EmailJS error text:', err?.text)
      console.error('EmailJS full error:', err)
      setSendError("Something went wrong. Please try again or email us at orizotechnology@gmail.com")
    } finally {
      setSending(false)
    }
  }

  return (
    <div style={{ background: "#f8fafc", minHeight: "100vh" }}>
      <div style={{ ...C.wrap, padding: "60px 24px 96px" }}>

        {/* Back link */}
        <Link to="/career" style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#64748b", fontSize: "13px", fontWeight: 500, textDecoration: "none", marginBottom: "32px" }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Careers
        </Link>

        {submitted ? (
          /* ── Success state ── */
          <motion.div
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            style={{ background: "#fff", borderRadius: "20px", border: "1px solid #e2e8f0", padding: "64px 48px", textAlign: "center" }}
          >
            <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#2563EB" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 style={{ fontSize: "26px", fontWeight: 800, color: C.navy, marginBottom: "12px" }}>Application Received!</h2>
            <p style={{ fontSize: "16px", color: "#64748b", lineHeight: 1.75, maxWidth: "400px", margin: "0 auto 8px" }}>
              {role === "Open Application"
                ? "Thank you for your interest in joining Orizo."
                : <>Thank you for applying for <strong style={{ color: C.navy }}>{role}</strong> at Orizo.</>
              }
            </p>
            <p style={{ fontSize: "15px", color: "#64748b", lineHeight: 1.75, maxWidth: "400px", margin: "0 auto 32px" }}>
              We will get back to you shortly. Please check your email for further updates.
            </p>
            <Link to="/career" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: C.blue, color: "#fff",
              fontSize: "14px", fontWeight: 600,
              padding: "11px 28px", borderRadius: "8px", textDecoration: "none",
            }}>
              View More Openings
            </Link>
          </motion.div>

        ) : (
          /* ── Application form ── */
          <motion.div
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
          >
            {/* Header */}
            <div style={{ marginBottom: "36px" }}>
              <p style={{ color: C.blue, fontSize: "13px", fontWeight: 600, marginBottom: "8px", display: "flex", alignItems: "center", gap: "6px" }}>
                <span>//</span> Job Application
              </p>
              <h1 style={{ fontSize: "32px", fontWeight: 800, color: C.navy, lineHeight: 1.2, marginBottom: "8px" }}>
                {role === "Open Application"
                  ? <span>Open <span style={{ color: C.blue }}>Application</span></span>
                  : <>Apply for <span style={{ color: C.blue }}>{role}</span></>
                }
              </h1>
              <p style={{ fontSize: "14px", color: "#64748b" }}>
                {role === "Open Application"
                  ? "Tell us about yourself and what you're looking for — we'll reach out when the right role comes up."
                  : "Fill in your details below and attach your resume to apply."
                }
              </p>
            </div>

            <form onSubmit={submit} style={{ background: "#fff", borderRadius: "16px", border: "1px solid #e2e8f0", padding: "36px" }} className="apply-form-box">

              {/* Name + Email */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }} className="form-grid">
                <div>
                  <label style={{ fontSize: "13px", fontWeight: 600, color: C.navy, display: "block", marginBottom: "6px" }}>Full Name <span style={{ color: "red" }}>*</span></label>
                  <input name="name" value={form.name} onChange={handle} placeholder="John Smith" style={input({ borderColor: errors.name ? "#ef4444" : "#e2e8f0" })} />
                  {errors.name && <p style={{ fontSize: "12px", color: "#ef4444", marginTop: "4px" }}>{errors.name}</p>}
                </div>
                <div>
                  <label style={{ fontSize: "13px", fontWeight: 600, color: C.navy, display: "block", marginBottom: "6px" }}>Email Address <span style={{ color: "red" }}>*</span></label>
                  <input name="email" type="email" value={form.email} onChange={handle} placeholder="john@email.com" style={input({ borderColor: errors.email ? "#ef4444" : "#e2e8f0" })} />
                  {errors.email && <p style={{ fontSize: "12px", color: "#ef4444", marginTop: "4px" }}>{errors.email}</p>}
                </div>
              </div>

              {/* Phone + LinkedIn */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }} className="form-grid">
                <div>
                  <label style={{ fontSize: "13px", fontWeight: 600, color: C.navy, display: "block", marginBottom: "6px" }}>Mobile Number <span style={{ color: "red" }}>*</span></label>
                  <input name="phone" value={form.phone} onChange={handle} placeholder="+91 98765 43210" style={input({ borderColor: errors.phone ? "#ef4444" : "#e2e8f0" })} />
                  {errors.phone && <p style={{ fontSize: "12px", color: "#ef4444", marginTop: "4px" }}>{errors.phone}</p>}
                </div>
                <div>
                  <label style={{ fontSize: "13px", fontWeight: 600, color: C.navy, display: "block", marginBottom: "6px" }}>LinkedIn Profile</label>
                  <input name="linkedin" value={form.linkedin} onChange={handle} placeholder="linkedin.com/in/yourname" style={input()} />
                </div>
              </div>

              {/* Cover note */}
              <div style={{ marginBottom: "16px" }}>
                <label style={{ fontSize: "13px", fontWeight: 600, color: C.navy, display: "block", marginBottom: "6px" }}>Why do you want to join Orizo?</label>
                <textarea name="message" value={form.message} onChange={handle} rows={4}
                  placeholder="Tell us a bit about yourself and why you're interested in this role..."
                  style={input({ resize: "vertical", minHeight: "110px" })} />
              </div>

              {/* Resume upload */}
              <div style={{ marginBottom: "28px" }}>
                <label style={{ fontSize: "13px", fontWeight: 600, color: C.navy, display: "block", marginBottom: "6px" }}>
                  Resume / CV <span style={{ color: "red" }}>*</span>
                </label>
                <label style={{
                  display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "8px",
                  border: `2px dashed ${errors.resume ? "#ef4444" : "#e2e8f0"}`, borderRadius: "10px", padding: "28px 20px",
                  cursor: "pointer", background: resume ? "#f0fdf4" : "#f8fafc",
                  transition: "border-color 0.2s",
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke={resume ? "#16a34a" : "#94a3b8"} strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                  <span style={{ fontSize: "13px", fontWeight: 600, color: resume ? "#16a34a" : "#64748b" }}>
                    {resume ? resume.name : "Click to upload your resume"}
                  </span>
                  <span style={{ fontSize: "12px", color: "#94a3b8" }}>PDF, DOC, DOCX — max 5MB</span>
                  <input type="file" accept=".pdf,.doc,.docx" onChange={(e) => { setResume(e.target.files[0]); setErrors({ ...errors, resume: "" }) }} style={{ display: "none" }} />
                </label>
                {errors.resume && <p style={{ fontSize: "12px", color: "#ef4444", marginTop: "4px" }}>{errors.resume}</p>}
              </div>

              {/* Submit */}
              <button type="submit" disabled={sending} style={{
                width: "100%", background: sending ? "#93c5fd" : C.blue, color: "#fff",
                fontSize: "15px", fontWeight: 600,
                padding: "13px", borderRadius: "8px",
                border: "none", cursor: sending ? "not-allowed" : "pointer",
                display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                transition: "background 0.2s ease",
              }}>
                {sending ? "Submitting..." : "Submit Application"}
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
          </motion.div>
        )}
      </div>
    </div>
  )
}

