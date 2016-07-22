'use strict';

var path = require('path');
var argv = process.argv.slice(2);

if (argv.length !== 1) {
  console.error('usage: ted <file>');
  process.exit(1);
}

var ted = require('./ted');
ted.read(path.resolve(process.cwd(), argv[0]));

