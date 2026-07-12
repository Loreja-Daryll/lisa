import { useState } from 'react'

export default function Hero() {
  const [photoMissing, setPhotoMissing] = useState(false)
  const [photoLoaded, setPhotoLoaded] = useState(false)

  // Automatically uses the correct base path for GitHub Pages
  const heroImage = `${import.meta.env.BASE_URL}images/pic3.png`

  return (
    <section className="hero">
      <div className="hero-side-labels" aria-hidden="true">
        <span className="side-dot"></span>
        <span className="side-label">Emotional Clarity</span>
        <span className="side-line"></span>
        <span className="side-label">Relationship Patterns</span>
        <span className="side-line"></span>
        <span className="side-label">Menopause Support</span>
      </div>

      <div className="wrap hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">
            1:1 Coaching · Group Coaching · Workshops
          </span>

          <h1>
            You're not bad at relationships. You're repeating a{' '}
            <em>pattern.</em>
          </h1>

          <p className="lede">
            Same fights, different partner. Same shutdown, different name.
            I help women see the attachment pattern quietly running the show,
            and move through menopause with clarity instead of chaos.
          </p>

          <div className="hero-ctas">
            <a href="#book" className="btn accent">
              Book Your Free Consultation
              <span aria-hidden="true">→</span>
            </a>

            <a href="#" className="see-how">
              <span className="circle">▶</span>
              Watch 90-sec intro
            </a>
          </div>

          <div className="trust-row">
            <span className="trust-item">
              <svg viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9.5" stroke="#42462F" strokeWidth="1.3" />
                <path d="M12 7v5l3.5 2" stroke="#42462F" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
              30 minutes
            </span>
            <span className="trust-item">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M12 21c0-6 4-8 4-13a4 4 0 0 0-8 0c0 5 4 7 4 13Z" stroke="#42462F" strokeWidth="1.3" />
                <path d="M12 12c-3-1-5-3-5-6" stroke="#42462F" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
              No pressure
            </span>
            <span className="trust-item">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M12 20s-7-4.4-9.3-9C1.3 7.8 3 4.5 6.4 4.5c2 0 3.5 1.3 5.6 3.5 2.1-2.2 3.6-3.5 5.6-3.5 3.4 0 5.1 3.3 3.7 6.5C19 15.6 12 20 12 20Z" stroke="#42462F" strokeWidth="1.3" />
              </svg>
              No sales pitch
            </span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-orbit"></div>
          <span className="orbit-dot"></span>

          <div className="hero-portrait">
            {!photoMissing && (
              <img
                src={heroImage}
                alt="Lisa Stefano"
                className="portrait-photo"
                loading="lazy"
                onLoad={() => setPhotoLoaded(true)}
                onError={() => {
                  console.error('Image not found:', heroImage)
                  setPhotoMissing(true)
                }}
              />
            )}

            {!photoLoaded && (
              <span className="portrait-label">
                Photo — swap for editorial portrait
              </span>
            )}
          </div>

          <div className="hero-float-card">
            <div className="stars" aria-hidden="true">★★★★★</div>
            <p>
              Helping women break emotional cycles with{' '}
              <strong>clarity</strong>, not shame.
            </p>
            <div className="float-divider"></div>
            <span className="float-tag">1:1 Coaching</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <span>SCROLL</span>
        <div className="scroll-line">
          <span className="scroll-dot"></span>
        </div>
      </div>
    </section>
  )
}
