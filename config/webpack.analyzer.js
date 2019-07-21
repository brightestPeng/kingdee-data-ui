const webpackProd = require("./webpack.config.prod");
const merge = require("webpack-merge");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge({
    plugins:[
        new BundleAnalyzerPlugin()
    ]
},webpackProd);