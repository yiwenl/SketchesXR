/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/SketchesXR",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
