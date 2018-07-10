/**
 * Yields all the items of the iterator except the first k items.
 *
 * @this {Iterable<T>}
 * @ntime O(n)
 * @dspace O(n)
 * @example Basic Usage
 *
 * ```javascript
 * [1,2,3]::dropHead(0) // yields 1, 2, 3
 * [1,2,3]::dropHead(1) // yields 1, 2
 * [1,2,3]::dropHead(2) // yields 1
 * [1,2,3]::dropHead(3) // doesn't yield anything
 * [1,2,3]::dropHead(4) // doesn't yield anything
 * ```
*/
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.dropHead = dropHead;
var marked0$0 = [dropHead].map(_regeneratorRuntime.mark);

function dropHead(k) {
    var iterator, done;
    return _regeneratorRuntime.wrap(function dropHead$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                if (k >= 0) {
                    context$1$0.next = 2;
                    break;
                }

                throw new Error("only positive integers are allowed for head()");

            case 2:
                iterator = _getIterator(this);
                done = false;

                while (!done && k--) {
                    done = iterator.next().done;
                }

                return context$1$0.delegateYield(iterator, "t0", 6);

            case 6:
            case "end":
                return context$1$0.stop();
        }
    }, marked0$0[0], this);
}

;