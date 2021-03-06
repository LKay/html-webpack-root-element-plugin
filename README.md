[npm]: https://www.npmjs.com/
[yarn]: https://yarnpkg.com/
[webpack]: https://webpack.js.org/

[npm-url]: https://www.npmjs.com/package/html-webpack-root-element-plugin
[ci-url]: https://circleci.com/gh/LKay/html-webpack-root-element-plugin/tree/master
[github-url]: https://github.com/LKay/html-webpack-root-element-plugin/
[github-issues-url]: https://github.com/LKay/html-webpack-root-element-plugin/issues
[github-pr-url]: https://github.com/LKay/html-webpack-root-element-plugin/pulls
[license-url]: https://github.com/LKay/html-webpack-root-element-plugin/blob/master/LICENSE

[shield-node]: https://img.shields.io/node/v/html-webpack-root-element-plugin.svg
[shield-ci]: https://img.shields.io/circleci/project/github/LKay/html-webpack-root-element-plugin/master.svg
[shield-npm]: https://img.shields.io/npm/v/html-webpack-root-element-plugin.svg
[shield-downloads]: https://img.shields.io/npm/dm/html-webpack-root-element-plugin.svg
[shield-license]: https://img.shields.io/npm/l/html-webpack-root-element-plugin.svg
[shield-devDependencies]: https://img.shields.io/david/dev/LKay/html-webpack-root-element-plugin.svg
[shield-optionalDependencies]: https://img.shields.io/david/optional/LKay/html-webpack-root-element-plugin.svg
[shield-issues]: https://img.shields.io/github/issues/LKay/html-webpack-root-element-plugin.svg
[shield-pullRequests]: https://img.shields.io/github/issues-pr/LKay/html-webpack-root-element-plugin.svg

html-webpack-root-element-plugin
================================
[![NPM version][shield-npm]][npm-url]
[![Circle CI][shield-ci]][ci-url]
![Dev Dependencies][shield-devDependencies]
![Optional Dependencies][shield-optionalDependencies]
[![GitHub Issues][shield-issues]][github-issues-url]
[![GitHub Pull Requests][shield-pullRequests]][github-pr-url]
[![MIT licensed][shield-license]][license-url]

Plugin for [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin) to output top level root html element.

This is especially usuful for front end frameworks such as [React](https://reactjs.org/) or [Angular](https://angular.io/)
when you want to mount and render your application to top level element and not directly into `<body/>`.

Table of Contents
-----------------

  * [Installation](#installation)
  * [Usage](#usage)
    * [Customize](#customize)
    * [TypeScript](#typescript)
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
const HtmlWebpackRootElementPlugin = require("html-webpack-root-element-plugin");

module.exports = {
  // ...
  plugins: [
    // ...
    new HtmlWebpackPlugin(),
    new HtmlWebpackRootElementPlugin(),
    // ...
  ]
};
```

By default plugin will produce following root element as the first child element under `<body/>`:

```html
<div id="root"></div>
```


### Customize

There are few options to customize the plugin bahavior. You can configure the html tag
to be used to create root element and `id` attribute on the tag. Tweak up plugin output
by passing`rootElement` parameter to your `html-webpack-plugin` constructor options object.
By default this equals `true`.

Possible values:

* `boolean` - If `false` then root element will not be rendered.
* `string` - Passing string value will override default `id` attribute on rendered element.
* `object` - Object can have two optional properties `tagName` to define tag to use and `idAttribute` to set `id` attribute for element.

Example with `string` value:

```javascript
const HtmlWebpackRootElementPlugin = require("html-webpack-root-element-plugin");

module.exports = {
  // ...
  plugins: [
    // ...
    new HtmlWebpackPlugin({
      rootElement: "my-id"
    }),
    new HtmlWebpackRootElementPlugin(),
    // ...
  ]
};
```

will output:

```html
<div id="my-id"></div>
```

Example with `object` value:

```javascript
const HtmlWebpackRootElementPlugin = require("html-webpack-root-element-plugin");

module.exports = {
  // ...
  plugins: [
    // ...
    new HtmlWebpackPlugin({
      rootElement: {
        tagName: "main",
        idAttribute: "my-id"
      }
    }),
    new HtmlWebpackRootElementPlugin(),
    // ...
  ]
};
```

will output:

```html
<main id="my-id"></main>
```


### TypeScript

The library is written in TypeScript and thus type definitions are already included.

License
-------

`html-webpack-root-element-plugin` is licensed under the [MIT][license-url] license.
Copyright &copy; 2018, Karol Janyst
