import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enables static export
  images: {
    domains: ["source.unsplash.com"], // Allow images from Unsplash
    unoptimized: true, // Allows next/image in static mode
  },
};

export default nextConfig;
