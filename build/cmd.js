#!/usr/bin/env node
"use strict";
var program = require('commander').program;
var version = require('../package.json').version;
var doBuildAction = require("./build").doBuildAction;
program.version(version)
    .command('build [entry]')
    .description('build pack for preact')
    .option('-n --lib-name <libraryName>', 'set the name of the library for umd package')
    .option('-w --watch', 'enter watch mode,which rebuilds on file changes')
    .option('-d --debug', 'build pack as debug mode')
    .option('-ex --exclude', 'exclude the preact lib from bundle')
    .action(doBuildAction);
// TODO commander.command('test [test-dir]')
program.parse(process.argv);
