import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Prova - Accountability that feels good',
  description: 'Set goals, add friends, post proof, and get hype. Accountability that actually feels good.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-orbit antialiased text-black" style={{ backgroundColor: '#FDFFF5' }}>{children}</body>
    </html>
  )
}
