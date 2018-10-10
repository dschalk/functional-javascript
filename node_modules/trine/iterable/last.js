/**
 * Yields the k-th item from the end of the iterator.
 *
 * @this {Iterable<T>}
 * @ntime O(n)
 * @dspace O(k)
 * @example Basic Usage
 *
 * ```javascript
 * [1,2,3]::last(0) // yields 3
 * [1,2,3]::last(1) // yields 2
 * [1,2,3]::last(2) // yields 1
 * [1,2,3]::last(3) // yields nothing
 * ```
*/
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.last = last;
var marked0$0 = [last].map(_regeneratorRuntime.mark);

function last(k) {
    var buffer, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item;

    return _regeneratorRuntime.wrap(function last$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                buffer = [];
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                context$1$0.prev = 4;

                for (_iterator = _getIterator(this); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    item = _step.value;

                    buffer = buffer.concat([item]).slice(-(k + 1));
                }

                context$1$0.next = 12;
                break;

            case 8:
                context$1$0.prev = 8;
                context$1$0.t0 = context$1$0["catch"](4);
                _didIteratorError = true;
                _iteratorError = context$1$0.t0;

            case 12:
                context$1$0.prev = 12;
                context$1$0.prev = 13;

                if (!_iteratorNormalCompletion && _iterator["return"]) {
                    _iterator["return"]();
                }

            case 15:
                context$1$0.prev = 15;

                if (!_didIteratorError) {
                    context$1$0.next = 18;
                    break;
                }

                throw _iteratorError;

            case 18:
                return context$1$0.finish(15);

            case 19:
                return context$1$0.finish(12);

            case 20:
                if (!(buffer.length === k + 1)) {
                    context$1$0.next = 23;
                    break;
                }

                context$1$0.next = 23;
                return buffer[0];

            case 23:
            case "end":
                return context$1$0.stop();
        }
    }, marked0$0[0], this, [[4, 8, 12, 20], [13,, 15, 19]]);
}

;