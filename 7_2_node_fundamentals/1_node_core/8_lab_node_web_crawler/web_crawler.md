## Node Web Crawler

In this tutorial lab, you will build a script to download webpages. This lab will use concepts and skills learned in the module 1, concepts such as core modules, CLI arguments, launching Node scripts, using an npm module, making a GET request and processing the body, creating a folder and a file.

## Node Web Crawler

The implementation of the lab consists of the following steps:

1. Create the project folder and make a file in it. The name doesn't matter.

2. Create a package.json file using `npm init -y`

3. Install a module `uuid` for generating random timestamped values which we will use for folder names

4. Create a script file which downloads a page at a given URL and writes page's HTML to a file. URL must be provided from the command-line argument.

## Initial steps

Open your Terminal / Command Prompt (for Windows, use bash). Create a new folder with mkdir:

`mkdir download-page`  
`cd download-page`  

Create a new file in this newly created folder:

`touch download.js`  

Now, create a package.json file by using npm init -y. Once the file is created, install uuid module using the npm install (or npm i) command:

`npm i uuid@3.1 -E`  

That's all the set up. Now, you are ready to start developing the program itself.

Let's see the program at a higher level without the details. The program will have this structure:

```JavaScript
const http = require('http')
const fs = require('fs')
const path = require('path')
const uuidv1 = require('uuid/v1')

const DOWNLOAD_URL = process.argv[2]


const fetchPage = (urlF, callback) => {
  ...
}

const downloadPage = () => {
  ...
  const folderName = uuidv1()
  fs.mkdirSync(folderName)
  fetchPage(url, (error, data)=>{
    if (error) return console.log(error)
    fs.writeFileSync(path.join(__dirname, folderName, 'url.txt'), url)  
    fs.writeFileSync(path.join(__dirname, folderName, 'file.html'), data)
    console.log('downloading is done in folder ', folderName)
  })
}

downloadPage(DOWNLOAD_URL)
```

From the Terminal app, launch the script with some URL:

`node download.js http://www.google.com`

You would see an output similar to this:

`downloading  http://www.google.com`  
`downloading is done in folder  b9697730-9764-11e7-8546-bfe35e924b2c`  

Open the newly created subfolder in your code editor or even in a browser to view the HTML (the browser view won't be a perfect copy, because there might be missing some CSS dependencies or AJAX/XHR content which is loaded on the fly by the target website but inaccessible by the GET request).