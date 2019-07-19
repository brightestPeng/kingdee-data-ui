const paths = require("./paths");

module.exports = {
  resolve:{
    alias:{
        components:paths.componentsPath
    }
  },
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
};
