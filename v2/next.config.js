// next.config.js

const isDev = process.env.NODE_ENV === "development";

let assetPrefix = "";
let basePath = "";

if (!isDev) {
  const repo = "SketchesXR";

  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

module.exports = {
  output: "export",
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    unoptimized: true,
  },
};
