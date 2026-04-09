'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

const WHATSAPP_NUMBER = '32487012332'
const WHATSAPP_MESSAGE = 'Hallo Sofie, ik wil graag een cadeaubon bestellen bij MindAway.'

export default function GiftCard() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%'])

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  return (
    <section
      ref={ref}
      className="py-32 md:py-48 overflow-hidden"
      style={{ backgroundColor: 'var(--color-cream)' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">

        {/* Foto met parallax */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="relative h-[420px] md:h-[580px] overflow-hidden order-1"
        >
          <motion.div className="absolute inset-0" style={{ y: imageY }}>
            <Image
              src="/cadeaubonnen1.jpeg"
              alt="MindAway cadeaubon"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
          {/* Subtle overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(to bottom, transparent 70%, rgba(247,240,235,0.3))' }}
          />
        </motion.div>

        {/* Tekst */}
        <div className="flex flex-col gap-8 order-2">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xs tracking-[0.4em] uppercase"
            style={{ color: 'var(--color-rose)', fontFamily: 'Cormorant Garamond, Georgia, serif' }}
          >
            Geef ontspanning
          </motion.p>

          <div style={{ overflow: 'hidden' }}>
            <motion.h2
              initial={{ y: '110%' }}
              animate={inView ? { y: '0%' } : {}}
              transition={{ duration: 1, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
              style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontSize: 'clamp(2.2rem, 5vw, 4rem)',
                fontWeight: 300,
                color: 'var(--color-dark-brown)',
                lineHeight: 1.1,
              }}
            >
              Een cadeaubon —<br />
              <em style={{ color: 'var(--color-rose)' }}>het perfecte geschenk</em>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.55 }}
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              color: 'var(--color-brown)',
              fontSize: '1.1rem',
              lineHeight: 1.8,
              maxWidth: '420px',
            }}
          >
            Gun iemand een moment van pure rust. Cadeaubonnen zijn beschikbaar voor alle behandelingen en op maat te bestellen.
          </motion.p>

          <motion.a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.75 }}
            className="self-start flex items-center gap-4 px-10 py-4 text-sm tracking-widest uppercase"
            style={{
              border: '1px solid var(--color-dark-brown)',
              color: 'var(--color-dark-brown)',
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              letterSpacing: '0.2em',
              transition: 'all 0.4s cubic-bezier(0.76,0,0.24,1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-dark-brown)'
              e.currentTarget.style.color = 'var(--color-cream)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = 'var(--color-dark-brown)'
            }}
          >
            Bestel via WhatsApp
          </motion.a>
        </div>
      </div>
    </section>
  )
}
