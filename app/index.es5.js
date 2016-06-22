'use strict';

var generators = require('yeoman-generator');
var path = require('path');
var mkdirp = require('mkdirp');

module.exports = generators.Base.extend({
  constructor: constructor,
  appNameParam: appNameParam
});

function constructor() {
  generators.Base.apply(this, arguments);
  this.slugify = require('underscore.string/slugify');
}

function appNameParam() {
  var _this = this;

  var done = this.async();
  var prompt = {
    type: 'input',
    name: 'appName',
    message: 'application name',
    default: path.basename(process.cwd())
  };

  this.prompt(prompt, function (data) {
    _this.appName = data.appName;
    console.log('your project called', _this.appName);
    done();
  });
}
