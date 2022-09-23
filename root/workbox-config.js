module.exports = {
	globDirectory: 'root/',
	globPatterns: [
		'**/*.{html,json,js}'
	],
	swDest: 'root/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};