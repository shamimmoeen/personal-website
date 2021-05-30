const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	mode: 'jit',
	purge: ['./public/**/*.html', './src/**/*.{js,jsx}'],
	darkMode: 'media', // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				sans: ['Raleway', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
