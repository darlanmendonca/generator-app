'use strict';

let gulp = require('gulp');
let gulpConfig = require('../gulp.config.js');
let plumber = require('gulp-plumber');
let sourcemaps = require('gulp-sourcemaps');
let ngAnnotate = require('gulp-ng-annotate');
let concat = require('gulp-concat');
let uglify = require('gulp-uglify');

gulp.task('scripts', function() {
  return gulp
    .src(gulpConfig.scripts.src)
    .pipe(plumber({ errorHandler: onError }))
    .pipe(sourcemaps.init())
    .pipe(ngAnnotate())
    .pipe(concat('app.js'))
    .pipe(uglify({mangle: false}))
    .pipe(sourcemaps.write('.', {sourceRoot: '/client/scripts'}))
    .pipe(gulp.dest(gulpConfig.scripts.dest));
});

function onError(err) {
  let gutil = require('gulp-util');
  var message = new gutil.PluginError(err.plugin, err.message).toString();
  process.stderr.write(message + '\n');
  gutil.beep();
};
