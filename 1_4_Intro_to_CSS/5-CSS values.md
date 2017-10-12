# CSS values

* Every CSS property is designed to accept values of certain types only. We will cover the types we need the most as well as what properties accept them.

---

## Color

* A color value could be one of the following

  * a predefined color name* e.g. `red`, `yellow`, `cyan`
  * a CSS color function: RGB (e.g. `rgb(255, 55, 80)`, `rgb(99, 0, 5)`), HSL (e.g. `hsl(0, 0, 50%)`, `hsl(12%, 15%, 89%)`)**
  * a hexadicimal color representation e.g `#fff`, `#8569ff`, `#f0f0f0`

\* for a complete list of CSS color names, see [this link](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)

** we can also represent transparent colors using the alpha channel in the `rgba` and `hsla` functions e.g. `rgba(0, 150, 200, 0.5)` `hsla(5%, 56%, 80%, 0.8)`. Notice how alpha value is always a decimal number between `0` and `1`

* e.g. `color: red`, `background-color: rgba(255, 26, 50, 0.8)`, `border-color: #eee`

---

## Length

* The length CSS value type is used to represent dimensions and distances. It consists of a number followed by a length unit e.g. `50px`, `80%`, `100vh`. Be aware that **NO whitespace is allowed between the number and the the unit**.

* The following is a list of the measure units we used often:

  | Unit | Description |
  | --- | --- |
  | px | a pixel on the screen. Most of the time, we'll be using this unit |
  | % | a relative percentage. For length properties, the computed value is relative to the parents value*** |

*  Say we have the following HTML code:

    ```html
    <div class="parent-div">
      <div class="child-div">
        <p>contet goes here</p>
      </div>
    </div>
    <style>
      .parent-div {
        width: 500px;
      }

      .child-div {
        width: 50%;
      }
    </style>
    ```

* Then the width of the `.child-div` would be computed as `50% * 500px = 250px`

* e.g. `width: 250px`, `font-size: 1.2em`, `min-height: 100vh`

---

## Url

* Values of this type point to an external resource (e.g. images, fonts...). When used with a property, a URL value has to be passed inside a `url` function.

* eg. `background-image: url('http://website.com/images/my-image.png')`

---

## Shorthand properties

* Shorthand properties give us the ability to set multiple properties using only one

### `border`

* The border property is a shorthand property used to specify the width, style and color of border of an element.
* syntax: `border: <line-width> || <line-style> || <color>`
* e.g. `border: 1px solid red;`, `border: 2px dashed #eee;`, `border: none`

### `padding` and `margin`
![](http://blog.teamtreehouse.com/wp-content/uploads/2014/05/chrome-computed.png)
* margin and padding are the two most commonly used properties for spacing-out elements. A margin is the space **outside** something, whereas padding is the space **inside** something.
* You can see the margin, padding, border, width, height and position of any element in the Chrome Dev Tools, as seen below
* You can change the padding or margin in different methods:
 * When one value is specified, it applies the same padding/margin to all four sides. e.g. `padding: 10x;`
 * When two values are specified, the first padding/margin applies to the top and bottom, the second to the left and right. e.g. `margin: 10px 20px;`
 * When three values are specified, the first padding/margin applies to the top, the second to the left and right, the third to the bottom. e.g `padding: 10px 20px 5px;`
 * When four values are specified, the paddings/margins apply to the top, right, bottom, and left in that order (clockwise). e.g. `margin: 10px 5px 8px 9px`
