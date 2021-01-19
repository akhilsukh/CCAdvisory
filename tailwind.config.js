// const colors = require('tailwindcss/colors')

module.exports = {
		purge: {
				enabled: process.env.NODE_ENV === 'production',
				preserveHtmlElements: true,
				content: ['./pages/*js', './pages/**/*.js', './components/**/*.js', './styles/*.css'],
				defaultExtractor: content => content.match(/[\w-:/]+(?<!:)/g) || []
		},
		theme: {
				extend: {
						colors: {
								'pacific': {
										200: "#B6DBF0",
										800: '#0C4A6E',
										900: '#063C5B'
								},
								gray: {
										150: "#ECEEF1"
								}
						},
						fontFamily: {
								'serif':  ['Playfair Display', 'ui-serif', 'Georgia']
						}
				}
		},
		variants: {},
		plugins: [],
}