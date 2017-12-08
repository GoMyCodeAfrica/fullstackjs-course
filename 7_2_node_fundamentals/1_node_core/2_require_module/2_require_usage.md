## require usage

require() can be used to import many different types of modules, not just for local node.js files. You can use require() to do the following:

* Import core modules/packages, e.g., <code>const filesystem = require('fs')</code>
* Import npm modules/packages, e.g., <code>const express = require('express')</code>
* Import single file in a project, e.g., <code>const server = require('./boot/server.js')</code>
* Import single JSON files, e.g., <code>const databaseConfigs = require('./configs/database.json')</code>
* Import folders in a project (an alias for importing an index.js in that folder), e.g., <code>const routes = require('./routes')</code>

More examples:

```JavaScript
const filesystem = require('fs') // core module
const express = require('express') // npm module
const server = require('./boot/server.js') // server.js file with a relative path down the tree
const server = require('../boot/server.js') // server.js file with a relative path up the tree
const server = require('/var/www/app/boot/server.js') // server.js file with an absolute path 
const server = require('./boot/server') // file if there's the server.js file
const routes = require('../routes') // index.js inside routes folder if there's no routes.js file
const databaseConfigs = require('./configs/database.json') // JSON file
```

Using <strong>require()</strong> with local files

To use require() with local files, specify the name string (the argument to require()) of the file you are trying to import. In general, start the name string with a . to specify that the file path is relative to the current folder of the node.js file or a .. to specify that the file path is relative to the parent directory of the current folder. For example, const server = require('./boot/server.js') imports a file named server.js which is in a folder named boot that is in the current folder relative to the code file in which we write require().
Using require() with npm or core modules/packages

To use require() with an npm or core module/package, enter the module/package name as the name string. There should not be . or .. in the name string. For example, const express = require('express') imports a package named express. The package is in the node_modules folder in the root of the project if it's an installed npm package, and in the system folder if it's a core Node module (exact location depends on your OS and how you installed Node).

As you can see, require() is very versatile and can be used in many cases.