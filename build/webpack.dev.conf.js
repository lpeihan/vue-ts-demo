const merge = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const chalk = require('chalk');

const packageJson = require('../package.json');
const webpackBaseConf = require('./webpack.base.conf');
const { resolve } = require('./utils');

const port = process.env.PORT;
const ip = require('address').ip();

module.exports = merge(webpackBaseConf, {
  mode: 'development',
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: packageJson.name,
      filename: 'index.html',
      template: `${resolve('public/index.html')}`,
      favicon: `${resolve('public/favicon.ico')}`,
      inject: true
    }),

    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: ['Your application is running here:'],
        notes: [
          `- Local: ${chalk.cyan(`http://localhost:${port}`)}`,
          `- Network: ${chalk.cyan(`http://${ip}:${port}`)}`
        ]
      }
    })
  ]
});
