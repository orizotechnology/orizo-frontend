import { useEffect, useRef } from 'react'

const SERVICES = [
  'Web Development',
  'Mobile Apps',
  'UI/UX Design',
  'Cloud & SaaS',
  'E-Commerce',
  'DevOps',
]

export default function TechCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx    = canvas.getContext('2d')
    let animId, t = 0
    let W, H

    const resize = () => {
      W = canvas.width  = canvas.offsetWidth
      H = canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // ── Center origin ──
    const ox = () => W * 0.62
    const oy = () => H * 0.50

    // ── Bubbles rising from center ──
    const BUBBLE_COUNT = 55
    const bubbles = Array.from({ length: BUBBLE_COUNT }, (_, i) =>
      makeBubble(ox(), oy(), true, i / BUBBLE_COUNT)
    )

    function makeBubble(cx, cy, scatter = false, phase = 0) {
      const angle  = Math.random() * Math.PI * 2
      const spread = scatter ? Math.random() * 280 : 0
      return {
        x:     cx + Math.cos(angle) * spread,
        y:     scatter ? cy + (Math.random() - 0.5) * H * 0.8 : cy,
        vx:    (Math.random() - 0.5) * 0.5,
        vy:    -(Math.random() * 1.0 + 0.4),
        r:     Math.random() * 14 + 5,
        alpha: Math.random() * 0.5 + 0.25,
        life:  scatter ? phase : 0,
        hue:   Math.random() > 0.55 ? 210 : 188,
        pulse: Math.random() * Math.PI * 2,
      }
    }

    // ── Service orbiters ──
    const orbiters = SERVICES.map((label, i) => ({
      label,
      angle:     (i / SERVICES.length) * Math.PI * 2,
      speed:     0.0055 + i * 0.0003,
      radiusX:   210,
      radiusY:   90,
      bobOffset: Math.random() * Math.PI * 2,
    }))

    // ── Stars ──
    const stars = Array.from({ length: 90 }, () => ({
      x: Math.random(), y: Math.random(),
      r: Math.random() * 1.2 + 0.3,
      tw: Math.random() * Math.PI * 2,
    }))

    const draw = () => {
      t += 0.016
      ctx.clearRect(0, 0, W, H)

      const cx = ox(), cy = oy()

      // ── Stars ──
      stars.forEach((s) => {
        s.tw += 0.018
        const a = 0.15 + 0.12 * Math.sin(s.tw)
        ctx.beginPath()
        ctx.arc(s.x * W, s.y * H, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(180,220,255,${a})`
        ctx.fill()
      })

      // ── Light rays from center ──
      for (let i = 0; i < 7; i++) {
        const a = -Math.PI / 2 + (i - 3) * 0.13 + Math.sin(t * 0.3 + i) * 0.04
        const len = H * 0.75
        const x2  = cx + Math.cos(a) * len
        const y2  = cy + Math.sin(a) * len
        const g   = ctx.createLinearGradient(cx, cy, x2, y2)
        g.addColorStop(0,   'rgba(56,189,248,0.22)')
        g.addColorStop(0.3, 'rgba(56,189,248,0.08)')
        g.addColorStop(1,   'transparent')
        ctx.beginPath()
        ctx.moveTo(cx, cy)
        ctx.lineTo(x2, y2)
        ctx.strokeStyle = g
        ctx.lineWidth   = 28 + i * 4
        ctx.stroke()
      }

      // ── Core glow at center ──
      ;[200, 120, 60].forEach((r, i) => {
        const alphas = [0.08, 0.16, 0.30]
        const colors = ['37,99,235', '56,189,248', '186,230,253']
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, r)
        g.addColorStop(0,   `rgba(${colors[i]},${alphas[i]})`)
        g.addColorStop(1,   'transparent')
        ctx.beginPath()
        ctx.arc(cx, cy, r, 0, Math.PI * 2)
        ctx.fillStyle = g
        ctx.fill()
      })

      // ── Bubbles ──
      bubbles.forEach((b) => {
        b.x    += b.vx
        b.y    += b.vy
        b.life += 0.007
        b.pulse += 0.04
        if (b.life >= 1) Object.assign(b, makeBubble(cx, cy))

        const fade = b.life < 0.12 ? b.life / 0.12
                   : b.life > 0.78 ? 1 - (b.life - 0.78) / 0.22
                   : 1
        const a   = fade * b.alpha
        const pr  = b.r + Math.sin(b.pulse) * 2   // pulsing radius

        // outer glow
        const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, pr * 2.8)
        g.addColorStop(0,   `hsla(${b.hue},90%,68%,${a * 0.55})`)
        g.addColorStop(0.5, `hsla(${b.hue},80%,60%,${a * 0.2})`)
        g.addColorStop(1,   'transparent')
        ctx.beginPath()
        ctx.arc(b.x, b.y, pr * 2.8, 0, Math.PI * 2)
        ctx.fillStyle = g
        ctx.fill()

        // bubble ring
        ctx.beginPath()
        ctx.arc(b.x, b.y, pr, 0, Math.PI * 2)
        ctx.strokeStyle = `hsla(${b.hue},90%,75%,${a * 0.8})`
        ctx.lineWidth   = 1.5
        ctx.stroke()

        // inner fill
        const ig = ctx.createRadialGradient(b.x - pr * 0.3, b.y - pr * 0.3, 0, b.x, b.y, pr)
        ig.addColorStop(0,   `hsla(${b.hue},80%,85%,${a * 0.45})`)
        ig.addColorStop(1,   `hsla(${b.hue},70%,55%,${a * 0.15})`)
        ctx.beginPath()
        ctx.arc(b.x, b.y, pr, 0, Math.PI * 2)
        ctx.fillStyle = ig
        ctx.fill()
      })

      // ── Orizo hologram text ──
      const ty = cy - 10 + Math.sin(t * 0.7) * 6
      ctx.save()
      ctx.textAlign    = 'center'
      ctx.textBaseline = 'middle'
      ctx.font         = '800 46px Inter, system-ui, sans-serif'

      // glow layers
      ctx.shadowColor = 'rgba(56,189,248,1)'
      ctx.shadowBlur  = 40
      ctx.fillStyle   = 'rgba(56,189,248,0.15)'
      ctx.fillText('Orizo', cx, ty)

      ctx.shadowBlur  = 18
      ctx.fillStyle   = 'rgba(186,230,253,0.5)'
      ctx.fillText('Orizo', cx, ty)

      ctx.shadowBlur  = 6
      ctx.fillStyle   = 'rgba(224,242,254,0.95)'
      ctx.fillText('Orizo', cx, ty)
      ctx.restore()

      // scan line
      const sl = ((t * 35) % 52) - 26
      const sg = ctx.createLinearGradient(cx - 130, ty + sl, cx + 130, ty + sl)
      sg.addColorStop(0,   'transparent')
      sg.addColorStop(0.5, 'rgba(56,189,248,0.45)')
      sg.addColorStop(1,   'transparent')
      ctx.fillStyle = sg
      ctx.fillRect(cx - 130, ty + sl, 260, 2)

      // ── Service orbiters ──
      orbiters.forEach((orb) => {
        orb.angle += orb.speed
        const bob = Math.sin(t * 1.1 + orb.bobOffset) * 8
        const sx  = cx + Math.cos(orb.angle) * orb.radiusX
        const sy  = cy + Math.sin(orb.angle) * orb.radiusY + bob

        // connector line
        const lg = ctx.createLinearGradient(cx, cy, sx, sy)
        lg.addColorStop(0,   'rgba(56,189,248,0.35)')
        lg.addColorStop(1,   'rgba(56,189,248,0.04)')
        ctx.beginPath()
        ctx.moveTo(cx, cy)
        ctx.lineTo(sx, sy)
        ctx.strokeStyle = lg
        ctx.lineWidth   = 1
        ctx.stroke()

        // badge
        ctx.font = '600 12.5px Inter, system-ui, sans-serif'
        ctx.textAlign    = 'center'
        ctx.textBaseline = 'middle'
        const tw = ctx.measureText(orb.label).width
        const pw = tw + 22, ph = 26, pr2 = 13

        // badge glow
        const bg = ctx.createRadialGradient(sx, sy, 0, sx, sy, pw * 0.8)
        bg.addColorStop(0,   'rgba(37,99,235,0.35)')
        bg.addColorStop(1,   'transparent')
        ctx.beginPath()
        ctx.ellipse(sx, sy, pw * 0.8, ph * 0.9, 0, 0, Math.PI * 2)
        ctx.fillStyle = bg
        ctx.fill()

        // badge bg
        ctx.beginPath()
        ctx.roundRect(sx - pw / 2, sy - ph / 2, pw, ph, pr2)
        ctx.fillStyle   = 'rgba(5,13,26,0.85)'
        ctx.fill()
        ctx.strokeStyle = 'rgba(56,189,248,0.75)'
        ctx.lineWidth   = 1.2
        ctx.stroke()

        // badge text
        ctx.shadowColor = 'rgba(56,189,248,0.9)'
        ctx.shadowBlur  = 8
        ctx.fillStyle   = 'rgba(186,230,253,1)'
        ctx.fillText(orb.label, sx, sy)
        ctx.shadowBlur  = 0
        ctx.textAlign   = 'left'
      })

      animId = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block', pointerEvents: 'none' }}
    />
  )
}

