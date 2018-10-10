/**
 * Returns the strict equality of the two operands.
 *
 * @this {any} The left operand to compare.
 * @param right The right operand to compare to.
 * @example Basic Usage
 *
 * ```javascript
 * "foo"::equals("bar") // false
 * "bar"::equals("bar") // true
 * ```
*/
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.equals = equals;

function equals(right) {
    return this === right;
}

;