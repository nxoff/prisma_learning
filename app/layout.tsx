import '@/styles/globals.css'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'rel'
}

const RootLayout = ({ children } : { children: React.ReactNode }) => {
  return (
    <html lang="en">
        <body className={inter.className}>
            <main className="app">
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout