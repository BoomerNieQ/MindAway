'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const WHATSAPP_NUMBER = '32487012332'
const WHATSAPP_MESSAGE = 'Hallo Sofie, ik wil graag een afspraak maken bij MindAway.'

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  return (
    <section
      id="contact"
      className="py-32 md:py-48"
      style={{ backgroundColor: 'var(--color-darkest)' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div ref={ref} className="flex flex-col md:flex-row md:items-end md:justify-between gap-16">
          {/* Left: info */}
          <div className="flex flex-col gap-10 max-w-lg">
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8 }}
                className="text-xs tracking-[0.4em] uppercase mb-5"
                style={{ color: 'var(--color-rose)', fontFamily: 'Cormorant Garamond, Georgia, serif' }}
              >
                Contact
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
                  Boek een{' '}
                  <em style={{ color: 'var(--color-rose)' }}>moment</em>
                  <br />
                  voor jezelf
                </motion.h2>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="flex flex-col gap-6"
            >
              {[
                { label: 'Locatie', value: 'Lanaken, België' },
                { label: 'Instagram', value: '@mindaway.massage', href: 'https://www.instagram.com/mindaway.massage/' },
                { label: 'Facebook', value: 'MindAway — Sofie Willems', href: 'https://www.facebook.com/p/MindAway-100088384664770/' },
                { label: 'Openingsuren', value: 'Op afspraak' },
              ].map((item) => (
                <div key={item.label} className="flex flex-col gap-1">
                  <span
                    className="text-xs tracking-widest uppercase"
                    style={{ color: 'var(--color-brown)', fontFamily: 'Cormorant Garamond, Georgia, serif' }}
                  >
                    {item.label}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: 'var(--color-warm)',
                        fontFamily: 'Cormorant Garamond, Georgia, serif',
                        fontSize: '1.1rem',
                        textDecoration: 'underline',
                        textDecorationColor: 'rgba(196,145,122,0.4)',
                      }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span style={{ color: 'var(--color-warm)', fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.1rem' }}>
                      {item.value}
                    </span>
                  )}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: WhatsApp CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="flex flex-col gap-8 items-start md:items-end"
          >
            <p
              style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                color: 'var(--color-brown)',
                lineHeight: 1.7,
                maxWidth: '320px',
                textAlign: 'right',
              }}
              className="text-left md:text-right"
            >
              Stuur een berichtje via WhatsApp, Instagram of Facebook — Sofie neemt zo snel mogelijk contact op.
            </p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-10 py-4 text-sm tracking-widest uppercase transition-all duration-400 group"
              style={{
                border: '1px solid var(--color-rose)',
                color: 'var(--color-rose)',
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                letterSpacing: '0.2em',
                transition: 'all 0.4s cubic-bezier(0.76,0,0.24,1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-rose)'
                e.currentTarget.style.color = 'var(--color-cream)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.color = 'var(--color-rose)'
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.504 5.84L.057 23.617a.5.5 0 00.611.611l5.777-1.447A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.802 9.802 0 01-5.003-1.368l-.358-.213-3.712.928.944-3.653-.234-.376A9.799 9.799 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
              </svg>
              Boek via WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
