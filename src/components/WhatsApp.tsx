'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const WHATSAPP_NUMBER = '0032487012332'
const WHATSAPP_MESSAGE = 'Hallo Sofie, ik wil graag een afspraak maken bij MindAway.'

export default function WhatsApp() {
  const [visible, setVisible] = useState(false)
  const [tooltip, setTooltip] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 2500)
    return () => clearTimeout(t)
  }, [])

  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed bottom-8 left-8 z-50 flex items-center gap-3 px-5 py-3"
          style={{
            backgroundColor: 'rgba(28,16,10,0.85)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(196,145,122,0.3)',
          }}
          onMouseEnter={() => setTooltip(true)}
          onMouseLeave={() => setTooltip(false)}
        >
          {/* WhatsApp icon */}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"
              fill="var(--color-rose)"
            />
            <path
              d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.504 5.84L.057 23.617a.5.5 0 00.611.611l5.777-1.447A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.802 9.802 0 01-5.003-1.368l-.358-.213-3.712.928.944-3.653-.234-.376A9.799 9.799 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"
              fill="var(--color-rose)"
            />
          </svg>

          <span
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--color-warm)',
            }}
          >
            WhatsApp
          </span>

          {/* Tooltip */}
          <AnimatePresence>
            {tooltip && (
              <motion.span
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.2 }}
                className="absolute -top-10 left-0 whitespace-nowrap px-3 py-1.5 text-xs"
                style={{
                  backgroundColor: 'rgba(28,16,10,0.95)',
                  border: '1px solid rgba(196,145,122,0.2)',
                  color: 'var(--color-warm)',
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  letterSpacing: '0.1em',
                }}
              >
                Stuur een bericht
              </motion.span>
            )}
          </AnimatePresence>
        </motion.a>
      )}
    </AnimatePresence>
  )
}
