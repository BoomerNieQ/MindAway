'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function ComingSoon() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-36 overflow-hidden flex items-center justify-center"
      style={{ backgroundColor: 'var(--color-dark-brown)' }}
    >
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 30% 50%, var(--color-rose) 0%, transparent 60%), radial-gradient(circle at 70% 50%, var(--color-cream) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 text-center px-6 flex flex-col items-center gap-8">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="text-xs tracking-[0.5em] uppercase"
          style={{ color: 'var(--color-rose)', fontFamily: 'Cormorant Garamond, Georgia, serif' }}
        >
          Mei 2026
        </motion.p>

        {/* Main text */}
        <div style={{ overflow: 'hidden' }}>
          <motion.h2
            initial={{ y: '110%' }}
            animate={inView ? { y: '0%' } : {}}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: 'clamp(2.8rem, 7vw, 6rem)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: 'var(--color-cream)',
              lineHeight: 1.05,
            }}
          >
            Er komt iets nieuws.
          </motion.h2>
        </div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            color: 'rgba(237,213,197,0.55)',
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            letterSpacing: '0.1em',
            maxWidth: '480px',
            lineHeight: 1.7,
          }}
        >
          Een nieuwe behandeling. Meer vertel ik nog niet.
        </motion.p>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="w-24 h-px origin-center"
          style={{ backgroundColor: 'var(--color-rose)' }}
        />
      </div>
    </section>
  )
}
