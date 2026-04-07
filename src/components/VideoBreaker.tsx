'use client'

import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function VideoBreaker() {
  const ref = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // Subtle parallax on the video itself
  const videoY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  // Play/pause based on visibility
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{ height: 'clamp(320px, 55vw, 700px)' }}
    >
      {/* Video with parallax */}
      <motion.div className="absolute inset-0 w-full h-[120%] -top-[10%]" style={{ y: videoY }}>
        <video
          ref={videoRef}
          src="/vid2.mp4"
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Dark cinematic overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(28,16,10,0.55) 0%, rgba(28,16,10,0.2) 50%, rgba(28,16,10,0.55) 100%)',
        }}
      />

      {/* Centered quote */}
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: 'clamp(1.6rem, 4vw, 3.2rem)',
            fontWeight: 300,
            fontStyle: 'italic',
            color: 'var(--color-cream)',
            textAlign: 'center',
            maxWidth: '700px',
            lineHeight: 1.4,
            letterSpacing: '0.02em',
          }}
        >
          "Geef je lichaam de rust<br />die het verdient."
        </motion.p>
      </div>
    </div>
  )
}
