import { useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <>
      <nav>
        <div className="wrap">
          <div className="brand">
            <span className="brand-name">Lisa Stefano</span>
            <span className="brand-tag">Life &amp; Wellness Consulting</span>
          </div>

          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#shift">Menopause</a>
            <a href="#stories">Reviews</a>
            <a href="#book" className="btn">Book a Call</a>
          </div>

          <button
            className={`nav-toggle ${open ? 'open' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Rendered as a SIBLING of <nav>, not inside it — nav's backdrop-filter
          would otherwise create a new containing block for this fixed panel
          and collapse it to nothing visible. */}
      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        <div className="wrap">
          <a href="#services" onClick={close}>Services</a>
          <a href="#about" onClick={close}>About</a>
          <a href="#shift" onClick={close}>Menopause</a>
          <a href="#stories" onClick={close}>Reviews</a>
          <a href="#book" className="btn" onClick={close}>Book a Call</a>
        </div>
      </div>
    </>
  )
}
