const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: {
              localIdentName: '[name]__[local]'
            }
          }
        },
        'postcss-loader'
      ]
    }]
  },
  resolve: {
    alias: {
      tachyons$: path.resolve(__dirname, 'vendors/tachyons/tachyons.css')
    }
  },
  plugins: [
    new htmlWebpackPlugin({
      title: 'CSS Modules + Tachyons',
      template: 'index.html'
    })
  ]
}