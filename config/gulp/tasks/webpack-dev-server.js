'use strict';

require('../../globals');

var open = require('open');

exports.task = function() {
  var devConfig = Object.create(config.webpackConfig);
  var compiler;


  compiler = webpack(devConfig);

  new WebpackDevServer(compiler, {
    contentBase: 'build'
  }).listen(8080, 'localhost', function(error) {
    if(error) {
      console.log('ERROR', error);
    }
    setTimeout(function () {
      open('http://localhost:8080');
    }, 1000);
  });

};
