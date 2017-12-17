## HTTP Client for JSON

To process JSON, developers must get the entire response, otherwise the JSON format won't be valid. For this reason, we use the buffer variable rawData. When the response has ended, we parse the JSON. Take a look at the code in http-json-get.js:

```JavaScript
const https = require('https')
const url = 'https://gist.githubusercontent.com/azat-co/a3b93807d89fd5f98ba7829f0557e266/raw/43adc16c256ec52264c2d0bc0251369faf02a3e2/gistfile1.txt'
https.get(url, (response) => {
  let rawData = ''
  response.on('data', (chunk) => {
    rawData += chunk
  })
  response.on('end', () => {
    try {
      const parsedData = JSON.parse(rawData)
      console.log(parsedData)
    } catch (e) {
      console.error(e.message)
    }
  })
}).on('error', (error) => {
  console.error(`Got error: ${error.message}`)
})
```

The result of running this script would be the parsed JSON object. The parsing needs to happen inside of the try/catch to handle any failures that may occur due to mal-formated JSON input.
