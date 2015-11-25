'use strict';

var path = require('path');

global.root = path.join(__dirname, '..');

global.gulp = require('gulp');
global.WebpackDevServer = require('webpack-dev-server');
global.webpack = require('webpack');
global.fs = require('fs');
global.path = path;
global.del = require('del');
global.runSequence = require('run-sequence');

global.config = require('./config');
