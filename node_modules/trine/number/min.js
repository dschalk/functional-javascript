/**
 * Returns the smaller of two numbers.
 *
 * @this {number}
 * @example Basic Usage
 *
 * ```javascript
 * 8::min(-1) // returns -1
 * 4::min(7) // returns 4
 * ```
*/
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.min = min;

function min(b) {
    return Math.min(this, b);
}

;