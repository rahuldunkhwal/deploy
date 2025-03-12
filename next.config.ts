import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com"],
  },
  webpack: (config) => {
    return config;
  },
};

export default nextConfig;
