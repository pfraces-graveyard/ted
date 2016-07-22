'use strict';

var fs = require('fs');
var blessed = require('blessed');

var screen = blessed.screen({
  smartCSR: true
});

// workaround: pressing escape twice made the editor unresponsive
screen.on('element key escape', function () {
  process.exit(0);
});

var textarea = blessed.textarea({
  parent: screen,
  inputOnFocus: true
}).focus();

var ted = function (file) {
  fs.readFile(file, 'utf-8', function (err, content) {
    if (err) { return; }
    textarea.setValue(content);
    screen.render();
  });

  textarea.key('C-s', function () {
    fs.writeFile(file, this.getValue(), 'utf-8', function (err) {
      if (err) { throw err; }
    });
  });
};

module.exports = ted;
