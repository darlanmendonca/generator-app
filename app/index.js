'use strict';

let generators = require('yeoman-generator');
let path = require('path');
let mkdirp = require('mkdirp');


module.exports = generators.Base.extend({
  constructor,
  appNameParam,
});

function constructor() {
  generators.Base.apply(this, arguments);
  this.slugify = require('underscore.string/slugify');
}

function appNameParam() {
  let done = this.async();
  let prompt = {
    type: 'input',
    name: 'appName',
    message: 'application name',
    default: path.basename(process.cwd()),
  };

  this.prompt(prompt, data => {
    this.appName = data.appName;
    console.log('your project called', this.appName)
    done();
  });
}

