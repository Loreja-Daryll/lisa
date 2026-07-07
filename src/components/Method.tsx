import { useReveal } from '../hooks/useReveal'

const steps = [
  { num: '01', title: 'See the pattern', text: 'Name your attachment style and trace exactly where it started.', delay: '' },
  { num: '02', title: 'Understand the wiring', text: "Learn why it made sense once, and why it doesn't have to run the show now.", delay: 'd1' },
  { num: '03', title: 'Rewire the response', text: 'Practice a steadier way of showing up, until it stops feeling like acting.', delay: 'd2' },
]

function Step({ num, title, text, delay }: { num: string; title: string; text: string; delay: string }) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <div ref={ref} className={`method-step reveal ${delay}`}>
      <div className="method-num">{num}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

export default function Method() {
  const headRef = useReveal<HTMLDivElement>()
  return (
    <section className="method-sec">
      <div className="wrap">
        <div ref={headRef} className="section-head reveal">
          <span className="eyebrow">The Method</span>
          <h2>The Steady Pattern Method.</h2>
        </div>
        <div className="method-grid">
          <div className="method-line"></div>
          {steps.map((s) => (
            <Step key={s.num} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}
