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
  title: 'MindAway — Massage Lanaken | Sofie Willems',
  description:
    'MindAway — massagepraktijk van Sofie Willems in Lanaken. Ontspanningsmassage, cuppingmassage en combinatiemassage. Op afspraak. Boek via WhatsApp.',
  keywords: 'massage Lanaken, massagepraktijk Lanaken, ontspanningsmassage, cuppingmassage, combinatiemassage, MindAway, Sofie Willems, massage therapist Lanaken, massage afspraak Lanaken',
  authors: [{ name: 'Sofie Willems' }],
  creator: 'Sofie Willems',
  metadataBase: new URL('https://mindaway.be'),
  alternates: { canonical: 'https://mindaway.be' },
  openGraph: {
    title: 'MindAway — Massage Lanaken | Sofie Willems',
    description: 'Massagepraktijk van Sofie Willems in Lanaken. Ontspanningsmassage, cuppingmassage en combinatiemassage. Op afspraak.',
    type: 'website',
    url: 'https://mindaway.be',
    siteName: 'MindAway',
    locale: 'nl_BE',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  verification: {
    google: 'xbnMPReXqbcoQWd2MOlkevEpI4oAL-CDIt',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'MindAway',
  description: 'Massagepraktijk van Sofie Willems in Lanaken. Ontspanningsmassage, cuppingmassage en combinatiemassage.',
  url: 'https://mindaway.be',
  telephone: '+32487012332',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lanaken',
    addressCountry: 'BE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 50.8748,
    longitude: 5.6439,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    description: 'Op afspraak',
  },
  priceRange: '€€',
  sameAs: [
    'https://www.facebook.com/p/MindAway-100088384664770/',
    'https://www.instagram.com/mindaway.massage/',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={`${cormorant.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col" style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  )
}
