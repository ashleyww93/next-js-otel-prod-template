import Skeleton from "@/components/Skeleton"

export default function Loading() {
  return (
    <main className="bg-background text-foreground flex min-h-screen flex-col items-center justify-center p-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header skeleton */}
        <div className="mb-12 text-center">
          <Skeleton variant="text" height={48} width="60%" className="mx-auto mb-4" />
          <Skeleton variant="text" height={24} width="80%" className="mx-auto" />
        </div>

        {/* Grid skeleton */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border-border bg-card rounded-lg border p-6">
              <div className="mb-2 flex items-center gap-3">
                <Skeleton variant="circular" width={20} height={20} />
                <Skeleton variant="text" width="60%" height={24} />
              </div>
              <Skeleton variant="text" className="mb-1" />
              <Skeleton variant="text" width="80%" />
            </div>
          ))}
        </div>

        {/* Counter skeleton */}
        <div className="mt-12 flex justify-center">
          <div className="border-border bg-card rounded-xl border p-8">
            <Skeleton variant="text" width={250} height={32} className="mx-auto mb-6" />
            <div className="flex flex-col items-center gap-6">
              <Skeleton variant="text" width={80} height={48} />
              <div className="flex gap-3">
                {[1, 2, 3].map((i) => (
                  <Skeleton key={i} variant="rectangular" width={48} height={48} className="rounded-lg" />
                ))}
              </div>
              <Skeleton variant="text" width={200} height={14} />
            </div>
          </div>
        </div>

        {/* Style selector skeleton */}
        <div className="fixed right-8 bottom-8">
          <Skeleton variant="rectangular" width={160} height={100} className="rounded-lg" />
        </div>
      </div>
    </main>
  )
}
