'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const navLinks = [
  { label: 'Over mij', href: '#over' },
  { label: 'Behandelingen', href: '#behandelingen' },
  { label: 'Tarieven', href: '#tarieven' },
  { label: 'Impressie', href: '#impressie' },
  { label: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLink = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[var(--color-cream)]/95 backdrop-blur-sm shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20 md:h-52">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center group"
          >
            <div
              className="relative rounded-full overflow-hidden transition-all duration-500"
              style={{
                width: 'clamp(64px, 12vw, 180px)',
                height: 'clamp(64px, 12vw, 180px)',
                backgroundColor: 'var(--color-cream)',
                border: '2px solid rgba(196,145,122,0.6)',
                boxShadow: scrolled ? '0 2px 12px rgba(0,0,0,0.1)' : '0 4px 24px rgba(0,0,0,0.4)',
              }}
            >
              <Image
                src="/logo.jpg"
                alt="MindAway logo"
                fill
                className="object-cover scale-110"
                priority
              />
            </div>
          </button>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleLink(link.href)}
                  className="relative text-sm tracking-widest uppercase group"
                  style={{
                    color: scrolled ? 'var(--color-dark-brown)' : 'var(--color-cream)',
                    fontFamily: 'Cormorant Garamond, Georgia, serif',
                    letterSpacing: '0.12em',
                    transition: 'color 0.4s',
                  }}
                >
                  {link.label}
                  <span
                    className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-500"
                    style={{ backgroundColor: 'var(--color-rose)' }}
                  />
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => handleLink('#contact')}
                className="px-6 py-2.5 text-sm tracking-widest uppercase border transition-all duration-300 hover:bg-[var(--color-rose)] hover:border-[var(--color-rose)] hover:text-white"
                style={{
                  borderColor: scrolled ? 'var(--color-dark-brown)' : 'var(--color-cream)',
                  color: scrolled ? 'var(--color-dark-brown)' : 'var(--color-cream)',
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  letterSpacing: '0.12em',
                  transition: 'all 0.4s',
                }}
              >
                Boek nu
              </button>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-px"
              style={{ backgroundColor: scrolled ? 'var(--color-dark-brown)' : 'var(--color-cream)' }}
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-px"
              style={{ backgroundColor: scrolled ? 'var(--color-dark-brown)' : 'var(--color-cream)' }}
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-px"
              style={{ backgroundColor: scrolled ? 'var(--color-dark-brown)' : 'var(--color-cream)' }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-10"
            style={{ backgroundColor: 'var(--color-darkest)' }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08 }}
                onClick={() => handleLink(link.href)}
                className="text-4xl tracking-widest uppercase"
                style={{
                  color: 'var(--color-cream)',
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                }}
              >
                {link.label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              onClick={() => handleLink('#contact')}
              className="mt-4 px-10 py-4 text-xl tracking-widest uppercase border border-[var(--color-rose)] text-[var(--color-rose)]"
              style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
            >
              Boek nu
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
