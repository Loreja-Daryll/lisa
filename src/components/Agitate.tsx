import { useReveal } from '../hooks/useReveal'

const items = [
  { text: 'You attract the same kind of partner, just a different face.', delay: '' },
  { text: "You can see exactly what's wrong, but you can't stop doing it.", delay: 'd1' },
  { text: "You're either terrified of losing them, or terrified of losing yourself.", delay: 'd2' },
  { text: 'Friends say "just communicate," but it was never that simple.', delay: 'd3' },
]

function AgitateItem({ text, delay }: { text: string; delay: string }) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <div ref={ref} className={`agitate-item reveal ${delay}`}>
      <span className="mark">"</span>
      <p>{text}</p>
    </div>
  )
}

export default function Agitate() {
  const headRef = useReveal<HTMLDivElement>()
  return (
    <section className="agitate">
      <div className="wrap">
        <div ref={headRef} className="section-head reveal">
          <span className="eyebrow">Does this sound familiar?</span>
          <h2>You already know something's repeating.</h2>
        </div>
        <div className="agitate-grid">
          {items.map((item) => (
            <AgitateItem key={item.text} text={item.text} delay={item.delay} />
          ))}
        </div>
      </div>
    </section>
  )
}
