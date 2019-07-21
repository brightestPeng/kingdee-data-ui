//配置文件目录

const fs = require("fs");
const path = require("path");
const pkg = require("../package.json");

const basePath = path.resolve(__dirname, "../");
const componentsPath = path.resolve(basePath, "src/components");

//配置输出组件目录
const modules = fs.readdirSync(componentsPath);
const modulesObj = modules.reduce((pre, name) => {
  pre[name] = path.resolve(componentsPath, `${name}/index.js`);
  return pre;
}, {});

module.exports = {
  //打包入口文件
  entryPath: path.resolve(basePath, "src/index.js"),
  //组件目录
  componentsPath: componentsPath,
  //组件文件目录
  componentsPathObj: modulesObj,
  //出口目录
  outputDir: path.resolve(basePath, "lib"),
  //postcss地址
  postcssPath:path.resolve(__dirname,"postcss.config.js")
};
