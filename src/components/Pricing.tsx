'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const pricing = [
  {
    title: 'Ontspanningsmassage',
    items: [
      { label: '30 min — rug, nek & schouders', price: '€ 40' },
      { label: '60 min — volledig lichaam', sub: 'rug, nek, schouders, armen, handen, benen en voeten', price: '€ 60' },
    ],
  },
  {
    title: 'Cuppingmassage',
    items: [
      { label: '30 min', price: '€ 40' },
      { label: '45 min', price: '€ 50' },
      { label: '60 min', price: '€ 65' },
    ],
  },
  {
    title: 'Combinatiemassage',
    items: [
      { label: '60 min — ontspanningsmassage + cupping', sub: 'voor optimale ontspanning en doorbloeding', price: '€ 70' },
    ],
  },
]

function PricingCard({ group, index }: { group: typeof pricing[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.1, ease: [0.76, 0, 0.24, 1] }}
      className="flex flex-col gap-6 p-8 md:p-10"
      style={{
        backgroundColor: 'rgba(196,145,122,0.07)',
        border: '1px solid rgba(196,145,122,0.2)',
      }}
    >
      <h3
        style={{
          fontFamily: 'Cormorant Garamond, Georgia, serif',
          fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)',
          fontWeight: 300,
          color: 'var(--color-cream)',
          lineHeight: 1.1,
        }}
      >
        {group.title}
      </h3>
      <div className="flex flex-col gap-4">
        {group.items.map((item, i) => (
          <div key={i} className="flex items-start justify-between gap-6" style={{ borderBottom: '1px solid rgba(155,123,107,0.15)', paddingBottom: '1rem' }}>
            <div className="flex flex-col gap-1">
              <span
                style={{
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  color: 'var(--color-warm)',
                  fontSize: '1rem',
                  lineHeight: 1.4,
                }}
              >
                {item.label}
              </span>
              {item.sub && (
                <span
                  style={{
                    fontFamily: 'Cormorant Garamond, Georgia, serif',
                    color: 'var(--color-brown)',
                    fontSize: '0.88rem',
                    fontStyle: 'italic',
                    lineHeight: 1.5,
                  }}
                >
                  {item.sub}
                </span>
              )}
            </div>
            <span
              className="shrink-0"
              style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontSize: '1.2rem',
                fontWeight: 300,
                color: 'var(--color-rose)',
              }}
            >
              {item.price}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default function Pricing() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section
      id="tarieven"
      className="py-32 md:py-48"
      style={{ backgroundColor: 'var(--color-darkest)' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div ref={ref} className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="text-xs tracking-[0.4em] uppercase mb-5"
              style={{ color: 'var(--color-rose)', fontFamily: 'Cormorant Garamond, Georgia, serif' }}
            >
              Tarieven
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
                  color: 'var(--color-cream)',
                  lineHeight: 1.1,
                }}
              >
                Investeer in jezelf
              </motion.h2>
            </div>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="max-w-xs"
            style={{
              color: 'var(--color-brown)',
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: '1rem',
              lineHeight: 1.7,
            }}
          >
            Alle behandelingen zijn op afspraak. Betaling ter plaatse.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {pricing.map((group, i) => (
            <PricingCard key={group.title} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
