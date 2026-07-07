import { useReveal } from '../hooks/useReveal'

const stories = [
  {
    delay: '',
    quote: 'I spent years thinking I just picked the wrong people. Lisa helped me see the pattern underneath it, and actually change it.',
    attr: 'J.',
    sub: '1:1 Coaching client',
  },
  {
    delay: 'd1',
    quote: 'Hearing other women describe the exact same anxious spirals I have made me feel so much less broken. This work changed that.',
    attr: 'K.',
    sub: 'Group Coaching client',
  },
  {
    delay: 'd2',
    quote: "The menopause support alone was worth it. I finally understood what was hormonal versus what was me, and stopped blaming myself.",
    attr: 'M.',
    sub: '12-Week Plan client',
  },
]

function StoryCard({ delay, quote, attr, sub }: (typeof stories)[number]) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <div ref={ref} className={`story-card reveal ${delay}`}>
      <span className="qm">"</span>
      <blockquote>{quote}</blockquote>
      <div className="attr">
        {attr} <span>· {sub}</span>
      </div>
    </div>
  )
}

export default function Stories() {
  const headRef = useReveal<HTMLDivElement>()
  return (
    <section id="stories">
      <div className="wrap">
        <div ref={headRef} className="section-head reveal">
          <span className="eyebrow">The Proof</span>
          <h2>Success stories.</h2>
        </div>
        <div className="stories-grid">
          {stories.map((s) => (
            <StoryCard key={s.attr} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}
