ted
===

Simple terminal-based editor

Usage
-----

    ted <file>

### Keybindings

  * Printable characters: Insert text
  * Arrow keys: Move cursor
  * Backspace: Delete text
  * Escape: Save changes and exit
  * `[ctrl+s]`: Save changes
  * `[ctrl+c]`: Exit

Features
--------

  * Read files
  * Write changes
  * Show cursor
  * Insert text at cursor position
  * Delete text on the left of the cursor

TODO
----

  * Remove text on the right of the cursor
  * Change cursor position
  * Create an editor API: `write`, `read`, `pos`

Roadmap
-------

  * Text selection
  * Mouse support
  * Scrollbars

Under consideration
-------------------

  * Undo/Redo
  * Statusbar
  * Config file
  * Shell (a.k.a. command pallete)
  * Plugin interface

### Plugins

  * Syntax highlight
  * Snippets

blessed questions
-----------------

  * Must form inputs be contained in a form?
  * How to disable default escape binding in form inputs
