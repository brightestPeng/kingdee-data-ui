//开发环境   组件测试
const path = require("path");
const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");
const webpackCommon = require("./webpack.common");

module.exports = merge(
  {
    mode: "development",
    //开发测试
    entry: path.resolve(__dirname, "../src/app.js"),
    output: {
      path: path.resolve(__dirname, "../dist"),
      filename: "[name].js"
    },
    devServer: {
      hot: true,
      port: 3000
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      new htmlWebpackPlugin({
        template: path.resolve(__dirname, "../public/index.html")
      })
    ]
  },
  webpackCommon
);
