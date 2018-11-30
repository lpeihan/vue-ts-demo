'use strict';

const VueLoaderPlugin = require('vue-loader/lib/plugin');

const { resolve, assetsPath, cssLoader } = require('./utils');

module.exports = {
  entry: {
    app: ['./src/main.ts']
  },
  context: resolve(),
  output: {
    path: resolve('dist'),
    filename: assetsPath('js/[name].js')
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.ts', '.tsx'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        use: 'babel-loader?cacheDirectory=true',
        include: [resolve('src')]
      },
      {
        test: /\.(js|vue|ts|tsx)$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        exclude: /node_modules/,
        options: {
          emitWarning: true,
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.ts(x)?$/,
        use: [
          'babel-loader?cacheDirectory=true',
          {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/\.vue$/]
            }
          }
        ],
        include: [resolve('src')]
      },
      {
        test: /\.css$/,
        use: cssLoader()
      },
      {
        test: /\.styl(us)?$/,
        use: cssLoader('stylus')
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};
