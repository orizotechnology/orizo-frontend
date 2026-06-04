import { motion } from 'framer-motion'

const C = {
  wrap: { maxWidth: "1100px", margin: "0 auto", padding: "0 48px" },
  navy: "#0a1628",
  blue: "#2563EB",
}

const ease = [0.22, 1, 0.36, 1]

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.6, delay, ease },
})

const dqrFeatures = [
  "Dynamic QR — live updates as you type",
  "Static QR mode for fixed amounts",
  "Multi-profile UPI support",
  "Mobile Connect via local Wi-Fi",
  "Float window for point-of-sale",
  "Transaction reports with charts",
]

export default function Products() {
  return (
    <div style={{ background: "#f8fafc", minHeight: "100vh" }}>

      {/* ── DARK HERO BANNER ── */}
      <div style={{ background: C.navy, paddingTop: "68px", position: "relative", overflow: "hidden" }}>
        {/* subtle glow */}
        <div style={{
          position: "absolute", top: "-80px", right: "-80px",
          width: "480px", height: "480px", borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(37,99,235,0.18) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div className="page-banner" style={{ ...C.wrap, padding: "52px 48px 56px", position: "relative", zIndex: 1 }}>
          <motion.p {...fade(0)} style={{
            color: C.blue, fontSize: "14px", fontWeight: 600,
            marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px",
          }}>
            <span>//</span> Our Products
          </motion.p>

          <motion.h1 {...fade(0.1)} style={{
            color: "#fff", fontSize: "40px", fontWeight: 800,
            lineHeight: 1.15, letterSpacing: "-0.8px",
            maxWidth: "560px", marginBottom: "14px",
          }}>
            Software Built for{" "}
            <span style={{ color: C.blue }}>Real People</span>
          </motion.h1>

          <motion.p {...fade(0.2)} style={{
            color: "rgba(255,255,255,0.5)", fontSize: "15px",
            lineHeight: 1.75, maxWidth: "520px",
          }}>
            Tools we build to solve real problems — desktop-first, privacy-respecting,
            no subscriptions, no cloud lock-in. Your data stays on your machine.
          </motion.p>
        </div>
      </div>

      {/* ── PRODUCTS SECTION ── */}
      <section style={{ padding: "88px 0 104px" }}>
        <div className="r-wrap" style={C.wrap}>

          {/* Section label */}
          <motion.div {...fade(0)} style={{ marginBottom: "48px" }}>
            <p style={{
              color: C.blue, fontSize: "14px", fontWeight: 600,
              marginBottom: "10px", display: "flex", alignItems: "center", gap: "8px",
            }}>
              <span>//</span> Available Now
            </p>
            <h2 style={{
              fontSize: "34px", fontWeight: 800, color: C.navy,
              lineHeight: 1.2, letterSpacing: "-0.5px", marginBottom: "12px",
            }}>
              Products
            </h2>
            <p style={{ fontSize: "15px", color: "#64748b", lineHeight: 1.75, maxWidth: "480px" }}>
              Each product is independently useful, free to download, and built with
              the same care we put into client work. More coming soon.
            </p>
          </motion.div>

          {/* Product cards row — left-aligned, more cards added here later */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "28px", alignItems: "flex-start" }}>

            {/* ── DQR Card ── */}
            <motion.div
              {...fade(0.1)}
              className="product-card"
              style={{
                background: "#fff",
                border: "1px solid #e2e8f0",
                borderRadius: "14px",
                padding: "22px 22px 20px",
                width: "350px",
                flexShrink: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0",
                boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
              }}
            >
              {/* Icon + name */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                <div style={{
                  width: "44px", height: "44px", borderRadius: "10px",
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <img src="/dqr.ico" alt="DQR" style={{ width: "44px", height: "44px", objectFit: "cover", display: "block" }} />
                </div>
                <div>
                  <h3 style={{ fontSize: "17px", fontWeight: 800, color: C.navy, margin: 0, lineHeight: 1.2 }}>DQR</h3>
                  <span style={{
                    fontSize: "10px", fontWeight: 700, color: C.blue,
                    background: "#eff6ff", padding: "1px 6px",
                    borderRadius: "3px", letterSpacing: "0.05em",
                    textTransform: "uppercase", display: "inline-block", marginTop: "2px",
                  }}>
                    Desktop App
                  </span>
                </div>
              </div>

              {/* Description */}
              <p style={{ fontSize: "12.5px", color: "#64748b", lineHeight: 1.7, marginBottom: "14px" }}>
                Dynamic UPI QR generator for merchants — live updates, mobile connect, and local transaction reports.
              </p>

              {/* Feature list */}
              <ul style={{
                listStyle: "none", padding: 0, margin: "0 0 16px",
                display: "flex", flexDirection: "column", gap: "7px",
              }}>
                {dqrFeatures.map((f) => (
                  <li key={f} style={{ display: "flex", gap: "7px", alignItems: "flex-start" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none"
                      viewBox="0 0 24 24" stroke={C.blue} strokeWidth={2.5}
                      style={{ flexShrink: 0, marginTop: "3px" }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span style={{ fontSize: "12px", color: "#475569", lineHeight: 1.55 }}>{f}</span>
                  </li>
                ))}
              </ul>

              {/* Divider */}
              <div style={{ height: "1px", background: "#f1f5f9", marginBottom: "14px", marginTop: "auto" }} />

              {/* Download button — full width */}
              <button
                onClick={() => { window.location.href = "https://github.com/orizotechnology/orizo-frontend/releases/download/v1.0.0/Orizo.DQR.Setup.1.0.0.exe" }}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "7px",
                  background: C.blue, color: "#fff",
                  fontSize: "12.5px", fontWeight: 700,
                  padding: "10px 0", borderRadius: "7px",
                  textDecoration: "none", border: "none",
                  cursor: "pointer", width: "100%",
                  transition: "opacity 0.2s ease",
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = "0.88"}
                onMouseLeave={e => e.currentTarget.style.opacity = "1"}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download for Windows
              </button>

            </motion.div>

            {/* Future product cards will go here */}

          </div>
        </div>
      </section>

    </div>
  )
}
