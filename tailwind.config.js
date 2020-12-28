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
          200: "#B6DBF0",
          800: '#0C4A6E',
          900: '#063C5B'
        },
        gray: {
          150: "#ECEEF1"
        }
      }
    }
  },
  variants: {},
  plugins: [],
}
