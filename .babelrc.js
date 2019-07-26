console.log(process.env.NODE_TYPE);

module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [
    ["@babel/plugin-proposal-class-properties"],
    [
      "import",
      {
        libraryName: "components",
        camel2DashComponentName: false,
        customName: (name, ...others) => {
          return `../${name.toLowerCase()}`;
        },
        style: name => {
          return process.env.NODE_TYPE === "development"
            ? `${name}/style/index.less`
            : `${name}/style.css`;
        }
      }
    ]
  ]
};
