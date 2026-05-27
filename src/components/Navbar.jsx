import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

const navLinks = [
  { label: "About",    to: "/about"     },
  { label: "Services", to: "/services"  },
  { label: "Products", to: "/products"  },
  { label: "Career",   to: "/career"    },
  { label: "Contact",  to: "/contact"   },
]

export default function Navbar() {
  const [atTop,    setAtTop]    = useState(true)
  const [hovered,  setHovered]  = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  // close menu on route change
  useEffect(() => { setMenuOpen(false) }, [location])

  useEffect(() => {
    const onScroll = () => {
      setAtTop(window.scrollY < 10)
      if (window.scrollY > 10) setMenuOpen(false)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isActive = (to) => {
    if (to === '/') return location.pathname === '/' && !location.hash
    if (to.startsWith('/#')) return location.hash === to.slice(1)
    return location.pathname === to
  }

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      background: menuOpen ? "rgba(10,22,40,0.98)" : "transparent",
      backdropFilter: menuOpen ? "blur(12px)" : "none",
      opacity: atTop ? 1 : 0,
      pointerEvents: atTop ? "auto" : "none",
      transition: "opacity 0.35s ease, background 0.2s ease",
    }}>
      <div style={{
        maxWidth: "1100px", margin: "0 auto", padding: "0 48px",
        height: "68px", display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        {/* Logo */}
        <Link to="/" style={{ display: "inline-flex", alignItems: "center", textDecoration: "none" }}>
          <img src="/logo.png" alt="Orizo" style={{ height: "44px", width: "44px", objectFit: "cover", borderRadius: "8px", display: "block", flexShrink: 0 }} />
        </Link>

        {/* Desktop links */}
        <ul className="nav-links" style={{ display: "flex", alignItems: "center", gap: "36px", listStyle: "none", margin: 0, padding: 0 }}>
          {navLinks.map((link) => {
            const active = isActive(link.to)
            const hover  = hovered === link.label
            return (
              <li key={link.label}>
                <Link
                  to={link.to}
                  onMouseEnter={() => setHovered(link.label)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    color: active || hover ? "#ffffff" : "rgba(255,255,255,0.55)",
                    fontSize: "14px",
                    fontWeight: active ? 600 : 500,
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Hamburger — mobile only */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{
            display: "none", flexDirection: "column",
            justifyContent: "center", alignItems: "center", gap: "5px",
            background: "none", border: "none", cursor: "pointer",
            padding: "4px", width: "36px", height: "36px",
          }}
        >
          <span style={{ display: "block", width: "22px", height: "2px", background: "#fff", borderRadius: "2px", transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none", transition: "transform 0.25s ease" }} />
          <span style={{ display: "block", width: "22px", height: "2px", background: "#fff", borderRadius: "2px", opacity: menuOpen ? 0 : 1, transition: "opacity 0.2s ease" }} />
          <span style={{ display: "block", width: "22px", height: "2px", background: "#fff", borderRadius: "2px", transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none", transition: "transform 0.25s ease" }} />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div className="mobile-menu" style={{
        display: "none", flexDirection: "column",
        background: "rgba(10,22,40,0.98)",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: menuOpen ? "16px 24px 24px" : "0 24px",
        maxHeight: menuOpen ? "400px" : "0",
        overflow: "hidden",
        transition: "max-height 0.3s ease, padding 0.3s ease",
      }}>
        {navLinks.map((link) => (
          <Link key={link.label} to={link.to} style={{
            color: isActive(link.to) ? "#fff" : "rgba(255,255,255,0.65)",
            fontSize: "16px", fontWeight: isActive(link.to) ? 600 : 500,
            textDecoration: "none", padding: "12px 0",
            borderBottom: "1px solid rgba(255,255,255,0.06)", display: "block",
          }}>
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}

