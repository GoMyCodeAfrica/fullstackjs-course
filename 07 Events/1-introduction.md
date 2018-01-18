## Introduction to browser events

An event is a signal that something has happened. All DOM nodes generate such signals (but events are not limited to DOM).

Here’s a list of the most useful DOM events, just to take a look at:

<strong>Mouse events</strong>:

* `click` – when the mouse clicks on an element (touchscreen devices generate it on a tap).
* `contextmenu` – when the mouse right-clicks on an element.
* `mouseover` / `mouseout` – when the mouse cursor comes over / leaves an element.
* `mousedown` / `mouseup` – when the mouse button is pressed / released over an element.
* `mousemove` – when the mouse is moved.

<strong>Form element events</strong>:

* `submit` – when the visitor submits a `<form>`.
* `focus` – when the visitor focuses on an element, e.g. on an `<input>`.

<strong>Keyboard events</strong>:

* `keydown` and `keyup` – when the visitor presses and then releases the button.

<strong>Document events</strong>

* `DOMContentLoaded` – when the HTML is loaded and processed, DOM is fully built.

<strong>CSS events</strong>:

* `transitionend` – when a CSS-animation finishes.

There are many other events.

## Event handlers

To react on events we can assign a <em>handler</em> – a function that runs in case of an event.

Handlers is a way to run JavaScript code in case of user actions.

There are several ways to assign a handler. Let’s see them, starting from the simplest one.

### HTML-attribute

A handler can be set in HTML with an attribute named on`<event>`.

For instance, to assign a click handler for an input, we can use onclick, like here:

```html
<input value="Click me" onclick="alert('Click!')" type="button">
```

On mouse click, the code inside onclick runs.

Please note that inside `onclick` we use single quotes, because the attribute itself is in double quotes. If we forget that the code is inside the attribute and use double quotes inside, like this: `onclick="alert("Click!")"`, then it won’t work right.

An HTML-attribute is not a convenient place to write a lot of code, so we’d better create a JavaScript function and call it there.

Here a click runs the function `countRabbits()`:

```html
<script>
  function countRabbits() {
    for(let i=1; i<=3; i++) {
      alert("Rabbit number " + i);
    }
  }
</script>

<input type="button" onclick="countRabbits()" value="Count rabbits!">
```

As we know, HTML attribute names are not case-sensitive, so `ONCLICK` works as well as `onClick` and `onCLICK`… But usually attributes are lowercased: `onclick`.

### DOM property

We can assign a handler using a DOM property on`<event>`.

For instance, `elem.onclick`:

```html
<input id="elem" type="button" value="Click me">
<script>
  elem.onclick = function() {
    alert('Thank you');
  };
</script>
```

If the handler is assigned using an HTML-attribute then the browser reads it, creates a new function from the attribute content and writes it to the DOM property.

So this way is actually the same as the previous one.

<strong>The handler is always in the DOM property: the HTML-attribute is just one of the ways to initialize it.</strong>

These two code pieces work the same:

1. Only HTML:

```html
<input type="button" onclick="alert('Click!')" value="Button">
```

2. HTML + JS:

```html
<input type="button" id="button" value="Button">
<script>
  button.onclick = function() {
    alert('Click!');
  };
</script>
```

As there’s only one `onclick` property, we can’t assign more than one event handler.

In the example below adding a handler with JavaScript overwrites the existing handler:

```html
<input type="button" id="elem" onclick="alert('Before')" value="Click me">
<script>
  elem.onclick = function() { // overwrites the existing handler
    alert('After'); // only this will be shown
  };
</script>
```

By the way, we can assign an existing function as a handler directly:

```html
function sayThanks() {
  alert('Thanks!');
}

elem.onclick = sayThanks;
```

## addEventListener

The fundamental problem of the aforementioned ways to assign handlers – we can’t assign multiple handlers to one event.

For instance, one part of our code wants to highlight a button on click, and another one wants to show a message.

We’d like to assign two event handlers for that. But a new DOM property will overwrite the existing one:

```html
input.onclick = function() { alert(1); }
// ...
input.onclick = function() { alert(2); } // replaces the previous handler
```
Web-standard developers understood that long ago and suggested an alternative way of managing handlers using special methods `addEventListener` and `removeEventListener`. They are free of such a problem.

The syntax to add a handler:

```javascript
element.addEventListener(event, handler[, phase]);
```

* `event`: Event name, e.g. "click".

* `handler`: The handler function.

* `phase`: An optional argument, the “phase” for the handler to work. To be covered later. Usually we don’t use it.

To remove the handler, use `removeEventListener`:

```html
// exactly the same arguments as addEventListener
element.removeEventListener(event, handler[, phase]);
```

## Summary

There are 3 ways to assign event handlers:

* HTML attribute: `onclick="..."`.
* DOM property: `elem.onclick = function`.
* Methods: `elem.addEventListener(event, handler[, phase])` to add, `removeEventListener` to remove.

HTML attributes are used sparingly, because JavaScript in the middle of an HTML tag looks a little bit odd and alien. Also can’t write lots of code in there.

DOM properties are ok to use, but we can’t assign more than one handler of the particular event. In many cases that limitation is not pressing.

The last way is the most flexible, but it is also the longest to write. There are few events that only work with it, for instance `transtionend` and `DOMContentLoaded`.
