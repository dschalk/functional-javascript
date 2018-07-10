/**
 * Yields the items of the iterator with their indexes.
 *
 * @type iT The item type of the input iterator.
 * @this {Iterable<iT>}
 * @ntime O(n)
 * @dspace O(1)
 * @example Basic Usage
 *
 * ```javascript
 * [1,2,3]::enumerate() // yields [0,1], [1,2], [2,3]
 * ```
*/
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.enumerate = enumerate;
var marked0$0 = [enumerate].map(_regeneratorRuntime.mark);

function enumerate() {
    var index, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item;

    return _regeneratorRuntime.wrap(function enumerate$(context$1$0) {
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
                    context$1$0.next = 13;
                    break;
                }

                item = _step.value;
                context$1$0.next = 10;
                return [index++, item];

            case 10:
                _iteratorNormalCompletion = true;
                context$1$0.next = 6;
                break;

            case 13:
                context$1$0.next = 19;
                break;

            case 15:
                context$1$0.prev = 15;
                context$1$0.t0 = context$1$0["catch"](4);
                _didIteratorError = true;
                _iteratorError = context$1$0.t0;

            case 19:
                context$1$0.prev = 19;
                context$1$0.prev = 20;

                if (!_iteratorNormalCompletion && _iterator["return"]) {
                    _iterator["return"]();
                }

            case 22:
                context$1$0.prev = 22;

                if (!_didIteratorError) {
                    context$1$0.next = 25;
                    break;
                }

                throw _iteratorError;

            case 25:
                return context$1$0.finish(22);

            case 26:
                return context$1$0.finish(19);

            case 27:
            case "end":
                return context$1$0.stop();
        }
    }, marked0$0[0], this, [[4, 15, 19, 27], [20,, 22, 26]]);
}

;