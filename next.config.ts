import type { NextConfig } from "next";

// Next loads .env files before this config
const cdn = new URL(process.env.NEXT_PUBLIC_CDN_URL ?? "https://invalid.example");

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: cdn.hostname,
        pathname: `${cdn.pathname.replace(/\/$/, "")}/**`,
      },
    ],
  },
};

export default nextConfig;
