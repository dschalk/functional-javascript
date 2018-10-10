/**
 * Yields the k first items of the iterator.
 *
 * @this {Iterable<T>}
 * @ntime O(k)
 * @dspace O(k)
 * @example Basic Usage
 *
 * ```javascript
 * [1,2,3]::head(1) // yields 1
 * [1,2,3]::head(2) // yields 1, 2
 * [1,2,3]::head(3) // yields 1, 2, 3
 * [1,2,3]::head(4) // yields 1, 2, 3
 * ```
*/
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.head = head;
var marked0$0 = [head].map(_regeneratorRuntime.mark);

function head(k) {
    var index, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item;

    return _regeneratorRuntime.wrap(function head$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                index = 0;
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                context$1$0.prev = 4;
                _iterator = _getIterator(this);

            case 6:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                    context$1$0.next = 15;
                    break;
                }

                item = _step.value;

                if (!(index++ >= k)) {
                    context$1$0.next = 10;
                    break;
                }

                return context$1$0.abrupt("return");

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
            case "end":
                return context$1$0.stop();
        }
    }, marked0$0[0], this, [[4, 17, 21, 29], [22,, 24, 28]]);
}

;