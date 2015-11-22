'use strict';

var path = require('path');
var webpack = require('webpack');

var config = {
  context: path.resolve(__dirname, '..'),
  devtool: 'eval',
  devServer: {
    contentBase: path.join(__dirname, '..', 'build')
  },
  entry: {
    bundle: ['webpack/hot/dev-server', 'webpack-dev-server/client?http://localhost:8080', './src/bundle.js']
  },
  output: {
    path: path.resolve(__dirname, '..', process.env.NODE_ENV === 'production' ? 'dist' : 'build'),
    filename: "[name].js"
  },
  eslint: {
    configFile: './.eslintrc'
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint',
        exclude: /(node_modules|bower_components)/
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-0', 'stage-1', 'stage-2', 'stage-3'],
          plugins: ['transform-strict-mode']
        }
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};

module.exports = config;