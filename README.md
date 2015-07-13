ediblecontent
=============

Very simple rich text editor for contenteditable enabled html elements.

### Usage

Download zip file or all files in ```/dist```

#### HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta http-equiv="x-ua-compatible" content="ie=edge, chrome=1" />
  <title>Edible Content</title>
  <link rel="stylesheet" href="path-to/edible.css" />
</head>
<body>
<div class="rich-container" data-edible>
  <div class="rich-controls">
    <button data-tag="bold"><b>Bold</b></button>
    <button data-tag="italic"><em>Italic</em></button>
    <button data-tag="underline"><ins>Underline</ins></button>
    <button data-tag="strikeThrough"><del>Strike</del></button>
    <button data-tag="insertUnorderedList">&bull; Unordered List</button>
    <button data-tag="insertOrderedList">1. Ordered List</button>
    <button data-tag="createLink">Link</button>
    <button data-tag="removeFormat">Remove format</button>
  </div>
  <div class="rich-editor" contenteditable="true"></div>
</div>
<script src="path-to/edible.js"></script>
</body>
</html>
```

#### Up and Running

Requires Vagrant https://www.vagrantup.com/

```bash
cd /path/to/ediblecontent
vagrant up
```

Visit localhost:8181 in your browser.
