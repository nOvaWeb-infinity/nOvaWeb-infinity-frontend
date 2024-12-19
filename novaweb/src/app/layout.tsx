import type { Metadata } from 'next'
import { Geist, Geist_Mono, Gruppo } from 'next/font/google'

import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'

import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const gruppo = Gruppo({
  variable: '--font-gruppo',
  subsets: ['latin'],
  weight: '400',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${gruppo.variable}  antialiased flex flex-col min-h-screen`}>
        <Header /> {children} <Footer />
      </body>
    </html>
  )
}
