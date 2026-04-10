import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  images: {
    unoptimized: false,
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "securebank.jp" }],
        destination: "https://securebank.co.jp/:path*",
        permanent: true,
      },
    ];
  },
};
export default nextConfig;