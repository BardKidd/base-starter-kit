const path = require("path");
const { merge } = require("webpack-merge");
const Dotenv = require("dotenv-webpack");
const modules = require("./config/modules");
const plugins = require("./config/plugins");
const resolve = require("./config/resolve");

const config = {
  mode: "production",
  entry: "src/index.tsx",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "index.[hash].js",
    // 打包後使用 BrowserRouter 才不會掛掉
    publicPath: "./",
    clean: true,
  },
  devtool: "eval-cheap-source-map",
  devServer: {
    // 在本地使用 BrowserRouter 才不會掛掉
    historyApiFallback: true,
  },
  module: {
    rules: [modules.cssLoader, modules.imageLoader, modules.babelLoader],
  },
  plugins: [
    new Dotenv({
      path: "../.env.production",
    }),
  ],
};

module.exports = merge(config, plugins, resolve);
