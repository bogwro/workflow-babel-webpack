'use strict';

var path = require('path');

var config = {
  context: path.resolve(__dirname, '..'),
  devtool: 'eval',
  devServer: {
    contentBase: path.join(__dirname, '..', 'build')
  },
  entry: {
    bundle: ['./src/bundle.js']
  },
  output: {
    path: path.resolve(__dirname, '..', 'build'),
    filename: "[name].js"
  },
  eslint: {
    configFile: './.eslintrc.js'
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
          presets: ['es2015', 'stage-0'],
          plugins: ['transform-strict-mode', 'transform-runtime']
        }
      }
    ]
  },
  plugins: []
};

module.exports = config;
