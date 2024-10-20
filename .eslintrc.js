module.exports = {
	ignores: ['node_modules', 'android', 'ios', 'tsconfig.json'],
	extends: ['expo', 'prettier', 'plugin:react-hooks/recommended'],
	plugins: ['prettier'],
	rules: {
		'prettier/prettier': 'error',
	},
}
