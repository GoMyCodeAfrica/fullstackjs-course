# Creating hyperlinks

Hyperlinks are really important — they are what makes the Web a web. This article shows the syntax required to make a link, and discusses link best practices.

## What is a hyperlink?

Hyperlinks are one of the most exciting innovations the Web has to offer. Well, they've been a feature of the Web since the very beginning, but they are what makes the Web a Web — they allow us to link our documents to any other document (or other resource) we want to, we can also link to specific parts of documents, and we can make apps available at a simple web address (contrast this to native apps, which have to be installed and all that business.) Just about any web content can be converted to a link, so that when clicked (or otherwise activated) it will make the web browser go to another web address (URL.)

>	Note: A URL can point to HTML files, text files, images, text documents, video and audio files, and anything else that can live on the Web. If the web browser doesn't know how to display or handle the file, it will ask you if you want to open the file (in which case the duty of opening or handling the file is passed to a suitable native app on the device) or download the file (in which case you can try to deal with it later on.)

The New York Times homepage, for example, contains a large number of links to point to not only multiple news stories, but also different areas of the site (navigation functionality), login/registration pages (user tools) and more.

<p align="center">
	<img src="images/newyorktimes.png" alt="new york times home page">
</p>

## Anatomy of a link

A basic link is created by wrapping the text you want to turn into a link inside an `<a>` element, and giving it an `href` attribute (also known as a <strong>Hypertext Reference</strong> , or <strong>target</strong>) that will contain the web address you want the link to point to.

```html
<p>I'm creating a link to
<a href="https://www.nytimes.com/">the Mozilla homepage</a>.
</p>
```

This gives us the following result:

I'm creating a link to the [New York Times homepage](https://www.nytimes.com/).

### Adding supporting information with the title attribute

Another attribute you may want to add to your links is `title`; this is intended to contain supplementary useful information about the link, such as what kind of information the page contains, or things to be aware of. For example:

```html
<p>I'm creating a link to
<a href="https://www.nytimes.com/"
   title="The best place to find more information about what's going around">the New York Times homepage</a>.
</p>
```

This gives us the following result (the title will come up as a tooltip when the link is hovered over):

I'm creating a link to the <a href="https://www.nytimes.com/"
   title="The best place to find more information about what's going around">the New York Times homepage</a>.

### Active learning: creating your own example link

Active learning time: we'd like you to create an HTML document using your local code editor, using the below starting template.

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


* Inside the HTML body, try adding one or more paragraphs or other types of content you already know about.
* Turn some of the content into links.
* Include title attributes.

### Block level links

As mentioned before, you can turn just about any content into a link, even block level elements. If you had an image you wanted to turn into a link, you could just put the image between `<a></a>` tags.

```html
<a href="https://www.mozilla.org/en-US/">
  <img src="mozilla-image.png" alt="mozilla logo that links to the mozilla homepage">
</a>
```

## A quick primer on URLs and paths

A URL, or Uniform Resource Locator is simply a string of text that defines where something is located on the Web. For example Mozilla's English homepage is located at `https://www.mozilla.org/`.

URLs use paths to find files. Paths specify where in the filesystem the file you are interested in is located. Let's look at a simple example of a directory structure 

<p align="center">
	<img src="images/simple-directory.png" alt="simple directory">
</p>

The root of this directory structure is called `creating-hyperlinks`. When working locally with a web site, you will have one directory that the whole site goes inside. Inside the root, we have an `index.html` file and a `contacts.html`. In a real website, `index.html` would be our home page or landing page (a web page that serves as the entry point for a website or a particular section of a website.).

There are also two directories inside our root — `pdfs` and `projects`. These each have a single file inside them — a PDF (`project-brief.pdf`) and an `index.html` file, respectively. Note how you can quite happily have two `index.html` files in one project as long as they are in different locations in the filesystem. Many web sites do. The second `index.html` would perhaps be the main landing page for project-related information.

* <strong>Same directory</strong>: If you wanted to include a hyperlink inside `index.html` (the top level `index.html`) pointing to `contacts.html`, you would just need to specify the filename of the file you want to link to, as it is in the same directory as the current file. So the URL you would use is `contacts.html`:

```html
<p>Want to contact a specific staff member?
Find details on our <a href="contacts.html">contacts page</a>.</p
```

* <strong>Moving down into subdirectories</strong>: If you wanted to include a hyperlink inside `index.html` (the top level `index.html`) pointing to `projects/index.html`, you would need to go down into the projects directory before indicating the file you want to link to. This is done by specifying the directory's name, then a forward slash, then the name of the file. so the URL you would use is `projects/index.html`:

```html
<p>Visit my <a href="projects/index.html">project homepage</a>.</p>
```

* <strong>Moving back up into parent directories</strong>: If you wanted to include a hyperlink inside `projects/index.html` pointing to `pdfs/project-brief.pdf`, you'd have to go up a directory level, then back down into the pdf directory. "Go up a directory" is indicated using two dots — `..` — so the URL you would use is `../pdfs/project-brief.pdf`:

```html
<p>A link to my <a href="../pdfs/project-brief.pdf">project brief</a>.</p>
```

>	Note: You can combine multiple instances of these features into complex URLs, if needed, e.g. ../../../complex/path/to/my/file.html.

### Absolute versus relative URLs

Two terms you'll come across on the Web are <strong>absolute URL</strong> and <strong>relative URL</strong>:

<strong>absolute URL</strong>: Points to a location defined by its absolute location on the web, including protocol and domain name. So for example, if an `index.html` page is uploaded to a directory called `projects` that sits inside the root of a web server, and the web site's domain is `http://www.example.com`, the page would be available at `http://www.example.com/projects/index.html` (or even just `http://www.example.com/`projects/, as most web servers just look for a landing page such as `index.html` to load if it is not specified in the URL.)

An absolute URL will always point to the same location, no matter where it is used.

<strong>relative URL</strong>: Points to a location that is relative to the file you are linking from, more like what we looked at in the previous section. For example, if we wanted to link from our example file at `http://www.example.com/projects/index.html` to a PDF file in the same directory, the URL would just be the filename — e.g. `project-brief.pdf` — no extra information needed. If the PDF was available in a subdirectory inside projects called `pdfs`, the relative link would be `pdfs/project-brief.pdf` (the equivalent absolute URL would be `http://www.example.com/projects/pdfs/project-brief.pdf`.)

A relative URL will point to different places depending on where the file it is used inside is located — for example if we moved our `index.html` file out of the projects directory and into the root of the web site (the top level, not in any directories), the `pdfs/project-brief.pdf` relative URL would now point to `http://www.example.com/pdfs/project-brief.pdf`, not `http://www.example.com/projects/pdfs/project-brief.pdf`.




