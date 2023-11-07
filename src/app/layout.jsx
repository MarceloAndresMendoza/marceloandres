import { Barlow_Condensed } from 'next/font/google'
import './globals.css'
const barlowCondensed = Barlow_Condensed({
  weight: ['400', '500'],
  styles: ['normal', 'italic'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'marceloandres.cl',
  description: 'Desarrollador Full Stack',
  keywords: 'nextjs, react, javascript, express, aws',

  // Open Graph
  ogTitle: 'marceloandres.cl',
  ogDescription: 'Desarrollador Full Stack',
  ogType: 'website',
  ogImage: '',
  ogURL: 'https://marceloandres.cl',
  ogSiteName: 'marceloandres.cl',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${barlowCondensed.className} min-h-screen bg-slate-900`}>{children}</body>
    </html>
  )
}
