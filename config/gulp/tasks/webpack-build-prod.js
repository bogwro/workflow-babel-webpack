'use strict';

require('../../globals');

exports.task = function(callback) {
  var prodConfig = Object.create(config.webpackConfig);

  prodConfig.devtool = false;
  prodConfig.debug = false;

  prodConfig.output.path = path.join(root, 'dist');

  prodConfig.plugins = [
    new webpack.optimize.UglifyJsPlugin()
  ];

  webpack(prodConfig, function(err, stats) {
    if(err) {
      console.error(err);
    }

    console.log(stats.toString({
      colors: true
    }));

    callback(err);

  });

};
