# Starting point

To get this assessment started, you should go and grab the raw text you need to mark up from the file `letter.txt` , and the [CSS](https://github.com/morfioce/fullstackjs-course/blob/master/1-HTML/snippets/css.txt) you need to include in your HTML. Create a new `letter.html` file using your text editor to do your work in (or alternatively use a site like JSBin or Thimble to do your assessment.)
 
 >	You don't need to know any CSS to do this assessment; you just need to put the provided CSS inside an HTML element.

# Project brief

For this project, your task is to mark up a letter that needs to be hosted on a university intranet. The letter is a response from a research fellow to a prospective PhD student concerning their application to work at the university.

## The head of the document:
 - The character set of the document should be specified as utf-8 using an appropriate meta tag.
 - The provided CSS should be included inside an appropriate tag.

## Block/structural semantics:
  - You should structure the overall document with an appropriate structure including doctype, and `<html>`, `<head>` and `<body>` elements.
  - The letter in general should be marked up with a structure of paragraphs and headings, with the exception of the below points. There is one top level heading (the "Re:" line) and three second level headings.
  - The semester start dates, study subjects and exotic dances should be marked up using an appropriate list type.

## Extra, inline semantics:
 - The names of the sender and receiver (and "Tel" and "Email") should be marked up with strong importance.
 - The four dates in the document should be given appropriate elements containing machine-readable dates.
 - The first address and first date in the letter should be given a class attribute value of "receiver-column"; the CSS you'll add later will then cause these to be right aligned, as should be the case in a classic letter layout.
 - The six sub/superscripts should be marked up appropriately.
 - The five acronyms/abbreviations in the main text of the letter should be marked up to provide expansions of each acronym/abbreviation.
The degree symbols, greater than symbol and multiply symbols should be marked up using appropriate entity references.
 - Try to mark up at least two appropriate words in the text with strong importance/emphasis.
 - There are two places where a hyperlink should be added; add appropriate links with titles. For the location that the links point to, just use http://example.com.
 - The university motto quote and citation should be marked up with appropriate elements.
 - The author of the letter should be specified in an appropriate meta tag.

## Hints
 - Use the W3C HTML validator to validate your HTML; you'll get bonus points if it validates.

## Letter text

Dr. Eleanor Gaye
Awesome Science faculty
University of Awesome
Bobtown, CA 99999,
USA
Tel: 123-456-7890
Email: no_reply@example.com

20 January 2016

Miss Eileen Dover
4321 Cliff Top Edge
Dover, CT9 XXX
UK


Re: Eileen Dover university application

Dear Eileen,

Thank you for your recent application to join us at the University of Awesome's science faculty to study as part of your PhD next year. I will answer your questions one by one, in the following sections.
Starting dates

We are happy to accomodate you starting your study with us at any time, however it would suit us better if you could start at the beginning of a semester; the start dates for each one are as follows:

First semester: 9 September 2016
Second semester: 15 January 2017
Third semester: 2 May 2017

Please let me know if this is ok, and if so which start date you would prefer.

You can find more information about important university dates on our website.


Subjects of study

At the Awesome Science Faculty, we have a pretty open-minded research facility — as long as the subjects fall somewhere in the realm of science and technology. You seem like an intelligent, dedicated researcher, and just the kind of person we'd like to have on our team. Saying that, of the ideas you submitted we were most intrigued by are as follows, in order of priority:

Turning H2O into wine, and the health benefits of Resveratrol (C14H12O3.)
Measuring the effect on performance of funk bassplayers at tempratures exceeding 30oC (86oF), when the audience size exponentially increases (effect of 3 x 103 > 3 x 104.)
HTML and CSS constructs for representing musical scores.

So please can you provide more information on each of these subjects, including how long you'd expect the research to take, required staff and other resources, and anything else you think we'd need to know? Thanks.


Exotic dance moves

Yes, you are right! As part of my post-doctorate work, I did study exotic tribal dances. To answer your question, my favourite dances are as follows, with definitions:

Polynesian chicken dance
A little known but very influential dance dating back as far as 300BC, a whole village would dance around in a circle like chickens, to encourage their livestock or be "fruitful".
Icelandic brownian shuffle
Before the Icelanders developed fire as a means of getting warm, they used to practice this dance, which involved huddling close together in a circle on the floor, and shuffling their bodies around in imperceptably tiny, very rapid movements. One of my fellow students used to say that he thought this dance inspired modern styles such as Twerking.
Arctic robot dance
An interesting example of historic misinformation, English explorers in the 1960s believed to have discovered a new dance style characterised by "robotic", stilted movements, being practiced by inhabitants of Northern Alaska and Canada. Later on however it was discovered that they were just moving like this because they were really cold.

For more of my research, see my exotic dance research page.

Yours sincerely,
Dr Eleanor Gaye

University of Awesome motto: "Be awesome to each other." -- Bill S Preston, Esq

## Result Preview

<p align="center">
	<img src="img/marking_up_letter.png" alt="">
</p>
