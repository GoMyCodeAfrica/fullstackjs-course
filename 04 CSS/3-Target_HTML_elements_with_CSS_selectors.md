# Target HTML elements with CSS selectors

Let's take a look at this CSS snippet:

```css
h1, h2 {
  background-color: red;
}
```

What this CSS *rule* describes is that all `h1` and `h2` elements on the webpage are to have a red background color.

But what if we wanted to be more specific and target only? As we saw in the HTML course, there are two ways we can do this:

* Assign the same `class` to the elements we want to apply the same styling to. e.g `section-header`, `image-caption`...
* Assign unique `id`s to elements on the page that appear only once. e.g. `main-header`, `user-profile-image`...

In the CSS side, we can target a class by prepending a `.` to its name and an id by prepending `#`

```css
.section-header {
  background-color: blue;
}
#main-header {
  background-color: red;
}
```

You can also have a rule target many types of elements using multiple selectors:

```css
h2, .image-caption {
  background-color: grey;
}
```

## Descendant and child selectors

* You can target elements based on their ancestors
* to select nodes that are descendants of the first element:

  ```html
  <div class="container">
    <h1 class="header">Getting stuff done</h1>
    <p><span>Lorem ipsum</span> dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
  </div>
  ```

  ```css
  .container span {
    font-weight: bold;
  }
  ```

  * or you can use the direct child selector which selects nodes that are direct children of the first element

  ```css
  .container > h1 {
    font-size: 28px;
  }
  ```
