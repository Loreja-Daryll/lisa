import { useReveal } from '../hooks/useReveal'

const pills = [
  { text: 'Sleep & night sweats', left: '50%', top: '9%' },
  { text: 'Weight & energy', left: '78%', top: '22%' },
  { text: 'Mood shifts', left: '91%', top: '50%' },
  { text: 'Libido & intimacy', left: '78%', top: '78%' },
  { text: 'Cycle changes', left: '50%', top: '91%' },
  { text: 'Bone density', left: '22%', top: '78%' },
  { text: 'Focus & memory', left: '9%', top: '50%' },
  { text: 'Confidence', left: '22%', top: '22%' },
]

export default function Shift() {
  const textRef = useReveal<HTMLDivElement>()
  const compassRef = useReveal<HTMLDivElement>()

  return (
    <section className="shift-sec" id="shift">
      <div className="wrap">
        <div ref={textRef} className="reveal">
          <span className="eyebrow on-dark">The Shift</span>
          <h2>Menopause doesn't have to mean losing yourself.</h2>
          <p className="body-copy">
            You're not lazy, and you're not imagining it. This season brings real, physical
            change, and it deserves real support, not just "push through it."
          </p>
          <ul className="shift-list">
            <li>Understand what's hormonal versus what's habitual</li>
            <li>Rebuild energy without extreme diets or willpower alone</li>
            <li>Navigate mood shifts without losing your relationships</li>
            <li>Feel like yourself again, on your own timeline</li>
          </ul>
          <a href="#services" className="btn on-olive">See the 12-Week Plan</a>
        </div>

        <div ref={compassRef} className="compass-wrap reveal d1">
          <svg className="compass-svg" viewBox="0 0 460 460">
            <line x1="230" y1="230" x2="230" y2="42" />
            <line x1="230" y1="230" x2="358" y2="102" />
            <line x1="230" y1="230" x2="418" y2="230" />
            <line x1="230" y1="230" x2="358" y2="358" />
            <line x1="230" y1="230" x2="230" y2="418" />
            <line x1="230" y1="230" x2="102" y2="358" />
            <line x1="230" y1="230" x2="42" y2="230" />
            <line x1="230" y1="230" x2="102" y2="102" />
          </svg>
          <div className="compass-center">
            what's
            <br />
            actually
            <br />
            happening
          </div>
          {pills.map((p) => (
            <div key={p.text} className="compass-pill" style={{ left: p.left, top: p.top }}>
              {p.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
