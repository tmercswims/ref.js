# ref.js
A very small jQuery script for including inline, superscript references on a webpage. Inspired by xkcd's What-If? blog and its notes.

### Usage
Simply include the script and the style in your header, and then add a <span> with the class ref wherever you want a note to appear:
```html
<html>
  <head>
  ...
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
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
