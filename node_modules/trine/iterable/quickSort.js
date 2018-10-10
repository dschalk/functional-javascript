/**
 * A pure JS alternative to the builtin sort - operates directly on iterators, so it can be advantageous to native sort in cases where
 * you only need a few of the sorted items, e.g. 15 first products sorted
 * by price. The first items get sorted precisely first so the whole set
 * does not necessarily need to be sorted.
 *
 * @this {Iterable<T>}
 * @ntime O(n²)
 * @dspace O(n)
 * @example Basic Usage
 *
 * ```javascript
 * [3,2,5,1,4]::quickSort(function (b) {
 *   return this - b;
 * }); // yields 1,2,3,4,5
 * ```
*/
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.quickSort = quickSort;
var marked0$0 = [quickSort].map(_regeneratorRuntime.mark);

function quickSort(comparator) {
    var iterator, smaller, greater, first, pivot, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item, comparison;

    return _regeneratorRuntime.wrap(function quickSort$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                iterator = _getIterator(this);
                smaller = [];
                greater = [];
                first = iterator.next();

                if (!first.done) {
                    context$1$0.next = 6;
                    break;
                }

                return context$1$0.abrupt("return");

            case 6:
                pivot = first.value;
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                context$1$0.prev = 10;

                for (_iterator = _getIterator(iterator); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    item = _step.value;
                    comparison = comparator.call(pivot, item);

                    if (comparison > 0) {
                        smaller.push(item);
                    } else {
                        greater.push(item);
                    }
                }

                context$1$0.next = 18;
                break;

            case 14:
                context$1$0.prev = 14;
                context$1$0.t0 = context$1$0["catch"](10);
                _didIteratorError = true;
                _iteratorError = context$1$0.t0;

            case 18:
                context$1$0.prev = 18;
                context$1$0.prev = 19;

                if (!_iteratorNormalCompletion && _iterator["return"]) {
                    _iterator["return"]();
                }

            case 21:
                context$1$0.prev = 21;

                if (!_didIteratorError) {
                    context$1$0.next = 24;
                    break;
                }

                throw _iteratorError;

            case 24:
                return context$1$0.finish(21);

            case 25:
                return context$1$0.finish(18);

            case 26:
                return context$1$0.delegateYield(quickSort.call(smaller, comparator), "t1", 27);

            case 27:
                context$1$0.next = 29;
                return pivot;

            case 29:
                return context$1$0.delegateYield(quickSort.call(greater, comparator), "t2", 30);

            case 30:
            case "end":
                return context$1$0.stop();
        }
    }, marked0$0[0], this, [[10, 14, 18, 26], [19,, 21, 25]]);
}

;