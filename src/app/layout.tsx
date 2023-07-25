'use client'
import '@/styles/globals.css'
import theme from '@/styles/theme'
import { ThemeProvider } from '@emotion/react'
import { Lexend } from 'next/font/google'

const lexend = Lexend({ subsets: ['latin'] })


export const metadata = {
  title: 'Portfolio Website',
  description: 'Erik\'s portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lexend.className}>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
