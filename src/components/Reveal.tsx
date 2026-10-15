import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'

/**
 * Tracks whether an element has scrolled into view. Pair with the `reveal`
 * class and a `data-visible` attribute to fade and lift it in.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.disconnect()
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return { ref, visible }
}

type RevealProps = {
  children: ReactNode
  className?: string
  /** Stagger in milliseconds, for lists that animate item by item. */
  delay?: number
  as?: 'div' | 'section' | 'article' | 'li' | 'span'
}

/**
 * Fades and lifts its children into view once they intersect the viewport.
 * Replaces the motion library the original design used for the same effect.
 */
export function Reveal({ children, className = '', delay = 0, as = 'div' }: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>()
  const Tag = as as 'div'

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      data-visible={visible ? 'true' : 'false'}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
