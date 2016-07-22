'use strict';

var fs = require('fs');
var blessed = require('blessed');

var screen = blessed.screen({
  smartCSR: true
});

var textarea = blessed.textarea({
  parent: screen,
  inputOnFocus: true
}).focus();

var curfilepath = '';

var read = function (file) {
  curfilepath = file;

  fs.readFile(file, 'utf-8', function (err, content) {
    textarea.setValue(content);
    screen.render();
  });
};

var write = function (file, callback) {
  fs.writeFile(file, textarea.getValue(), 'utf-8', function (err) {
    if (err) { throw new Error(err); }
    if (typeof callback === 'function') { callback(); }
  });
};

var save = function () {
  write(curfilepath);
};

var exit = function () {
  process.exit(0);
};

var saveAndExit = function () {
  write(curfilepath, exit);
}

textarea.key('C-s', save);
textarea.key('C-c', exit);

// workaround: pressing escape twice makes the editor unresponsive
textarea.key('escape', saveAndExit);

module.exports = {
  buffer: textarea,
  path: curfilepath,
  read: read,
  write: write,
  save: save,
  exit: exit,
  saveAndExit: saveAndExit
};
