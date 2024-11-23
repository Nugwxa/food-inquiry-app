import '@/styles/globals.css'
import { Roboto } from 'next/font/google'
import { Theme as ThemeProvider } from '@radix-ui/themes'
import type { Metadata } from 'next'

const robotoFont = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['100', '300', '400', '500', '700', '900'],
})

export const metadata: Metadata = {
  title: 'Food inquiry App',
  description: 'Recipes, Restaurants',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body data-theme="gray" className={`${robotoFont.variable}`}>
        <ThemeProvider appearance="light" accentColor="gray">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
