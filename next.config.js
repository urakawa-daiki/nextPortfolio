/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    domains: ["picsum.photos"],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
