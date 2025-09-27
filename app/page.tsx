import { Layers, Palette, Zap } from "lucide-react"
import Counter from "@/components/Counter"

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0a0118] p-8">
      <div className="w-full max-w-4xl space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-5xl font-bold text-transparent">
            Next.js Template
          </h1>
          <p className="text-xl text-gray-400">
            A modern Next.js 15.5.4 template with Tailwind CSS 4.1, Zustand & Lucide Icons
          </p>
        </div>

        <Counter />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-lg border border-purple-900/50 bg-[#1a0f2e] p-6 transition-colors hover:bg-[#241640]">
            <div className="mb-2 flex items-center gap-3">
              <Zap className="h-5 w-5 text-purple-400" />
              <h2 className="text-lg font-semibold text-purple-400">Fast Development</h2>
            </div>
            <p className="text-sm text-gray-400">Built with Turbopack for lightning-fast HMR and builds.</p>
          </div>

          <div className="rounded-lg border border-purple-900/50 bg-[#1a0f2e] p-6 transition-colors hover:bg-[#241640]">
            <div className="mb-2 flex items-center gap-3">
              <Layers className="h-5 w-5 text-purple-400" />
              <h2 className="text-lg font-semibold text-purple-400">Modern Stack</h2>
            </div>
            <p className="text-sm text-gray-400">Next.js 15.5.4 with App Router, React Server Components & Zustand.</p>
          </div>

          <div className="rounded-lg border border-purple-900/50 bg-[#1a0f2e] p-6 transition-colors hover:bg-[#241640]">
            <div className="mb-2 flex items-center gap-3">
              <Palette className="h-5 w-5 text-purple-400" />
              <h2 className="text-lg font-semibold text-purple-400">Beautiful Design</h2>
            </div>
            <p className="text-sm text-gray-400">Tailwind CSS 4.1 with Lucide icons and purple-themed dark mode.</p>
          </div>
        </div>

        <div className="mt-12 flex justify-center gap-4">
          <a
            href="https://nextjs.org/docs"
            className="rounded-lg bg-purple-500 px-6 py-3 font-medium text-white transition-colors hover:bg-purple-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js Docs
          </a>
          <a
            href="https://tailwindcss.com/docs"
            className="rounded-lg border border-purple-900/50 bg-[#1a0f2e] px-6 py-3 font-medium text-white transition-colors hover:bg-[#241640]"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tailwind Docs
          </a>
        </div>
      </div>
    </main>
  )
}
