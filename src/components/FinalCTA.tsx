import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

export default function FinalCTA() {
  const portraitRef = useReveal<HTMLDivElement>()
  const textRef = useReveal<HTMLDivElement>()

  // Same auto-detect pattern as Hero.tsx — looks for /public/images/final-portrait.jpg
  const [photoMissing, setPhotoMissing] = useState(false)
  const [photoLoaded, setPhotoLoaded] = useState(false)

  return (
    <section className="final-sec" id="book">
      <div className="wrap">
        <div ref={portraitRef} className="final-portrait reveal">
          {!photoMissing && (
            <img
              src="/images/pic2.png"
              alt="Lisa Stefano"
              className="portrait-photo"
              onLoad={() => setPhotoLoaded(true)}
              onError={() => setPhotoMissing(true)}
            />
          )}
          {!photoLoaded && (
            <span className="portrait-label">Photo — swap for editorial portrait</span>
          )}
        </div>
        <div ref={textRef} className="reveal d1">
          <span className="eyebrow">The Invitation</span>
          <h2>Let's rewrite your story.</h2>
          <p>
            A free 30-minute consult is the first step, no pressure, no script. Just a
            conversation about where you are, and whether we're the right fit to work through
            it together.
          </p>
          <div className="risk-reversal">
            <span className="icon">✓</span>
            <p>No obligation after the call. If it's not the right fit, you'll leave with clarity anyway.</p>
          </div>
          <a href="#" className="btn accent">Book Your Free Consult</a>
          <p className="fineprint">Prefer email? Reach out directly and we'll find a time that works.</p>
        </div>
      </div>
    </section>
  )
}
