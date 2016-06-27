'use strict';

let gulp = require('gulp');

let tasks = [
  'vendorCSS',
  'vendorJS',
  'scripts',
  'styles',
  'views',
  'templates',
  'lint',
  // 'watch'
];

gulp.task('default', tasks);
