"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.reduce = reduce;
var marked0$0 = [reduce].map(_regeneratorRuntime.mark);

var _aggregate = require("./aggregate");

var _last = require("./last");

/**
 * Yields the accumulation of the iterator with a given accumulator method.
 *
 * @type rT The item type of the returned iterator.
 * @type iT The item type of the input iterator.
 * @this {Iterable<iT>}
 * @ntime O(n)
 * @dspace O(1)
 * @example Basic Usage
 *
 * ```javascript
 * [3,2,5,1,4]::reduce(function (b) {
 *   return this + b;
 * }, 0); // yields 15
 * ```
*/

function reduce(accumulator, accumulation) {
    var _context;

    return _regeneratorRuntime.wrap(function reduce$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                return context$1$0.delegateYield((_context = _aggregate.aggregate.call(this, accumulator, accumulation), _last.last).call(_context, 0), "t0", 1);

            case 1:
            case "end":
                return context$1$0.stop();
        }
    }, marked0$0[0], this);
}

;