module.exports = (env)=>{
    switch(env.NODE_TYPE){
        case "production":
            return require("./config/webpack.config.prod");
        case "analyzer":
            return require("./config/webpack.analyzer");
        default:
            return require("./config/webpack.config.dev");
    }
}