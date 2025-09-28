interface SkeletonProps {
  className?: string
  variant?: "text" | "rectangular" | "circular"
  width?: string | number
  height?: string | number
  animation?: "pulse" | "wave" | "none"
}

export default function Skeleton({
  className = "",
  variant = "rectangular",
  width,
  height,
  animation = "pulse",
}: SkeletonProps) {
  // Use theme-aware skeleton color
  const baseClasses = "bg-skeleton"

  const animationClasses = {
    pulse: "animate-pulse",
    wave: "bg-skeleton animate-pulse", // Simplified - just use pulse for now
    none: "",
  }

  const variantClasses = {
    text: "rounded",
    rectangular: "rounded-md",
    circular: "rounded-full",
  }

  const style: React.CSSProperties = {
    width: width || (variant === "text" ? "100%" : undefined),
    height: height || (variant === "text" ? "1em" : undefined),
  }

  return (
    <div
      className={`${baseClasses} ${animationClasses[animation]} ${variantClasses[variant]} ${className}`}
      style={style}
      aria-hidden="true"
    />
  )
}
