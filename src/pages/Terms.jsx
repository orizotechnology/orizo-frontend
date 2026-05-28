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
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.55, delay, ease },
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
    body: `Upon full payment, all custom work created by Orizo for a client becomes the client's intellectual property. Orizo retains the right to display the work in its portfolio unless otherwise agreed in writing.

Orizo's own products, tools, brand assets, and website content remain the exclusive property of Orizo Technologies.`,
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
  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>

      {/* ── HERO BANNER ── */}
      <div style={{ background: C.navy, paddingTop: "68px" }}>
        <div className="page-banner" style={{ ...C.wrap, padding: "72px 48px 80px" }}>
          <motion.p {...fade(0)} style={{
            color: C.blue, fontSize: "14px", fontWeight: 600,
            marginBottom: "14px", display: "flex", alignItems: "center", gap: "8px",
          }}>
            <span>//</span> Legal
          </motion.p>
          <motion.h1 {...fade(0.1)} style={{
            color: "#fff", fontSize: "48px", fontWeight: 800,
            lineHeight: 1.12, letterSpacing: "-1px",
            maxWidth: "520px", marginBottom: "16px",
          }}>
            Terms of{" "}
            <span style={{ color: C.blue }}>Service</span>
          </motion.h1>
          <motion.p {...fade(0.2)} style={{
            color: "rgba(255,255,255,0.5)", fontSize: "15px",
            lineHeight: 1.75, maxWidth: "440px",
          }}>
            Last updated: June 2025
          </motion.p>
        </div>
      </div>

      {/* ── CONTENT ── */}
      <section style={{ padding: "80px 0 104px" }}>
        <div className="r-wrap" style={{ ...C.wrap, maxWidth: "760px" }}>

          <motion.p {...fade(0)} style={{
            fontSize: "15px", color: "#64748b", lineHeight: 1.85,
            marginBottom: "56px",
            paddingBottom: "32px", borderBottom: "1px solid #e2e8f0",
          }}>
            Please read these Terms of Service carefully before using the Orizo website
            or engaging our services. These terms govern your relationship with Orizo Technologies.
          </motion.p>

          <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
            {sections.map((s, i) => (
              <motion.div key={s.title} {...fade(i * 0.05)}>
                <h2 style={{
                  fontSize: "19px", fontWeight: 700, color: C.navy,
                  marginBottom: "14px", lineHeight: 1.3,
                }}>
                  {i + 1}. {s.title}
                </h2>
                <p style={{
                  fontSize: "14.5px", color: "#64748b",
                  lineHeight: 1.85, whiteSpace: "pre-line", margin: 0,
                }}>
                  {s.body}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </div>
  )
}
