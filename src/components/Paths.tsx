import { useReveal } from '../hooks/useReveal'

const paths = [
  {
    delay: '',
    title: '1:1 Coaching',
    text: 'Private sessions built around your patterns, your pace, and your goals.',
    icon: (
      <>
        <circle cx="20" cy="20" r="18.5" stroke="#42462F" strokeWidth="1.3" />
        <path d="M20 11 C 24 11 26 15 24 19 C 22 22 18 22 16 19 C 14 15 16 11 20 11 Z" stroke="#42462F" strokeWidth="1.3" />
        <path d="M12 30 C 13 24 16 22 20 22 C 24 22 27 24 28 30" stroke="#42462F" strokeWidth="1.3" />
      </>
    ),
  },
  {
    delay: 'd1',
    title: 'Group Coaching',
    text: 'Work through your patterns alongside other women doing the same.',
    icon: (
      <>
        <circle cx="15" cy="16" r="6" stroke="#42462F" strokeWidth="1.3" />
        <circle cx="26" cy="18" r="5" stroke="#42462F" strokeWidth="1.3" />
        <path d="M6 30c1-6 4-9 9-9s8 3 9 9" stroke="#42462F" strokeWidth="1.3" />
        <path d="M20 30c1-5 3-8 8-8s6.5 3 7.5 8" stroke="#42462F" strokeWidth="1.3" />
      </>
    ),
  },
  {
    delay: 'd2',
    title: 'Workshops',
    text: 'Focused live sessions on a single topic, from boundaries to burnout.',
    icon: <path d="M0,26 C 6,10 14,10 20,20 C 26,30 34,30 40,14" stroke="#42462F" strokeWidth="1.3" fill="none" />,
  },
  {
    delay: 'd3',
    title: '12-Week Plan',
    text: 'A personalised coaching arc for lasting change, not a quick fix.',
    icon: (
      <>
        <circle cx="20" cy="20" r="14" stroke="#42462F" strokeWidth="1.3" />
        <path d="M20 20 L20 10" stroke="#42462F" strokeWidth="1.3" />
        <path d="M20 20 L27 24" stroke="#42462F" strokeWidth="1.3" />
      </>
    ),
  },
]

function PathCell({ delay, title, text, icon }: (typeof paths)[number]) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <div ref={ref} className={`path-cell reveal ${delay}`}>
      <svg className="path-icon" viewBox="0 0 40 40" fill="none">
        {icon}
      </svg>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

export default function Paths() {
  const headRef = useReveal<HTMLDivElement>()
  return (
    <section className="paths-sec" id="services">
      <div className="wrap">
        <div ref={headRef} className="section-head reveal">
          <span className="eyebrow">How We Work Together</span>
          <h2>Choose the path that fits your season.</h2>
        </div>
        <div className="paths-grid">
          {paths.map((p) => (
            <PathCell key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}
