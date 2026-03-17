/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'aberyo.or.jp',
      },
    ],
  },
}

module.exports = nextConfig
