/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/contact/:path*",
        destination: "/new/:path*",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
