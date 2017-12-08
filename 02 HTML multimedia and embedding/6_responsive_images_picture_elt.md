# Introducing the `<picture>` element

The `<picture>` element offers a declarative approach towards image resource loading.
Alongside the newer srcset and sizes attributes recently added to `<img>`, the `<picture>` element gives web developers more flexibility in specifying image resources.

## User for art direction

The most common use of the `<picture>` element will be for "art direction" in responsive designs. Instead of having one image that is scaled up or down based on the viewport width, multiple images can be designed to more appropriately fill the browser viewport.

<p align="center" >
	<img src="images/art-direction.png" alt="resized image">
</p>

## View a live demo

It's a fact that the Internet was created to host cat images. Using <picture> we can emulate the amazing ability of cats to adjust to the space given to them no matter how small or large.

<p align="center">
	<img src="images/cat-stretching.png" alt="cat stretching">
</p>

<a href="http://googlechrome.github.io/samples/picture-element/">Open the demo</a> in a new tab. Resize the viewport to see the cat in action.

## The picture syntax

The following HTML and CSS snippet is everything that was used to implement the demo:
```html
<style>
  img {display: block; margin: 0 auto;}
</style>

<picture>
  <source 
    media="(min-width: 650px)"
    srcset="images/kitten-stretching.png">
  <source 
    media="(min-width: 465px)"
    srcset="images/kitten-sitting.png">
  <img 
    src="images/kitten-curled.png" 
    alt="a cute kitten">
</picture>
```

## USer with `<source>` attribute

* <strong>srcset (required)</strong>
Accepts a single image file path (e.g. srcset="kitten.png").

* <strong>media (optional)</strong>
Accepts any valid media query (e.g. `media="(max-width: 30em)"`).

* <strong>sizes (optional)</strong>

* <strong>type (optional)</strong>

## Add a final `<img>` element

The `<img>` element has also been updated to be used within `<picture>` as the fallback in case a browser does not support the picture element or if no source element tags are matched. Using `<img>` within `<picture>` is a requirement—if you forget it, no images will show up.

