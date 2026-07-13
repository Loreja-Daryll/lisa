export default function Hero() {
  const heroVideo = `${import.meta.env.BASE_URL}videos/hero-bg.mp4`
  const heroFrame = `${import.meta.env.BASE_URL}images/hero-frame.webp`

  return (
    <section className="hero hero-cinematic">
      {/* Background video and overlay */}
      <div className="hero-bg">
        <video
          className="hero-bg-media"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="hero-bg-scrim" />
        <div
          className="hero-bg-overlay-png"
          style={{ backgroundImage: `url(${heroFrame})` }}
          aria-hidden="true"
        />
      </div>

      <div className="wrap hero-center-copy">
        <span className="eyebrow on-dark">
          1:1 Coaching · Group Coaching · Workshops
        </span>

        <h1>
          You're not bad at relationships. You're repeating a{' '}
          <em>pattern.</em>
        </h1>

        <p className="lede on-dark">
          Same fights, different partner. Same shutdown, different name.
          I help women see the attachment pattern quietly running the show,
          and move through menopause with clarity instead of chaos.
        </p>

        <div className="hero-ctas">
          <a href="#book" className="btn accent">
            Book Your Free Consultation
            <span aria-hidden="true">→</span>
          </a>

          <a href="#" className="see-how on-dark">
            <span className="circle on-dark">▶</span>
            Watch 90-sec intro
          </a>
        </div>

        <div className="trust-row on-dark">
          <span className="trust-item on-dark">
            <svg viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.3" />
              <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
            30 minutes
          </span>
          <span className="trust-item on-dark">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M12 21c0-6 4-8 4-13a4 4 0 0 0-8 0c0 5 4 7 4 13Z" stroke="currentColor" strokeWidth="1.3" />
              <path d="M12 12c-3-1-5-3-5-6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
            No pressure
          </span>
          <span className="trust-item on-dark">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M12 20s-7-4.4-9.3-9C1.3 7.8 3 4.5 6.4 4.5c2 0 3.5 1.3 5.6 3.5 2.1-2.2 3.6-3.5 5.6-3.5 3.4 0 5.1 3.3 3.7 6.5C19 15.6 12 20 12 20Z" stroke="currentColor" strokeWidth="1.3" />
            </svg>
            No sales pitch
          </span>
        </div>
      </div>

      <div className="hero-scroll on-dark">
        <span>SCROLL</span>
        <div className="scroll-line on-dark">
          <span className="scroll-dot"></span>
        </div>
      </div>
    </section>
  )
}
