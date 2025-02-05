import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blog de IA - Inovações e Tendências',
  description: 'Um blog sobre as últimas novidades em Inteligência Artificial',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <nav className="bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg">
          <div className="max-w-4xl mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-2xl font-bold hover:text-purple-200 transition-colors">
                IA Insights
              </Link>
              <div className="flex space-x-8">
                <Link href="/" className="hover:text-purple-200 transition-colors">
                  Home
                </Link>
                <Link href="/about" className="hover:text-purple-200 transition-colors">
                  Sobre
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
          {children}
        </div>
        <footer className="bg-gray-800 text-white py-8">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p>© 2024 IA Insights. Explorando o futuro da tecnologia.</p>
          </div>
        </footer>
      </body>
    </html>
  )
} 