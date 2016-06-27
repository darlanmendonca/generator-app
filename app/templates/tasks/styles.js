'use strict';

const gulp = require('gulp');
const gulpConfig = require('../gulp.config.js');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');

const configPreprocessor = {
  outputStyle: 'compressed'
};

gulp.task('styles', function() {
  gulp
    .src(gulpConfig.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass(configPreprocessor).on('error', onError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(gulpConfig.styles.dest));
});

function onError(err) {
  let gutil = require('gulp-util');
  var message = new gutil.PluginError('gulp-sass', err.messageFormatted).toString();
  process.stderr.write(message + '\n');
  gutil.beep();
};
