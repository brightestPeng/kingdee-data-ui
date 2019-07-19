//生产环境  组件发布
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const merge = require("webpack-merge");
const paths = require("./paths");
const webpackCommon = require("./webpack.common");

module.exports = merge(
  {
    mode: "production",
    entry: {
      index: paths.entryPath,
      ...paths.componentsPath
    },
    output: {
      path: paths.outputDir,
      filename: "[name]/index.js",
      library: ["kingdee-ui", "[name]"],
      libraryTarget: "umd",
      publicPath: "/"
    },
    module: {
      rules: [
        {
          test: /\.js/,
          exclude: /node_modules/,
          use: ["babel-loader"]
        },
        {
          test: /\.less/,
          exclude: /node_modules/,
          use: [
            "style-loader",
            "css-loader",
            {
              loader: "less-loader",
              options: {
                javascriptEnabled: true
              }
            }
          ]
        }
      ]
    },
    plugins: [new CleanWebpackPlugin()]
  },
  webpackCommon
);
