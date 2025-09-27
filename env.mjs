import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  server: {
    // Bundle analyzer environment variable
    ANALYZE: z
      .enum(["true", "false"])
      .optional()
      .transform((value) => value === "true"),
  },
  client: {
    // Add client environment variables here if needed
  },
  runtimeEnv: {
    ANALYZE: process.env.ANALYZE,
  },
})