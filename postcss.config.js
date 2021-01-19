module.exports = {
		plugins: {
				tailwindcss: {},
				'@fullhuman/postcss-purgecss': {
						enabled: process.env.NODE_ENV === 'production',
						preserveHtmlElements: true,
						content: ['./pages/*js', './pages/**/*.js','./components/**/*.js', './styles/*.css'],
						defaultExtractor: content => content.match(/[\w-:/]+(?<!:)/g) || []
				},
		}
};