/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  plugins: [
    [
      '@fullhuman/postcss-purgecss',
      {
        content: [
          './pages/**/*.{js,jsx,ts,tsx}',
          './components/**/*.{js,jsx,ts,tsx}',
        ],
        defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
      },
    ],
    'postcss-preset-env',
  ],
  reactStrictMode: true,
  swcMinify: true,
  images: {
    dangerouslyAllowSVG: true,
    minimumCacheTTL: 60,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: ['192.168.0.107', 'localhost'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  output: 'standalone',
  compress: true,
  experimental: {
    scrollRestoration: true,
  },
};

module.exports = nextConfig;
