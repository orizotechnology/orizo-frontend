import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const C = {
  wrap: { maxWidth: "1100px", margin: "0 auto", padding: "0 48px" },
  navy: "#0a1628",
  blue: "#2563EB",
}

const ease = [0.22, 1, 0.36, 1]

const openings = [
  {
    role: "Java Full Stack Developer Intern",
    dept: "Engineering",
    type: "Internship",
    location: "Remote",
    exp: "Fresher / 0–1 year",
    tags: ["Java", "Spring Boot", "React", "MySQL", "REST APIs"],
    desc: "We're looking for a Java Full Stack Developer to design and build robust backend services with Spring Boot and modern frontend interfaces with React. You'll work across the entire stack — from database design to UI implementation.",
    responsibilities: [
      "Build and maintain RESTful APIs using Java and Spring Boot",
      "Develop responsive frontend components with React",
      "Design and optimise relational databases (MySQL / PostgreSQL)",
      "Collaborate with designers and product managers on feature delivery",
      "Write clean, testable, and well-documented code",
    ],
    requirements: [
      "2+ years of experience with Java and Spring Boot",
      "Solid understanding of React and modern JavaScript (ES6+)",
      "Experience with SQL databases and ORM frameworks",
      "Familiarity with Git, CI/CD pipelines, and Agile workflows",
    ],
  },
  {
    role: "React Native Developer Intern",
    dept: "Engineering",
    type: "Internship",
    location: "Remote",
    exp: "Fresher / 0–1 year",
    tags: ["React Native", "iOS", "Android", "TypeScript", "Expo"],
    desc: "Join our mobile team to build high-quality cross-platform apps for iOS and Android using React Native. You'll own features end-to-end — from architecture decisions to App Store releases.",
    responsibilities: [
      "Develop and maintain cross-platform mobile apps with React Native",
      "Integrate REST APIs and third-party SDKs",
      "Optimise app performance and ensure smooth UX on both platforms",
      "Manage app releases on the App Store and Google Play",
      "Collaborate closely with designers to implement pixel-perfect UIs",
    ],
    requirements: [
      "2+ years of React Native development experience",
      "Strong TypeScript skills",
      "Experience shipping apps to App Store and Google Play",
      "Knowledge of native modules and platform-specific APIs",
    ],
  },
  {
    role: "Figma / UI Designer Intern",
    dept: "Design",
    type: "Internship",
    location: "Remote / Hybrid",
    exp: "Fresher / 0–1 year",
    tags: ["Figma", "UI Design", "Prototyping", "Design Systems", "UX Research"],
    desc: "We're hiring a Figma-first UI Designer to craft beautiful, user-centred interfaces for our web and mobile products. You'll work closely with developers and product managers to bring ideas from concept to pixel-perfect handoff.",
    responsibilities: [
      "Create wireframes, prototypes, and high-fidelity designs in Figma",
      "Build and maintain a consistent design system",
      "Conduct user research and translate insights into design decisions",
      "Collaborate with frontend developers for accurate implementation",
      "Present and iterate on designs based on stakeholder feedback",
    ],
    requirements: [
      "1+ years of UI/UX design experience with a strong portfolio",
      "Expert-level Figma skills including components, auto-layout, and variants",
      "Understanding of responsive design and accessibility principles",
      "Ability to communicate design decisions clearly",
    ],
  },
]

const deptColors = {
  Engineering: { bg: "#eff6ff", color: "#2563EB" },
  Design:      { bg: "#f0fdf4", color: "#16a34a" },
}

const typeColors = {
  "Internship": { bg: "#fef3c7", color: "#d97706" },
}

function JobCard({ job, i }) {
  const [open, setOpen] = useState(false)
  const [hov,  setHov]  = useState(false)
  const dc = deptColors[job.dept] || { bg: "#f1f5f9", color: "#64748b" }
  const tc = typeColors[job.type]  || { bg: "#f1f5f9", color: "#64748b" }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: i * 0.1, ease }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: "#fff", border: "1px solid #e2e8f0",
        borderRadius: "16px", overflow: "hidden",
        boxShadow: hov ? "0 8px 24px rgba(37,99,235,0.10)" : "0 1px 4px rgba(0,0,0,0.04)",
        transition: "box-shadow 0.22s ease",
      }}
    >
      {/* Card header */}
      <div style={{ padding: "28px 28px 24px" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px", marginBottom: "16px" }}>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            <span style={{ fontSize: "11px", fontWeight: 700, padding: "3px 10px", borderRadius: "20px", background: dc.bg, color: dc.color }}>{job.dept}</span>
            <span style={{ fontSize: "11px", fontWeight: 700, padding: "3px 10px", borderRadius: "20px", background: tc.bg, color: tc.color }}>{job.type}</span>
          </div>
          <span style={{ fontSize: "12px", color: "#94a3b8", whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: "4px" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {job.location}
          </span>
        </div>

        {/* icon + title */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "12px" }}>
          <div style={{
            width: "48px", height: "48px", borderRadius: "12px", flexShrink: 0,
            background: hov ? "#2563EB" : "#eff6ff",
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "background 0.22s ease",
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24"
              stroke={hov ? "#fff" : "#2563EB"} strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <h3 style={{ fontSize: "18px", fontWeight: 700, color: C.navy, margin: 0 }}>{job.role}</h3>
            <p style={{ fontSize: "12px", color: "#94a3b8", margin: "4px 0 0", fontWeight: 500 }}>Experience: {job.exp}</p>
          </div>
        </div>

        <p style={{ fontSize: "14px", color: "#64748b", lineHeight: 1.75, margin: "0 0 16px" }}>{job.desc}</p>

        {/* tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "20px" }}>
          {job.tags.map((t) => (
            <span key={t} style={{ fontSize: "11px", fontWeight: 600, color: "#2563EB", background: "#eff6ff", padding: "4px 10px", borderRadius: "4px" }}>{t}</span>
          ))}
        </div>

        {/* actions */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Link to={`/apply?role=${encodeURIComponent(job.role)}`} style={{
            display: "inline-flex", alignItems: "center", gap: "6px",
            background: "#2563EB", color: "#fff",
            fontSize: "13px", fontWeight: 600,
            padding: "9px 20px", borderRadius: "6px", textDecoration: "none",
          }}>
            Apply Now
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <button onClick={() => setOpen(!open)} style={{
            background: "none", border: "1px solid #e2e8f0",
            color: "#64748b", fontSize: "13px", fontWeight: 600,
            padding: "9px 20px", borderRadius: "6px", cursor: "pointer",
            display: "inline-flex", alignItems: "center", gap: "6px",
          }}>
            {open ? "Hide Details" : "View Details"}
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Expandable details */}
      {open && (
        <div style={{ borderTop: "1px solid #f1f5f9", padding: "24px 28px", background: "#f8fafc" }}>
          <div className="job-details-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }}>
            <div>
              <p style={{ fontSize: "13px", fontWeight: 700, color: C.navy, marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.06em" }}>Responsibilities</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                {job.responsibilities.map((r) => (
                  <li key={r} style={{ display: "flex", gap: "8px", fontSize: "13.5px", color: "#64748b", lineHeight: 1.6 }}>
                    <span style={{ color: "#2563EB", fontWeight: 700, flexShrink: 0 }}>→</span> {r}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p style={{ fontSize: "13px", fontWeight: 700, color: C.navy, marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.06em" }}>Requirements</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                {job.requirements.map((r) => (
                  <li key={r} style={{ display: "flex", gap: "8px", fontSize: "13.5px", color: "#64748b", lineHeight: 1.6 }}>
                    <span style={{ color: "#2563EB", fontWeight: 700, flexShrink: 0 }}>✓</span> {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  )
}

export default function Career() {
  const [search,     setSearch]     = useState('')
  const [deptFilter, setDeptFilter] = useState('All')
  const [typeFilter, setTypeFilter] = useState('All')

  const depts = ['All', ...new Set(openings.map(j => j.dept))]
  const types = ['All', ...new Set(openings.map(j => j.type))]

  const filtered = openings.filter(j => {
    const matchSearch = j.role.toLowerCase().includes(search.toLowerCase()) ||
                        j.tags.some(t => t.toLowerCase().includes(search.toLowerCase()))
    const matchDept   = deptFilter === 'All' || j.dept === deptFilter
    const matchType   = typeFilter === 'All' || j.type === typeFilter
    return matchSearch && matchDept && matchType
  })

  const pill = (active) => ({
    fontSize: "13px", fontWeight: 600,
    padding: "7px 16px", borderRadius: "20px", cursor: "pointer",
    border: "none", transition: "all 0.2s ease",
    background: active ? C.blue : "#fff",
    color: active ? "#fff" : "#64748b",
    boxShadow: active ? "none" : "0 1px 3px rgba(0,0,0,0.08)",
  })

  return (
    <div style={{ background: "#f8fafc", minHeight: "100vh" }}>

      {/* Banner */}
      <div style={{ background: "#0a1628", paddingTop: "68px" }}>
        <div className="page-banner" style={{ ...C.wrap, padding: "72px 48px 80px" }}>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease }}
            style={{ color: C.blue, fontSize: "14px", fontWeight: 600, marginBottom: "14px", display: "flex", alignItems: "center", gap: "8px" }}>
            <span>//</span> Join Our Team
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1, ease }}
            style={{ color: "#fff", fontSize: "48px", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-1px", maxWidth: "560px", marginBottom: "16px" }}>
            Build the Future with{" "}
            <span style={{ color: C.blue }}>Orizo</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2, ease }}
            style={{ color: "rgba(255,255,255,0.5)", fontSize: "16px", lineHeight: 1.75, maxWidth: "460px" }}>
            We're a remote-first team building great software. If you're passionate
            about your craft and want to work on meaningful products — we'd love to hear from you.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3, ease }}
            style={{ color: C.blue, fontSize: "15px", fontWeight: 700, marginTop: "16px", letterSpacing: "0.3px" }}>
            All are interns only
          </motion.p>
        </div>
      </div>

      {/* Search + Filters */}
      <div style={{ background: "#fff", borderBottom: "1px solid #e2e8f0", position: "sticky", top: 0, zIndex: 10 }}>
        <div className="r-wrap" style={{ ...C.wrap, padding: "16px 48px" }}>
          <div className="career-filter-bar" style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>

            {/* Search bar */}
            <div style={{ position: "relative", flex: "1", minWidth: "220px" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24"
                stroke="#94a3b8" strokeWidth={2}
                style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search roles or skills..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{
                  width: "100%", padding: "10px 14px 10px 38px",
                  border: "1px solid #e2e8f0", borderRadius: "8px",
                  fontSize: "14px", color: C.navy, outline: "none",
                  background: "#f8fafc", boxSizing: "border-box",
                  fontFamily: "inherit",
                }}
              />
            </div>

            {/* Dept filter pills */}
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" }}>
              <span style={{ fontSize: "12px", color: "#94a3b8", fontWeight: 600, marginRight: "4px" }}>Dept:</span>
              {depts.map(d => (
                <button key={d} onClick={() => setDeptFilter(d)} style={pill(deptFilter === d)}>{d}</button>
              ))}
            </div>

            {/* Type filter pills */}
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" }}>
              <span style={{ fontSize: "12px", color: "#94a3b8", fontWeight: 600, marginRight: "4px" }}>Type:</span>
              {types.map(t => (
                <button key={t} onClick={() => setTypeFilter(t)} style={pill(typeFilter === t)}>{t}</button>
              ))}
            </div>

            {/* Result count */}
            <span style={{ fontSize: "13px", color: "#94a3b8", marginLeft: "auto", whiteSpace: "nowrap" }}>
              {filtered.length} {filtered.length === 1 ? 'role' : 'roles'} found
            </span>
          </div>
        </div>
      </div>

      {/* Job listings */}
      <div className="r-wrap" style={{ ...C.wrap, padding: "48px 48px 96px" }}>
        {filtered.length > 0 ? (
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {filtered.map((job, i) => <JobCard key={job.role} job={job} i={i} />)}
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "80px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: 600, color: C.navy, marginBottom: "8px" }}>No roles found</p>
            <p style={{ fontSize: "14px", color: "#94a3b8" }}>Try adjusting your search or filters.</p>
          </div>
        )}

        {/* Open application */}
        <div className="open-application-box" style={{ textAlign: "center", marginTop: "56px", padding: "48px 40px", background: "#fff", borderRadius: "16px", border: "1px solid #e2e8f0" }}>
          <p style={{ fontSize: "13px", fontWeight: 600, color: C.blue, marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.08em" }}>// Don't see your role?</p>
          <h3 style={{ fontSize: "26px", fontWeight: 800, color: C.navy, marginBottom: "12px" }}>Great People Build Great Products</h3>
          <p style={{ fontSize: "15px", color: "#64748b", lineHeight: 1.75, maxWidth: "420px", margin: "0 auto 28px" }}>
            Send us your CV and a short note about what you do — we'll reach out when the right opportunity comes up.
          </p>
          <Link to="/apply?role=Open%20Application" style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: C.blue, color: "#fff",
            fontSize: "15px", fontWeight: 600,
            padding: "13px 32px", borderRadius: "8px", textDecoration: "none",
          }}>
            Send Open Application
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </Link>
        </div>
      </div>

    </div>
  )
}

