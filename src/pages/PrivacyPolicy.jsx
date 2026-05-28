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
    title: "Information We Collect",
    body: `We collect information you provide directly to us, such as when you fill out a contact form, apply for a job, or communicate with us by email. This may include your name, email address, phone number, company name, and the content of your messages.\n\nWe do not collect any personal data automatically through cookies or tracking technologies on this website beyond what is necessary for basic site functionality.`,
  },
  {
    title: "How We Use Your Information",
    body: `We use the information we collect to:\n• Respond to your inquiries and provide the services you request\n• Process job applications and communicate with candidates\n• Send project updates and relevant communications\n• Improve our website and services\n\nWe do not sell, rent, or share your personal information with third parties for marketing purposes.`,
  },
  {
    title: "Data Storage and Security",
    body: `Your information is stored securely and accessed only by authorised Orizo team members who need it to perform their work. We implement appropriate technical and organisational measures to protect your data against unauthorised access, loss, or disclosure.\n\nFor our desktop products (such as DQR), all user data is stored locally on your device. No data from our products is transmitted to our servers or any third party.`,
  },
  {
    title: "Third-Party Services",
    body: `Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies.\n\nWe may use third-party services for hosting and analytics. These services have their own privacy policies governing the use of your information.`,
  },
  {
    title: "Your Rights",
    body: `You have the right to:\n• Access the personal information we hold about you\n• Request correction of inaccurate data\n• Request deletion of your data\n• Withdraw consent at any time where processing is based on consent\n\nTo exercise any of these rights, please contact us at the email address below.`,
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
    body: `If you have any questions about this Privacy Policy or how we handle your data, please contact us at:\n\nOrizo Technologies\nEmail: privacy@orizo.in`,
  },
]

export default function PrivacyPolicy() {
  const navigate = useNavigate()

  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>

      {/* ── DARK BANNER ── */}
      <div style={{ background: "#0a1628" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "32px 48px 40px" }}>
          <button
            onClick={() => navigate(-1)}
            style={{
              display: "inline-flex", alignItems: "center", gap: "6px",
              background: "none", border: "none", cursor: "pointer",
              color: "rgba(255,255,255,0.45)", fontSize: "13px", fontWeight: 500,
              padding: "0", marginBottom: "28px",
            }}
            onMouseEnter={e => e.currentTarget.style.color = "#fff"}
            onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.45)"}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
          <p style={{ color: "#2563EB", fontSize: "13px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "10px" }}>
            Legal
          </p>
          <h1 style={{ color: "#fff", fontSize: "38px", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.5px", marginBottom: "10px" }}>
            Privacy Policy
          </h1>
          <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "13px" }}>Last updated: June 2025</p>
        </div>
      </div>

      {/* ── CONTENT ── */}
      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "64px 48px 96px" }}>
        <motion.p {...fade(0)} style={{
          fontSize: "15px", color: "#64748b", lineHeight: 1.85,
          marginBottom: "56px", paddingBottom: "32px", borderBottom: "1px solid #e2e8f0",
        }}>
          At Orizo, we take your privacy seriously. This policy explains what information
          we collect, how we use it, and the choices you have. It applies to our website
          and all services we provide.
        </motion.p>

        <div style={{ display: "flex", flexDirection: "column", gap: "44px" }}>
          {sections.map((s, i) => (
            <motion.div key={s.title} {...fade(0.05 + i * 0.04)}>
              <h2 style={{ fontSize: "17px", fontWeight: 700, color: "#0a1628", marginBottom: "12px", lineHeight: 1.3 }}>
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
