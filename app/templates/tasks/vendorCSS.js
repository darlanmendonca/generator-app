'use strict';

let gulp = require('gulp');
let bower = require('bower-files')();
let concat = require('gulp-concat');

gulp.task('vendorCSS', function() {
  return gulp
    .src(bower.ext('css').files)
    .pipe(concat('vendor.css'))
    // .pipe(uglify())
    .pipe(gulp.dest('./public/styles'));
});
