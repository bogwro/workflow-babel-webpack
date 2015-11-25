'use strict';

require('../../globals');

exports.task = function(callback) {
  runSequence.use(gulp);

  runSequence('clean', 'webpack-build-prod', 'copy-build-to-dist', function(error) {
    if(error) {
      console.log(error.message);
    } else {
      console.log('RELEASE FINISHED SUCCESSFULLY!!!');
    }
    callback(error);
  })

};
