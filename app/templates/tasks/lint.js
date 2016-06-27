'use strict';

const gulp = require('gulp');
const config = require('../gulp.config.js');
const eslint = require('gulp-eslint');

gulp.task('lint', lintTask);

function lintTask() {
  return gulp
    .src(config.lintScripts)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .on('error', beep);
}

function beep() {
  const gutil = require('gulp-util');
  gutil.beep();
}
