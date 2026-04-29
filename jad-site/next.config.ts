import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "saouma1.github.io",
        pathname: "/Saouma.github.io/images/**",
      },
    ],
  },
};

export default nextConfig;
