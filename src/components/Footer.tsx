'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const baseItems = ['MindAway', '·', 'Sofie Willems', '·', 'Massage Therapist', '·', 'Lanaken', '·']
const footerItems = [...baseItems, ...baseItems, ...baseItems, ...baseItems, ...baseItems, ...baseItems, ...baseItems, ...baseItems]

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <footer
      style={{ backgroundColor: 'var(--color-darkest)', borderTop: '1px solid rgba(155,123,107,0.2)' }}
    >
      {/* Marquee */}
      <div className="py-8 overflow-hidden" style={{ borderBottom: '1px solid rgba(155,123,107,0.15)' }}>
        <div
          className="marquee-track flex gap-10 whitespace-nowrap"
          style={{ width: 'max-content' }}
        >
          {footerItems.map((item, i) => (
            <span
              key={i}
              style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontSize: '0.9rem',
                color: item === '·' ? 'var(--color-rose)' : 'rgba(237,213,197,0.5)',
                letterSpacing: item !== '·' ? '0.2em' : '0',
                textTransform: 'uppercase' as const,
                fontWeight: item === '·' ? 700 : 300,
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Footer content */}
      <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9 }}
            className="flex flex-col gap-3"
          >
            <div
              className="relative rounded-full overflow-hidden"
              style={{ width: '180px', height: '180px', backgroundColor: 'var(--color-cream)' }}
            >
              <Image
                src="/logo.jpg"
                alt="MindAway logo"
                fill
                className="object-cover"
              />
            </div>
            <span
              style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                color: 'var(--color-brown)',
                fontSize: '0.85rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
              }}
            >
              Sofie Willems · Lanaken
            </span>
          </motion.div>

          {/* Links */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="flex flex-wrap gap-8"
          >
            {[
              { label: 'Over mij', href: '#over' },
              { label: 'Behandelingen', href: '#behandelingen' },
              { label: 'Tarieven', href: '#tarieven' },
              { label: 'Impressie', href: '#impressie' },
              { label: 'Contact', href: '#contact' },
            ].map((link) => (
              <button
                key={link.href}
                onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                style={{
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  color: 'var(--color-warm)',
                  fontSize: '0.85rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-rose)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-warm)')}
              >
                {link.label}
              </button>
            ))}
          </motion.nav>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="flex flex-col gap-4"
          >
            {[
              { label: 'Instagram', href: 'https://www.instagram.com/mindaway.massage/' },
              { label: 'Facebook', href: 'https://www.facebook.com/p/MindAway-100088384664770/' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <span
                  style={{
                    fontFamily: 'Cormorant Garamond, Georgia, serif',
                    color: 'var(--color-warm)',
                    fontSize: '0.85rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    transition: 'color 0.3s',
                  }}
                  className="group-hover:text-[var(--color-rose)]"
                >
                  {social.label}
                </span>
                <span
                  className="w-8 h-px group-hover:w-14 transition-all duration-500"
                  style={{ backgroundColor: 'var(--color-rose)' }}
                />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(155,123,107,0.15)' }}
        >
          <p
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              color: 'rgba(155,123,107,0.5)',
              fontSize: '0.8rem',
              letterSpacing: '0.1em',
            }}
          >
            © {new Date().getFullYear()} MindAway — Sofie Willems. Alle rechten voorbehouden.
          </p>
          <a
            href="https://www.tessmaedia.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
            style={{ opacity: 0.5, transition: 'opacity 0.3s' }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.5')}
          >
            <span
              style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                color: 'var(--color-brown)',
                fontSize: '0.75rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
              }}
            >
              Designed by
            </span>
            <div className="relative" style={{ width: '80px', height: '24px' }}>
              <Image src="/tessmaedia-logo.png" alt="TessMaedia" fill className="object-contain" />
            </div>
          </a>
        </motion.div>
      </div>
    </footer>
  )
}
