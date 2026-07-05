import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import PeriodicTableViewer from '@/components/ui/PeriodicTableViewer'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })

export const metadata: Metadata = {
  title: 'ChemStep — 단계별 화학 학습',
  description: '고등학교 화학을 기초부터 응용까지 단계적으로 학습하세요',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={geist.variable}>
      <body className="min-h-screen bg-gray-50 font-sans antialiased" suppressHydrationWarning>
        <Header />
        <main className="mx-auto max-w-4xl px-4 py-8">{children}</main>
        <PeriodicTableViewer />
      </body>
    </html>
  )
}
