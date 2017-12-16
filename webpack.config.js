const webpack = require('webpack')

module.exports = {
  entry: './js/app.js',
  output: {
    filename: 'app.bundle.js',
    path: `${__dirname}/build`,
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.vue/,
        exclude: /node_modules/,
        loader: 'vue-loader',
      },
      {
        test: /\.pug$/,
        exclude: /node_modules/,
        loader: 'pug-loader',
      },
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader',
      },
    ],
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js',
    },
  },
}

if (process.env.NODE_ENV === 'test') {
  module.exports.externals = [require('webpack-node-externals')()]
  module.exports.devtool = 'inline-cheap-module-source-map'
}
