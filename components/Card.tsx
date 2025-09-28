import { type ReactNode } from "react"

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div
      className={`border-border bg-card rounded-lg border p-6 ${
        hover ? "hover:border-primary/30 transition-all hover:shadow-lg" : ""
      } ${className}`}
    >
      {children}
    </div>
  )
}
