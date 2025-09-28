"use client"

import { AlertTriangle, RotateCcw } from "lucide-react"
import { useEffect } from "react"

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="border-border bg-card max-w-md rounded-lg border p-8 text-center">
        <div className="text-destructive mb-4 flex justify-center">
          <AlertTriangle className="h-12 w-12" />
        </div>
        <h1 className="text-primary mb-2 text-2xl font-bold">Something went wrong!</h1>
        <p className="text-muted-foreground mb-6">
          An unexpected error occurred. Please try again or contact support if the problem persists.
        </p>
        <button
          onClick={reset}
          className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center gap-2 rounded-lg px-6 py-3 font-medium transition-all hover:scale-105 active:scale-95"
        >
          <RotateCcw className="h-4 w-4" />
          Try again
        </button>
        {error.digest && <p className="text-muted-foreground mt-4 text-xs">Error ID: {error.digest}</p>}
      </div>
    </div>
  )
}
