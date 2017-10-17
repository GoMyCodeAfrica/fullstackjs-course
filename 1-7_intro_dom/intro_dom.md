# Manipulating documents

* When writing web pages and apps, one of the most common things you'll want to do is manipulate the document structure in some way.

* This is usually done by using the Document Object Model (DOM)

## The important parts of a web browser

Web APIs give us access to a lot of functionality that enable us to do a great many things with web pages.

consider the following diagram, which represents the main parts of a browser directly involved in viewing web pages

<p align="center">
	<img src="images/document-window-navigator.png">
</p>

* The <strong>window</strong> is the browser tab that a web page is loaded into; this is represented in JavaScript by the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window">Window</a> object. Methods availbale on this object:
	* `Window.innerWidth`
	* `Window.innerHeight`
	* `localStorage`
	* `onresize`

* The <strong>navigator</strong> represents the state and identity of the browser (i.e. the user-agent) as it exists on the web. In JavaScript, this is represented by the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Navigator">Navigator</a> object. Methods availbale on this object:
	* `geolocation`
	* `userAgent`
	* `mediaDevices`

* The <strong>document</strong> (represented by the DOM in browsers) is the actual page loaded into the window, and is represented in JavaScript by the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document">Document</a> object.

>	In this article we'll focus mostly on manipulating the document, but we'll show a few other useful bits besides.

## The document object model

* The document currently loaded in each one of your browser tabs is represented by a <strong>document object model</strong>.

* This is a <strong>"tree structure"</strong> representation created by the browser that enables the HTML structure to be easily manipulated by programming languages.

* developers like you can manipulate the <strong>DOM</strong> with JavaScript after the page has been rendered.

Example of simple html page with it's corresponding dom tree:

<strong>HTML</strong>

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Simple DOM example</title>
  </head>
  <body>
      <section>
        <img src="dinosaur.png" alt="A red Tyrannosaurus Rex: A two legged dinosaur standing upright like a human, with small arms, and a large head with lots of sharp teeth.">
        <p>Here we will add a link to the <a href="https://www.mozilla.org/">Mozilla homepage</a></p>
      </section>
  </body>
</html>
```

<strong>DOM tree</strong>

<p align="center">
	<img src="images/dom-screenshot.png">
</p>

>	Note: This DOM tree diagram was created using Ian Hickson's <a href=https://software.hixie.ch/utilities/js/live-dom-viewer/>Live DOM viewer</a>.

You can see that, aach element and bit of text in the document has its own entry in the tree — each one is called a node.

Various terms used to describe the type of node, and their position in the tree in relation to one another:


* <strong>Element node</strong>: An element, as it exists in the DOM.
* <strong>Root node</strong>: The top node in the tree, which in the case of `HTML` is always the HTML node (other markup vocabularies like SVG and custom XML will have different root elements).
* <strong>Child node</strong>: A node directly inside another node. For example, `IMG` is a child of `SECTION` in the above example.
* <strong>Descendant node</strong>: A node anywhere inside another node. For example, `IMG` is a child of `SECTION` in the above example, and it is also a descendant. `IMG` is not a child of `BODY`, as it is two levels below it in the tree, but it is a descendant of `BODY`.
* <strong>Parent node</strong>: A node which has another node inside it. For example, `BODY` is the parent node of `SECTION` in the above example.
* <strong>Sibling nodes</strong>: Nodes that sit on the same level in the DOM tree. For example, `IMG` and `P` are siblings in the above example.
* <strong>Text node</strong>: A node containing a text string.

>	It is useful to familiarize yourself with this terminology before working with the DOM, as a number of the code terms you'll come across make use of them.

## Active learning: Basic DOM manipulation

To start learning about DOM manipulation, let's begin with a practical example.

1. Take a local copy of the <a href="resources/dom-example.html">dom-example.html</a> page and the <a href="resources/dinosaur.png">image</a> that goes along with it.

2. Add a `<script></script>` element just above the closing `</body>` tag.

3. To manipulate an element inside the DOM, you first need to select it and store a reference to it inside a variable. Inside your script element, add the following line: 
```html
var link = document.querySelector('a');
```

4. First of all, let's change the text inside the link by updating the value of the Node.textContent property. Add the following line below the previous one:
```html
link.textContent = 'Mozilla Developer Network';
```

5. We should also change the URL the link is pointing to, so that it doesn't go to the wrong place when it is clicked on. Add the following line, again at the bottom:
```html
link.href = 'https://developer.mozilla.org';
```

> 	Note that, as with many things in JavaScript, there are many ways to select an element and store a reference to it in a variable. `Document.querySelector()` is the recommended modern approach, which is convenient because it allows you to select elements using CSS selectors. The above querySelector() call will match the first `<a>` element that apprears in the document. If you wanted to match and do things to multiple elements, you could use `Document.querySelectorAll()`, which matches every element in the document that matches the selector, and stores references to them in an array.

There are older methods available for grabbing element references, such as:

* `Document.getElementById()`, which selects an element with a given `id` attribute value, e.g. `<p id="myId">My paragraph</p>.` The ID is passed to the function as a parameter, i.e. `var elementRef = document.getElementById('myId')`.

* `Document.getElementsByTagName()`, which returns an array containing all the elements on the page of a given type, for example `<p>`s, `<a>`s, etc. The element type is passed to the function as a parameter, i.e. `var elementRefArray = document.getElementsByTagName('p')`.

>	These two work in older browsers than the modern methods like querySelector(), but are not as convenient.

<strong>Creating and placing new nodes</strong>

The above has given you a little taste of what you can do, but let's go further and look at how we can create new elements.

1. Going back to the current example, let's start by grabbing a reference to the our <section> element — add the following code at the bottom of your existing script (do the same with the other lines too):
```html
var sect = document.querySelector('section');
```

2. Now let's create a new paragraph using Document.createElement() and give it some text content in the same way as before:
```html
var para = document.createElement('p');
para.textContent = 'We hope you enjoyed the ride.';
```

3. You can now append the new paragraph at the end of the section using `Node.appendChild()`:
```html
sect.appendChild(para);
```

4. Finally for this part, let's add a text node to the paragraph the link sits inside, to round off the sentence nicely. First we will create the text node using Document.createTextNode():
```html
var text = document.createTextNode(' — the premier source for web development knowledge.');
```

5. Now we'll grab a reference to the paragraph the link is inside, and append the text node to it: 
```html
var linkPara = document.querySelector('p');
linkPara.appendChild(text);
```

>	That's most of what you need for adding nodes to the DOM — you'll make a lot of use of these methods when building dynamic interfaces 

<strong>Moving and removing elements</strong>

There may be times when you want to move nodes, or delete them from the DOM altogether. This is perfectly possible.

If we wanted to move the paragraph with the link inside it to the bottom of the section, we could simply do this:

```html
sect.appendChild(linkPara);
```

This moves the paragraph down to the bottom of the section. You might have thought it would make a second copy of it, but this is not the case — `linkPara` is a reference to the one and only copy of that paragraph. If you wanted to make a copy and add that as well, you'd need to use `Node.cloneNode()` instead.

Removing a node is pretty simple as well, at least when you have a reference to the node to be removed and its parent. In our current case, we just use `Node.removeChild()`, like this:

```html
sect.removeChild(linkPara);
```

It gets slightly more complex when you want to remove a node based only on a reference to itself, which is fairly common. There is no method to tell a node to remove itself, so you'd have to do the following.

```html
linkPara.parentNode.removeChild(linkPara);
```