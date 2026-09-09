import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { DM_Mono, DM_Sans, DM_Serif_Display } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' })
const dmSerif = DM_Serif_Display({ subsets: ['latin'], weight: '400', variable: '--font-dm-serif' })
const dmMono = DM_Mono({ subsets: ['latin'], weight: '400', variable: '--font-dm-mono' })

export const metadata: Metadata = {
  title: 'uOttawa Canadian Historical Society',
  description: 'A student society for discussing, researching, exploring, and debating Canadian and Québécois history.',
  generator: 'v0.app',
  icons: {
    icon: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DUlJbVnyqbaY61P5I0oEYeIcGnnpww.png',
    shortcut: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DUlJbVnyqbaY61P5I0oEYeIcGnnpww.png',
    apple: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DUlJbVnyqbaY61P5I0oEYeIcGnnpww.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#102441',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${dmSans.variable} ${dmSerif.variable} ${dmMono.variable}`}><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
