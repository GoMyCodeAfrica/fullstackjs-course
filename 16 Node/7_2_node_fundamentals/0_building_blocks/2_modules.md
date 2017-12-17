# Modules

Beyond the few variables, such as `console` and `process`, Node puts little functionality in the global scope. If you want to access other built-in functionality, you have to ask the module system for it.

The module system is based on the `require` function which is used to load anything from built-in modules to downloaded libraries to files that are part of your own program.

When require is called, Node has to resolve the given string to an actual file to load.

Pathnames that start with `"/"`, `"./"`, or `"../"` are resolved relative to the current module’s path, where:

* `"./"` stands for the current directory

* `"../"` for one directory up

* `"/"` for the root of the file system. 

So if you ask for `"./world/world"` from the file `/home/marijn/elife/run.js`, Node will try to load the file `/home/marijn/elife/world/world.js`. 

The `.js` extension may be omitted.

When a string that does not look like a relative or absolute path is given to require, it is assumed to refer to either a built-in module or a module installed in a node_modules directory. 

For example, `require("fs")` will give you Node’s built-in file system module, and `require("elife")` will try to load the library found in `node_modules/elife/`. A common way to install such libraries is by using NPM, which I will discuss in a moment.