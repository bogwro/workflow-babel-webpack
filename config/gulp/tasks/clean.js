'use strict';

require('../../globals');

exports.task = function() {
  return del(['dist/**/*']);
};
