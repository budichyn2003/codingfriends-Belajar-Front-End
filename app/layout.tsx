import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CodingFriends - Your Coding Buddy",
  description: "Music, Movies, and Memes for Developers - Your ultimate community for programmers",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${jetbrainsMono.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
