import { useState } from 'react'
import FadeIn from '../ui/FadeIn'

const openings = [
  {
    role: "Frontend Developer",
    type: "Full-time",
    location: "Remote",
    dept: "Engineering",
    desc: "Build beautiful, performant UIs using React and modern web technologies. You'll work closely with designers and backend engineers to ship great products.",
  },
  {
    role: "Backend Engineer",
    type: "Full-time",
    location: "Remote",
    dept: "Engineering",
    desc: "Design and build scalable APIs and services using Node.js, Python, or Go. Experience with cloud infrastructure (AWS/GCP) is a plus.",
  },
  {
    role: "UI/UX Designer",
    type: "Full-time",
    location: "Remote / Hybrid",
    dept: "Design",
    desc: "Create intuitive, user-centred designs from wireframes to high-fidelity prototypes. Proficiency in Figma and a strong portfolio required.",
  },
  {
    role: "Mobile Developer",
    type: "Full-time",
    location: "Remote",
    dept: "Engineering",
    desc: "Develop cross-platform mobile apps using React Native. Experience shipping apps to the App Store and Google Play is essential.",
  },
  {
    role: "DevOps Engineer",
    type: "Contract",
    location: "Remote",
    dept: "Infrastructure",
    desc: "Manage CI/CD pipelines, cloud infrastructure, and deployment automation. Strong knowledge of Docker, Kubernetes, and AWS required.",
  },
  {
    role: "Graphic Designer",
    type: "Freelance",
    location: "Remote",
    dept: "Design",
    desc: "Create compelling brand identities, marketing materials, and visual assets. A strong portfolio demonstrating versatility across digital and print is required.",
  },
]

const C = {
  wrap: { maxWidth: "1100px", margin: "0 auto", padding: "0 48px" },
  navy: "#0a1628",
  blue: "#2563EB",
}

const deptColors = {
  Engineering:    { bg: "#eff6ff", color: "#2563EB" },
  Design:         { bg: "#f0fdf4", color: "#16a34a" },
  Infrastructure: { bg: "#fef3c7", color: "#d97706" },
}

const typeColors = {
  "Full-time": { bg: "#f0fdf4", color: "#16a34a" },
  "Contract":  { bg: "#fef3c7", color: "#d97706" },
  "Freelance": { bg: "#fdf4ff", color: "#9333ea" },
}

function JobCard({ job, i }) {
  const [hov, setHov] = useState(false)
  const dc = deptColors[job.dept] || { bg: "#f1f5f9", color: "#64748b" }
  const tc = typeColors[job.type]  || { bg: "#f1f5f9", color: "#64748b" }

  return (
    <FadeIn delay={i * 0.07} direction="up">
      <div
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          background: "#fff", border: "1px solid #e2e8f0",
          borderRadius: "16px", padding: "28px 28px 24px",
          display: "flex", flexDirection: "column", gap: "12px",
          boxShadow: hov ? "0 8px 24px rgba(37,99,235,0.10)" : "0 1px 4px rgba(0,0,0,0.04)",
          transition: "box-shadow 0.22s ease",
          cursor: "default",
        }}
      >
        {/* top row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px", flexWrap: "wrap" }}>
          <div style={{ display: "flex", gap: "8px" }}>
            <span style={{ fontSize: "11px", fontWeight: 700, padding: "3px 10px", borderRadius: "20px", background: dc.bg, color: dc.color }}>{job.dept}</span>
            <span style={{ fontSize: "11px", fontWeight: 700, padding: "3px 10px", borderRadius: "20px", background: tc.bg, color: tc.color }}>{job.type}</span>
          </div>
          <span style={{ fontSize: "12px", color: "#94a3b8", display: "flex", alignItems: "center", gap: "4px" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {job.location}
          </span>
        </div>

        {/* icon + title */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <div style={{
            width: "46px", height: "46px", borderRadius: "12px", flexShrink: 0,
            background: hov ? "#2563EB" : "#eff6ff",
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "background 0.22s ease",
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24"
              stroke={hov ? "#fff" : "#2563EB"} strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 style={{ fontSize: "17px", fontWeight: 700, color: C.navy, margin: 0 }}>{job.role}</h3>
        </div>

        <p style={{ fontSize: "13.5px", color: "#64748b", lineHeight: 1.7, margin: 0 }}>{job.desc}</p>

        {/* apply */}
        <a href="mailto:orizotechnology@gmail.com" style={{
          display: "inline-flex", alignItems: "center", gap: "6px",
          color: C.blue, fontSize: "13px", fontWeight: 600, textDecoration: "none",
          marginTop: "4px",
        }}>
          Apply Now
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </FadeIn>
  )
}

export default function Careers() {
  return (
    <section id="career" style={{ background: "#fff", padding: "96px 0" }}>
      <div className="r-wrap" style={C.wrap}>

        {/* Header */}
        <FadeIn>
          <div className="careers-header" style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: "24px", marginBottom: "56px" }}>
            <div>
              <p style={{ color: C.blue, fontSize: "14px", fontWeight: 600, marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
                <span>//</span> Join Our Team
              </p>
              <h2 style={{ fontSize: "38px", fontWeight: 800, color: C.navy, lineHeight: 1.15, letterSpacing: "-0.5px", maxWidth: "420px" }}>
                Build the Future with{" "}
                <span style={{ color: C.blue }}>Orizo</span>
              </h2>
            </div>
            <p style={{ fontSize: "15px", color: "#64748b", lineHeight: 1.75, maxWidth: "360px", paddingTop: "40px" }}>
              We're always looking for talented people who are passionate about
              building great software. Explore our open roles below.
            </p>
          </div>
        </FadeIn>

        {/* Job cards */}
        <div className="careers-job-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
          {openings.map((job, i) => <JobCard key={job.role} job={job} i={i} />)}
        </div>

        {/* Bottom note */}
        <FadeIn delay={0.3}>
          <div style={{ textAlign: "center", marginTop: "52px" }}>
            <p style={{ fontSize: "15px", color: "#64748b", marginBottom: "16px" }}>
              Don't see a role that fits? We'd still love to hear from you.
            </p>
            <a href="mailto:orizotechnology@gmail.com" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: C.blue, color: "#fff",
              fontSize: "15px", fontWeight: 600,
              padding: "13px 32px", borderRadius: "8px", textDecoration: "none",
            }}>
              Send Open Application
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}

