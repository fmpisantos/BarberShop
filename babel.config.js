module.exports = function(api) {
	const alias = require('./alias.json');
	api.cache(true);
	return {
		presets: [ 'babel-preset-expo' ],
		plugins: [
			'react-native-reanimated/plugin',
			[
				'module-resolver',
				{
					alias: alias
				}
			]
		]
	};
};
