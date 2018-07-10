"use strict";

/**
 * Yields the elements in the iterable at the given depth.
 * Flattening with depth of 1 is the same as doing a plain `flatten()`.
 *
 * @this {Iterable}
 * @param depth The depth that the generator will flatten to.
 * @example Basic Usage
 *
 * ```javascript
 * [[[1],[2]]]::flattenDeep(2) // yields [1,2]
 * ```
*/

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.flattenDeep = flattenDeep;
var marked0$0 = [flattenDeep].map(_regeneratorRuntime.mark);

function flattenDeep(depth) {
    var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item;

    return _regeneratorRuntime.wrap(function flattenDeep$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                if (!(depth < 0)) {
                    context$1$0.next = 4;
                    break;
                }

                context$1$0.next = 3;
                return this;

            case 3:
                return context$1$0.abrupt("return");

            case 4:
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                context$1$0.prev = 7;
                _iterator = _getIterator(this);

            case 9:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                    context$1$0.next = 15;
                    break;
                }

                item = _step.value;
                return context$1$0.delegateYield(flattenDeep.call(item, depth - 1), "t0", 12);

            case 12:
                _iteratorNormalCompletion = true;
                context$1$0.next = 9;
                break;

            case 15:
                context$1$0.next = 21;
                break;

            case 17:
                context$1$0.prev = 17;
                context$1$0.t1 = context$1$0["catch"](7);
                _didIteratorError = true;
                _iteratorError = context$1$0.t1;

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
    }, marked0$0[0], this, [[7, 17, 21, 29], [22,, 24, 28]]);
}

;