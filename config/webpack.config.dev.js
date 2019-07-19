
const path = require("path");
const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode:"development",
    //开发测试
    entry:path.resolve(__dirname,"../src/app.js"),
    output:{
        path:path.resolve(__dirname,"../dist"),
        filename:"[name].js"
    },
    devServer:{
        hot:true,
        port:3000
    },
    module:{
        rules:[
            {
                test:/\.js/,
                exclude:/node_modules/,
                use:["babel-loader"]
            },
            {
                test:/\.less/,
                exclude:/node_modules/,
                use:["style-loader",'css-loader','less-loader']
            }
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new htmlWebpackPlugin({
            template:path.resolve(__dirname,"../public/index.html")
        })
    ]
}