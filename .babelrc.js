module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [
    [
      "import",
      {
        libraryName: "components",
        camel2DashComponentName: false,
        customName: (name) =>{
          return  `../${name}`
        },
        style:false
      }
    ]
  ]
};
