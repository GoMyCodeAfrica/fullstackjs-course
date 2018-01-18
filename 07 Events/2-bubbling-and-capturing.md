## Bubbling and capturing

Let’s start with an example.

This handler is assigned to `<div>`, but also runs if you click any nested tag like `<em>` or `<code>`:

```html
<div onclick="alert('The handler!')">
  <em>If you click on <code>EM</code>, the handler on <code>DIV</code> runs.</em>
</div>
```

Isn’t it a bit strange? Why the handler on `<div>` runs if the actual click was on `<em>`?

## Bubbling

The bubbling principle is simple.

<strong>When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors</strong>.

Let’s say, we have 3 nested elements <strong>FORM > DIV > P</strong> with a handler on each of them:

```html
<style>
  body * {
    margin: 10px;
    border: 1px solid blue;
  }
</style>

<form onclick="alert('form')">FORM
  <div onclick="alert('div')">DIV
    <p onclick="alert('p')">P</p>
  </div>
</form>
```

A click on the inner `<p>` first runs onclick:

1. On that `<p>`.

2. Then on the outer `<div>`.

3. Then on the outer `<form>`.

4. And so on upwards till the document object.

<p align="center">
  <img src="../resources/images/event-order-bubbling.png">
</p>

So if we click on `<p>`, then we’ll see 3 alerts:` p → div → form`.

The process is called `“bubbling”`, because events `“bubble”` from the inner element up through parents like a bubble in the water.

## `event.target`

A handler on a parent element can always get the details about where it actually happened.

The most deeply nested element that caused the event is called a target element, accessible as `event.target`.

Note the differences from `this` (=`event.currentTarget`):

* `event.target` – is the `“target”` element that initiated the event, it doesn’t change through the bubbling process.

* `this` – is the `“current”` element, the one that has a currently running handler on it.

For instance, if we have a single handler form.onclick, then it can “catch” all clicks inside the form. No matter where the click happened, it bubbles up to `<form>` and runs the handler.

In form.onclick handler:

* `this` (=`event.currentTarget`) is the `<form>` element, because the handler runs on it.

* `event.target` is the concrete element inside the form that actually was clicked.

Check it out: http://run.plnkr.co/U19HmTl5OYhnjUih/

## Stopping bubbling

A bubbling event goes from the target element straight up. Normally it goes upwards till `<html>`, and then to document object, and some events even reach window, calling all handlers on the path.

But any handler may decide that the event has been fully processed and stop the bubbling.

The method for it is `event.stopPropagation()`.

For instance, here body.onclick doesn’t work if you click on `<button>`:

```html
<body onclick="alert(`the bubbling doesn't reach here`)">
  <button onclick="event.stopPropagation()">Click me</button>
</body>
```
