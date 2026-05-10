import { useEffect, useState } from 'react'

export default function Preloader() {
  // Only show if this is the very first visit in this browser session
  const [show] = useState(() => {
    if (sessionStorage.getItem('orizo_visited')) return false
    sessionStorage.setItem('orizo_visited', '1')
    return true
  })

  const [phase, setPhase] = useState('in')

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
      opacity: phase === 'out' ? 0 : 1,
      transition: "opacity 0.8s ease",
    }}>
      <img
        src="/tech.png"
        alt="Orizo"
        style={{
          position: "absolute", inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          opacity: phase === 'in' ? 0 : 1,
          transition: "opacity 0.5s ease",
        }}
      />
    </div>
  )
}
