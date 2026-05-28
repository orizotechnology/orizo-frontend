import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const C = {
  wrap: { maxWidth: "760px", margin: "0 auto", padding: "0 48px" },
  navy: "#0a1628",
  blue: "#2563EB",
}

const ease = [0.22, 1, 0.36, 1]

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease },
})

const sections = [
  {
    title: "Acceptance of Terms",
    body: `By accessing or using the Orizo website or any of our services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our website or services.`,
  },
  {
    title: "Services",
    body: `Orizo provides software development, design, and consulting services. The specific scope, deliverables, timeline, and pricing for any engagement are defined in a separate project agreement or statement of work signed by both parties.`,
  },
  {
    title: "Intellectual Property",
    body: `Upon full payment, all custom work created by Orizo for a client becomes the client's intellectual property. Orizo retains the right to display the work in its portfolio unless otherwise agreed in writing.\n\nOrizo's own products, tools, brand assets, and website content remain the exclusive property of Orizo Technologies.`,
  },
  {
    title: "Confidentiality",
    body: `Both parties agree to keep confidential any proprietary or sensitive information shared during the course of an engagement. This obligation survives the termination of any project agreement.`,
  },
  {
    title: "Payment",
    body: `Payment terms are specified in individual project agreements. Orizo reserves the right to pause or terminate work if invoices remain unpaid beyond the agreed due date. All fees are non-refundable unless otherwise stated in the project agreement.`,
  },
  {
    title: "Limitation of Liability",
    body: `To the maximum extent permitted by law, Orizo shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services or website. Our total liability for any claim shall not exceed the amount paid by the client for the specific service giving rise to the claim.`,
  },
  {
    title: "Governing Law",
    body: `These Terms are governed by the laws of India. Any disputes arising from these Terms or our services shall be subject to the exclusive jurisdiction of the courts located in India.`,
  },
  {
    title: "Changes to Terms",
    body: `We may update these Terms from time to time. Continued use of our website or services after changes are posted constitutes acceptance of the revised Terms.`,
  },
  {
    title: "Contact",
    body: `For questions about these Terms, contact us at:\n\nOrizo Technologies\nEmail: legal@orizo.in`,
  },
]

export default function Terms() {
  const navigate = useNavigate()

  return (
    <div style={{ background: "#fff", minHeight: "100vh", paddingTop: "40px" }}>

      {/* Back button */}
      <div style={{ ...C.wrap, marginBottom: "0" }}>
        <motion.button
          {...fade(0)}
          onClick={() => navigate(-1)}
          style={{
            display: "inline-flex", alignItems: "center", gap: "6px",
            background: "none", border: "none", cursor: "pointer",
            color: "#64748b", fontSize: "13px", fontWeight: 500,
            padding: "0", marginBottom: "40px",
          }}
          onMouseEnter={e => e.currentTarget.style.color = C.navy}
          onMouseLeave={e => e.currentTarget.style.color = "#64748b"}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"
            viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </motion.button>
      </div>

      {/* Content */}
      <div style={{ ...C.wrap, paddingBottom: "96px" }}>
        <motion.div {...fade(0.05)} style={{ marginBottom: "48px" }}>
          <p style={{ color: C.blue, fontSize: "13px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "10px" }}>
            Legal
          </p>
          <h1 style={{ fontSize: "36px", fontWeight: 800, color: C.navy, lineHeight: 1.15, letterSpacing: "-0.5px", marginBottom: "12px" }}>
            Terms of Service
          </h1>
          <p style={{ fontSize: "13px", color: "#94a3b8", marginBottom: "20px" }}>Last updated: June 2025</p>
          <p style={{ fontSize: "15px", color: "#64748b", lineHeight: 1.85, paddingBottom: "32px", borderBottom: "1px solid #e2e8f0" }}>
            Please read these Terms of Service carefully before using the Orizo website
            or engaging our services. These terms govern your relationship with Orizo Technologies.
          </p>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "44px" }}>
          {sections.map((s, i) => (
            <motion.div key={s.title} {...fade(0.05 + i * 0.04)}>
              <h2 style={{ fontSize: "17px", fontWeight: 700, color: C.navy, marginBottom: "12px", lineHeight: 1.3 }}>
                {i + 1}. {s.title}
              </h2>
              <p style={{ fontSize: "14.5px", color: "#64748b", lineHeight: 1.85, whiteSpace: "pre-line", margin: 0 }}>
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  )
}
