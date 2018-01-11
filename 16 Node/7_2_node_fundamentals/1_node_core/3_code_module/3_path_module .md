## path

path is a core module that is used to work with file and folder paths so that the code works seamlessly on any platform.
path.join()

On Windows paths are separated using a \, while on POSIX (Unix, macOS) paths are separated by a /. Therefore, a path might be app\server.js on Windows and app/server.js on POSIX (Unix, macOS). This difference between platforms can cause problems when a path is a hard coded string.

The path.join() method is used to create paths that are platform independent. You should use path.join() instead of hard coding the path because path.join() is guaranteed to work across platforms.

Example of path.join() to create a path to app/server.js:

```JavaScript
const path = require('path')
const server = require(path.join('app', 'server.js')) 
```

You can combine path.join with __dirname to use an absolute path instead of a relative one:

```JavaScript
const path = require('path')
const server = require(path.join(__dirname, 'app', 'server.js')) 
```

Full documentation: https://nodejs.org/api/path.html
