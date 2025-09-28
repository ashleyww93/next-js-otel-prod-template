import { type ReactNode } from "react"

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div
      className={`rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900/50 ${
        hover ? "hover:border-primary/30 dark:hover:border-primary/50 transition-all hover:shadow-lg" : ""
      } ${className} `}
    >
      {children}
    </div>
  )
}
