import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "r8x1va2unh.ufs.sh",
        port: "",
        protocol: "https"
      }
    ]
  }
}

export default nextConfig;
