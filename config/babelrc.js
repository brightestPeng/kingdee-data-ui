module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [
    [
      "import",
      [
        {
          libraryName: "components",
          camel2DashComponentName: false,
          style: true,
          customName: name => `../${name}`
        }
      ]
    ]
  ]
};
