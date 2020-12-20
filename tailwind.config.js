const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enabled: false,
    preserveHtmlElements: true,
    content: ['/pages/**/*.js'],
  },
  theme: {
    extend: {
      colors: {
        'pacific': {
          800: '#0C4A6E',
          900: '#063C5B'
        }
      }
    }
  },
  variants: {},
  plugins: [],
}
