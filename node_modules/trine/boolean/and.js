/**
 * Returns true if both operands are true.
 *
 * @this {boolean} Left boolean operand.
 * @param right Right boolean operand.
 * @example Basic Usage
 *
 * ```javascript
 * true::and(true) // true
 * true::and(false) // false
 * false::and(true) // false
 * false::and(false) // false
 * ```
*/
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.and = and;

function and(right) {
    return this && right;
}

;