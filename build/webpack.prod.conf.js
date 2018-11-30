const merge = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const packageJson = require('../package.json');
const webpackBaseConf = require('./webpack.base.conf');
const { resolve, assetsPath } = require('./utils');

module.exports = merge(webpackBaseConf, {
  mode: 'development',
  output: {
    filename: assetsPath('js/[name].js'),
    publicPath: '/'
  },
  devtool: '#source-map',
  performance: {
    hints: 'warning',
    maxEntrypointSize: 500000, // (300kb) The default value is 250000 (bytes).
    maxAssetSize: 500000 // The default value is 250000 (bytes).
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: packageJson.name,
      filename: 'index.html',
      template: `${resolve('public/index.html')}`,
      favicon: `${resolve('public/favicon.ico')}`,
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      chunksSortMode: 'dependency'
    })
  ]
});
