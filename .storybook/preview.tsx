import type { Preview } from "@storybook/react"
import { ThemeProvider } from "@/components/providers/ThemeProvider"
import "@/styles/tailwind.css"
import React from "react"

// Apply theme classes immediately when Storybook loads
if (typeof window !== "undefined") {
  // Try to get theme from localStorage, or use defaults
  const storedData = localStorage.getItem("theme-storage")
  let mode = "dark"
  let theme = "cosmic-purple"

  if (storedData) {
    try {
      const parsed = JSON.parse(storedData)
      mode = parsed.state?.mode || "dark"
      theme = parsed.state?.theme || "cosmic-purple"
    } catch (e) {
      console.error("Failed to parse theme storage:", e)
    }
  }

  // Apply theme classes to document root
  const root = document.documentElement
  root.classList.remove("light", "dark", "theme-cosmic-purple", "theme-solar-yellow", "theme-nebula-blue")
  root.classList.add(mode)
  root.classList.add(`theme-${theme}`)
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
}

export default preview
