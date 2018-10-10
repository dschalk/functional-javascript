/**
 * Yields groups of elements where the first group contains the first elements
 * of all the iterators, second contains the second items and etc. until one
 * of the iterators has been exhausted.
 *
 * @this {Iterable<Iterable<T>>}
 * @ntime O(nm)
 * @dspace O(m)
 * @example Basic Usage
 *
 * ```javascript
 * [ [1,2], [4,5], [6,7] ]::zip() // yields [1,4,6], [2,5,7]
 * ```
*/

"use strict";

var _toConsumableArray = require("babel-runtime/helpers/to-consumable-array")["default"];

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.zip = zip;
var marked0$0 = [zip].map(_regeneratorRuntime.mark);

function zip() {
    var iterators, zipped, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, iterator, _iterator$next, value, done;

    return _regeneratorRuntime.wrap(function zip$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                iterators = [].concat(_toConsumableArray(this)).map(function (iterable) {
                    return _getIterator(iterable);
                });

                if (!(iterators.length === 0)) {
                    context$1$0.next = 3;
                    break;
                }

                return context$1$0.abrupt("return");

            case 3:
                if (!true) {
                    context$1$0.next = 39;
                    break;
                }

                zipped = [];
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                context$1$0.prev = 8;
                _iterator = _getIterator(iterators);

            case 10:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                    context$1$0.next = 21;
                    break;
                }

                iterator = _step.value;
                _iterator$next = iterator.next();
                value = _iterator$next.value;
                done = _iterator$next.done;

                if (!done) {
                    context$1$0.next = 17;
                    break;
                }

                return context$1$0.abrupt("return");

            case 17:

                zipped.push(value);

            case 18:
                _iteratorNormalCompletion = true;
                context$1$0.next = 10;
                break;

            case 21:
                context$1$0.next = 27;
                break;

            case 23:
                context$1$0.prev = 23;
                context$1$0.t0 = context$1$0["catch"](8);
                _didIteratorError = true;
                _iteratorError = context$1$0.t0;

            case 27:
                context$1$0.prev = 27;
                context$1$0.prev = 28;

                if (!_iteratorNormalCompletion && _iterator["return"]) {
                    _iterator["return"]();
                }

            case 30:
                context$1$0.prev = 30;

                if (!_didIteratorError) {
                    context$1$0.next = 33;
                    break;
                }

                throw _iteratorError;

            case 33:
                return context$1$0.finish(30);

            case 34:
                return context$1$0.finish(27);

            case 35:
                context$1$0.next = 37;
                return zipped;

            case 37:
                context$1$0.next = 3;
                break;

            case 39:
            case "end":
                return context$1$0.stop();
        }
    }, marked0$0[0], this, [[8, 23, 27, 35], [28,, 30, 34]]);
}

;