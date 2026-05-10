import { useEffect, useRef, useState } from 'react'

export default function FadeIn({ children, delay = 0, direction = 'up', style = {} }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const translateMap = {
    up:    'translateY(28px)',
    down:  'translateY(-28px)',
    left:  'translateX(28px)',
    right: 'translateX(-28px)',
  }

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : (translateMap[direction] || 'translateY(28px)'),
        transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
        height: "100%",
        ...style,
      }}
    >
      {children}
    </div>
  )
}
