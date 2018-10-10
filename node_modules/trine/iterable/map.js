/**
 * Yields the items of the iterator mapped through a given transformer.
 *
 * @type iT The item type of the input iterator.
 * @type rT The item type of the returned iterator.
 * @this {Iterable<iT>}
 * @ntime O(n)
 * @dspace O(1)
 * @example Basic Usage
 *
 * ```javascript
 * [1,2,3]::map(function () {
 *   return this * 2;
 * }) // yields 2, 4, 6
 * ```
*/
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.map = map;
var marked0$0 = [map].map(_regeneratorRuntime.mark);

function map(transformer) {
    var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item;

    return _regeneratorRuntime.wrap(function map$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                context$1$0.prev = 3;
                _iterator = _getIterator(this);

            case 5:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                    context$1$0.next = 12;
                    break;
                }

                item = _step.value;
                context$1$0.next = 9;
                return transformer.call(item);

            case 9:
                _iteratorNormalCompletion = true;
                context$1$0.next = 5;
                break;

            case 12:
                context$1$0.next = 18;
                break;

            case 14:
                context$1$0.prev = 14;
                context$1$0.t0 = context$1$0["catch"](3);
                _didIteratorError = true;
                _iteratorError = context$1$0.t0;

            case 18:
                context$1$0.prev = 18;
                context$1$0.prev = 19;

                if (!_iteratorNormalCompletion && _iterator["return"]) {
                    _iterator["return"]();
                }

            case 21:
                context$1$0.prev = 21;

                if (!_didIteratorError) {
                    context$1$0.next = 24;
                    break;
                }

                throw _iteratorError;

            case 24:
                return context$1$0.finish(21);

            case 25:
                return context$1$0.finish(18);

            case 26:
            case "end":
                return context$1$0.stop();
        }
    }, marked0$0[0], this, [[3, 14, 18, 26], [19,, 21, 25]]);
}

;