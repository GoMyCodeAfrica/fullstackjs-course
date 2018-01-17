# The modern mode, `'use strict'`

For a long time JavaScript was evolving without compatibility issues. New features were added to the language, but the old functionality did not change.

That had the benefit of never breaking existing code. But the downside was that any mistake or an imperfect decision made by JavaScript creators got stuck in the language forever.

It had been so until 2009 when ECMAScript 5 (ES5) appeared. It added new features to the language and modified some of the existing ones. To keep the old code working, most modifications are off by default. One needs to enable them explicitly with a special directive `"use strict"`.

## `'user strict'`

The directive looks like a string: `"use strict"` or `'use strict'`. When it is located on the top of the script, then the whole script works the “modern” way.

For example

```JavaScript
"use strict";

// this code works the modern way
...
```

We will learn functions (a way to group commands) soon.

Looking ahead let’s just note that "use strict" can be put at the start of a function (most kinds of functions) instead of the whole script. Then strict mode is enabled in that function only. But usually people use it for the whole script.

## Always `'use strict'`

The differences of `'use strict'` versus the “default” mode are still to be covered.

In the next chapters, as we learn language features, we’ll make notes about the differences of the strict mode. Luckily, there are not so many. And they actually make our life better.

At this point in time it’s enough to know about it in general:

1. The "use strict" directive switches the engine to the “modern” mode, changing the behavior of some built-in features. We’ll see the details as we study.

2. The strict mode is enabled by "use strict" at the top. Also there are several language features like “classes” and “modules” that enable strict mode automatically.

3. The strict mode is supported by all modern browsers.

4. It’s always recommended to start scripts with "use strict". All examples in this tutorial assume so, unless (very rarely) specified otherwise.
