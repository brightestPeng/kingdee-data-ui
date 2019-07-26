//开发环境   组件测试
const path = require("path");
const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");
const webpackCommon = require("./webpack.common");
const paths = require("./paths");

module.exports = merge(
  {
    mode: "development",
    //开发测试
    entry: {
      index: paths.appPath,
      ...paths.componentsPathObj
    },
    output: {
      path: paths.outputDir,
      filename: "[name]/index.js",
      publicPath: "/"
    },
    devServer: {
      hot: true,
      port: 3333
    },
    devtool:"cheap-module-eval-source-map",
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
