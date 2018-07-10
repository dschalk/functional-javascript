/**
 * Yields the items of the iterator sorted by a given comparator.
 *
 * @this {Iterable<T>}
 * @ntime Engine-specific
 * @dspace Engine-specific
 * @example Basic Usage
 *
 * ```javascript
 * ["foo", "bar"]::sortAlphabetically() // yields "bar", "foo"
 * "cba"::sortAlphabetically() // yields "a", "b", "c"
 * ```
*/
"use strict";

var _toConsumableArray = require("babel-runtime/helpers/to-consumable-array")["default"];

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sortAlphabetically = sortAlphabetically;
var marked0$0 = [sortAlphabetically].map(_regeneratorRuntime.mark);

function sortAlphabetically() {
  return _regeneratorRuntime.wrap(function sortAlphabetically$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        return context$1$0.delegateYield([].concat(_toConsumableArray(this)).sort(), "t0", 1);

      case 1:
      case "end":
        return context$1$0.stop();
    }
  }, marked0$0[0], this);
}

;