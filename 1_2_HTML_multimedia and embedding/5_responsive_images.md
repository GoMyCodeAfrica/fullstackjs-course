# Responsive images

In this article we'll learn about the concept of responsive images — images that work well on devices with widely differing screen sizes, resolutions, and other such features — and look at what tools HTML provides to help implement them. Responsive images is just one part of (and sets the stage nicely for) responsive web design, a topic that you'll learn a lot more about in a future module of the CSS topic.

## Why responsive images?

So what problem are we trying to solve with responsive images? Let's examine a typical scenario. A typical website probably has a header image to make it look nice to visitors, plus maybe some content images below that. You probably want to make the header span the whole of the width of the header, and the content image fit somewhere inside the content column. Let's have a look at a simple example of this:

<p align="center">
	<img src="images/picture-element-wide.png" alt="">
</p>

This works well on a wide screen device, such as a laptop or desktop, We won't discuss the CSS much, except to say that:


* The body content has been set to a maximum width of 1200 pixels — in viewports above that width the body remains at 1200px and centers itself in the available space. In viewports below that width, the body will stay at 100% of the width of the viewport.

* The header image has been set so that its center always stays in the center of the header, no matter what width the heading is. So if the site is being viewed on a narrower screen, the important detail in the center of the image (the people) can still be seen, and the excess is lost off either side. It is 200px high.

* The content images have been set so that if the body element becomes smaller than the image, the images start to shrink down so that they always stays inside the body, rather than overflowing it.

This is ok, but the problem comes when you start to view the site on a narrow screen device — the header looks ok, but is starting to take up a lot of the screen height for a mobile device; the first content image on the other hand looks terrible — at this size you can barely see the people in it!

<p align="center">
	<img src="images/non-responsive-narrow.png" alt="">
</p>

It would be much better to show a cropped version of the image that homes in on the important details of the shot when the site is viewed on a narrow screen, and maybe something in between the two for a medium width screen device like a tablet — this is commonly known as the <strong>art direction problem</strong>.

>	<strong>Note</strong>: The new features discussed in this article — srcset/sizes/<picture> — are all supported in release versions of modern desktop and mobile browsers (including Microsoft's Edge browser, although not Internet Explorer.)

## How do you create responsive images?

In this section, we'll look at the two problems illustrated above and show how to solve them using HTML's responsive image features.

### Resolution switching: Different sizes

So, what is the problem that we want to solve with resolution switching? We want to display identical image content, just larger or smaller depending on the device — this is the situation we have with the second content image in our example. The standard `<img>` element traditionally only lets you point the browser to a single source file:

```html
<img src="elva-fairy-800w.jpg" alt="Elva dressed as a fairy">
```

We can however use two new attributes — srcset and sizes — to provide several additional source images along with hints to help the browser pick the right one. You can see an example of this in our <a href="http://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/responsive.html">responsive.html</a> example on Github 
```html
<img srcset="elva-fairy-320w.jpg 320w,
             elva-fairy-480w.jpg 480w,
             elva-fairy-800w.jpg 800w"
     sizes="(max-width: 320px) 280px,
            (max-width: 480px) 440px,
            800px"
     src="elva-fairy-800w.jpg" alt="Elva dressed as a fairy">
```

The `srcset` and `sizes` attributes look complicated, but they're not that bad to understand if you format them as shown above, with a different part of the attribute value on each line. Each value contains a comma-separated list. and each part of the lists are made up of three sub-parts. Let's run through the contents of each now:

<strong>`srcset`</strong> defines the set of images we will allow the browser to choose between, and what size each image is. Before each comma, we write:

1. An image filename (`elva-fairy-480w.jpg`.)
2. A space.
3. The image's inherent width in pixels (`480w`) — note that this uses the `w` unit, not `px` as you might expect. This is the image's real size, which can be found by inspecting the image file on your computer

<strong>`sizes`</strong> defines a set of media conditions (e.g. screen widths) and indicates what image size would be best to choose, when certain media conditions are true — these are the hints we talked about earlier. In this case, before each comma we write

1. a media condition (`(max-width:480px)`) — you'll learn more about these in the CSS topic, but for now let's just say that a media condition describes a possible state that the screen can be in. In this case, we are saying "when the viewport width is 480 pixels or less".
2. A space.
3. The width of the slot the image will fill when the media condition is true (`440px`.)

>	You may have noticed that the last slot width has no media condition — this is the default that is chosen when none of the media conditions are true.) The browser ignores everything after the first matching condition, so be careful how you order the media conditions.

So, with these attributes in place, the browser will:

1. Look at its device width.
2. Work out which media condition in the sizes list is the first one to be true.
3. Look at the slot size given to that media query.
4. Load the image referenced in the srcset list that most closely matches the chosen slot size.

And that's it! So at this point, if a supporting browser with a viewport width of `480px` loads the page, the (`max-width: 480px`) media condition will be true, therefore the `440px` slot will be chosen, so the `elva-fairy-480w.jpg` will be loaded, as its inherent width (`480w`) is the closest to `440px`. The `800px` picture is `128KB` on disk whereas the `480px` version is only `63KB` — a saving of `65KB`. Now imagine if this was a page that had many pictures on it. Using this technique could save mobile users a lot of bandwidth.

### Why can't we just do this using CSS or JavaScript?

When the browser starts to load a page, it starts to download (preload) any images before the main parser has started to load and interpret the page's CSS and JavaScript. This is a useful technique, which on average has shaved 20% off page load times. However, it is not helpful for responsive images, hence the need to implement solutions like srcset. You couldn't for example load the `<img>` element, then detect the viewport width with JavaScript and dynamically change the source image to a smaller one if desired. By then, the original image would already have been loaded, and you would load the small image as well, which is even worse in responsive image terms.

## Active learning: Implementing your own responsive images

For this active learning, we're expecting you to be brave and go it alone ... mostly. We want you to implement your own suitable art directed narrow screen/wide screen shot using `<img>`, and a resolution switching example that uses `srcset` ans `sizes` attributes.

1. Write some simple HTML to contain your code (use not-responsive.html as a starting point, if you like)

2. Find a nice wide screen landscape image with some kind of detail contained in it somewhere. Create a web-sized version of it using a graphics editor, then crop it to show a smaller part that zooms in on the detail, and create a second image (about 480px wide is good for this.)

3. Create multiple image files of different sizes, each showing the same picture.

4. Use `srcset`/`size` to create a resolution switcher example, either to serve the same size image at different resolutions, or different image sizes at different viewport widths.

