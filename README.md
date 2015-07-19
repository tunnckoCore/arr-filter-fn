# [arr-filter-fn][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Filter and flattenify array to have only function values. Much like `arr-filter-function` package, but with [arr-flatten](http://npm.im/arr-flatten).

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]


## Install
```
npm i arr-filter-fn --save
npm test
```


## API
> For more use-cases see the [tests](./test.js)

### [arrFilterFn](./index.js#L23)
> Filter and flatten array for function values.

* `<arr>` **{Array}** array will be [arr-flatten](http://npm.im/arr-flatten)-ed first  
* `[iterator]` **{Function}**    
* `returns` **{Array}**: filtered array, containing only functions  

**Example**

```js
var filter = require('arr-filter-fn')

function fn1 () {}
function fn2 () {}
function fn3 () {}

var arr = filter([fn2, 'abc', [1, 2, [fn3, 3]], fn1])
//=> [fn2, fn3, fn1]
```


## Related
- [apidocs-cli](https://github.com/tunnckocore/apidocs-cli): Async CLI for automatically generating API docs from code comments with `helper-apidocs`
- [arr-filter](https://github.com/jonschlinkert/arr-filter): Faster alternative to javascript's native filter method.
- [arr-filter-function](https://github.com/tunnckocore/arr-filter-function): Fast filter array to have only function values. But also… [more](https://github.com/tunnckocore/arr-filter-function)
- [filter-array](https://github.com/jonschlinkert/filter-array): Iterates over the elements in an array, returning an array with only the elements for which the callback returns truthy.
- [filter-values](https://github.com/jonschlinkert/filter-values): Filter an object values using glob patterns or with a… [more](https://github.com/jonschlinkert/filter-values)
- [filter-functions](https://github.com/jonschlinkert/filter-functions): Filter an array to have only function values, or an object to have only properties with function values.
- [npm-related](https://github.com/tunnckoCore/npm-related): Thin wrapper on top of `helper-related` for generating a list of links to the homepages of related NPM projects.


## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/arr-filter-fn/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.


## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckocore.tk][author-www-img]][author-www-url] [![keybase tunnckocore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]


[npmjs-url]: https://www.npmjs.com/package/arr-filter-fn
[npmjs-img]: https://img.shields.io/npm/v/arr-filter-fn.svg?label=arr-filter-fn

[license-url]: https://github.com/tunnckoCore/arr-filter-fn/blob/master/LICENSE.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg


[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/arr-filter-fn
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/arr-filter-fn.svg

[travis-url]: https://travis-ci.org/tunnckoCore/arr-filter-fn
[travis-img]: https://img.shields.io/travis/tunnckoCore/arr-filter-fn.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/arr-filter-fn
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/arr-filter-fn.svg

[david-url]: https://david-dm.org/tunnckoCore/arr-filter-fn
[david-img]: https://img.shields.io/david/tunnckoCore/arr-filter-fn.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg


[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/messages
[new-message-img]: https://img.shields.io/badge/send%20me-message-green.svg
