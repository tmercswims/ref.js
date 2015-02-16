# ref.js
A very small jQuery script for including inline, superscript references on a webpage.

### Usage
Simply include the script and the style in your header, and then add a <span> with the class ref wherever you want a note to appear:
```html
<html>
  <head>
  ...
  <script type="text/javascript" src="js/ref.js"></script>
  ...
  </head>
  <body>
  ...
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.<span class="ref">This text will appear in a note!</span>
  ...
  </body>
</html>
```
Notes are automatically numbered ascending down the page.
