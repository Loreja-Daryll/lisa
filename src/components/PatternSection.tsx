import { useReveal } from '../hooks/useReveal'

export default function PatternSection() {
  const textRef = useReveal<HTMLDivElement>()
  const cardRef = useReveal<HTMLDivElement>()

  return (
    <section className="pattern-sec" id="about">
      <div className="wrap">
        <div ref={textRef} className="reveal">
          <span className="eyebrow">The Pattern</span>
          <h2>It's time to change how you attach.</h2>
          <p>
            Dismissive isn't secure. Anxious and fearful attachment aren't the same thing, even
            when they look alike from the outside. Every pattern you keep repeating in love
            started as a way to stay safe, and every one of them can be understood, and gently
            rewired.
          </p>
          <p>
            Together, we'll trace where your patterns began, how they show up today, and what a
            secure, steady version of you actually looks like in relationships.
          </p>
          <a href="#services" className="link-underline">Explore the coaching paths →</a>
        </div>

        <div ref={cardRef} className="styles-card reveal d1">
          <div className="cap">A quick map</div>
          <h3>The four attachment styles</h3>
          <div className="styles-grid">
            <div className="style-cell">
              <span className="dot secure"></span>
              <span className="name">Secure</span>
              <p>Comfortable with closeness and distance alike.</p>
            </div>
            <div className="style-cell">
              <span className="dot anxious"></span>
              <span className="name">Anxious</span>
              <p>Craves closeness, reads distance as danger.</p>
            </div>
            <div className="style-cell">
              <span className="dot avoidant"></span>
              <span className="name">Avoidant</span>
              <p>Values independence, closeness feels like pressure.</p>
            </div>
            <div className="style-cell">
              <span className="dot disorg"></span>
              <span className="name">Disorganized</span>
              <p>Wants closeness and fears it at the same time.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
