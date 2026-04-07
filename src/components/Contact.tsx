'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  const [form, setForm] = useState({ naam: '', email: '', telefoon: '', bericht: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  const inputStyle = {
    backgroundColor: 'transparent',
    borderBottom: '1px solid rgba(155,123,107,0.5)',
    color: 'var(--color-cream)',
    fontFamily: 'Cormorant Garamond, Georgia, serif',
    fontSize: '1.05rem',
    padding: '12px 0',
    width: '100%',
    outline: 'none',
    transition: 'border-color 0.3s',
  }

  const labelStyle = {
    fontFamily: 'Cormorant Garamond, Georgia, serif',
    fontSize: '0.7rem',
    letterSpacing: '0.25em',
    textTransform: 'uppercase' as const,
    color: 'var(--color-brown)',
  }

  return (
    <section
      id="contact"
      className="py-32 md:py-48"
      style={{ backgroundColor: 'var(--color-darkest)' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-32">
        {/* Left: info */}
        <div ref={ref} className="flex flex-col gap-10">
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
                  <span
                    style={{
                      color: 'var(--color-warm)',
                      fontFamily: 'Cormorant Garamond, Georgia, serif',
                      fontSize: '1.1rem',
                    }}
                  >
                    {item.value}
                  </span>
                )}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
        >
          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center h-full gap-6 py-20 text-center"
            >
              <span
                style={{
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  fontSize: '4rem',
                  color: 'var(--color-rose)',
                }}
              >
                ✓
              </span>
              <p
                style={{
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  color: 'var(--color-cream)',
                  fontSize: '1.5rem',
                }}
              >
                Bericht ontvangen!
              </p>
              <p style={{ color: 'var(--color-warm)', fontFamily: 'Cormorant Garamond, Georgia, serif' }}>
                Sofie neemt zo snel mogelijk contact met u op.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              {[
                { name: 'naam', label: 'Naam', type: 'text', placeholder: 'Uw naam' },
                { name: 'email', label: 'E-mail', type: 'email', placeholder: 'uw@email.be' },
                { name: 'telefoon', label: 'Telefoon', type: 'tel', placeholder: '+32 ...' },
              ].map((field) => (
                <div key={field.name} className="flex flex-col gap-2">
                  <label style={labelStyle}>{field.label}</label>
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={form[field.name as keyof typeof form]}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                    className="placeholder-[rgba(155,123,107,0.5)] focus:border-[var(--color-rose)]"
                  />
                </div>
              ))}
              <div className="flex flex-col gap-2">
                <label style={labelStyle}>Bericht</label>
                <textarea
                  name="bericht"
                  placeholder="Welke behandeling interesseert u? Heeft u specifieke wensen?"
                  value={form.bericht}
                  onChange={handleChange}
                  rows={4}
                  style={{ ...inputStyle, resize: 'none' }}
                  className="placeholder-[rgba(155,123,107,0.5)] focus:border-[var(--color-rose)]"
                />
              </div>

              <button
                type="submit"
                className="mt-4 self-start px-10 py-4 text-sm tracking-widest uppercase transition-all duration-400"
                style={{
                  border: '1px solid var(--color-rose)',
                  color: 'var(--color-rose)',
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  letterSpacing: '0.2em',
                  transition: 'all 0.4s cubic-bezier(0.76,0,0.24,1)',
                }}
                onMouseEnter={(e) => {
                  const t = e.currentTarget
                  t.style.backgroundColor = 'var(--color-rose)'
                  t.style.color = 'var(--color-cream)'
                }}
                onMouseLeave={(e) => {
                  const t = e.currentTarget
                  t.style.backgroundColor = 'transparent'
                  t.style.color = 'var(--color-rose)'
                }}
              >
                Verstuur bericht
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
