import { Layers, Palette, Zap } from "lucide-react"
import Counter from "@/components/Counter"
import StyleSelector from "@/components/StyleSelector"
import Card from "@/components/Card"

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-8 transition-colors">
      <div className="w-full max-w-4xl space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="text-primary text-5xl font-bold">
            Next.js Template
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            A modern Next.js 15.5.4 template with Tailwind CSS 4.1, Zustand & Lucide Icons
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Counter />
          <StyleSelector />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card>
            <div className="mb-2 flex items-center gap-3">
              <Zap className="text-primary h-5 w-5" />
              <h2 className="text-primary text-lg font-semibold">Fast Development</h2>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Built with Turbopack for lightning-fast HMR and builds.
            </p>
          </Card>

          <Card>
            <div className="mb-2 flex items-center gap-3">
              <Layers className="text-primary h-5 w-5" />
              <h2 className="text-primary text-lg font-semibold">Modern Stack</h2>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Next.js 15.5.4 with App Router, React Server Components & Zustand.
            </p>
          </Card>

          <Card>
            <div className="mb-2 flex items-center gap-3">
              <Palette className="text-primary h-5 w-5" />
              <h2 className="text-primary text-lg font-semibold">Beautiful Design</h2>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Tailwind CSS 4.1 with Lucide icons and customizable themes.
            </p>
          </Card>
        </div>

        <div className="mt-12 flex justify-center gap-4">
          <a
            href="https://nextjs.org/docs"
            className="rounded-lg bg-primary px-6 py-3 font-medium text-white transition-colors hover:bg-primary-dark"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js Docs
          </a>
          <a
            href="https://tailwindcss.com/docs"
            className="rounded-lg border border-gray-200 bg-white px-6 py-3 font-medium text-gray-900 transition-colors hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-900/50 dark:text-white dark:hover:bg-gray-900/70"
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
