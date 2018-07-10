/**
 * Yields the first item that matches condition, and all the items after that.
 *
 * @this {Iterable<T>}
 * @param condition A condition called on every item to see if it should be dropped.
 * @ntime O(n)
 * @dspace O(1)
 * @example Basic Usage
 *
 * ```javascript
 * [1,2,3,4,1,2,3,4]::dropWhile(function () {
 *   return this < 4;
 * }) // yields 4, 1, 2, 3, 4
 * ```
*/
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.dropWhile = dropWhile;
var marked0$0 = [dropWhile].map(_regeneratorRuntime.mark);

function dropWhile(condition) {
    var iterator, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item;

    return _regeneratorRuntime.wrap(function dropWhile$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                iterator = _getIterator(this);
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                context$1$0.prev = 4;
                _iterator = _getIterator(iterator);

            case 6:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                    context$1$0.next = 15;
                    break;
                }

                item = _step.value;

                if (!condition.call(item)) {
                    context$1$0.next = 10;
                    break;
                }

                return context$1$0.abrupt("continue", 12);

            case 10:
                context$1$0.next = 12;
                return item;

            case 12:
                _iteratorNormalCompletion = true;
                context$1$0.next = 6;
                break;

            case 15:
                context$1$0.next = 21;
                break;

            case 17:
                context$1$0.prev = 17;
                context$1$0.t0 = context$1$0["catch"](4);
                _didIteratorError = true;
                _iteratorError = context$1$0.t0;

            case 21:
                context$1$0.prev = 21;
                context$1$0.prev = 22;

                if (!_iteratorNormalCompletion && _iterator["return"]) {
                    _iterator["return"]();
                }

            case 24:
                context$1$0.prev = 24;

                if (!_didIteratorError) {
                    context$1$0.next = 27;
                    break;
                }

                throw _iteratorError;

            case 27:
                return context$1$0.finish(24);

            case 28:
                return context$1$0.finish(21);

            case 29:
                return context$1$0.delegateYield(iterator, "t1", 30);

            case 30:
            case "end":
                return context$1$0.stop();
        }
    }, marked0$0[0], this, [[4, 17, 21, 29], [22,, 24, 28]]);
}

;