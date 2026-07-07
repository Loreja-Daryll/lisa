import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

const faqs = [
  {
    q: 'Is this therapy?',
    a: 'No. Coaching is forward-focused and practical, working on the patterns showing up right now rather than diagnosing or treating a condition. Many clients do both, and this work pairs well with therapy rather than replacing it.',
  },
  {
    q: "I've tried coaching before and nothing changed.",
    a: 'Most coaching stays at the surface: tips and scripts. This starts underneath, at the attachment pattern actually driving the behavior, which is why it tends to stick differently.',
  },
  {
    q: "What if I'm not ready to talk about my relationships yet?",
    a: "The free consult has no script and no pressure. It's a conversation to see if this is the right fit, on your terms, at your pace.",
  },
  {
    q: 'Can this help with both relationships and menopause?',
    a: 'Yes. The two are more connected than people expect. Hormonal shifts change how patterns show up, and the 12-Week Plan folds both together.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const headRef = useReveal<HTMLDivElement>()
  const listRef = useReveal<HTMLDivElement>()

  return (
    <section className="faq-sec">
      <div className="wrap">
        <div ref={headRef} className="section-head reveal">
          <span className="eyebrow">Before You Book</span>
          <h2>Questions women usually ask first.</h2>
        </div>
        <div ref={listRef} className="faq-list reveal">
          {faqs.map((item, i) => (
            <div key={item.q} className={`faq-item ${openIndex === i ? 'open' : ''}`}>
              <div
                className="faq-q"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span>{item.q}</span>
                <span className="plus">+</span>
              </div>
              <div className="faq-a">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
