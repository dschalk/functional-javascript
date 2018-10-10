/**
 * Yields the sorted union iterator of two sorted iterators.
 *
 * @this {Iterable<Iterable<T>>}
 * @param comparator The sorting value function. Should return `0` when items are equal, a positive number when the item on the left is
 * greater and a negative number when the item on the right is greater.
 * @ntime O(n+m)
 * @dspace O(2)
 * @example Basic Usage
 *
 * ```javascript
 * [[2,3,4,7,8,9], [1,5,6,7]]::union(function (b) {
 *   return this - b;
 * }); // yields 1,2,3,4,5,6,7,8,9
 * ```
*/
"use strict";

var _toConsumableArray = require("babel-runtime/helpers/to-consumable-array")["default"];

var _slicedToArray = require("babel-runtime/helpers/sliced-to-array")["default"];

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.union = union;
var marked0$0 = [union].map(_regeneratorRuntime.mark);

function union(comparator) {
    var iterators, _iterators, iteratorA, iteratorB, stepA, stepB, _context, comparison;

    return _regeneratorRuntime.wrap(function union$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                iterators = [].concat(_toConsumableArray(this)).map(function (item) {
                    return _getIterator(item);
                });

                if (!(iterators.length !== 2)) {
                    context$1$0.next = 3;
                    break;
                }

                throw new Error("union() takes two iterators, " + iterators.length + " were passed");

            case 3:
                _iterators = _slicedToArray(iterators, 2);
                iteratorA = _iterators[0];
                iteratorB = _iterators[1];
                stepA = iteratorA.next();
                stepB = iteratorB.next();

            case 8:
                if (!(!stepA.done && !stepB.done)) {
                    context$1$0.next = 28;
                    break;
                }

                comparison = (_context = stepA.value, comparator).call(_context, stepB.value);

                if (!(comparison < 0)) {
                    context$1$0.next = 16;
                    break;
                }

                context$1$0.next = 13;
                return stepA.value;

            case 13:
                stepA = iteratorA.next();
                context$1$0.next = 26;
                break;

            case 16:
                if (!(comparison > 0)) {
                    context$1$0.next = 22;
                    break;
                }

                context$1$0.next = 19;
                return stepB.value;

            case 19:
                stepB = iteratorB.next();
                context$1$0.next = 26;
                break;

            case 22:
                context$1$0.next = 24;
                return stepA.value;

            case 24:
                stepA = iteratorA.next();
                stepB = iteratorB.next();

            case 26:
                context$1$0.next = 8;
                break;

            case 28:
                if (stepA.done) {
                    context$1$0.next = 34;
                    break;
                }

                context$1$0.next = 31;
                return stepA.value;

            case 31:
                return context$1$0.delegateYield(iteratorA, "t0", 32);

            case 32:
                context$1$0.next = 38;
                break;

            case 34:
                if (stepB.done) {
                    context$1$0.next = 38;
                    break;
                }

                context$1$0.next = 37;
                return stepB.value;

            case 37:
                return context$1$0.delegateYield(iteratorB, "t1", 38);

            case 38:
            case "end":
                return context$1$0.stop();
        }
    }, marked0$0[0], this);
}

;