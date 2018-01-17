## Searching: `getElement*` and `querySelector*`

DOM navigation properties are great when elements are close to each other. What if they are not? How to get an arbitrary element of the page?

There are additional searching methods for that.

## `document.getElementById` or just `id`

If an element has the `id` attribute, then there’s a global variable by the name from that `id`.

We can use it to access the element, like this:

```html
<div id="elem">
  <div id="elem-content">Element</div>
</div>

<script>
  alert(elem); // DOM-element with id="elem"
  alert(window.elem); // accessing global variable like this also works

  // for elem-content things are a bit more complex
  // that has a dash inside, so it can't be a variable name
  alert(window['elem-content']); // ...but accessible using square brackets [...]
</script>
```

That’s unless we declare the same-named variable by our own:

```html
<div id="elem"></div>

<script>
  let elem = 5;

  alert(elem); // the variable overrides the element
</script>
```
## getElementsBy*

There are also other methods to look for nodes:

* `elem.getElementsByTagName(tag)` looks for elements with the given tag and returns the collection of them. The tag parameter can also be a star "*" for “any tags”.

For instance:

```html
// get all divs in the document
let divs = document.getElementsByTagName('div');
```

This method is callable in the context of any DOM element.

Let’s find all input tags inside the table:

```html
table id="table">
  <tr>
    <td>Your age:</td>

    <td>
      <label>
        <input type="radio" name="age" value="young" checked> less than 18
      </label>
      <label>
        <input type="radio" name="age" value="mature"> from 18 to 50
      </label>
      <label>
        <input type="radio" name="age" value="senior"> more than 60
      </label>
    </td>
  </tr>
</table>

<script>
  let inputs = table.getElementsByTagName('input');

  for (let input of inputs) {
    alert( input.value + ': ' + input.checked );
  }
</script>
```

<strong>Don’t forget the "s" letter!</strong>

Novice developers sometimes forget the letter `"s"`. That is, they try to call `getElementByTagName` instead of `getElementsByTagName`.

The `"s"` letter is absent in `getElementById`, because it returns a single element. But `getElementsByTagName` returns a collection of elements, so there’s `"s"` inside.

<strong>It returns a collection, not an element!</strong>

Another widespread novice mistake is to write:

```javascript
// doesn't work
document.getElementsByTagName('input').value = 5;
```

That won’t work, because it takes a collection of inputs and assigns the value to it rather than to elements inside it.

We should either iterate over the collection or get an element by its index, and then assign, like this:

```javascript
// should work (if there's an input)
document.getElementsByTagName('input')[0].value = 5;
```
There are also other rarely used methods of this kind:

* `elem.getElementsByClassName(className)` returns elements that have the given CSS class. Elements may have other classes too.

* `document.getElementsByName(name)` returns elements with the given name attribute, document-wide. Exists for historical reasons, very rarely used, we mention it here only for completeness.

For instance:

```html
<form name="my-form">
  <div class="article">Article</div>
  <div class="long article">Long article</div>
</form>

<script>
  // find by name attribute
  let form = document.getElementsByName('my-form')[0];

  // find by class inside the form
  let articles = form.getElementsByClassName('article');
  alert(articles.length); // 2, found two elements with class "article"
</script>
```
## querySelectorAll

Now goes the heavy artillery.

The call to elem.querySelectorAll(css) returns all elements inside elem matching the given CSS selector. That’s the most often used and powerful method.

Here we look for all `<li>` elements that are last children:

```html
<ul>
  <li>The</li>
  <li>test</li>
</ul>
<ul>
  <li>has</li>
  <li>passed</li>
</ul>
<script>
  let elements = document.querySelectorAll('ul > li:last-child');

  for (let elem of elements) {
    alert(elem.innerHTML); // "test", "passed"
  }
</script>
```
## querySelector

The call to `elem.querySelector(css)` returns the first element for the given CSS selector.

In other words, the result is the same as `elem.querySelectorAll(css)[0]`, but the latter is looking for all elements and picking one, while `elem.querySelector` just looks for one. So it’s faster and shorter to write.

## Active learning

<strong>Search for elements</strong>

Here’s the document with the table and form.

How to find?

* The table with id="age-table".
* All label elements inside that table (there should be 3 of them).
* The first td in that table (with the word “Age”).
* The form with the name search.
* The first input in that form.
* The last input in that form.

Open the page <a href="resources/table.html">table.html</a> in a separate window and make use of browser tools for that.

<hr>

<strong>Count descendants</strong>

There’s a tree structured as nested ul/li.

Write the code that for each `<li>` shows:

* What’s the text inside it (without the subtree)
* The number of nested `<li>` – all descendants, including the deeply nested ones.

Open the page <a href="resources/tree.html">tree.html</a> in a separate window and make use of browser tools for that.
