'use strict';

require('../../globals');

var open = require('open');

exports.task = function(callback) {
  var devConfig = Object.create(config.webpackConfig);
  var compiler;

  devConfig.entry.bundle.unshift('webpack/hot/dev-server', 'webpack-dev-server/client?http://localhost:8080');

  devConfig.plugins.push(new webpack.HotModuleReplacementPlugin());

  compiler = webpack(devConfig);

  new WebpackDevServer(compiler, {
    contentBase: 'build'
  }).listen(8080, 'localhost', function(error) {
    if(error) {
      console.log('ERROR', error.message);
    }

    callback(error);

    setTimeout(function () {
      open('http://localhost:8080');
    }, 1000);
  });

};
