import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "standalone",
  images: { unoptimized: true },
  experimental: {
    globalNotFound: true,
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'skoinvesting.vercel.app',
          },
        ],
        destination: 'https://sko-invest.kz/:path*', 
        permanent: true,
      },
    ];
  },
};

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");
export default withNextIntl(nextConfig);
