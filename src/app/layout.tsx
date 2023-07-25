import '@/styles/globals.css'
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
        {children}
      </body>
    </html>
  )
}
