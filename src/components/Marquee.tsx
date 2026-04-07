'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const items = [
  'Ontspan',
  '·',
  'Herstel',
  '·',
  'Herleef',
  '·',
  'Relax',
  '·',
  'Vernieuw',
  '·',
  'Genees',
  '·',
]

export default function Marquee() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })
  // Repeat enough times so the track is always wider than any screen,
  // then double it so the -50% animation loops seamlessly with no gaps.
  const base = [...items, ...items, ...items, ...items]
  const doubled = [...base, ...base]

  return (
    <div
      ref={ref}
      className="py-10 overflow-hidden"
      style={{ backgroundColor: 'var(--color-dark-brown)' }}
    >
      <div className="marquee-track flex gap-12 whitespace-nowrap" style={{ width: 'max-content' }}>
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
              color: item === '·' ? 'var(--color-rose)' : 'var(--color-cream)',
              letterSpacing: item === '·' ? '0' : '0.15em',
              fontWeight: item === '·' ? 700 : 300,
              fontStyle: item !== '·' ? 'italic' : 'normal',
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
