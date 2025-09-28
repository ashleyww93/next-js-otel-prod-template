"use client"

import { Moon, Palette, Sun } from "lucide-react"
import Card from "@/components/Card"
import { type Mode, type Theme, useThemeStore } from "@/lib/stores/theme"

export default function StyleSelector() {
  const { mode, theme, setMode, setTheme, toggleMode } = useThemeStore()

  const themes: { value: Theme; label: string; colorStyle: string }[] = [
    {
      value: "cosmic-purple",
      label: "Cosmic Purple",
      colorStyle: "bg-[#9333EA]",
    },
    {
      value: "solar-yellow",
      label: "Solar Yellow",
      colorStyle: "bg-[#FACC15]",
    },
    {
      value: "nebula-blue",
      label: "Nebula Blue",
      colorStyle: "bg-[#1877F2]",
    },
  ]

  const modes: { value: Mode; label: string; icon: React.ReactNode }[] = [
    { value: "light", label: "Light", icon: <Sun className="h-4 w-4" /> },
    { value: "dark", label: "Dark", icon: <Moon className="h-4 w-4" /> },
  ]

  return (
    <Card className="space-y-6" hover={false}>
      <div className="mb-4 flex items-center gap-2">
        <Palette className="text-muted-foreground h-5 w-5" />
        <h2 className="text-foreground text-lg font-semibold">Style Settings</h2>
      </div>

      <div className="space-y-4">
        <div>
          <label className="text-muted-foreground mb-3 block text-sm font-medium">Mode</label>
          <div className="grid grid-cols-2 gap-2">
            {modes.map((m) => (
              <button
                key={m.value}
                onClick={() => setMode(m.value)}
                className={`flex items-center justify-center gap-2 rounded-lg border-2 px-4 py-2 transition-all ${
                  mode === m.value
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border text-muted-foreground hover:border-border/80"
                } `}
              >
                {m.icon}
                <span className="font-medium">{m.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-muted-foreground mb-3 block text-sm font-medium">Theme</label>
          <div className="space-y-2">
            {themes.map((t) => (
              <button
                key={t.value}
                onClick={() => setTheme(t.value)}
                className={`flex w-full items-center gap-3 rounded-lg border-2 px-4 py-3 transition-all ${
                  theme === t.value ? "border-primary bg-primary/10" : "border-border hover:border-border/80"
                } `}
              >
                <div className={`h-6 w-6 rounded-full ${t.colorStyle}`} />
                <span className={`font-medium ${theme === t.value ? "text-primary" : "text-muted-foreground"}`}>
                  {t.label}
                </span>
                {theme === t.value && (
                  <span className="bg-primary/20 text-primary ml-auto rounded px-2 py-1 text-xs">Active</span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="border-border border-t pt-4">
          <button
            onClick={toggleMode}
            className="bg-primary text-primary-foreground hover:bg-primary/90 flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2 transition-colors"
          >
            {mode === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            Toggle to {mode === "light" ? "Dark" : "Light"} Mode
          </button>
        </div>
      </div>
    </Card>
  )
}
