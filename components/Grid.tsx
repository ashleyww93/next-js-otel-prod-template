import { type ReactNode } from "react"

interface GridProps {
  children: ReactNode
  cols?: 1 | 2 | 3 | 4
  gap?: "sm" | "md" | "lg"
  className?: string
}

export default function Grid({ children, cols = 1, gap = "md", className = "" }: GridProps) {
  const colsMap = {
    1: "grid-cols-1",
    2: "grid-cols-1 lg:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  }

  const gapMap = {
    sm: "gap-4",
    md: "gap-6",
    lg: "gap-8",
  }

  return <div className={`grid ${colsMap[cols]} ${gapMap[gap]} ${className}`}>{children}</div>
}
