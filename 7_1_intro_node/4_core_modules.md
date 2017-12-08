# Core modules

Node has a small core group of modules (commonly referred to as 'node core') that are presented as the public API that you are intended to write programs with.

For working with file systems there is the `fs` module and for networks there are modules like `net` (`TCP`), `http`, dgram (`UDP`).

In addition to `fs` and network modules there are a number of other base modules in node core.

There is a module for asynchronously resolving DNS queries called dns, a module for getting OS specific information like the tmpdir location called `os`, a module for allocating binary chunks of memory called `buffer`, some modules for parsing urls and paths (`url`, `querystring`, `path`), etc. 

Most if not all of the modules in node core are there to support node's main use case: writing fast programs that talk to file systems or networks.

Node handles I/O with: 

* Callbacks

* Events

* Streams

* Modules