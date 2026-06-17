import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000')

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: '김호영 | Backend Developer',
  description:
    'Kotlin·Spring 기반 백엔드 개발자 김호영의 포트폴리오. 제로셋(ZeroSet) Ledger 시스템, 하루의끝, 타로픽 등 프로젝트와 경력을 소개합니다.',
  openGraph: {
    title: '김호영 | Backend Developer',
    description: 'Kotlin·Spring 기반 백엔드 개발자 김호영의 포트폴리오.',
    type: 'website',
    locale: 'ko_KR',
  },
  twitter: {
    card: 'summary_large_image',
    title: '김호영 | Backend Developer',
    description: 'Kotlin·Spring 기반 백엔드 개발자 김호영의 포트폴리오.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/pretendard@1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
