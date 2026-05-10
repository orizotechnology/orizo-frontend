import { useEffect, useState } from 'react'

export default function Preloader() {
  // Only show if this is the very first visit in this browser session
  const [show] = useState(() => {
    if (sessionStorage.getItem('orizo_visited')) return false
    sessionStorage.setItem('orizo_visited', '1')
    return true
  })

  const [phase, setPhase] = useState('in')
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    if (!show) return
    const t1 = setTimeout(() => setPhase('hold'), 300)
    const t2 = setTimeout(() => setPhase('out'),  2000)
    const t3 = setTimeout(() => setPhase('gone'), 2800)
    return () => [t1, t2, t3].forEach(clearTimeout)
  }, [show])

  if (!show || phase === 'gone') return null

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 9999,
      background: "#071A3D",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      opacity: phase === 'out' ? 0 : 1,
      transition: "opacity 0.8s ease",
    }}>
      <img
        src="/tech.png"
        alt="Orizo"
        style={{
          // On mobile: contain so nothing is cropped, centered in the dark bg
          // On desktop: cover to fill the full screen as before
          width: isMobile ? "auto" : "100%",
          height: isMobile ? "auto" : "100%",
          maxWidth: isMobile ? "100%" : "none",
          maxHeight: isMobile ? "100%" : "none",
          objectFit: isMobile ? "contain" : "cover",
          objectPosition: "center center",
          opacity: phase === 'in' ? 0 : 1,
          transition: "opacity 0.5s ease",
        }}
      />
    </div>
  )
}
