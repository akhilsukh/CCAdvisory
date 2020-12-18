const withImages = require('next-images')

module.exports = withImages({
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })
  // },
  // webpackDevMiddleware: (config) => {
  //   config.watchOptions = {
  //     aggregateTimeout: 50,
  //     poll: 500
  //   }
    return config
  }
});

// module.exports = withImages();