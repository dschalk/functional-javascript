"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sortBy = sortBy;
var marked0$0 = [sortBy].map(_regeneratorRuntime.mark);

var _sort = require("./sort");

/**
 * Yields the items of the iterator sorted based on score of the item returned by the transformer.
 *
 * @this {Iterable<T>}
 * @ntime Algorithm dependent
 * @dspace Algorithm dependent
 * @example Basic Usage
 *
 * ```javascript
 * [{
 *   value: 2,
 * }, {
 *   value: 1,
 * }]::sortBy(function () { return this.value; }) // yields { value: 1 }, { value: 2 }
 * ```
*/

function sortBy(transformer) {
    return _regeneratorRuntime.wrap(function sortBy$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                return context$1$0.delegateYield(_sort.sort.call(this, function (b) {
                    return transformer.call(this) - transformer.call(b);
                }), "t0", 1);

            case 1:
            case "end":
                return context$1$0.stop();
        }
    }, marked0$0[0], this);
}

;