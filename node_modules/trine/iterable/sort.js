/**
 * Yields the items of the iterator sorted by a given comparator.
 *
 * @this {Iterable<T>}
 * @ntime Engine-specific
 * @dspace Engine-specific
 * @example Basic Usage
 *
 * ```javascript
 * [3,2,1]::sort(function (b) { return this - b; }) // yields 1, 2, 3
 * ```
*/
"use strict";

var _toConsumableArray = require("babel-runtime/helpers/to-consumable-array")["default"];

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sort = sort;
var marked0$0 = [sort].map(_regeneratorRuntime.mark);

function sort(comparator) {
    return _regeneratorRuntime.wrap(function sort$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                return context$1$0.delegateYield([].concat(_toConsumableArray(this)).sort(function (a, b) {
                    return comparator.call(a, b);
                }), "t0", 1);

            case 1:
            case "end":
                return context$1$0.stop();
        }
    }, marked0$0[0], this);
}

;