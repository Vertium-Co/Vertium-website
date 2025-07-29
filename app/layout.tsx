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
        url: '/images/og-image-cover.jpg',
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
    images: ['/images/og-image-cover.jpg'],
  },
  icons: {
    icon: '/images/logo-vertium-light.png',
    shortcut: '/images/logo-vertium-light.png',
    apple: '/images/logo-vertium-light.png',
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
