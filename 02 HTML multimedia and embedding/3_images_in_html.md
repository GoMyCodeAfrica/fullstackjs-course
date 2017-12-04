# Images in HTML

In the beginning, the Web was just text, and it was really quite boring. Fortunately, it wasn't too long before the ability to embed images (and other more interesting types of content) inside web pages was added. There are other types of multimedia to consider, but it is logical to start with the humble `<img>` element, used to embed a simple image in a webpage. In this article we'll look at how to use it in depth, including the basics, annotating it with captions using `<figure>`, and detailing how it relates to CSS background images.

## How do we put an image on a webpage?

In order to put a simple image on a webpage, we use the `<img>` element. This is an empty element (meaning that it has no text content or closing tag) that requires a minimum of one attribute to be useful — `src` (pronounced sarc, sometimes spoken as its full title, source). The `src` attribute contains a path pointing to the image you want to embed in the page, which can be a relative or absolute URL, in the same way as `<a>` element `href` attribute values.

So for example, if your image is called dinosaur.jpg, and it sat in the same directory as your HTML page, you could embed the image like so:
```html
<img src="dinosaur.jpg">
```

If the image was in an images subdirectory, which was inside the same directory as the HTML page (which Google recommends for SEO/indexing purposes), then you'd embed it like this:
```html
<img src="images/dinosaur.jpg">
```

>	Note: Search engines also read image filenames and count them towards SEO. Therefore, give your image a descriptive filename; dinosaur.jpg is better than img835.png.

You could embed the image using its absolute URL, for example:
```html
<img src="https://www.example.com/images/dinosaur.jpg">
```

But this is pointless, as it just makes the browser do more work, looking up the IP address from the DNS server all over again, etc. You'll almost always keep the images for your web site on the same server as your HTML.

Our above code would give us the following result:

<p align="center">
	<img src="images/dinosaur-image.png" alt="dinasor image">
</p>

>	<strong>Note</strong>: Elements like `<img>` and `<video>` are sometimes referred to as	replaced elements. This is because the element's content ,and size, is defined by an external resource (like an image or video file), not by the contents of the 		element itself. 

### Alternative text

The next attribute we'll look at is `alt`. Its value is supposed to be a textual description of the image, for use in situations where the image cannot be seen/displayed. For example, our above code could be modified like so:

```html
<img src="images/dinosaur.jpg"
     alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth">
```

The easiest way to test your alt text is to purposely misspell your filename. If for example our image name was spelt `dinosooooor.jpg`, the browser wouldn't display the image, and display the alt text instead:

<p align="center">
	<img src="images/alt-text.png" alt="dinasor image">
</p>

So, why would you ever see or need alt text? It can come in handy for a number of reasons:

* The user is visually impaired, and using a screen reader to read the web out to them. In fact, having alt text available to describe images is useful to most users.
* As described above, you might have spelt the file or path name wrong.
* The browser doesn't support the image type. Some people still use text-only browsers, such as Lynx, which alternatively displays the alt text of images.
* You may want to provide text for search engines to utilize. For example, search engines can match alt text with search queries.
* Users have turned off images to reduce data transfer volume and distractions. This is especially common on mobile phones, and in countries where bandwidth is limited and expensive.

What exactly should you write inside your `alt` attribute? It depends on why the image is there in the first place. In other words, what you lose if your image doesn't show up:

* <strong>Decoration</strong>. If the image is just decoration and isn't part of the content, add a blank alt="". For example, a screen reader doesn't waste time reading out content that is no core need to the user. Decorative images don't really belong in your HTML. CSS background images should be used for inserting decoration, but if it is unavoidable, alt="" is the best way to go.
* <strong>Content</strong>. If your image provides significant information, provide the same information in a brief alt text. Or even better, in the main text which everybody can see. Don't write redundant alt text. How annoying would it be for a sighted user if all paragraphs were written twice in the main content? If the image is described adequately by the main text body, you can just use alt="".
* <strong>Link</strong>. If you put an image inside `<a>` tags, to turn an image into a link, you still must provide accessible link text. In such cases you may, either, write it inside the same `<a>` element, or inside the image's alt attribute. Whatever works best in your case.
* <strong>Text</strong>. You should not put your text into images. If your main heading needs a drop shadow, for example, use CSS for that rather than putting the text into an image. However, If you really can't avoid doing this, you should supply the text inside the alt attribute.

Essentially, the key is to deliver a usable experience, even when the images can't be seen. This ensures all users are not missing any of the content. Try turning off images in your browser and see how things look. You'll soon realize how helpful alt text is if the image cannot be seen.

### Image titles

As with links, you can also add title attributes to images, to provide further supporting information if needed. In our example, we could do this:

```html
<img src="images/dinosaur.jpg"
     alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth"
     width="400"
     height="341"
     title="A T-Rex on display in the Manchester University Museum">
```

<p align="center">
	<img src="images/image-with-title.png" alt="">
</p>

Image titles aren't essential to include. It is often better to include such supporting information in the main article text, rather than attached to the image. However, they are useful in some circumstances; for example, in an image gallery when you have no space for captions.

### Active learning: embedding an image

It is now your turn to play! This active learning section will have you up and running with a simple embedding exercise. You are provided with a basic `<img>` tag; we'd like you to embed the image located at the following URL:

https://raw.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/images-in-html/dinosaur_small.jpg

Earlier we said to never hotlink to images on other servers, but this is just for learning purposes, so we'll let you off this one time.

We would also like you to:

* Add some alt text, and check that it works by misspelling the image URL.
* Set the image's correct width and height (hint; it is 200px wide and 171px high), then experiment with other values to see what the effect is.
* Set a title on the image.

