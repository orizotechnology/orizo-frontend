import { useState } from 'react'
import FadeIn from '../ui/FadeIn'

const features = [
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />,
    title: "Fast Delivery",
    desc: "We follow agile sprints and lean workflows to ship your product on time — every time. No delays, no excuses.",
  },
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />,
    title: "Quality Guaranteed",
    desc: "Every line of code is reviewed, tested, and optimised. We don't cut corners — quality is non-negotiable.",
  },
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />,
    title: "Dedicated Team",
    desc: "You get a focused team — not a ticket queue. Direct communication with developers, designers, and strategists.",
  },
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />,
    title: "Scalable Solutions",
    desc: "We architect systems that grow with your business — from MVP to enterprise scale without a full rebuild.",
  },
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />,
    title: "Secure by Default",
    desc: "Security is baked in from day one — not bolted on later. Your data and your users are always protected.",
  },
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />,
    title: "Ongoing Support",
    desc: "We don't disappear after launch. Our team provides continuous maintenance, updates, and 24/7 support.",
  },
]

const C = {
  wrap: { maxWidth: "1100px", margin: "0 auto", padding: "0 48px" },
  navy: "#0a1628",
  blue: "#2563EB",
}

function FeatureCard({ f, i }) {
  const [hovered, setHovered] = useState(false)

  return (
    <FadeIn delay={i * 0.08} direction="up">
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: "#fff",
          border: "1px solid #e2e8f0",
          borderRadius: "16px",
          padding: "36px 32px",
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
          cursor: "default",
        }}
      >
        {/* icon — turns blue when card is hovered */}
        <div
          style={{
            width: "50px", height: "50px", borderRadius: "12px",
            background: hovered ? "#2563EB" : "#eff6ff",
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0,
            transition: "background 0.22s ease",
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"
            stroke={hovered ? "#fff" : "#2563EB"} strokeWidth={1.8}>
            {f.icon}
          </svg>
        </div>

        <h3 style={{ fontSize: "17px", fontWeight: 700, color: C.navy, margin: 0 }}>{f.title}</h3>
        <p style={{ fontSize: "13.5px", color: "#64748b", lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
      </div>
    </FadeIn>
  )
}

export default function WhyUs() {
  return (
    <section id="about" style={{ background: "#f8fafc", padding: "96px 0" }}>
      <div className="r-wrap" style={C.wrap}>

        <FadeIn>
          <div className="section-header-row" style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "40px", marginBottom: "56px", flexWrap: "wrap" }}>
            <div>
              <p style={{ color: C.blue, fontSize: "14px", fontWeight: 600, marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
                <span>//</span> Why Choose Us
              </p>
              <h2 style={{ fontSize: "38px", fontWeight: 800, color: C.navy, lineHeight: 1.15, letterSpacing: "-0.5px", maxWidth: "380px" }}>
                Why Businesses{" "}
                <span style={{ color: C.blue }}>Trust Orizo</span>
              </h2>
            </div>
            
          </div>
        </FadeIn>

        <div className="whyus-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", alignItems: "stretch" }}>
          {features.map((f, i) => <FeatureCard key={f.title} f={f} i={i} />)}
        </div>

      </div>
    </section>
  )
}

