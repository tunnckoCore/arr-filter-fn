/*!
 * arr-filter-fn <https://github.com/tunnckoCore/arr-filter-fn>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var flatten = require('arr-flatten')
var filter = require('arr-filter-function')

/**
 * Filter and flatten array for function values.
 *
 * @name  arrFilterFn
 * @param  {Array} `<arr>`
 * @param  {Function} `[iterator]`
 * @return {Array} filtered array, containing only functions
 * @api public
 */

module.exports = function arrFilterFn (arr, iterator) {
  return filter.call(this, flatten(arr), iterator)
}
