import { Zap, Layers, Palette } from 'lucide-react';
import Counter from '@/components/Counter';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8 bg-[#0a0118]">
      <div className="max-w-4xl w-full space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Next.js Template
          </h1>
          <p className="text-xl text-gray-400">
            A modern Next.js 15.5.4 template with Tailwind CSS 4.1, Zustand & Lucide Icons
          </p>
        </div>

        <Counter />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="p-6 rounded-lg bg-[#1a0f2e] border border-purple-900/50 hover:bg-[#241640] transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <Zap className="w-5 h-5 text-purple-400" />
              <h2 className="text-lg font-semibold text-purple-400">Fast Development</h2>
            </div>
            <p className="text-sm text-gray-400">
              Built with Turbopack for lightning-fast HMR and builds.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-[#1a0f2e] border border-purple-900/50 hover:bg-[#241640] transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <Layers className="w-5 h-5 text-purple-400" />
              <h2 className="text-lg font-semibold text-purple-400">Modern Stack</h2>
            </div>
            <p className="text-sm text-gray-400">
              Next.js 15.5.4 with App Router, React Server Components & Zustand.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-[#1a0f2e] border border-purple-900/50 hover:bg-[#241640] transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <Palette className="w-5 h-5 text-purple-400" />
              <h2 className="text-lg font-semibold text-purple-400">Beautiful Design</h2>
            </div>
            <p className="text-sm text-gray-400">
              Tailwind CSS 4.1 with Lucide icons and purple-themed dark mode.
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-12">
          <a
            href="https://nextjs.org/docs"
            className="px-6 py-3 rounded-lg bg-purple-500 hover:bg-purple-600 text-white font-medium transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js Docs
          </a>
          <a
            href="https://tailwindcss.com/docs"
            className="px-6 py-3 rounded-lg bg-[#1a0f2e] hover:bg-[#241640] border border-purple-900/50 text-white font-medium transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tailwind Docs
          </a>
        </div>
      </div>
    </main>
  );
}