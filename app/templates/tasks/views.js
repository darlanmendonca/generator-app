'use strict';

let gulp = require('gulp');
let config = require('../gulp.config.js');
let jade = require('gulp-jade');
let plumber = require('gulp-plumber');

gulp.task('views', function() {
  gulp
    .src(config.views.src)
    .pipe(plumber({ errorHandler: onError }))
    .pipe(jade())
    .pipe(gulp.dest(config.views.dest));
});

function onError(err) {
  let gutil = require('gulp-util');
  var message = new gutil.PluginError('gulp-jade', err.message).toString();
  process.stderr.write(message + '\n');
  gutil.beep();
};
