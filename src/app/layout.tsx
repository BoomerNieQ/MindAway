import type { Metadata } from 'next'
import { Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import SmoothScroll from '@/components/SmoothScroll'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'MindAway — Massage Therapist Sofie Willems | Lanaken',
  description:
    'Ontspan, herstel en herleef bij MindAway. Gecertificeerd massagetherapeut Sofie Willems biedt relaxerende massages, kaarsenmassages en cupping therapie aan in Lanaken.',
  keywords: 'massage Lanaken, massagetherapeut, relaxerende massage, cupping, kaarsenmassage, MindAway, Sofie Willems',
  openGraph: {
    title: 'MindAway — Massage Therapist | Lanaken',
    description: 'Kom tot rust tijdens een relaxerende massage bij MindAway in Lanaken.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={`${cormorant.variable} antialiased`}>
      <body className="min-h-full flex flex-col" style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  )
}
