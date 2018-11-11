# WebEdit v1

This is an experiment in creating a text editor (for computer code) in Safari/WebKit.

**Requires Safari >=4,Chrome, or Firefox**

> Disclaimer: This is just for fun not for use.

## Usage

Open `index.html`.

### Disabling Prettify (syntax highlighting)

This thing currently uses [Google Prettify](http://code.google.com/p/google-code-prettify/) for syntax highlighting which is very buggy. You can disable prettify (and thus enable things like undo/redo which breaks with Prettify) by changing the following line in `index.html`:

    <script src="prettify.js"></script>

to:

    <!--script src="prettify.js"></script-->

## MIT license
This project is using MIT Licences.