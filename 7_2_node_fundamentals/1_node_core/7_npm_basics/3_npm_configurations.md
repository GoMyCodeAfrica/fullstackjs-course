## npm Configurations

npm can be configured in multiple ways:

* flags

* environment variables

* .npmrc files

* npm config CLI

The npm config CLI is the easiest way, so let's cover it and take a look at a few examples.

To list current configs:

```shell
npm config list 
npm config ls // list configs

To list global configs:

npm config --global list 
npm config -g ls
```

There are many configurations. For example proxy or registry are the most common ones especially if you are working at a big company that has a corporate proxy and a private (self-hosted) npm registry.

To set any config use use npm config set `<key> <value>`. For example, to set the registry value use:

`npm config set registry "http://registry.npmjs.org/"`

You can read an individual setting value. For example to read the registry value use npm config get registry:

`npm config get registry`

To remove the setting (config), there's a npm config delete `<key>` command. For example, to remove email:

`npm config delete email`

