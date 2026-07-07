import { useEffect, useState } from 'react'

export default function StickyCTA() {
  const [pastHero, setPastHero] = useState(false)
  const [footerVisible, setFooterVisible] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setPastHero(window.scrollY > 700)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const footer = document.getElementById('site-footer')
    if (!footer) return
    const io = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { threshold: 0.05 },
    )
    io.observe(footer)
    return () => io.disconnect()
  }, [])

  const show = pastHero && !footerVisible

  return (
    <div className={`sticky-cta ${show ? 'show' : ''}`}>
      <div className="wrap">
        <p>Ready to see the pattern for yourself?</p>
        <a href="#book" className="btn accent">Book Your Free Consult</a>
      </div>
    </div>
  )
}
