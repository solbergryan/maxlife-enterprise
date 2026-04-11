import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Pin Turbopack's workspace root to this directory. Without this,
  // Next's workspace-root heuristic can walk up past the worktree and
  // pick up stray files like middleware.ts from the parent clone.
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
