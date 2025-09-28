"use client"

import { useEffect, useState } from "react"
import { useThemeStore } from "@/lib/stores/theme"

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { mode, theme } = useThemeStore()
  const [mounted, setMounted] = useState(false)

  // Apply theme classes immediately on mount and when they change
  useEffect(() => {
    const root = document.documentElement

    // Remove all mode classes
    root.classList.remove("light", "dark")

    // Remove all theme classes
    root.classList.remove("theme-cosmic-purple", "theme-solar-yellow", "theme-nebula-blue")

    // Add current mode
    root.classList.add(mode)

    // Add theme class
    root.classList.add(`theme-${theme}`)

    // Mark as mounted after applying classes
    setMounted(true)
  }, [mode, theme])

  // Prevent rendering children until theme is applied to avoid flash
  if (!mounted) {
    // Return a minimal loader that uses safe, theme-agnostic styles
    return (
      <div className="fixed inset-0 flex items-center justify-center" style={{ backgroundColor: "#0A0118" }}>
        <div
          className="h-8 w-8 animate-spin rounded-full border-4 border-transparent"
          style={{ borderTopColor: "#9333EA", borderRightColor: "#9333EA" }}
        />
      </div>
    )
  }

  return <>{children}</>
}
