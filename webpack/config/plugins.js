const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");

// prod 和 dev 都會用到的 plugins
module.exports = {
  plugins: [
    // 建立 html5 檔案，並將打包後的 script 標籤加入。
    //! 在任何地方都不能出現第二個 new HtmlWebpackPlugin 的配置
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../../src/index.html"),
    }),
    // 將 css 取出來加到打包完的 html 內。
    new MiniCssExtractPlugin({
      filename: "main.[contenthash].css",
    }),
    // Webpack5 取代 eslint-loader 用。
    new ESLintPlugin({
      context: path.resolve(".eslintrc.js"),
    }),
    // 搭配 babel-plugin-lodash 自動載入 lodash，並且排除未使用的屬性。
    new LodashModuleReplacementPlugin(),
  ],
};
