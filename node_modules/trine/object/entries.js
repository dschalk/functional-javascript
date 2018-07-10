/**
 * Yields the entries of the bound object.
 *
 * @this {Object}
 * @ntime O(n)
 * @dspace O(n)
 * @example Basic Usage
 *
 * ```javascript
 * {a:1,b:2,c:3}::entries() // yields ["a",1], ["b",2], ["c",3]
 * ```
*/
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _Object$entries = require("babel-runtime/core-js/object/entries")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.entries = entries;
var marked0$0 = [entries].map(_regeneratorRuntime.mark);

function entries() {
  return _regeneratorRuntime.wrap(function entries$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        return context$1$0.delegateYield(_Object$entries(this), "t0", 1);

      case 1:
      case "end":
        return context$1$0.stop();
    }
  }, marked0$0[0], this);
}

;