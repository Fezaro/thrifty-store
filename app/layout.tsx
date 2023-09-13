import Footer from '@/components/footer'
import './globals.css'
import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import Navbar from '@/components/navbar'
import { ToasterProvider } from '@/providers/toast-provider'

const font = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Thrify G Marketplace',
  description: 'Find a great deal on resale goods',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar/>
        <ToasterProvider/>
        {children}

        <Footer/> 
        </body>

    </html>
  )
}
