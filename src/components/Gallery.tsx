'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

function FadeImage({ src, alt, delay = 0, className = '', style = {}, objectPosition = 'center', objectFit = 'cover' }: {
  src: string
  alt: string
  delay?: number
  className?: string
  style?: React.CSSProperties
  objectPosition?: string
  objectFit?: 'cover' | 'contain'
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-8% 0px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay, ease: [0.76, 0, 0.24, 1] }}
      className={`relative overflow-hidden img-zoom ${className}`}
      style={style}
    >
      <Image src={src} alt={alt} fill className={objectFit === 'contain' ? 'object-contain' : 'object-cover'} style={{ objectPosition }} sizes="(max-width: 768px) 100vw, 50vw" />
    </motion.div>
  )
}

export default function Gallery() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section
      id="impressie"
      className="py-32 md:py-48"
      style={{ backgroundColor: 'var(--color-cream)' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div ref={ref} className="mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-xs tracking-[0.4em] uppercase mb-5"
            style={{ color: 'var(--color-rose)', fontFamily: 'Cormorant Garamond, Georgia, serif' }}
          >
            Impressie
          </motion.p>
          <div style={{ overflow: 'hidden' }}>
            <motion.h2
              initial={{ y: '110%' }}
              animate={inView ? { y: '0%' } : {}}
              transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
              style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                fontWeight: 300,
                color: 'var(--color-dark-brown)',
                lineHeight: 1.1,
              }}
            >
              Een blik in de praktijk
            </motion.h2>
          </div>
        </div>

        {/* Row 1: groot + smal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6">
          <FadeImage src="/6.jpeg" alt="Massageruimte" delay={0} className="md:col-span-2" style={{ height: 'clamp(260px, 50vw, 480px)' }} />
          <FadeImage src="/7.jpeg" alt="Sfeer in de praktijk" delay={0.1} style={{ height: 'clamp(220px, 45vw, 480px)' }} />
        </div>

        {/* Row 2: vier gelijk */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-4 md:mb-6">
          <FadeImage src="/8.jpeg" alt="Behandelruimte" delay={0.05} style={{ height: 'clamp(180px, 25vw, 300px)' }} />
          <FadeImage src="/9.jpeg" alt="Massagebed" delay={0.1} style={{ height: 'clamp(180px, 25vw, 300px)' }} />
          <FadeImage src="/10.jpeg" alt="Boeddha en zoutlamp" delay={0.15} style={{ height: 'clamp(180px, 25vw, 300px)' }} />
          <FadeImage src="/cupping2.jpeg" alt="Cupping behandeling" delay={0.2} style={{ height: 'clamp(180px, 25vw, 300px)' }} />
        </div>

        {/* Tess — persoonlijk moment, geen promotie */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-center mt-8 md:mt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-8% 0px' }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="flex flex-col gap-4 order-2 md:order-1 px-2 md:px-8"
          >
            <p
              style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                fontWeight: 300,
                fontStyle: 'italic',
                color: 'var(--color-dark-brown)',
                lineHeight: 1.3,
              }}
            >
              Een beetje thuis.
            </p>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                color: 'var(--color-brown)',
                fontSize: '1.05rem',
                lineHeight: 1.8,
              }}
            >
              MindAway is mijn eigen plek — warm en persoonlijk.
            </p>
          </motion.div>
          <FadeImage
            src="/Tess.jpeg"
            alt="Een persoonlijk moment in de praktijk"
            delay={0.15}
            className="order-1 md:order-2"
            style={{ height: 'clamp(280px, 60vw, 480px)' }}
          />
        </div>
      </div>
    </section>
  )
}
