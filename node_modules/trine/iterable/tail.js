/**
 * Yields the k last items of the iterator.
 *
 * @this {Iterable<T>}
 * @ntime O(n)
 * @dspace O(k)
 * @example Basic Usage
 *
 * ```javascript
 * [1,2,3]::tail(1) // yields 3
 * [1,2,3]::tail(2) // yields 2, 3
 * [1,2,3]::tail(3) // yields 1, 2, 3
 * [1,2,3]::tail(4) // yields 1, 2, 3
 * ```
*/
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.tail = tail;
var marked0$0 = [tail].map(_regeneratorRuntime.mark);

function tail(k) {
    var buffer, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item;

    return _regeneratorRuntime.wrap(function tail$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                buffer = [];
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                context$1$0.prev = 4;

                for (_iterator = _getIterator(this); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    item = _step.value;

                    buffer = buffer.concat([item]).slice(-k);
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
                return context$1$0.delegateYield(buffer, "t1", 21);

            case 21:
            case "end":
                return context$1$0.stop();
        }
    }, marked0$0[0], this, [[4, 8, 12, 20], [13,, 15, 19]]);
}

;