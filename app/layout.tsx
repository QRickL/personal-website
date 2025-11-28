import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Caveat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
// <CHANGE> Adding Caveat font for handwritten aesthetic
const _caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat" })

export const metadata: Metadata = {
  title: "Rick Li",
  description: "Rick's personal website",
  generator: "vibecoded hahaha",
  icons: {
    icon: [
      {
        url: "/images/icon.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/images/icon.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: "/images/icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${_caveat.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
