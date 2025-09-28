import { create } from "zustand"
import { persist } from "zustand/middleware"

export type Mode = "light" | "dark"
export type Theme = "modern" | "electric-yellow" | "social-blue"

interface ThemeState {
  mode: Mode
  theme: Theme
  setMode: (mode: Mode) => void
  setTheme: (theme: Theme) => void
  toggleMode: () => void
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      mode: "dark",
      theme: "modern",
      setMode: (mode) => set({ mode }),
      setTheme: (theme) => set({ theme }),
      toggleMode: () => set((state) => ({ mode: state.mode === "light" ? "dark" : "light" })),
    }),
    {
      name: "theme-storage",
    }
  )
)
