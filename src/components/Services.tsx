'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const services = [
  {
    number: '01',
    title: 'Ontspanningsmassage',
    description:
      'Een diepe ontspannende massage die spanning en stress loslaat. Met zachte, vloeiende bewegingen wordt uw lichaam volledig tot rust gebracht.',
    duration: '30 / 60 min',
    image: '/6.jpeg',
  },
  {
    number: '02',
    title: 'Cuppingmassage',
    description:
      'Een traditionele techniek waarbij vacuümkopjes worden geplaatst om spierspanning te verlichten, de doorbloeding te stimuleren en toxines af te voeren.',
    duration: '30 / 45 / 60 min',
    image: '/8.jpeg',
  },
  {
    number: '03',
    title: 'Combinatiemassage',
    description:
      'De kracht van ontspanningsmassage en cupping gecombineerd in één behandeling — voor optimale ontspanning én doorbloeding.',
    duration: '60 min',
    image: '/3.jpg',
  },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay: index * 0.15, ease: [0.76, 0, 0.24, 1] }}
      className="group relative flex flex-col"
      style={{ borderTop: '1px solid rgba(155,123,107,0.3)' }}
    >
      <div className="flex flex-col md:flex-row gap-8 py-12 items-start">
        {/* Number */}
        <span
          className="shrink-0 text-6xl md:text-8xl font-light"
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            color: 'rgba(196,145,122,0.25)',
            lineHeight: 1,
          }}
        >
          {service.number}
        </span>

        {/* Text */}
        <div className="flex-1 flex flex-col gap-5">
          <h3
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              fontWeight: 300,
              color: 'var(--color-cream)',
              lineHeight: 1.1,
            }}
          >
            {service.title}
          </h3>
          <p
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              color: 'var(--color-warm)',
              fontSize: '1.05rem',
              lineHeight: 1.8,
              maxWidth: '480px',
            }}
          >
            {service.description}
          </p>
          <div className="flex items-center gap-4">
            <span
              className="text-xs tracking-widest uppercase"
              style={{ color: 'var(--color-rose)', fontFamily: 'Cormorant Garamond, Georgia, serif' }}
            >
              {service.duration}
            </span>
            <span className="w-8 h-px" style={{ backgroundColor: 'var(--color-rose)', opacity: 0.5 }} />
          </div>
        </div>

        {/* Image */}
        <motion.div
          className="relative shrink-0 img-zoom w-full md:w-auto"
          style={{ width: undefined, height: undefined }}
        >
          <div className="block md:hidden relative w-full" style={{ height: '220px', backgroundColor: 'var(--color-darkest)' }}>
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-contain"
              sizes="100vw"
            />
            <div className="absolute inset-0 opacity-20" style={{ background: 'linear-gradient(to bottom, transparent 60%, var(--color-darkest))' }} />
          </div>
        </motion.div>
        <motion.div
          className="hidden md:block relative shrink-0 img-zoom"
          style={{ width: '220px', height: '280px' }}
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: index * 0.15 + 0.3 }}
        >
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-105"
            sizes="220px"
          />
          <div
            className="absolute inset-0 opacity-20"
            style={{ background: 'linear-gradient(to bottom, transparent 60%, var(--color-darkest))' }}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function Services() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section
      id="behandelingen"
      className="py-32 md:py-48"
      style={{ backgroundColor: 'var(--color-darkest)' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div ref={ref} className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="text-xs tracking-[0.4em] uppercase mb-5"
              style={{ color: 'var(--color-rose)', fontFamily: 'Cormorant Garamond, Georgia, serif' }}
            >
              Behandelingen
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
                Wat ik aanbied
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
            Elke behandeling is afgestemd op uw specifieke noden en wensen.
          </motion.p>
        </div>

        {/* Service list */}
        <div className="flex flex-col">
          {services.map((service, i) => (
            <ServiceCard key={service.number} service={service} index={i} />
          ))}
          {/* Last border */}
          <div className="border-t" style={{ borderColor: 'rgba(155,123,107,0.3)' }} />
        </div>
      </div>
    </section>
  )
}
