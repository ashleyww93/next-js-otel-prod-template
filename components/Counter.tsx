'use client';

import { Plus, Minus, RotateCcw } from 'lucide-react';
import { useCounterStore } from '@/lib/stores/counter';

export default function Counter() {
  const { count, increment, decrement, reset } = useCounterStore();

  return (
    <div className="p-8 rounded-xl bg-gradient-to-br from-[#1a0f2e] to-[#241640] border border-purple-900/50">
      <h2 className="text-2xl font-bold text-purple-400 mb-6 text-center">
        Zustand Counter Example
      </h2>

      <div className="flex flex-col items-center gap-6">
        <div className="text-5xl font-bold text-white bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
          {count}
        </div>

        <div className="flex gap-3">
          <button
            onClick={decrement}
            className="p-3 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/50 text-purple-400 transition-all hover:scale-105 active:scale-95"
            aria-label="Decrement"
          >
            <Minus className="w-5 h-5" />
          </button>

          <button
            onClick={increment}
            className="p-3 rounded-lg bg-purple-500 hover:bg-purple-600 text-white transition-all hover:scale-105 active:scale-95"
            aria-label="Increment"
          >
            <Plus className="w-5 h-5" />
          </button>

          <button
            onClick={reset}
            className="p-3 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/50 text-purple-400 transition-all hover:scale-105 active:scale-95"
            aria-label="Reset"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
        </div>

        <p className="text-sm text-gray-400 text-center mt-4">
          This counter uses Zustand for state management
        </p>
      </div>
    </div>
  );
}