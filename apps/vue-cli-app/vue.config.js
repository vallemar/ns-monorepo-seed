const path = require("path");
const vueSrc = "./src";
module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                '@core-common': path.join(__dirname, "../../packages/core-common/src")
            },
            extensions: ['.js', '.vue', '.json', '.web.ts']
        }
    }
};