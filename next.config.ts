import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.wincatravels.co.ke",
          },
        ],
        destination: "https://wincatravels.co.ke/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
