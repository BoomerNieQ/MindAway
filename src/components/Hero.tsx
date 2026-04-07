'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

const words1 = ['Mind']
const words2 = ['Away']

function SplitText({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <span className="split-line" style={{ display: 'block', overflow: 'hidden' }}>
      <motion.span
        initial={{ y: '110%' }}
        animate={{ y: '0%' }}
        transition={{
          duration: 1.1,
          delay,
          ease: [0.76, 0, 0.24, 1],
        }}
        style={{ display: 'block' }}
      >
        {text}
      </motion.span>
    </span>
  )
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [0.45, 0.7])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])

  return (
    <section
      ref={ref}
      className="relative w-full min-h-[100svh] flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: 'var(--color-darkest)' }}
    >
      {/* Parallax background image */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ y: imageY }}
      >
        <Image
          src="/test.jpeg"
          alt="MindAway massageruimte"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      {/* Dark overlay */}
      <motion.div
        className="absolute inset-0"
        style={{
          opacity: overlayOpacity,
          background: 'linear-gradient(to bottom, rgba(28,16,10,0.6) 0%, rgba(28,16,10,0.3) 50%, rgba(28,16,10,0.8) 100%)',
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6"
        style={{ y: textY }}
      >
        {/* Subtitle top */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.3em' }}
          animate={{ opacity: 1, letterSpacing: '0.5em' }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="text-xs md:text-sm uppercase mb-8 tracking-[0.15em] md:tracking-[0.5em] inline-block px-4 py-1.5"
          style={{
            color: 'var(--color-rose)',
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            backgroundColor: 'rgba(28,16,10,0.55)',
            backdropFilter: 'blur(6px)',
          }}
        >
          Massage Therapist · Lanaken
        </motion.p>

        {/* Main title */}
        <div
          className="leading-none"
          style={{
            fontSize: 'clamp(5rem, 16vw, 15rem)',
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontWeight: 300,
            color: 'var(--color-cream)',
            lineHeight: 0.9,
          }}
        >
          <SplitText text="Mind" delay={0.5} />
          <SplitText text="Away" delay={0.7} />
        </div>

        {/* Name */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1 }}
          className="mt-8 text-base md:text-lg tracking-[0.35em] uppercase"
          style={{
            color: 'var(--color-warm)',
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontStyle: 'italic',
          }}
        >
          Sofie Willems
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.4 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 items-center justify-center"
        >
          <a
            href="https://wa.me/0032487012332?text=Hallo%20Sofie%2C%20ik%20wil%20graag%20een%20afspraak%20maken%20bij%20MindAway."
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 text-sm tracking-[0.2em] uppercase hover:bg-[var(--color-rose)] hover:border-[var(--color-rose)]"
            style={{
              border: '1px solid var(--color-cream)',
              color: 'var(--color-cream)',
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              letterSpacing: '0.2em',
              transition: 'all 0.4s cubic-bezier(0.76,0,0.24,1)',
            }}
          >
            Boek een behandeling
          </a>
          <button
            onClick={() => document.querySelector('#behandelingen')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-sm tracking-[0.2em] uppercase flex items-center gap-3"
            style={{
              color: 'var(--color-warm)',
              fontFamily: 'Cormorant Garamond, Georgia, serif',
            }}
          >
            Ontdek meer
            <span className="w-8 h-px inline-block" style={{ backgroundColor: 'var(--color-warm)' }} />
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-12"
          style={{ backgroundColor: 'var(--color-rose)' }}
        />
      </motion.div>
    </section>
  )
}
