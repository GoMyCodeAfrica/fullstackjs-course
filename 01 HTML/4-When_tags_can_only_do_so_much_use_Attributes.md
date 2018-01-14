# When tags can only do so much, use attributes

Elements can also have attributes, which look like this:

<p align="center">
	<img src="img/grumpy-cat-attribute-small.png" alt="">
</p>

An attribute should have:

1. A space between it and the element name (or the previous attribute, if the element already has one or more attributes.)
2. The attribute name, followed by an equals sign.
3. An attribute value, with opening and closing quote marks wrapped around it.

---

## Meet the anchor tag: <strong>`<a>`</strong>

Another example of an element is `<a>` — this stands for anchor and will make the piece of text it wraps around into a hyperlink. This can take a number of attributes, but several are as follows:

* <strong>href</strong>: This attribute specifies as its value the web address that you want the link to point to; where the browser navigates to when the link is clicked. For example, `href="https://www.gomycode.tn/"`(https://www.gomycode.tn).
* <strong>title</strong>: The title attribute specifies extra information about the link, such as what the page is that you are linking to. For example, title="The Mozilla homepage". This will appear as a tooltip when hovered over.
* <strong>target</strong>: The target attribute specifies browsing context which will be used to display the link. For example, target="_blank" will display the link in a new tab. If you want to display the link in the current tab just omit this attribute.


---

## Meet The image tag: <strong>`<img>`</strong>

* Another essential tag that needs an attribute to make sense is the `img` tag, which represents an image. It holds the source path to its image file in an attribute called `src`.

```html
<img src="avatar.jpg"></img>
```

* But what happens when the path does not lead to a valid image ?
* Another attribute holds the text to be displayed in case no image is found or if the user uses a screen reader. It's name is `title`.
* NB: The `title` tag and the `title` attribute are two separate things. Don't worry, the browser knows both of them.

```html
<img src="avatar.jpg" title="avatar image of the user"></img>
```

---

### Universal attributes: <strong>`class`</strong> and <strong>`id`</strong>

* In the next lesson, we'll be taking a look to another language that describes not the structure of a webpage, but how it looks like.
* In order for this language to target specific elements and not all of them, we need to give those elements identifiers. * That's where come two very common attributes: `class` and `id`.

* `class` is applied to one or many elements to get the same look or behavior.

```html
<ul>
  <li class="bold-text">Home</li>
  <li class="bold-text selected">Our programs</li>
  <li class="bold-text">Locations</li>
  <li class="bold-text">Log in</li>
</ul>
```

* In the above example, all 4 `li`s are given a class of `bold-text`. This is an arbitrary name given by the developer and does do anything by its own.
* Notice also that the second `li` has another class: `selected`. This is probably going to be used later on the CSS side to give the selected item a distinct look.
* the `id` tag: only one element on the page should have the same `id`.
* This could be, e.g., a way to identify the main header of the page:

```html
<h1 id="main-header">Leadership</h1>
<p>In a galaxy far far away...</p>
```

## Anatomy of an HTML document

That wraps up the basics of individual HTML elements, but they aren't very useful on their own. Now we'll look at how individual elements are combined to form an entire HTML page:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My test page</title>
  </head>
  <body>
    <p>This is my page</p>
  </body>
</html>
```

Here we have:

1. `<!DOCTYPE html>`: The doctype. In the mists of time, when HTML was young (about 1991/2), doctypes were meant to act as links to a set of rules that the HTML page had to follow to be considered good HTML, which could mean automatic error checking and other useful things. They used to look something like this:
```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
```
However, these days no one really cares about them, and they are really just a historical artifact that needs to be included for everything to work right. `<!DOCTYPE html>` is the shortest string of characters that counts as a valid doctype; that's all you really need to know.

2. `<html></html>`: The `<html>` element. This element wraps all the content on the entire page, and is sometimes known as the root element.

3. `<head></head>`: The `<head>` element. This element acts as a container for all the stuff you want to include on the HTML page that isn't the content you are showing to your page's viewers. This includes things like keywords and a page description that you want to appear in search results, CSS to style our content, character set declarations, and more. You'll learn more about this in the next article in the series.

4. `<meta charset="utf-8">`: This element sets the character set your document should use to UTF-8, which includes most characters from the vast majority of human written languages. Essentially it can now handle any textual content you might put on it. There is no reason not to set this, and it can help avoid some problems later on.

5. `<title></title>`: The `<title>` element. This sets the title of your page, which is the title that appears in the browser tab the page is loaded in, and is used to describe the page when you bookmark/favourite it.
	
6. `<body></body>`: The `<body>` element. This contains all the content that you want to show to web users when they visit your page, whether that's text, images, videos, games, playable audio tracks, or whatever else.

## Active learning: Adding some features to an HTML document

If you want to experiment with writing some HTML on your local computer, you can:

1. Copy the HTML page example listed above.
2. Create a new file in your text editor.
3. Paste the code into the new text file.
4. Save the file as `index.html`

You can now open this file in a web browser to see what the rendered code looks like, and then edit the code and refresh the browser to see what the result is. Initially it will look like this:

<p align="center">
	<img src="img/template-screenshot.png" alt="" />
</p>

So in this exercise, you can edit the code locally on your computer, as outlined above, or you can edit it in the editable sample window below (the editable sample window represents just the contents of the `<body>` element, in this case.) We'd like you to have a go at implementing the following steps:

* Just below the opening tag of the `<body>` element, add a main title for the document. This should be wrapped inside an `<h1>` opening tag and `</h1>` closing tag.
* Edit the paragraph content to include some text about something you are interested in.
Make any important words stand out in bold by wrapping them inside a `<strong>` opening tag and `</strong>` closing tag
* Add a link to your paragraph, as explained earlier in the article.
* Add an image to your document, below the paragraph, as explained earlier in the article. You'll get * bonus points if you manage to link to a different image (either locally on your computer, or somewhere else on the web.)

## Summary

we hope you enjoyed your tour of the very basics of HTML! At this point you should understand what the language looks like, how it works at a basic level, and be able to write a few elements and attributes.

>	<strong>Note: </strong>At this point, as you start to learn more about HTML, you might also want to start to explore the basics of Cascading Style Sheets, or CSS. CSS is the language you use to style your web pages (whether e.g. changing the font or colors, or altering the page layout). HTML and CSS go very well together, as you'll soon discover.
