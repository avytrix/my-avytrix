import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // CI sets NEXT_OUTPUT=export for GitHub Pages; dev keeps the API routes working
  output: process.env.NEXT_OUTPUT === "export" ? "export" : undefined,
  images: {
    loader: "custom",
    loaderFile: "./src/lib/imagekit-loader.ts",
  },
};

export default nextConfig;
