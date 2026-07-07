import { useState } from 'react'

export default function Hero() {
  const [photoMissing, setPhotoMissing] = useState(false)
  const [photoLoaded, setPhotoLoaded] = useState(false)

  // Automatically uses the correct base path
  const heroImage = `${import.meta.env.BASE_URL}images/pic3.png`

  return (
    <section className="hero">
      <svg
        className="hero-line-svg"
        viewBox="0 0 800 200"
        preserveAspectRatio="none"
      >
        <path d="M0,110 L38,68 L64,148 L92,58 L120,136 L150,80 C210,26 268,178 330,104 C410,20 480,178 560,104 C630,46 690,152 800,100" />
      </svg>

      <div className="wrap hero-grid">
        <div>
          <span className="eyebrow">
            1:1 Coaching · Group Coaching · Workshops
          </span>

          <h1>
            You're not bad at relationships. You're stuck in a <em>pattern.</em>
          </h1>

          <p className="lede">
            Same fights, different partner. Same shutdown, different name.
            I help women see the attachment pattern quietly running the show,
            and move through menopause with clarity instead of chaos.
            No fixing yourself required. Just a clearer way of seeing.
          </p>

          <div className="hero-ctas">
            <a href="#book" className="btn accent">
              Book Your Free Consult
            </a>

            <a href="#services" className="see-how">
              <span className="circle">→</span>
              See how it works
            </a>
          </div>

          <p className="trust-line">
            30 minutes. No pressure. No script.
          </p>

          <div className="email-capture">
            <span className="tag">Free Consult</span>

            <input
              type="email"
              placeholder="Your email address…"
            />

            <button>→</button>
          </div>
        </div>

        <div className="hero-portrait">
          {!photoMissing && (
            <img
              src={heroImage}
              alt="Lisa Stefano"
              className="portrait-photo"
              loading="eager"
              onLoad={() => setPhotoLoaded(true)}
              onError={() => {
                console.error("Image not found:", heroImage)
                setPhotoMissing(true)
              }}
            />
          )}

          {!photoLoaded && (
            <span className="portrait-label">
              Photo — swap for editorial portrait
            </span>
          )}

          <span className="quote-mark">"</span>

          <div className="portrait-note">
            "Love doesn't disappear. Understanding it does."
          </div>
        </div>
      </div>
    </section>
  )
}