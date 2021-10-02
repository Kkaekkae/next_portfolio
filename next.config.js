const withPlugins = require('next-compose-plugins');
// const withSass = require('@zeit/next-sass');
// const withCSS = require('@zeit/next-css');

const nextConfig = {
	webpack: (config) => {
		const enhancedConfig = config;

		// const originalEntry = enhancedConfig.entry;
		// enhancedConfig.entry = async () => {
		// 	const entries = await originalEntry();

		// 	if (entries['main.js'] && entries['main.js'].indexOf('./polyfills.js') === -1) {
		// 		entries['main.js'].unshift('./polyfills.js');
		// 	}

		// 	return entries;
		// };

		enhancedConfig.node = {
			fs: 'empty',
		};

		enhancedConfig.resolve.extensions = config.resolve.extensions.concat(['.ts', '.tsx', '.js', 'jsx']);

		return config;
	},
	exlint: {
		ignoreDuringBuilds: true,
	}
};

module.exports = withPlugins([], nextConfig);