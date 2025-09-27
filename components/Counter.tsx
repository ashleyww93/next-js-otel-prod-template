"use client"

import { Minus, Plus, RotateCcw } from "lucide-react"
import { useCounterStore } from "@/lib/stores/counter"

export default function Counter() {
  const { count, increment, decrement, reset } = useCounterStore()

  return (
    <div className="rounded-xl border border-purple-900/50 bg-gradient-to-br from-[#1a0f2e] to-[#241640] p-8">
      <h2 className="mb-6 text-center text-2xl font-bold text-purple-400">Zustand Counter Example</h2>

      <div className="flex flex-col items-center gap-6">
        <div className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-5xl font-bold text-transparent text-white">
          {count}
        </div>

        <div className="flex gap-3">
          <button
            onClick={decrement}
            className="rounded-lg border border-purple-500/50 bg-purple-500/20 p-3 text-purple-400 transition-all hover:scale-105 hover:bg-purple-500/30 active:scale-95"
            aria-label="Decrement"
          >
            <Minus className="h-5 w-5" />
          </button>

          <button
            onClick={increment}
            className="rounded-lg bg-purple-500 p-3 text-white transition-all hover:scale-105 hover:bg-purple-600 active:scale-95"
            aria-label="Increment"
          >
            <Plus className="h-5 w-5" />
          </button>

          <button
            onClick={reset}
            className="rounded-lg border border-purple-500/50 bg-purple-500/20 p-3 text-purple-400 transition-all hover:scale-105 hover:bg-purple-500/30 active:scale-95"
            aria-label="Reset"
          >
            <RotateCcw className="h-5 w-5" />
          </button>
        </div>

        <p className="mt-4 text-center text-sm text-gray-400">This counter uses Zustand for state management</p>
      </div>
    </div>
  )
}
