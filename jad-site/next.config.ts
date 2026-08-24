import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "saouma1.github.io",
        pathname: "/Saouma.github.io/images/**",
      },
      // YouTube video thumbnails (poster frame for the speech embed).
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        pathname: "/vi/**",
      },
    ],
  },
};

export default nextConfig;
