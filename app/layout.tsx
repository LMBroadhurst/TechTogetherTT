"use client"
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/global/Header'
import Providers from './Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TechTogether',
  description: 'TechTogether',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  
  return <html lang="en">
    <body className={inter.className}>
    
    <Providers>
      <Header />
      {children}
    </Providers>

    </body>
  </html>
}
