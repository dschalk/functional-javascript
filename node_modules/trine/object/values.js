/**
 * Yields the values of the bound object.
 *
 * @this {Object}
 * @ntime O(n)
 * @dspace O(n)
 * @example Basic Usage
 *
 * ```javascript
 * {a:1,b:2,c:3}::values() // yields 1, 2, 3
 * ```
*/
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _Object$values = require("babel-runtime/core-js/object/values")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.values = values;
var marked0$0 = [values].map(_regeneratorRuntime.mark);

function values() {
  return _regeneratorRuntime.wrap(function values$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        return context$1$0.delegateYield(_Object$values(this), "t0", 1);

      case 1:
      case "end":
        return context$1$0.stop();
    }
  }, marked0$0[0], this);
}

;