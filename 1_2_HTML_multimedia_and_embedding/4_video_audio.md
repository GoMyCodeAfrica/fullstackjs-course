# Video and audio content

Now that we are comfortable with adding simple images to a webpage, the next step is to start adding video and audio players to your HTML documents! In this article we'll look at doing just that with the `<video>` and `<audio>` elements; we'll then finish off by looking at how to add captions/subtitles to your videos.

## Audio and video on the web

Web developers have wanted to use video and audio on the Web for a long time, ever since the early 2000s, when we started to have bandwidth fast enough to support any kind of video (video files are much larger than text or even images.) In the early days, native web technologies such as HTML didn't have the ability to embed video and audio on the Web, so proprietary (or plugin-based) technologies like `Flash` (and later, `Silverlight`) became popular for handling such content. This kind of technology worked ok, but it had a number of problems, including not working well with HTML/CSS features, security issues, and accessibility issues.

A native solution would solve much of this if done right. Fortunately, a few years later the HTML5 specification had such features added, with the `<video>` and `<audio>` elements, and some shiny new JavaScript APIs for controlling them. We'll not be looking at JavaScript here — just the basic foundations that can be achieved with HTML.

### The `<video>` element

The `<video>` element allows you to embed a video very easily. A really simple example looks like this:

```html
<video src="rabbit320.webm" controls>
  <p>Your browser doesn't support HTML5 video. Here is a <a href="rabbit320.webm">link to the video</a> instead.</p> 
</video>
```

<strong>`src`</strong>
>	In the same way as for the <img> element, the src (source) attribute contains a path to the video you want to embed. It works in exactly the same way.

<strong>`controls`</strong>
>	Users must be able to control video and audio playback (it's especially critical for people who have epilepsy.) You must either use the controls attribute to include the browser's own control interface, or build your interface using the appropriate JavaScript API. At minimum, the interface must include a way to start and stop the media, and to adjust the volume.

<strong>The paragraph inside the `<video>` tags</strong>
This is called fallback content — this will be displayed if the browser accessing the page doesn't support the `<video>` element, allowing us to provide a fallback for older browsers. This can be anything you like; in this case we've provided a direct link to the video file, so the user can at least access it some way regardless of what browser they are using.

The embedded video will look something like this:

<p align="center">
	<img src="images/simple-video.png" alt="">
</p>

You can try <a href="http://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/simple-video.html">the example live</a> here

### Supporting multiple formats

There's a problem with the above example, which you may have noticed already if you've tried to access the live link above with a browser like Safari or Internet Explorer. The video won't play! This is because different browsers support different video (and audio) formats.

Let's go through the terminology quickly. Formats like MP3, MP4 and WebM are called <strong>container formats</strong>. They contain different parts that make up the whole song or video — such as an audio track, a video track (in the case of video), and metadata to describe the media being presented.

The audio and video tracks are also in different formats, for example:


* A WebM container usually packages Ogg Vorbis audio with VP8/VP9 video. This is supported mainly in Firefox and Chrome.
* An MP4 container often packages AAC or MP3 audio with H.264 video. This is supported mainly in Internet Explorer and Safari.
* The older Ogg container tends to go with Ogg Vorbis audio and Ogg Theora video. This was supported mainly in Firefox and Chrome, but has basically been superceded by the better quality WebM format.

An audio player will tend to play an audio track directly, e.g. an `MP3` or `Ogg` file. These don't need containers.

So how do we do this? Take a look at the following <a href="https://github.com/mdn/learning-area/blob/gh-pages/html/multimedia-and-embedding/video-and-audio-content/multiple-video-formats.html">updated example</a>

```html
<video controls>
  <source src="rabbit320.mp4" type="video/mp4">
  <source src="rabbit320.webm" type="video/webm">
  <p>Your browser doesn't support HTML5 video. Here is a <a href="rabbit320.mp4">link to the video</a> instead.</p>
</video>
```

Here we've taken the src attribute out of the actual `<video>` tag, and instead included separate `<source>` elements that point to their own sources. In this case the browser will go through the `<source>` elements and play the first one that it has the codec to support. Including WebM and MP4 sources should be enough to play your video on most platforms and browsers these days.

### The `<audio>` element

The `<audio>` element works in exactly the same way as the `<video>` element, with a few small differences as outlined below. A typical example might look like so:

```html
<audio controls>
  <source src="viper.mp3" type="audio/mp3">
  <source src="viper.ogg" type="audio/ogg">
  <p>Your browser doesn't support HTML5 audio. Here is a <a href="viper.mp3">link to the audio</a> instead.</p>
</audio>
```

This produces something like the following in a browser:

<p align="center">
	<img src="images/audio-player.png" alt="audio player">
</p>

>	Note: You can <a href="http://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/multiple-audio-formats.html">run the audio demo live</a> on Github

### Active learning: Embedding your own audio and video

For this active learning, we'd (ideally) like you to go out into the world and record some of your own video and audio — most phones these days allow you to record audio and video very easily, and provided you can transfer it on to your computer, you can use it. You may have to do some conversion to end up with a WebM and MP4 in the case of video, and an MP3 and Ogg in the case of audio, but there are enough programs out there to allow you to do this without too much trouble, such as Miro Video Converter and Audacity. We'd like you to have a go!

If you are unable to source any video or audio, then you can feel free to use our <a href="https://github.com/mdn/learning-area/tree/master/html/multimedia-and-embedding/video-and-audio-content">sample audio and video files</a> to carry out this exercise. You can also use our sample code for reference.

We would like you to:

1. Save your audio and video files in a new directory on your computer.
2. Create a new HTML file in the same directory, called index.html.
3. Add `<audio>` and `<video>` elements to the page; make them display the default browser controls.
4. Give both of them `<source>` elements so that browsers will find the audio format they support best and load it. These should include type attributes.
5. Give the `<video>` element a poster that will be displayed before the video starts to be played. Have fun creating your own poster graphic.

For an added bonus, you could try researching text tracks, and work out how to add some captions to your video.