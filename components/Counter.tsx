"use client"

import { Minus, Plus, RotateCcw } from "lucide-react"
import { useCounterStore } from "@/lib/stores/counter"

export default function Counter() {
  const { count, increment, decrement, reset } = useCounterStore()

  return (
    <div className="border-border from-card to-muted rounded-xl border bg-gradient-to-br p-8">
      <h2 className="text-primary mb-6 text-center text-2xl font-bold">Zustand Counter Example</h2>

      <div className="flex flex-col items-center gap-6">
        <div className="text-primary text-5xl font-bold">{count}</div>

        <div className="flex gap-3">
          <button
            onClick={decrement}
            className="border-primary/50 bg-primary/20 text-primary hover:bg-primary/30 rounded-lg border p-3 transition-all hover:scale-105 active:scale-95"
            aria-label="Decrement"
          >
            <Minus className="h-5 w-5" />
          </button>

          <button
            onClick={increment}
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg p-3 transition-all hover:scale-105 active:scale-95"
            aria-label="Increment"
          >
            <Plus className="h-5 w-5" />
          </button>

          <button
            onClick={reset}
            className="border-primary/50 bg-primary/20 text-primary hover:bg-primary/30 rounded-lg border p-3 transition-all hover:scale-105 active:scale-95"
            aria-label="Reset"
          >
            <RotateCcw className="h-5 w-5" />
          </button>
        </div>

        <p className="text-muted-foreground mt-4 text-center text-sm">This counter uses Zustand for state management</p>
      </div>
    </div>
  )
}
