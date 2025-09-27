import type { NextConfig } from "next"
import withBundleAnalyzer from "@next/bundle-analyzer"
import { env } from "./env.mjs"

const nextConfig: NextConfig = {
  outputFileTracingRoot: import.meta.dirname,
  /* config options here */
}

const bundleAnalyzer = withBundleAnalyzer({
  enabled: env.ANALYZE ?? false,
})

export default env.ANALYZE ? bundleAnalyzer(nextConfig) : nextConfig
