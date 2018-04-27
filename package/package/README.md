[npm]: https://www.npmjs.com/
[yarn]: https://yarnpkg.com/
[webpack]: https://webpack.js.org/

[npm-url]: https://www.npmjs.com/package/gopay-node
[github-url]: https://github.com/gyro-n/gopay-node/
[github-issues-url]: https://github.com/gyro-n/gopay-node/issues
[github-pr-url]: https://github.com/gyro-n/gopay-node/pulls
[license-url]: https://github.com/gyro-n/gopay-node/blob/master/LICENSE

[shield-node]: https://img.shields.io/node/v/gopay-node.svg
[shield-npm]: https://img.shields.io/npm/v/gopay-node.svg
[shield-downloads]: https://img.shields.io/npm/dm/gopay-node.svg
[shield-license]: https://img.shields.io/npm/l/gopay-node.svg
[shield-dependencies]: https://img.shields.io/david/gyro-n/gopay-node.svg
[shield-devDependencies]: https://img.shields.io/david/dev/gyro-n/gopay-node.svg
[shield-optionalDependencies]: https://img.shields.io/david/optional/gyro-n/gopay-node.svg
[shield-coverage]: https://img.shields.io/coveralls/github/gyro-n/gopay-node/0.6.0.svg
[shield-issues]: https://img.shields.io/github/issues/gyro-n/gopay-node.svg
[shield-pullRequests]: https://img.shields.io/github/issues-pr/gyro-n/gopay-node.svg
[shield-cla]: https://cla-assistant.io/readme/badge/gyro-n/gopay-node

html-webpack-root-element-plugin
================================

Plugin for []() to consume [GoPay][gopay-url] API.

[![NPM version][shield-npm]][npm-url]
![Dev Dependencies][shield-devDependencies]
![Optional Dependencies][shield-optionalDependencies]
[![GitHub Issues][shield-issues]][github-issues-url]
[![GitHub Pull Requests][shield-pullRequests]][github-pr-url]
[![MIT licensed][shield-license]][license-url]

Table of Contents
-----------------

  * [Installation](#installation)
  * [Usage](#usage)
    * [API Documentation](#api-documentation)
    * [TypeScript](#typescript)
    * [Browser Usage](#browser-usage)
  * [Contributing](#contributing)
  * [License](#license)

Installation
------------

`html-wepack-root-element-plugin` is easiest to use when installed with [npm][npm]:

```bash
npm install --save-dev html-webpack-root-element-plugin
```
or with [yarn][yarn]:
```bash
yarn add -D html-webpack-root-element-plugin
```

Usage
-----

Just import the module into your webpack config and place if __after__ `html-webpack-plugin`:

```javascript
const HtmlWebpackExcludeEmptyAssetsPlugin = require("html-webpack-exclude-empty-assets-plugin");

module.exports = {
  // ...
  plugins: [
    // ...
    new HtmlWebpackPlugin(),
    new HtmlWebpackExcludeEmptyAssetsPlugin(),
    // ...
  ]
};
```

### Customize

There are few options to customize the plugin bahavior.

```javascript
const HtmlWebpackExcludeEmptyAssetsPlugin = require("html-webpack-exclude-empty-assets-plugin");

module.exports = {
  // ...
  plugins: [
    // ...
    new HtmlWebpackPlugin({
      rootElement: ""
    }),
    new HtmlWebpackExcludeEmptyAssetsPlugin(),
    // ...
  ]
};
```

### API Documentation

WIP

### TypeScript

The library is written in TypeScript and thus type definitions are already included. You can just import compnents of the SDK as usual.

### Browser usage

This module is primarily design for [Node.js][node] and is shipped with only ES6 version of the code. However it is possible
to use it in the browser when it is transpiled to ES5 by your bundle. The example configuration for [Webpack][webpack] requires
additional module which detectes `engines` field in the `packacge.json` file and transpiles the files of cherry picked modules
from `node_modules` even if this path is ignored (it should be) be default. I recommend one of the following plugins:
[webpack-babel-env-deps](https://www.npmjs.com/package/webpack-babel-env-deps) or [babel-engine-plugin](https://www.npmjs.com/package/babel-engine-plugin).


Contributing
------------

To contribute to `gopay-node`, clone this repo locally and commit your code on a separate branch. Please write unit tests for your code
and run the linter before opening a pull request:

```bash
npm test        # run the tests
```

```bash
npm run linter  # run the linter
```


License
-------

`gopay-node` is licensed under the [MIT][license-url] license.
Copyright &copy; 2018, [GoPay][gopay-url] Team
