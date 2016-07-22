'use strict';

var path = require('path');
var ted = require('./ted');

var argv = process.argv.slice(2);

if (argv.length !== 1) {
  console.error('usage: ted <file>');
  process.exit(1);
}

ted(path.resolve(process.cwd(), argv[0]));

