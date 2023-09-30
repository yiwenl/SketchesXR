/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/SketchesXR",
  assetPrefix: "/SketchesXR/",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
