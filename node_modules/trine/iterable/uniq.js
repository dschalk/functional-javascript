/**
 * Yields the items that aren't equal to the previous item based on a comparator.
 *
 * @this {Iterable<T>}
 * @param comparator The function to assert equality of the items.
 * @ntime O(n)
 * @dspace O(1)
 * @example Basic Usage
 *
 * ```javascript
 * [{
 *   id: 1,
 * }, {
 *   id: 1,
 * }, {
 *   id: 2,
 * }]::uniq(function (b) {
 *   return this.id === b.id;
 * }); // yields { id: 1 } and { id: 2 }
 *
 * [{
 *   id: 1,
 * }, {
 *   id: 2,
 * }, {
 *   id: 1,
 * }]::uniq(function (b) {
 *   return this.id === b.id;
 * }); // yields { id: 1 }, { id: 2 } and { id: 1 }
 * ```
 *
 * @example Unique Characters in a String
 *
 * ```javascript
 * "bcabbbac"::sortAlphabetically()::uniq(equals) // yields "a", "b", "c"
 * ```
*/
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.uniq = uniq;
var marked0$0 = [uniq].map(_regeneratorRuntime.mark);

function uniq(comparator) {
    var iterator, first, previous, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item;

    return _regeneratorRuntime.wrap(function uniq$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                iterator = _getIterator(this);
                first = iterator.next();

                if (!first.done) {
                    context$1$0.next = 4;
                    break;
                }

                return context$1$0.abrupt("return");

            case 4:
                context$1$0.next = 6;
                return first.value;

            case 6:
                previous = first.value;
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                context$1$0.prev = 10;
                _iterator = _getIterator(iterator);

            case 12:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                    context$1$0.next = 21;
                    break;
                }

                item = _step.value;

                if (comparator.call(item, previous)) {
                    context$1$0.next = 17;
                    break;
                }

                context$1$0.next = 17;
                return item;

            case 17:
                previous = item;

            case 18:
                _iteratorNormalCompletion = true;
                context$1$0.next = 12;
                break;

            case 21:
                context$1$0.next = 27;
                break;

            case 23:
                context$1$0.prev = 23;
                context$1$0.t0 = context$1$0["catch"](10);
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
            case "end":
                return context$1$0.stop();
        }
    }, marked0$0[0], this, [[10, 23, 27, 35], [28,, 30, 34]]);
}

;