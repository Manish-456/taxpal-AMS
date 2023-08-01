import Navbar from '@/components/navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Footer from '@/components/footer'

const inter = Poppins({
  weight : ['400', '600', '800'],
  subsets : ["latin"]
})

export const metadata: Metadata = {
  title: 'TaxPal - Accounting made simple',
  description: 'Created by Manish Tamang',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=" overflow-hidden">

        <Navbar />
        {children}
        <Footer />
        </div>
        </body>
    </html>
  )
}
