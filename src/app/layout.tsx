import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Psikolog Nora Ördekoğlu - Uzman Psikolojik Danışmanlık | İstanbul',
  description: 'Uzman Psikolog Nora Ördekoğlu ile bireysel terapi, çift terapisi, cinsel terapi ve online terapi hizmetleri. İstanbul Beşiktaş\'ta profesyonel psikolojik destek. Kaygı, depresyon, travma ve bağlanma sorunları için uzman terapi.',
  keywords: 'psikolog, nora ördekoğlu, psikolojik danışmanlık, terapi, bireysel terapi, çift terapisi, cinsel terapi, online terapi, istanbul, beşiktaş, kaygı, depresyon, travma, bağlanma sorunları, panik atak, OKB, özgüven, ilişki problemleri',
  authors: [{ name: 'Nora Ördekoğlu' }],
  creator: 'Nora Ördekoğlu',
  publisher: 'Nora Ördekoğlu',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://nora-psikolog.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Psikolog Nora Ördekoğlu - Uzman Psikolojik Danışmanlık',
    description: 'Uzman Psikolog Nora Ördekoğlu ile bireysel terapi, çift terapisi, cinsel terapi ve online terapi hizmetleri. İstanbul Beşiktaş\'ta profesyonel psikolojik destek.',
    url: 'https://nora-psikolog.com',
    siteName: 'Psikolog Nora Ördekoğlu',
    locale: 'tr_TR',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Psikolog Nora Ördekoğlu - Uzman Psikolojik Danışmanlık',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Psikolog Nora Ördekoğlu - Uzman Psikolojik Danışmanlık',
    description: 'Uzman Psikolog Nora Ördekoğlu ile bireysel terapi, çift terapisi, cinsel terapi ve online terapi hizmetleri.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}