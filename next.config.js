/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'sunbeam.rweb.cl',
            port: '',
            pathname: '/api/**',
          },
        ],
      },
}

module.exports = nextConfig
