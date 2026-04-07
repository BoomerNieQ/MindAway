'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

function AnimatedLine({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-15% 0px' })
  return (
    <div ref={ref} style={{ overflow: 'hidden' }}>
      <motion.div
        initial={{ y: '110%' }}
        animate={inView ? { y: '0%' } : {}}
        transition={{ duration: 1, delay, ease: [0.76, 0, 0.24, 1] }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section
      id="over"
      ref={ref}
      className="relative py-32 md:py-48"
      style={{ backgroundColor: 'var(--color-darkest)' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
        {/* Image side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
          className="relative h-[380px] md:h-[700px] img-zoom"
        >
          <motion.div className="absolute inset-0" style={{ y: imageY }}>
            <Image
              src="/2.jpg"
              alt="Sofie Willems - massage therapist"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
          {/* Decorative border — alleen op desktop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="absolute -bottom-6 -right-6 w-48 h-48 border hidden md:block"
            style={{ borderColor: 'var(--color-rose)', opacity: 0.4 }}
          />
        </motion.div>

        {/* Text side */}
        <div className="flex flex-col gap-8">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xs tracking-[0.4em] uppercase"
            style={{ color: 'var(--color-rose)', fontFamily: 'Cormorant Garamond, Georgia, serif' }}
          >
            Over mij
          </motion.p>

          <div
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontWeight: 300,
              color: 'var(--color-cream)',
              lineHeight: 1.05,
            }}
          >
            <div style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              <AnimatedLine delay={0.3}>Jouw welzijn</AnimatedLine>
              <AnimatedLine delay={0.42}>
                <em style={{ color: 'var(--color-rose)' }}>is mijn passie</em>
              </AnimatedLine>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="flex flex-col gap-5"
            style={{ color: 'var(--color-warm)', fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.1rem', lineHeight: 1.8 }}
          >
            <p>
              Hallo, ik ben Sofie Willems — gecertificeerd massagetherapeut gevestigd in Lanaken. Met een
              warme, persoonlijke aanpak help ik je lichaam en geest tot rust te brengen.
            </p>
            <p>
              In mijn privépraktijk combineer ik diverse massagetechnieken met aromatherapie en
              energetische benaderingen om een unieke, op jou afgestemde ervaring te creëren.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.9 }}
            className="grid grid-cols-2 gap-8 pt-6 border-t"
            style={{ borderColor: 'rgba(155,123,107,0.3)' }}
          >
            {[
              { number: '5+', label: 'Jaar ervaring' },
              { number: '100%', label: 'Persoonlijke aanpak' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span
                  style={{
                    fontFamily: 'Cormorant Garamond, Georgia, serif',
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    color: 'var(--color-rose)',
                    fontWeight: 300,
                  }}
                >
                  {stat.number}
                </span>
                <span
                  className="text-xs tracking-widest uppercase"
                  style={{ color: 'var(--color-brown)', fontFamily: 'Cormorant Garamond, Georgia, serif' }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
