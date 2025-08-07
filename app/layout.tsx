import type React from "react"
import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "EXITS",
  description: "Master the art of the perfect exit in this retro arcade game",
  icons: {
    icon: "/flame-favicon-transparent.png",
    shortcut: "/flame-favicon-transparent.png",
    apple: "/flame-favicon-transparent.png",
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <link rel="icon" type="image/png" href="/flame-favicon-transparent.png" />
        <link rel="shortcut icon" href="/flame-favicon-transparent.png" />
        <link rel="apple-touch-icon" href="/flame-favicon-transparent.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
