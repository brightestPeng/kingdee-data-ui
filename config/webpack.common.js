const paths = require("./paths");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  resolve: {
    alias: {
      components: paths.componentsPath
    },
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader","ts-loader"]
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: "../../" }
          },
          {
            loader: "css-loader"
          },
          {
            loader: "postcss-loader",
            options: { config: { path: paths.postcssPath } }
          },
          {
            loader: "less-loader",
            options: {
              javascriptEnabled: true
            }
          }
        ]
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          minetype: "image/svg+xml"
        }
      },
      {
        test: /\.(png|jpg|jpeg|gif)(\?v=\d+\.\d+\.\d+)?$/i,
        loader: "url-loader",
        options: {
          limit: 10000
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name]/style.css"
    })
  ]
};
