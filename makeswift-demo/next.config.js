const withMakeswift = require('@makeswift/runtime/next/plugin')()

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['fakestoreapi.com'],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = withMakeswift(nextConfig)
