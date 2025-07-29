import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/common/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.vertium.com.br'),
  title: {
    default: 'Vertium Co. | Especialistas em Transformação de Tecnologia',
    template: `%s | Vertium Co.`,
  },
  description:
    'Especialistas em desenvolvimento de software e soluções digitais inovadoras e sob medida para alavancar o seu negócio.',
  openGraph: {
    title: 'Vertium Co. | Especialistas em Transformação de Tecnologia',
    description:
      'Especialistas em desenvolvimento de software e soluções digitais inovadoras e sob medida para alavancar o seu negócio.',
    url: 'https://www.vertium.com.br',
    siteName: 'Vertium Co.',
    images: [
      {
        url: '/images/vertium-cover.jpg',
        width: 1200,
        height: 630,
        alt: 'Vertium Co. Cover Image',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vertium Co. | Especialistas em Transformação de Tecnologia',
    description:
      'Especialistas em desenvolvimento de software e soluções digitais inovadoras e sob medida para alavancar o seu negócio.',
    images: ['/images/vertium-cover.jpg'],
  },
  icons: {
    icon: '/images/vertium-logo.png',
    shortcut: '/images/vertium-logo.png',
    apple: '/images/vertium-logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
