# Attach CSS to you HTML files

Once we finish writing the structure of a webpage with HTML, the next step is to wire up some CSS to it to give a distinct look and feel.

---

## Inline style, the `style` attribute:

The easiest way to target one specific element on the page is to use the style tag:

```html
<h1 style="font-size: 20px; color: red;">Attach CSS to your HTML files</h1>
```

But this approach has few problems:
* One and only element could be targeted each time. Imagine having to write the same style for all `p` paragraph elements on a webpage.
* Lack of maintainability. Now imagine you want to change the style of all `p` paragraph elements. Too much wasted time.
* The structure and design of the webpage are tightly coupled together. This approach does not allow multiple pages to share the same styling.

---

## Inline stylesheet, the `style` tag

Most of the previous issues could be fixed by using the `style` tag.

```html
  <head>
    <style>
      h1 {
        font-size: 28px;
      }
    </style>
  </head>
  <body>
    <h1>I am the title!</h1>
  </body>
```

This approach gives us more control over what elements to target and we can easily change the styling of multiple elements. But it still does not decouple the styling from the structure as they both live in the same HTML page.

---

## External stylesheet, the `link` tag

The `link` tag is used to include different types of assets into webpage. In this lesson, we'll only be considering how to use it to include `CSS` stylesheet files into an `HTML` file.

In the HTML file, we would point to the location of the CSS file like this:
```html
<head>
  <link rel="stylesheet" href="style.css">
</head>
```

style.css:

```css
  h1 {
    font-size: 28px;
  }
```

This is the approach most developers use as it allows multiple webpages to use the same stylesheet.
