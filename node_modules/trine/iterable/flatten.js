"use strict";

/**
 * Yields the elements in the iterables of the iterable.
 *
 * @this {Iterable<Iterable<T>>}
 * @example Basic Usage
 *
 * ```javascript
 * [[1],[2]]::flatten() // yields [1,2]
 * ```
*/

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.flatten = flatten;
var marked0$0 = [flatten].map(_regeneratorRuntime.mark);

function flatten() {
    var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item;

    return _regeneratorRuntime.wrap(function flatten$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                context$1$0.prev = 3;
                _iterator = _getIterator(this);

            case 5:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                    context$1$0.next = 11;
                    break;
                }

                item = _step.value;
                return context$1$0.delegateYield(item, "t0", 8);

            case 8:
                _iteratorNormalCompletion = true;
                context$1$0.next = 5;
                break;

            case 11:
                context$1$0.next = 17;
                break;

            case 13:
                context$1$0.prev = 13;
                context$1$0.t1 = context$1$0["catch"](3);
                _didIteratorError = true;
                _iteratorError = context$1$0.t1;

            case 17:
                context$1$0.prev = 17;
                context$1$0.prev = 18;

                if (!_iteratorNormalCompletion && _iterator["return"]) {
                    _iterator["return"]();
                }

            case 20:
                context$1$0.prev = 20;

                if (!_didIteratorError) {
                    context$1$0.next = 23;
                    break;
                }

                throw _iteratorError;

            case 23:
                return context$1$0.finish(20);

            case 24:
                return context$1$0.finish(17);

            case 25:
            case "end":
                return context$1$0.stop();
        }
    }, marked0$0[0], this, [[3, 13, 17, 25], [18,, 20, 24]]);
}