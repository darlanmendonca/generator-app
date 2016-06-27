'use strict';

let gulp = require('gulp');
let config = require('../gulp.config.js');
// let gulpSync = require('gulp-sync')(gulp);

gulp.task('watch', function() {
  gulp.watch(config.views.src, ['views']);
  gulp.watch(config.templates.src, ['templates']);
  gulp.watch(config.styles.watch, ['styles']);
  gulp.watch(config.scripts.src, ['scripts']);
  gulp.watch(config.lintScripts, ['lint']);
  gulp.watch('./bower.json', ['dependencies']);
});
