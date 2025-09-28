"use client"

import { Moon, Palette, Sun } from "lucide-react"
import Card from "@/components/Card"
import { type Mode, type Theme, useThemeStore } from "@/lib/stores/theme"

export default function StyleSelector() {
  const { mode, theme, setMode, setTheme, toggleMode } = useThemeStore()

  const themes: { value: Theme; label: string; colorStyle: string }[] = [
    {
      value: "modern",
      label: "Modern",
      colorStyle: "bg-[#a855f7]",
    },
    {
      value: "electric-yellow",
      label: "Electric Yellow",
      colorStyle: "bg-[#facc15]",
    },
    {
      value: "social-blue",
      label: "Social Blue",
      colorStyle: "bg-[#1877f2]",
    },
  ]

  const modes: { value: Mode; label: string; icon: React.ReactNode }[] = [
    { value: "light", label: "Light", icon: <Sun className="h-4 w-4" /> },
    { value: "dark", label: "Dark", icon: <Moon className="h-4 w-4" /> },
  ]

  return (
    <Card className="space-y-6" hover={false}>
      <div className="mb-4 flex items-center gap-2">
        <Palette className="h-5 w-5 text-gray-600 dark:text-gray-400" />
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Style Settings</h2>
      </div>

      <div className="space-y-4">
        <div>
          <label className="mb-3 block text-sm font-medium text-gray-700 dark:text-gray-300">Mode</label>
          <div className="grid grid-cols-2 gap-2">
            {modes.map((m) => (
              <button
                key={m.value}
                onClick={() => setMode(m.value)}
                className={`flex items-center justify-center gap-2 rounded-lg border-2 px-4 py-2 transition-all ${
                  mode === m.value
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-gray-200 text-gray-600 hover:border-gray-300 dark:border-gray-700 dark:text-gray-400 dark:hover:border-gray-600"
                } `}
              >
                {m.icon}
                <span className="font-medium">{m.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="mb-3 block text-sm font-medium text-gray-700 dark:text-gray-300">Theme</label>
          <div className="space-y-2">
            {themes.map((t) => (
              <button
                key={t.value}
                onClick={() => setTheme(t.value)}
                className={`flex w-full items-center gap-3 rounded-lg border-2 px-4 py-3 transition-all ${
                  theme === t.value
                    ? "border-primary bg-primary/10"
                    : "border-gray-200 hover:border-gray-300 dark:border-gray-700 dark:hover:border-gray-600"
                } `}
              >
                <div className={`h-6 w-6 rounded-full ${t.colorStyle}`} />
                <span
                  className={`font-medium ${theme === t.value ? "text-primary" : "text-gray-700 dark:text-gray-300"}`}
                >
                  {t.label}
                </span>
                {theme === t.value && (
                  <span className="text-primary bg-primary/20 ml-auto rounded px-2 py-1 text-xs">Active</span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-200 pt-4 dark:border-gray-800">
          <button
            onClick={toggleMode}
            className="bg-primary hover:bg-primary-dark flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2 text-white transition-colors"
          >
            {mode === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            Toggle to {mode === "light" ? "Dark" : "Light"} Mode
          </button>
        </div>
      </div>
    </Card>
  )
}
