/**
 * Yields all the items of the iterator except the last k items.
 *
 * @this {Iterable<T>}
 * @ntime O(n)
 * @dspace O(n)
 * @example Basic Usage
 *
 * ```javascript
 * [1,2,3]::dropTail(0) // yields 1, 2, 3
 * [1,2,3]::dropTail(1) // yields 1, 2
 * [1,2,3]::dropTail(2) // yields 1
 * [1,2,3]::dropTail(3) // doesn't yield anything
 * [1,2,3]::dropTail(4) // doesn't yield anything
 * ```
*/
"use strict";

var _toConsumableArray = require("babel-runtime/helpers/to-consumable-array")["default"];

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.dropTail = dropTail;
var marked0$0 = [dropTail].map(_regeneratorRuntime.mark);

function dropTail(k) {
    var all;
    return _regeneratorRuntime.wrap(function dropTail$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                if (k >= 0) {
                    context$1$0.next = 2;
                    break;
                }

                throw new Error("only positive integers are allowed for tail()");

            case 2:
                all = [].concat(_toConsumableArray(this));
                return context$1$0.delegateYield(all.slice(0, Math.max(0, all.length - k)), "t0", 4);

            case 4:
            case "end":
                return context$1$0.stop();
        }
    }, marked0$0[0], this);
}

;