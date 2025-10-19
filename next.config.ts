// next.config.ts
import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // If you saw the "inferred workspace root" warning, pin this:
  outputFileTracingRoot: path.resolve(__dirname),

  // No devIndicators (deprecated/removed)
  // Don't put secrets in `env` — use process.env on the server instead.

  // Example: if you truly need a public value:
  // env: {
  //   NEXT_PUBLIC_SOME_FLAG: process.env.NEXT_PUBLIC_SOME_FLAG,
  // },
};

export default nextConfig;
