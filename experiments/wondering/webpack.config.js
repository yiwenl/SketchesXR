const path = require("path");
const pathOutput = path.resolve(__dirname, "dist");

// plugins
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");

// settings
const env = process.env.NODE_ENV;
const isProd = env === "production";
const mode = env === isProd ? "production" : "development";
console.log("start webpack, env : ", env, isProd);

const entry = isProd
  ? { app: "./src/js/app.js" }
  : { app: "./src/js/app.js", debug: "./src/js/debug/debug.js" };
const output = isProd
  ? {
      filename: "assets/js/app.js",
      path: pathOutput,
    }
  : {
      filename: "assets/js/[name].js",
      path: pathOutput,
    };

const devtool = isProd ? "source-map" : "inline-source-map";

module.exports = {
  mode,
  entry,
  devtool,
  output,
  devServer: {
    contentBase: "./dist",
    https: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          isProd ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader?url=false",
          "sass-loader",
        ],
      },
      {
        test: /\.(glsl|vert|frag)$/,
        use: ["raw-loader", "glslify-loader"],
      },
    ],
  },
  optimization: {
    minimizer: [new TerserPlugin({ parallel: true })],
  },
  resolve: {
    alias: {
      libs: path.resolve(__dirname, "src/js/libs"),
      shaders: path.resolve(__dirname, "src/shaders"),
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "assets/css/main.css",
    }),
    // new BundleAnalyzerPlugin()
  ],
};
