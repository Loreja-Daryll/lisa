import { useEffect, useRef } from 'react'

/**
 * Attach to any element that has the "reveal" class (optionally "reveal d1",
 * "reveal d2" etc for staggered delay). Adds the "in" class once the element
 * scrolls into view, matching the original mockup's animation exactly.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 },
    )

    io.observe(el)
    return () => io.disconnect()
  }, [])

  return ref
}
