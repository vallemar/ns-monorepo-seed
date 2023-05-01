const webpack = require("@nativescript/webpack");
const {resolve} = require("path");

module.exports = (env) => {
	webpack.init(env);

	webpack.chainWebpack((config) => {
		 config.resolve.alias.set(
			 '@core-common',
			 resolve(__dirname, '../../libs/core-common/src')
		 );
		 config.resolve.extensions.prepend('.native.ts');
	 });

	return webpack.resolveConfig();
};
