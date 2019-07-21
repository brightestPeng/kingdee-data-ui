//生产环境  组件发布
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const merge = require("webpack-merge");
const paths = require("./paths");
const webpackCommon = require("./webpack.common");
const pkg = require("../package.json");

//查看打包大小

module.exports = merge(
  {
    mode: "production",
    entry: {
      index: paths.entryPath,
      ...paths.componentsPathObj
    },
    externals: Object.keys(pkg.dependencies)
    .concat(["components"])
    .map(pkgName => {
      return (context, request, callback) => {
        request.indexOf(pkgName) === 0 ? callback(null, request) : callback();
      };
    })
    .concat(
      Object.keys(paths.componentsPathObj).map(
        pkgName => (context, request, callback) => {
          request.indexOf(`../${pkgName}`) === 0
            ? callback(null, request)
            : callback();
        }
      )
    ),
    output: {
      path: paths.outputDir,
      filename: "[name]/index.js",
      library: ["kingdee-ui-test", "[name]"],
      libraryTarget: "umd",
      publicPath: "/"
    },
    plugins: [new CleanWebpackPlugin()]
  },
  webpackCommon
);
