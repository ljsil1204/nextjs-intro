/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY;

const nextConfig = {
  reactStrictMode: true,

  // redirects - 유저가 주소가 변경되는 것을 인식할 수 있다.
  async redirects() {
    return [
      {
        source: "/contact/:path*",
        destination: "/new/:path*",
        permanent: false,
      },
    ];
  },

  // rewrites - 유저가 주소가 변경되는 것을 인식할 수 없다.
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
    ];
  },
};

module.exports = nextConfig;
