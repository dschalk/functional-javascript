/**
 * Yields all the accumulations of the iterator with a given accumulator method.
 *
 * @type rT The item type of the returned iterator.
 * @type iT The item type of the input iterator.
 * @this {Iterable<iT>}
 * @ntime O(n)
 * @dspace O(1)
 * @example Basic Usage
 *
 * ```javascript
 * [1,2,3]::aggregate(function (b) {
 *   return this + b;
 * }, 0) // yields 0, 1, 3, 6
 * ```
*/
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.aggregate = aggregate;
var marked0$0 = [aggregate].map(_regeneratorRuntime.mark);

function aggregate(accumulator, accumulation) {
    var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _context, _item;

    return _regeneratorRuntime.wrap(function aggregate$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                context$1$0.prev = 3;
                _iterator = _getIterator(this);

            case 5:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                    context$1$0.next = 13;
                    break;
                }

                _item = _step.value;
                context$1$0.next = 9;
                return accumulation;

            case 9:
                accumulation = (_context = accumulation, accumulator).call(_context, _item);

            case 10:
                _iteratorNormalCompletion = true;
                context$1$0.next = 5;
                break;

            case 13:
                context$1$0.next = 19;
                break;

            case 15:
                context$1$0.prev = 15;
                context$1$0.t0 = context$1$0["catch"](3);
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
                context$1$0.next = 29;
                return accumulation;

            case 29:
            case "end":
                return context$1$0.stop();
        }
    }, marked0$0[0], this, [[3, 15, 19, 27], [20,, 22, 26]]);
}

;