const prettier = require('eslint-config-prettier');

module.exports = [
	{
		files: ['**/*.js'],
		ignores: ['protobufs/generated/**', 'node_modules/**'],
		languageOptions: {
			ecmaVersion: 2020,
			sourceType: 'commonjs',
			globals: {
				require: 'readonly',
				module: 'readonly',
				exports: 'readonly',
				__dirname: 'readonly',
				__filename: 'readonly',
				process: 'readonly',
				console: 'readonly',
				Buffer: 'readonly',
				setTimeout: 'readonly',
				clearTimeout: 'readonly',
				setInterval: 'readonly',
				clearInterval: 'readonly'
			}
		},
		rules: {
			'no-var': 'error',
			'prefer-const': 'warn',
			'quotes': ['error', 'single'],
			'semi': ['error', 'always']
		}
	},
	{
		ignores: ['protobufs/generated/**', 'node_modules/**']
	},
	prettier
];
