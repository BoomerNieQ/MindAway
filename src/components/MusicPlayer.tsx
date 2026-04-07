'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const [visible, setVisible] = useState(false)

  // Show after a short delay so it doesn't distract on load
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 2000)
    return () => clearTimeout(t)
  }, [])

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
    } else {
      audio.play().catch(() => {})
    }
    setPlaying(!playing)
  }

  return (
    <>
      <audio ref={audioRef} src="/ambient.mp3" loop preload="none" />

      <AnimatePresence>
        {visible && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            onClick={toggle}
            title={playing ? 'Muziek pauzeren' : 'Muziek afspelen'}
            className="fixed bottom-8 right-8 z-50 flex items-center gap-3 px-5 py-3 group"
            style={{
              backgroundColor: 'rgba(28,16,10,0.85)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(196,145,122,0.3)',
            }}
          >
            {/* Animated bars when playing */}
            <span className="flex items-end gap-[3px] h-4">
              {[1, 2, 3].map((i) => (
                <motion.span
                  key={i}
                  className="block w-[3px] rounded-full"
                  style={{ backgroundColor: 'var(--color-rose)' }}
                  animate={playing
                    ? { height: ['6px', '14px', '6px'], transition: { duration: 0.7 + i * 0.15, repeat: Infinity, ease: 'easeInOut' } }
                    : { height: '6px' }
                  }
                />
              ))}
            </span>

            <span
              style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--color-warm)',
              }}
            >
              {playing ? 'Pauze' : 'Sfeer'}
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
