'use strict';

module.exports =  {
  lintScripts: [
    './gulpfile.js',
    './source/angular/**/*.js',
    './tasks/**/*.js'
  ],
  scripts: {
    src: [
      './source/angular/app.js',
      './source/angular/**/*.js'
    ],
    dest: './public/scripts/'
  },
  styles: {
    src: './source/styles/*.scss',
    watch: [
      './source/styles/**/*.scss',
      './source/angular/**/*.scss'
    ],
    dest: './public/styles/'
  },
  views: {
    src: './source/views/*.jade',
    dest: './'
  },
  templates: {
    src: './source/angular/**/*.jade',
    dest: './public/templates/'
  }
};
