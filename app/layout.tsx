import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Provider } from '@/components/Provider'

import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Alysson Carvalho',
  description: 'Alysson Carvalho is a software engineer based in Brazil. He is a full-stack developer, but he also has a passion for design and user experience.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white text-black dark:bg-[#090906] dark:text-white h-full selection:bg-gray dark:selection:bg-gray-800`}>
        <Provider>
          <Navbar />  
          <main className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
            {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}
