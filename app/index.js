'use strict';

let generators = require('yeoman-generator');
let path = require('path');
// let mkdirp = require('mkdirp');

module.exports = generators.Base.extend({
  constructor,
  applicationNameParam,
  rootFiles,
  source,
  tasks,
  install,
});

function constructor() {
  generators.Base.apply(this, arguments);
}

function applicationNameParam() {
  let done = this.async();
  let prompt = {
    type: 'input',
    name: 'appName',
    message: 'application name',
    default: path.basename(process.cwd()),
  };

  this.prompt(prompt, data => {
    this.applicationName = data.appName;
    this.applicationSlug = require('underscore.string/slugify')(data.appName);
    done();
  });
}

function rootFiles() {
  this.sourceRoot(path.join(`${__dirname}/templates/root-files`), this);
  this.directory('.', '.');
}

function source() {
  this.sourceRoot(path.join(`${__dirname}/templates/source`), this);
  this.directory('.', './source');
}

function tasks() {
  this.sourceRoot(path.join(`${__dirname}/templates/tasks`), this);
  this.directory('.', './tasks');
}

function install() {
  this.installDependencies({
    bower: true,
    npm: true,
    skipInstall: true,
  });
}
