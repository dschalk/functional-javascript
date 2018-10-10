/**
 * Yields the number of items in the iterator.
 *
 * @this {Iterable<any>}
 * @ntime O(n)
 * @dspace O(1)
 * @example Basic Usage
 *
 * ```javascript
 * [1,2,3]::count() // yields 3
 * ```
*/
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.count = count;
var marked0$0 = [count].map(_regeneratorRuntime.mark);

function count() {
    var count, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item;

    return _regeneratorRuntime.wrap(function count$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                count = 0;
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                context$1$0.prev = 4;

                for (_iterator = _getIterator(this); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    item = _step.value;

                    count++;
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
                context$1$0.next = 22;
                return count;

            case 22:
            case "end":
                return context$1$0.stop();
        }
    }, marked0$0[0], this, [[4, 8, 12, 20], [13,, 15, 19]]);
}

;