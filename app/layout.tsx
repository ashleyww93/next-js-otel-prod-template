import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../styles/tailwind.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Next.js Template",
  description: "A modern Next.js template with Tailwind CSS",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
