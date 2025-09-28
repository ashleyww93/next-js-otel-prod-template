"use client"

import { useEffect } from "react"
import { useThemeStore } from "@/lib/stores/theme"

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { mode, theme } = useThemeStore()

  useEffect(() => {
    const root = document.documentElement

    root.classList.remove("light", "dark")
    root.classList.add(mode)

    root.setAttribute("data-theme", theme)
  }, [mode, theme])

  return <>{children}</>
}
