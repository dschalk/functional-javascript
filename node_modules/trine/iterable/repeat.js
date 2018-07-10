/**
 * Indefinitely repeat the values of a given iterator.
 *
 * @this {Iterable<T>}
 * @example Basic Usage
 *
 * ```javascript
 * [1,2,3]::repeat(); // yields [1,2,3,1,2,3...]
 * ```
*/
"use strict";

var _toConsumableArray = require("babel-runtime/helpers/to-consumable-array")["default"];

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.repeat = repeat;
var marked0$0 = [repeat].map(_regeneratorRuntime.mark);

function repeat() {
    var items;
    return _regeneratorRuntime.wrap(function repeat$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                items = [].concat(_toConsumableArray(this));

            case 1:
                if (!true) {
                    context$1$0.next = 5;
                    break;
                }

                return context$1$0.delegateYield(items, "t0", 3);

            case 3:
                context$1$0.next = 1;
                break;

            case 5:
            case "end":
                return context$1$0.stop();
        }
    }, marked0$0[0], this);
}

;