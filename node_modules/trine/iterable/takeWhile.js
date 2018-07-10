/**
 * Yields the items until an item that matches the condition is found.
 *
 * @this {Iterable<T>}
 * @param condition A condition called on every item to see if it should be taken.
 * @ntime O(n)
 * @dspace O(1)
 * @example Basic Usage
 *
 * ```javascript
 * [1,2,3,4,1,2,3,4]::takeWhile(function () {
 *   return this < 4;
 * }) // yields 1, 2, 3
 * ```
*/
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.takeWhile = takeWhile;
var marked0$0 = [takeWhile].map(_regeneratorRuntime.mark);

function takeWhile(condition) {
    var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item;

    return _regeneratorRuntime.wrap(function takeWhile$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                context$1$0.prev = 3;
                _iterator = _getIterator(this);

            case 5:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                    context$1$0.next = 14;
                    break;
                }

                item = _step.value;

                if (condition.call(item)) {
                    context$1$0.next = 9;
                    break;
                }

                return context$1$0.abrupt("return");

            case 9:
                context$1$0.next = 11;
                return item;

            case 11:
                _iteratorNormalCompletion = true;
                context$1$0.next = 5;
                break;

            case 14:
                context$1$0.next = 20;
                break;

            case 16:
                context$1$0.prev = 16;
                context$1$0.t0 = context$1$0["catch"](3);
                _didIteratorError = true;
                _iteratorError = context$1$0.t0;

            case 20:
                context$1$0.prev = 20;
                context$1$0.prev = 21;

                if (!_iteratorNormalCompletion && _iterator["return"]) {
                    _iterator["return"]();
                }

            case 23:
                context$1$0.prev = 23;

                if (!_didIteratorError) {
                    context$1$0.next = 26;
                    break;
                }

                throw _iteratorError;

            case 26:
                return context$1$0.finish(23);

            case 27:
                return context$1$0.finish(20);

            case 28:
            case "end":
                return context$1$0.stop();
        }
    }, marked0$0[0], this, [[3, 16, 20, 28], [21,, 23, 27]]);
}

;