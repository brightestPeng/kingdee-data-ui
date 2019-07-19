const path = require("path");

module.exports = (env)=>{
    if(env && env.NODE_ENV === "production"){
        return require("./config/webpack.config.prod");
    }else{
        return require("./config/webpack.config.dev");
    }
}