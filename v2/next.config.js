// next.config.js

// const isDev = process.env.NODE_ENV === "development";

// let assetPrefix = "";
let basePath = `/SketchesXR`;

module.exports = {
  output: "export",
  // assetPrefix,
  basePath,
  images: {
    unoptimized: true,
  },
};
