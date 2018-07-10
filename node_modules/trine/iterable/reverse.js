/**
 * Yields the items of the iterator in reverse order.
 *
 * @this {Iterable<T>}
 * @ntime O(n)
 * @dspace O(2n)
 * @example Basic Usage
 *
 * ```javascript
 * [5,4,1,2,3]::reverse() // yields 3, 2, 1, 4, 5
 * ```
*/
"use strict";

var _toConsumableArray = require("babel-runtime/helpers/to-consumable-array")["default"];

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reverse = reverse;
var marked0$0 = [reverse].map(_regeneratorRuntime.mark);

function reverse() {
  return _regeneratorRuntime.wrap(function reverse$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        return context$1$0.delegateYield([].concat(_toConsumableArray(this)).reverse(), "t0", 1);

      case 1:
      case "end":
        return context$1$0.stop();
    }
  }, marked0$0[0], this);
}

;