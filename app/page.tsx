import { Layers, Palette, Zap } from "lucide-react"
import Card from "@/components/Card"
import Counter from "@/components/Counter"
import Grid from "@/components/Grid"
import StyleSelector from "@/components/StyleSelector"

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-8 transition-colors">
      <div className="w-full max-w-4xl space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="text-primary text-5xl font-bold">Next.js Template</h1>
          <p className="text-muted-foreground text-xl">
            A modern Next.js 15.5.4 template with Tailwind CSS 4.1, Zustand & Lucide Icons
          </p>
        </div>

        <Grid cols={2} gap="lg">
          <Counter />
          <StyleSelector />
        </Grid>

        <Grid cols={3} className="mt-12">
          <Card>
            <div className="mb-2 flex items-center gap-3">
              <Zap className="text-primary h-5 w-5" />
              <h2 className="text-primary text-lg font-semibold">Fast Development</h2>
            </div>
            <p className="text-muted-foreground text-sm">Built with Turbopack for lightning-fast HMR and builds.</p>
          </Card>

          <Card>
            <div className="mb-2 flex items-center gap-3">
              <Layers className="text-primary h-5 w-5" />
              <h2 className="text-primary text-lg font-semibold">Modern Stack</h2>
            </div>
            <p className="text-muted-foreground text-sm">
              Next.js 15.5.4 with App Router, React Server Components & Zustand.
            </p>
          </Card>

          <Card>
            <div className="mb-2 flex items-center gap-3">
              <Palette className="text-primary h-5 w-5" />
              <h2 className="text-primary text-lg font-semibold">Beautiful Design</h2>
            </div>
            <p className="text-muted-foreground text-sm">Tailwind CSS 4.1 with Lucide icons and customizable themes.</p>
          </Card>
        </Grid>

        <div className="mt-12 flex justify-center gap-4">
          <a
            href="https://nextjs.org/docs"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-6 py-3 font-medium transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js Docs
          </a>
          <a
            href="https://tailwindcss.com/docs"
            className="border-border bg-card text-card-foreground hover:bg-muted rounded-lg border px-6 py-3 font-medium transition-colors"
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
