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
    title: "Information We Collect",
    body: `We collect information you provide directly to us, such as when you fill out a contact form, apply for a job, or communicate with us by email. This may include your name, email address, phone number, company name, and the content of your messages.

We do not collect any personal data automatically through cookies or tracking technologies on this website beyond what is necessary for basic site functionality.`,
  },
  {
    title: "How We Use Your Information",
    body: `We use the information we collect to:
• Respond to your inquiries and provide the services you request
• Process job applications and communicate with candidates
• Send project updates and relevant communications
• Improve our website and services

We do not sell, rent, or share your personal information with third parties for marketing purposes.`,
  },
  {
    title: "Data Storage and Security",
    body: `Your information is stored securely and accessed only by authorised Orizo team members who need it to perform their work. We implement appropriate technical and organisational measures to protect your data against unauthorised access, loss, or disclosure.

For our desktop products (such as DQR), all user data is stored locally on your device. No data from our products is transmitted to our servers or any third party.`,
  },
  {
    title: "Third-Party Services",
    body: `Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies.

We may use third-party services for hosting and analytics. These services have their own privacy policies governing the use of your information.`,
  },
  {
    title: "Your Rights",
    body: `You have the right to:
• Access the personal information we hold about you
• Request correction of inaccurate data
• Request deletion of your data
• Withdraw consent at any time where processing is based on consent

To exercise any of these rights, please contact us at the email address below.`,
  },
  {
    title: "Retention",
    body: `We retain personal information only for as long as necessary to fulfil the purposes for which it was collected, or as required by law. Contact form submissions are typically retained for up to 12 months unless an ongoing relationship is established.`,
  },
  {
    title: "Changes to This Policy",
    body: `We may update this Privacy Policy from time to time. When we do, we will revise the "Last updated" date at the top of this page. We encourage you to review this policy periodically.`,
  },
  {
    title: "Contact Us",
    body: `If you have any questions about this Privacy Policy or how we handle your data, please contact us at:

Orizo Technologies
Email: privacy@orizo.in`,
  },
]

export default function PrivacyPolicy() {
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
            Privacy{" "}
            <span style={{ color: C.blue }}>Policy</span>
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
            At Orizo, we take your privacy seriously. This policy explains what information
            we collect, how we use it, and the choices you have. It applies to our website
            and all services we provide.
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
