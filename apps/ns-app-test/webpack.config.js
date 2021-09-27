const webpack = require("@nativescript/webpack");

module.exports = env => {
  webpack.init(env);
  webpack.chainWebpack(config => {
    config.resolve.alias.set("@native", "native-components/src");
    config.resolve.alias.set("@core-common", "core-common/src");
    config.resolve.extensions.prepend('.native.ts')
  });

  return webpack.resolveConfig();
};
