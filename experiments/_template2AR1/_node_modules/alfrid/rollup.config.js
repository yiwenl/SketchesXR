import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import glsl from "rollup-plugin-glsl";
import { terser } from "rollup-plugin-terser";

import pkg from "./package.json";

const env = process.env.NODE_ENV;
const isDev = env === "development";

console.log("is Development", isDev);

const plugins = [
  resolve(), // so Rollup can find `ms`
  commonjs(), // so Rollup can convert `ms` to an ES module
  glsl({
    include: ["src/**/*.vert", "src/**/*.frag"],
    sourceMap: false,
  }),
];

if (!isDev) {
  plugins.push(terser());
}

export default [
  {
    input: "src/alfrid.js",
    output: {
      name: "alfrid",
      file: pkg.browser,
      format: "umd",
    },
    plugins,
  },
  {
    input: "src/alfrid.js",
    external: ["ms"],
    output: [{ file: pkg.module, format: "es" }],
    plugins,
  },
];
