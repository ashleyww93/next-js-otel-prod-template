"use client"

import { useEffect } from "react"
import { useThemeStore } from "@/lib/stores/theme"

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { mode, theme } = useThemeStore()

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
  }, [mode, theme])

  return <>{children}</>
}
