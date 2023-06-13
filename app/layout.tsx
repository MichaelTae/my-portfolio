import Navbar from './components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Michael Stojanovic Portfolio',
  description: 'This is a website showcasing projects that I have worked on, as well as a little bit about myself.',
  creator: 'Michael Stojanovic',
  verification:{
    google:'lmaf14H557D6XcgZlkAKd6VXr1WXeoWtIfjauctQlXM'
  }
 
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Navbar />
        {children}</body>
    </html>
  )
}
