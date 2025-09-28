import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/styles/tailwind.css"
import { ThemeProvider } from "@/components/providers/ThemeProvider"

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
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
