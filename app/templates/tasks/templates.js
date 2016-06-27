'use strict';

let gulp = require('gulp');
let config = require('../gulp.config.js');
let jade = require('gulp-jade');
let plumber = require('gulp-plumber');
let flatten = require('gulp-flatten');

gulp.task('templates', function() {
  gulp
    .src(config.templates.src)
    .pipe(plumber({ errorHandler: onError }))
    .pipe(jade())
    .pipe(flatten())
    .pipe(gulp.dest(config.templates.dest));
});

function onError(err) {
  let gutil = require('gulp-util');
  var message = new gutil.PluginError('gulp-jade', err.message).toString();
  process.stderr.write(message + '\n');
  gutil.beep();
};
