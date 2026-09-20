/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: process.env.GITHUB_ACTIONS ? '/piengee-web' : '',
  assetPrefix: process.env.GITHUB_ACTIONS ? '/piengee-web/' : undefined,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
