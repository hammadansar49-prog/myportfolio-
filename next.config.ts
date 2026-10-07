import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig: NextConfig = {
  devIndicators: false,
  experimental: {
    // Keep the production build light for small build servers.
    webpackMemoryOptimizations: true,
    cpus: 1,
  },
};

export default withPayload(nextConfig);
